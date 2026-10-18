import { useCallback, useEffect, useState } from 'react';

/** localStorage `streak-data`: { lastDate, count, best } */
export type StreakData = {
  lastDate: string | null;
  count: number;
  best: number;
};

const KEY = 'streak-data';

export function todayLocal(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseLocalDay(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function dayDiff(fromIso: string, toIso: string): number {
  const a = parseLocalDay(fromIso);
  const b = parseLocalDay(toIso);
  return Math.round((b.getTime() - a.getTime()) / 86400000);
}

export function getStreak(): StreakData {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    if (raw && typeof raw === 'object') {
      return {
        lastDate: raw.lastDate || null,
        count: Number(raw.count) || 0,
        best: Number(raw.best) || 0,
      };
    }
  } catch {
    /* ignore */
  }
  return { lastDate: null, count: 0, best: 0 };
}

/**
 * Record activity for the local calendar day.
 * - today already counted → no change
 * - lastDate was yesterday → count++
 * - gap > 1 day (or first) → reset to 1
 */
export function recordActivity(): StreakData {
  const today = todayLocal();
  const data = getStreak();

  if (data.lastDate === today) return data;

  let count = 1;
  if (data.lastDate && dayDiff(data.lastDate, today) === 1) {
    count = data.count + 1;
  }

  const best = Math.max(data.best || 0, count);
  const next: StreakData = { lastDate: today, count, best };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function useStreaks() {
  const [streak, setStreak] = useState<StreakData>(() => getStreak());

  const refresh = useCallback(() => {
    setStreak(getStreak());
  }, []);

  const record = useCallback(() => {
    setStreak(recordActivity());
  }, []);

  useEffect(() => {
    const onLessonComplete = () => {
      setStreak(recordActivity());
    };
    window.addEventListener('lesson-complete', onLessonComplete);
    return () => window.removeEventListener('lesson-complete', onLessonComplete);
  }, []);

  return { streak, refresh, recordActivity: record };
}
