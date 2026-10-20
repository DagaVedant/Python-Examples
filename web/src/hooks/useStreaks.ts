import { useEffect, useState } from 'react';

type StreakData = {
  lastDate: string | null;
  count: number;
  best: number;
};

const KEY = 'streak-data';

function getStreak(): StreakData {
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
  }
  return { lastDate: null, count: 0, best: 0 };
}

export function recordActivity(): StreakData {
  const d = new Date();
  const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const data = getStreak();

  if (data.lastDate === today) return data;

  let count = 1;
  if (data.lastDate) {
    const [ay, am, ad] = data.lastDate.split('-').map(Number);
    const [by, bm, bd] = today.split('-').map(Number);
    const diff = Math.round((new Date(by, bm - 1, bd).getTime() - new Date(ay, am - 1, ad).getTime()) / 86400000);
    if (diff === 1) {
      count = data.count + 1;
    }
  }

  const best = Math.max(data.best || 0, count);
  const next: StreakData = { lastDate: today, count, best };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function useStreaks() {
  const [streak, setStreak] = useState<StreakData>(() => getStreak());

  useEffect(() => {
    const onLessonComplete = () => {
      setStreak(recordActivity());
    };
    window.addEventListener('lesson-complete', onLessonComplete);
    return () => window.removeEventListener('lesson-complete', onLessonComplete);
  }, []);

  return { streak };
}
