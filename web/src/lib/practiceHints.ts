import type { PracticeTask } from '../types/lesson';

const GENERIC_HINT =
  'Re-read the task. Check your print() and quotes.';

const GENERIC_STARTER_TIP =
  'Look at the starter lines. Fill in the blanks, then press Run.';

export function resolveHint(task: PracticeTask): string {
  if (task.hint?.trim()) {
    return task.hint.trim();
  }
  const text = String(task.text || '').replace(/<[^>]+>/g, '').toLowerCase();
  if (text.includes('print')) {
    return 'Re-read the task. Check your print() and quotes.';
  }
  return GENERIC_HINT;
}

export function resolveStarterTip(task: PracticeTask): string {
  if (task.starterTip?.trim()) {
    return task.starterTip.trim();
  }
  const starter = task.starter || '';
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
