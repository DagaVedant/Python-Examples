/**
 * Lesson-complete celebration: brief confetti burst + optional Web Audio chime.
 * Listens for CustomEvent `lesson-complete`. Sound respects localStorage `pref-sound`
 * (default on). Toggle button id: `sound-tog`.
 */

const PREF_SOUND = 'pref-sound';
const BURST_MS = 2600;

let celebrating = false;

function soundEnabled() {
  const v = localStorage.getItem(PREF_SOUND);
  return v !== 'off';
}

function setSoundEnabled(on) {
  localStorage.setItem(PREF_SOUND, on ? 'on' : 'off');
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function playChime() {
  if (!soundEnabled()) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    // Soft rising three-note chime
    const notes = [523.25, 659.25, 783.99]; // C5 E5 G5
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t0 = now + i * 0.12;
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(0.12, t0 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.55);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.6);
    });
    setTimeout(() => ctx.close().catch(() => {}), 1200);
  } catch {
    /* ignore audio failures */
  }
}

function injectStyles() {
  if (document.getElementById('celebrate-styles')) return;
  const style = document.createElement('style');
  style.id = 'celebrate-styles';
  style.textContent = `
@keyframes celebrate-burst-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes celebrate-burst-out {
  to { opacity: 0; }
}
@keyframes celebrate-piece {
  0% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); opacity: 1; }
  100% { transform: translate3d(var(--dx), var(--dy), 0) rotate(var(--rot)) scale(.6); opacity: 0; }
}
@keyframes celebrate-pop {
  0% { transform: translate(-50%, -50%) scale(.7); opacity: 0; }
  25% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
  70% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(.95); opacity: 0; }
}
.celebrate-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
  animation: celebrate-burst-in .2s ease-out,
             celebrate-burst-out .5s ease-in ${BURST_MS - 500}ms forwards;
}
.celebrate-piece {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: calc(var(--size) * .45);
  border-radius: 2px;
  background: var(--c);
  animation: celebrate-piece 2.2s cubic-bezier(.22, .7, .3, 1) forwards;
}
.celebrate-badge {
  position: absolute;
  left: 50%;
  top: 42%;
  transform: translate(-50%, -50%);
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--green, #166534);
  background: var(--green-lt, #f0fdf4);
  border: 1px solid var(--green-md, #bbf7d0);
  padding: .55rem 1.1rem;
  border-radius: 999px;
  box-shadow: 0 8px 28px rgba(22, 101, 52, .12);
  animation: celebrate-pop 2.4s ease forwards;
}
[data-theme="dark"] .celebrate-badge {
  color: var(--green, #4ade80);
  background: var(--green-lt, #052e16);
  border-color: var(--green-md, #14532d);
  box-shadow: 0 8px 28px rgba(0, 0, 0, .35);
}
.theme-btn.sound-muted { opacity: .55; }
`;
  document.head.appendChild(style);
}

function showConfetti() {
  if (prefersReducedMotion()) return;
  injectStyles();
  const overlay = document.createElement('div');
  overlay.className = 'celebrate-overlay';
  overlay.setAttribute('aria-hidden', 'true');

  const colors = ['#2563eb', '#16a34a', '#eab308', '#f97316', '#0ea5e9', '#a855f7'];
  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'celebrate-piece';
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const dist = 90 + Math.random() * 160;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 40;
    p.style.setProperty('--x', `${48 + Math.random() * 4}%`);
    p.style.setProperty('--y', `${40 + Math.random() * 6}%`);
    p.style.setProperty('--dx', `${dx}px`);
    p.style.setProperty('--dy', `${dy}px`);
    p.style.setProperty('--rot', `${(Math.random() - 0.5) * 540}deg`);
    p.style.setProperty('--size', `${6 + Math.random() * 6}px`);
    p.style.setProperty('--c', colors[i % colors.length]);
    p.style.animationDelay = `${Math.random() * 0.12}s`;
    overlay.appendChild(p);
  }

  const badge = document.createElement('div');
  badge.className = 'celebrate-badge';
  badge.textContent = 'Lesson complete!';
  overlay.appendChild(badge);

  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), BURST_MS + 100);
}

export function celebrateLessonComplete() {
  if (celebrating) return;
  celebrating = true;
  showConfetti();
  playChime();
  setTimeout(() => { celebrating = false; }, BURST_MS);
}

function updateToggleUI(btn) {
  if (!btn) return;
  const on = soundEnabled();
  btn.classList.toggle('sound-muted', !on);
  btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  btn.setAttribute('aria-label', on ? 'Mute celebration sound' : 'Unmute celebration sound');
  btn.title = on ? 'Sound on' : 'Sound muted';
}

export function initCelebrateToggle() {
  injectStyles();
  const btn = document.getElementById('sound-tog');
  if (!btn) return;
  updateToggleUI(btn);
  btn.addEventListener('click', () => {
    setSoundEnabled(!soundEnabled());
    updateToggleUI(btn);
  });
}

window.addEventListener('lesson-complete', () => celebrateLessonComplete());

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initCelebrateToggle());
} else {
  initCelebrateToggle();
}
