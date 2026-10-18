/**
 * Fixed (non-AI) practice hints for lesson practice tasks.
 * Guests and signed-in learners both get the same local hints.
 */

const GENERIC_HINT =
  'Re-read the task. Check your print() and quotes.';

const GENERIC_STARTER_TIP =
  'Look at the starter lines. Fill in the blanks, then press Run.';

function stripHtml(text) {
  return String(text || '').replace(/<[^>]+>/g, '');
}

/** Prefer task.hint; otherwise a safe generic tip from the task text. */
export function resolveHint(task) {
  if (task?.hint && String(task.hint).trim()) {
    return String(task.hint).trim();
  }
  const text = stripHtml(task?.text).toLowerCase();
  if (text.includes('print')) {
    return 'Re-read the task. Check your print() and quotes.';
  }
  return GENERIC_HINT;
}

/** Prefer task.starterTip; otherwise a tip derived from starter code. */
export function resolveStarterTip(task) {
  if (task?.starterTip && String(task.starterTip).trim()) {
    return String(task.starterTip).trim();
  }
  const starter = task?.starter || '';
  if (/\bprint\s*\(\s*\)/.test(starter)) {
    return 'Look at the starter: put text inside the empty print(). Like print("your words").';
  }
  if (starter.includes('___') || starter.includes('...')) {
    return 'Look at the starter: replace the blanks with your own words, then press Run.';
  }
  if (starter.trim()) {
    return GENERIC_STARTER_TIP;
  }
  return 'Start with a print() line. Put your message inside quotes.';
}

function ensureStyles() {
  if (document.getElementById('practice-hints-styles')) return;
  const style = document.createElement('style');
  style.id = 'practice-hints-styles';
  style.textContent = `
.practice-hint-btn {
  align-self: flex-start;
  font-size: 12px;
  color: var(--blue-tx);
  background: var(--blue-lt);
  border: 1px solid var(--blue-md);
  border-radius: 5px;
  padding: 3px 10px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: background .15s, opacity .15s;
}
.practice-hint-btn:hover:not(:disabled) { opacity: .8; }
.practice-hint-btn:disabled {
  opacity: .65;
  cursor: default;
}
.practice-hint-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
  align-items: center;
}
.practice-hint-box {
  display: none;
  padding: .65rem 1.2rem;
  border-top: 1px solid var(--code-sep);
  background: var(--blue-lt);
  color: var(--blue-tx);
  font-size: 13px;
  line-height: 1.55;
  font-family: 'DM Sans', sans-serif;
}
.practice-hint-box.show { display: block; }
.practice-hint-box .hint-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .02em;
  text-transform: uppercase;
  opacity: .85;
  margin-bottom: .2rem;
}
.practice-hint-box .hint-extra {
  margin-top: .55rem;
  padding-top: .55rem;
  border-top: 1px solid var(--blue-md);
}
[data-theme="light"] .practice-hint-box {
  border-top-color: #d0d7de;
}
`;
  document.head.appendChild(style);
}

function escapeText(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Wire Hint buttons for each practice task.
 * @param {Array<{ text?: string, hint?: string, starterTip?: string, starter?: string }>} practiceTasks
 */
export function initPracticeHints(practiceTasks = []) {
  ensureStyles();

  practiceTasks.forEach((task, i) => {
    const btn = document.querySelector(`.practice-hint-btn[data-index="${i}"]`);
    if (!btn) return;

    let box = document.getElementById(`practice-hint-${i}`);
    if (!box) {
      const feedback = document.getElementById(`practice-feedback-${i}`);
      box = document.createElement('div');
      box.className = 'practice-hint-box';
      box.id = `practice-hint-${i}`;
      box.setAttribute('role', 'status');
      if (feedback?.parentNode) {
        feedback.parentNode.insertBefore(box, feedback.nextSibling);
      } else {
        const wrap = document.getElementById(`practice-wrap-${i}`);
        wrap?.appendChild(box);
      }
    }

    let stage = 0; // 0 = none, 1 = hint, 2 = starter tip

    btn.addEventListener('click', () => {
      if (stage === 0) {
        const hint = resolveHint(task);
        box.innerHTML =
          `<span class="hint-label">Hint</span>` +
          `<span class="hint-body">${escapeText(hint)}</span>`;
        box.classList.add('show');
        stage = 1;
        btn.textContent = 'More help';
        return;
      }

      if (stage === 1) {
        const tip = resolveStarterTip(task);
        const extra = document.createElement('div');
        extra.className = 'hint-extra';
        extra.innerHTML =
          `<span class="hint-label">Starter tip</span>` +
          `<span class="hint-body">${escapeText(tip)}</span>`;
        box.appendChild(extra);
        stage = 2;
        btn.textContent = 'Hints shown';
        btn.disabled = true;
      }
    });
  });
}
