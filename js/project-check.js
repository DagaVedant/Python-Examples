/** Project "I'm done" + optional AI Check (signed-in). */

const PROJECT_TASK_INDEX = 99;

function doneKey(unit, lesson) {
  return `project-done:${unit}:${lesson}`;
}

function ensureStyles() {
  if (document.getElementById('project-check-styles')) return;
  const style = document.createElement('style');
  style.id = 'project-check-styles';
  style.textContent = `
    .project-card.project-done {
      border-color: var(--green-md, #86efac);
      box-shadow: inset 0 0 0 1px rgba(34, 197, 94, .2);
    }
    .project-card.project-done .project-icon {
      color: var(--green, #16a34a);
      background: var(--green-lt, rgba(22, 101, 52, .1));
    }
    #project-done-btn.done {
      color: var(--green, #16a34a);
      border-color: var(--green-md, rgba(22, 101, 52, .35));
      background: var(--green-lt, rgba(22, 101, 52, .1));
    }
    .project-guest-note {
      font-size: 12.5px;
      color: var(--text3, #9ca3af);
      margin: 0;
      flex: 1;
      min-width: 140px;
    }
    .project-guest-note a { color: inherit; text-decoration: underline; }
  `;
  document.head.appendChild(style);
}

function ensureFeedbackRow() {
  let fb = document.getElementById('project-feedback');
  if (fb) return fb;
  const wrap = document.getElementById('project-wrap');
  if (!wrap) return null;
  fb = document.createElement('div');
  fb.id = 'project-feedback';
  fb.className = 'practice-ai-row';
  wrap.appendChild(fb);
  return fb;
}

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * @param {{
 *   L: { unit: number, lesson: number, title: string, project: { desc: string, gradingNote?: string } },
 *   getCode: () => string,
 *   db: { auth: { getSession: () => Promise<any> }, functions: { invoke: Function } },
 *   runIsolated: (code: string, opts?: { allowInput?: boolean }) => Promise<{ output: string, error?: string }>,
 * }} deps
 */
export async function initProjectCheck({ L, getCode, db, runIsolated }) {
  const doneBtn = document.getElementById('project-done-btn');
  const checkBtn = document.getElementById('project-check-btn');
  if (!doneBtn || !checkBtn || !L?.project) return;

  ensureStyles();
  const card = document.querySelector('.project-card');
  const footer = doneBtn.closest('.project-ide-footer');
  const fb = ensureFeedbackRow();
  const key = doneKey(L.unit, L.lesson);

  function applyDoneUI(done) {
    if (card) card.classList.toggle('project-done', done);
    doneBtn.classList.toggle('done', done);
    doneBtn.textContent = done ? '✓ Done' : "I'm done";
    doneBtn.setAttribute('aria-pressed', done ? 'true' : 'false');
  }

  applyDoneUI(localStorage.getItem(key) === '1');

  doneBtn.addEventListener('click', () => {
    const next = localStorage.getItem(key) !== '1';
    if (next) localStorage.setItem(key, '1');
    else localStorage.removeItem(key);
    applyDoneUI(next);
  });

  const { data: { session } } = await db.auth.getSession();

  if (!session) {
    checkBtn.hidden = true;
    if (footer && !footer.querySelector('.project-guest-note')) {
      const note = document.createElement('p');
      note.className = 'project-guest-note';
      note.innerHTML = 'AI check needs a free account — <a href="signup.html">sign up</a>. You can still Run and mark yourself done.';
      footer.appendChild(note);
    }
    return;
  }

  checkBtn.hidden = false;

  function showVerdict(result) {
    if (!fb) return;
    fb.className = 'practice-ai-row show ' + (result.passed ? 'correct' : 'wrong');
    fb.textContent = (result.passed ? '✓ ' : '✗ ') + result.feedback +
      (result.hint ? ` Hint: ${result.hint}` : '');
    if (result.passed) {
      localStorage.setItem(key, '1');
      applyDoneUI(true);
    }
  }

  checkBtn.addEventListener('click', async () => {
    if (!localStorage.getItem('ai-disclaimer-seen')) {
      const ok = confirm(
        "Checking sends your code to an AI service to grade it.\nDon't type personal information in the editor. Continue?",
      );
      if (!ok) return;
      localStorage.setItem('ai-disclaimer-seen', '1');
    }

    checkBtn.disabled = true;
    const code = getCode();

    const hash = await sha256Hex(code);
    const cacheKey = `aicheck:${L.unit}:${L.lesson}:project:${hash}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      showVerdict(JSON.parse(cached));
      checkBtn.disabled = false;
      return;
    }

    const words = ['thinking…', 'analyzing…', 'understanding…', 'checking…'];
    let wi = 0;
    if (fb) {
      fb.className = 'practice-ai-row show';
      fb.innerHTML = `<span class="check-spinner"></span><span>${words[0]}</span>`;
    }
    const ticker = setInterval(() => {
      wi = (wi + 1) % words.length;
      const span = fb?.querySelector('span:last-child');
      if (span) span.textContent = words[wi];
    }, 1200);

    try {
      const { output, error: runError } = await runIsolated(code, { allowInput: false });

      const { data, error } = await db.functions.invoke('grade-practice', {
        body: {
          task: L.project.desc,
          gradingNote: L.project.gradingNote || null,
          code,
          output: runError ? `[Error] ${runError}` : output,
          lessonTopic: L.title,
          unit: L.unit,
          lesson: L.lesson,
          taskIndex: PROJECT_TASK_INDEX,
        },
      });
      clearInterval(ticker);

      if (error) {
        let body = null;
        try { body = await error.context.json(); } catch {}
        if (fb) {
          fb.className = 'practice-ai-row show wrong';
          if (body?.error === 'rate_limited_minute') {
            let secs = body.retryAfterSeconds || 30;
            fb.textContent = `AI feedback is busy — you can retry in ${secs}s`;
            const countdown = setInterval(() => {
              secs--;
              if (secs <= 0) { clearInterval(countdown); fb.className = 'practice-ai-row'; }
              else fb.textContent = `AI feedback is busy — you can retry in ${secs}s`;
            }, 1000);
          } else if (body?.error === 'rate_limited_day' || body?.error === 'quota_global') {
            const h = Math.floor((body.resetsInMinutes || 0) / 60);
            const m = (body.resetsInMinutes || 0) % 60;
            fb.textContent = `Good practice today! The checker is resting — it'll be back in ${h}h ${m}m.`;
          } else {
            fb.textContent = 'The checker had a hiccup — try again in a moment.';
          }
        }
        return;
      }

      localStorage.setItem(cacheKey, JSON.stringify(data));
      showVerdict(data);
    } catch {
      clearInterval(ticker);
      if (fb) {
        fb.className = 'practice-ai-row show wrong';
        fb.textContent = 'Could not check your code right now — try again in a moment.';
      }
    } finally {
      checkBtn.disabled = false;
    }
  });
}

/** Auto-init when buttons appear in #project-editor-slot (fallback if not called manually). */
export function watchProjectEditorSlot(getDeps) {
  const slot = document.getElementById('project-editor-slot');
  if (!slot) return;

  const tryInit = () => {
    if (!document.getElementById('project-done-btn')) return;
    if (slot.dataset.projectCheckInit === '1') return;
    slot.dataset.projectCheckInit = '1';
    const deps = typeof getDeps === 'function' ? getDeps() : getDeps;
    if (deps) initProjectCheck(deps);
  };

  tryInit();
  const mo = new MutationObserver(tryInit);
  mo.observe(slot, { childList: true, subtree: true });
}
