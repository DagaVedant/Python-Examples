/**
 * Certificates helpers for Learn Python.
 *
 * Completion keys are strings like "3-5" (unit-lesson), matching index.html
 * and guest-completions / Supabase completions.
 *
 * Call refreshCertificates(completedKeys) after progress is known
 * (e.g. from the end of applyCompletions on index.html).
 * Or render into #certificates-slot by reading guest-completions after a short delay.
 */

const CERT_NAME_KEY = 'cert-name';
const CERT_SEEN_UNITS_KEY = 'cert-seen-units';

/**
 * Returns unit numbers whose every lesson appears in completedKeys.
 * @param {string[]} completedKeys
 * @param {{ number: number, lessons: { number: number }[] }[]} unitsList
 * @returns {number[]}
 */
function getCompletedUnitNumbers(completedKeys, unitsList) {
  const set = new Set(completedKeys || []);
  return (unitsList || []).filter(unit =>
    unit.lessons.every(lesson => set.has(`${unit.number}-${lesson.number}`))
  ).map(unit => unit.number);
}

/**
 * True when every unit in the course is fully completed.
 */
function isCourseComplete(completedKeys, unitsList) {
  const list = unitsList || [];
  if (!list.length) return false;
  return getCompletedUnitNumbers(completedKeys, list).length === list.length;
}

/**
 * Units that are complete now but were not recorded in localStorage yet.
 * Updates cert-seen-units when new ones are found.
 * @returns {number[]}
 */
function detectNewlyCompletedUnits(completedKeys, unitsList) {
  const done = getCompletedUnitNumbers(completedKeys, unitsList);
  let seen = [];
  try {
    seen = JSON.parse(localStorage.getItem(CERT_SEEN_UNITS_KEY) || '[]');
  } catch {}
  const seenSet = new Set(seen);
  const newly = done.filter(n => !seenSet.has(n));
  if (newly.length) {
    localStorage.setItem(CERT_SEEN_UNITS_KEY, JSON.stringify(done));
  }
  return newly;
}

function certificateHrefForUnit(unitNumber) {
  return `certificate.html?unit=${unitNumber}`;
}

function certificateHrefForCourse() {
  return 'certificate.html?course=1';
}

/**
 * Build HTML for certificate links (unit + optional course).
 */
function renderCertificateLinksHTML(completedKeys, unitsList) {
  const list = unitsList || (typeof units !== 'undefined' ? units : []);
  const doneNums = getCompletedUnitNumbers(completedKeys, list);
  if (!doneNums.length) return '';

  const byNumber = Object.fromEntries(list.map(u => [u.number, u]));
  const links = doneNums.map(n => {
    const title = byNumber[n] ? byNumber[n].title : `Unit ${n}`;
    return `<a class="cert-link" href="${certificateHrefForUnit(n)}">Unit ${n}: ${title}</a>`;
  });

  if (isCourseComplete(completedKeys, list)) {
    links.push(`<a class="cert-link cert-link-course" href="${certificateHrefForCourse()}">Course complete. Learn Python</a>`);
  }

  return `
    <section class="certificates-panel" aria-label="Certificates">
      <h2 class="certificates-heading">Certificates</h2>
      <p class="certificates-blurb">You finished these. Open a certificate to print or share.</p>
      <div class="certificates-links">${links.join('')}</div>
    </section>
  `;
}

function ensureCertificatesStyles() {
  if (document.getElementById('certificates-styles')) return;
  const style = document.createElement('style');
  style.id = 'certificates-styles';
  style.textContent = `
    #certificates-slot {
      max-width: 680px;
      margin: 28px auto 0;
      padding: 0 24px 40px;
    }
    .certificates-panel {
      padding: 20px 20px;
      background: white;
      border: 1px solid #e2e5ea;
      border-radius: 12px;
    }
    body.dark .certificates-panel {
      background: #1a1d27;
      border-color: #2d3148;
    }
    .certificates-heading {
      margin: 0 0 4px;
      font-size: 15px;
      font-weight: 600;
      color: #1F3A5F;
    }
    body.dark .certificates-heading { color: #93b4e0; }
    .certificates-blurb {
      margin: 0 0 14px;
      font-size: 13px;
      color: #6b7280;
    }
    body.dark .certificates-blurb { color: #9da3b4; }
    .certificates-links {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .cert-link {
      display: block;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #dbe3ef;
      background: #f4f7fb;
      color: #1F3A5F;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: background 0.15s, border-color 0.15s;
    }
    .cert-link:hover {
      background: #e8eef6;
      border-color: #1F3A5F;
    }
    body.dark .cert-link {
      background: #222535;
      border-color: #2d3148;
      color: #93b4e0;
    }
    body.dark .cert-link:hover {
      background: #2d3148;
      border-color: #93b4e0;
    }
    .cert-link-course {
      border-color: #1F3A5F;
      background: #1F3A5F;
      color: #fff;
    }
    .cert-link-course:hover {
      background: #2a4d7a;
      border-color: #2a4d7a;
      color: #fff;
    }
    body.dark .cert-link-course {
      background: #1F3A5F;
      border-color: #93b4e0;
      color: #fff;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Render certificate links into #certificates-slot.
 * Call from applyCompletions, or after loading completions yourself.
 * @param {string[]} completedKeys
 */
function refreshCertificates(completedKeys) {
  const slot = document.getElementById('certificates-slot');
  if (!slot) return;
  const list = typeof units !== 'undefined' ? units : [];
  ensureCertificatesStyles();
  detectNewlyCompletedUnits(completedKeys, list);
  slot.innerHTML = renderCertificateLinksHTML(completedKeys, list);
}

/**
 * Fallback when index does not pass completions: read guest-completions
 * after a short delay (signed-in progress still needs refreshCertificates).
 */
function bootCertificatesFromGuestStorage(delayMs) {
  const run = () => {
    let guest = [];
    try {
      guest = JSON.parse(localStorage.getItem('guest-completions') || '[]');
    } catch {}
    if (guest.length) refreshCertificates(guest);
  };
  if (delayMs > 0) setTimeout(run, delayMs);
  else run();
}

if (typeof window !== 'undefined') {
  window.getCompletedUnitNumbers = getCompletedUnitNumbers;
  window.isCourseComplete = isCourseComplete;
  window.detectNewlyCompletedUnits = detectNewlyCompletedUnits;
  window.refreshCertificates = refreshCertificates;
  window.renderCertificateLinksHTML = renderCertificateLinksHTML;
  window.certificateHrefForUnit = certificateHrefForUnit;
  window.certificateHrefForCourse = certificateHrefForCourse;
  window.bootCertificatesFromGuestStorage = bootCertificatesFromGuestStorage;
  window.CERT_NAME_KEY = CERT_NAME_KEY;
}
