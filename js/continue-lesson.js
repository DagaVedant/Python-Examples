const LAST_LESSON_KEY = 'last-lesson';
const DEFAULT = { unit: 1, lesson: 1, title: 'What is a Program' };

function recordLastLesson(unit, lesson, title) {
  localStorage.setItem(LAST_LESSON_KEY, JSON.stringify({
    unit: Number(unit),
    lesson: Number(lesson),
    title: String(title || ''),
  }));
}

function getLastLesson() {
  try {
    const raw = localStorage.getItem(LAST_LESSON_KEY);
    if (!raw) return DEFAULT;
    const data = JSON.parse(raw);
    if (!data || data.unit == null || data.lesson == null) return DEFAULT;
    return {
      unit: Number(data.unit),
      lesson: Number(data.lesson),
      title: String(data.title || DEFAULT.title),
    };
  } catch {
    return DEFAULT;
  }
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderContinue(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const { unit, lesson, title } = getLastLesson();
  const href = `lesson.html?unit=${unit}&lesson=${lesson}`;
  const label = `Continue: Unit ${unit} · ${title}`;

  el.innerHTML = `
    <a class="continue-card" href="${href}">
      <span class="continue-card-text">${escapeHTML(label)}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    </a>`;
}

window.recordLastLesson = recordLastLesson;
window.renderContinue = renderContinue;
