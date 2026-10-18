import { useCallback, useEffect, useRef, type ReactNode } from 'react';
import '../styles/celebrate.css';

export const PREF_SOUND = 'pref-sound';
export const LESSON_COMPLETE_EVENT = 'lesson-complete';
const BURST_MS = 2600;

const CONFETTI_COLORS = [
  '#2563eb',
  '#16a34a',
  '#eab308',
  '#f97316',
  '#0ea5e9',
  '#a855f7',
];

export function getSoundEnabled(): boolean {
  return localStorage.getItem(PREF_SOUND) !== 'off';
}

export function setSoundEnabled(on: boolean): void {
  localStorage.setItem(PREF_SOUND, on ? 'on' : 'off');
}

export function dispatchLessonComplete(): void {
  window.dispatchEvent(new CustomEvent(LESSON_COMPLETE_EVENT));
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function playChime(): void {
  if (!getSoundEnabled()) return;
  try {
    type AudioContextCtor = typeof AudioContext;
    const win = window as Window & { webkitAudioContext?: AudioContextCtor };
    const Ctx = window.AudioContext ?? win.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99];
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
    window.setTimeout(() => {
      void ctx.close().catch(() => {});
    }, 1200);
  } catch {
    /* ignore audio failures */
  }
}

function showConfetti(): void {
  if (prefersReducedMotion()) return;

  const overlay = document.createElement('div');
  overlay.className = 'celebrate-overlay';
  overlay.setAttribute('aria-hidden', 'true');

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
    p.style.setProperty('--c', CONFETTI_COLORS[i % CONFETTI_COLORS.length]);
    p.style.animationDelay = `${Math.random() * 0.12}s`;
    overlay.appendChild(p);
  }

  const badge = document.createElement('div');
  badge.className = 'celebrate-badge';
  badge.textContent = 'Lesson complete!';
  overlay.appendChild(badge);

  document.body.appendChild(overlay);
  window.setTimeout(() => overlay.remove(), BURST_MS + 100);
}

export function celebrateLessonComplete(): void {
  showConfetti();
  playChime();
}

export function useCelebrate(): { celebrateLessonComplete: () => void } {
  const celebratingRef = useRef(false);

  const runCelebrate = useCallback(() => {
    if (celebratingRef.current) return;
    celebratingRef.current = true;
    celebrateLessonComplete();
    window.setTimeout(() => {
      celebratingRef.current = false;
    }, BURST_MS);
  }, []);

  useEffect(() => {
    const onLessonComplete = () => runCelebrate();
    window.addEventListener(LESSON_COMPLETE_EVENT, onLessonComplete);
    return () =>
      window.removeEventListener(LESSON_COMPLETE_EVENT, onLessonComplete);
  }, [runCelebrate]);

  return { celebrateLessonComplete: runCelebrate };
}

/** Mount once near the app root to listen for `lesson-complete`. */
export function CelebrateRoot({ children }: { children: ReactNode }) {
  useCelebrate();
  return children;
}
