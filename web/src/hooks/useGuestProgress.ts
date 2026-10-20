import { useEffect, useState } from 'react';

const GUEST_COMPLETIONS_KEY = 'guest-completions';
const LAST_LESSON_KEY = 'last-lesson';

export type LastLesson = {
  unit: number;
  lesson: number;
  title: string;
};

const DEFAULT_LAST_LESSON: LastLesson = {
  unit: 1,
  lesson: 1,
  title: 'What is a Program',
};

export function lessonCompletionKey(unit: number, lesson: number): string {
  return `${unit}-${lesson}`;
}

function projectDoneStorageKey(unit: number, lesson: number): string {
  return `project-done:${unit}:${lesson}`;
}

export function getGuestCompletions(): string[] {
  try {
    const list = JSON.parse(localStorage.getItem(GUEST_COMPLETIONS_KEY) || '[]');
    return Array.isArray(list) ? list.filter((k): k is string => typeof k === 'string') : [];
  } catch {
    return [];
  }
}

export function markGuestLessonComplete(unit: number, lesson: number): boolean {
  const key = lessonCompletionKey(unit, lesson);
  const list = getGuestCompletions();
  if (list.includes(key)) return false;
  localStorage.setItem(GUEST_COMPLETIONS_KEY, JSON.stringify([...list, key]));
  window.dispatchEvent(new CustomEvent('lesson-complete'));
  return true;
}

export function getLastLesson(): LastLesson {
  try {
    const raw = localStorage.getItem(LAST_LESSON_KEY);
    if (!raw) return DEFAULT_LAST_LESSON;
    const data = JSON.parse(raw) as Partial<LastLesson>;
    if (!data || data.unit == null || data.lesson == null) return DEFAULT_LAST_LESSON;
    return {
      unit: Number(data.unit),
      lesson: Number(data.lesson),
      title: String(data.title ?? DEFAULT_LAST_LESSON.title),
    };
  } catch {
    return DEFAULT_LAST_LESSON;
  }
}

export function recordLastLesson(unit: number, lesson: number, title?: string): void {
  localStorage.setItem(
    LAST_LESSON_KEY,
    JSON.stringify({
      unit: Number(unit),
      lesson: Number(lesson),
      title: String(title ?? ''),
    }),
  );
}

export function useGuestProgress() {
  const [completions, setCompletions] = useState<string[]>(() => getGuestCompletions());
  const [lastLesson, setLastLesson] = useState<LastLesson>(() => getLastLesson());
  const [, setProjectVersion] = useState(0);

  function refresh() {
    setCompletions(getGuestCompletions());
    setLastLesson(getLastLesson());
    setProjectVersion((v) => v + 1);
  }

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === GUEST_COMPLETIONS_KEY || e.key === LAST_LESSON_KEY || e.key?.startsWith('project-done:')) refresh();
    };
    const onLessonComplete = () => refresh();
    window.addEventListener('storage', onStorage);
    window.addEventListener('lesson-complete', onLessonComplete);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('lesson-complete', onLessonComplete);
    };
  }, []);

  return {
    completions,
    lastLesson,
    isLessonComplete: (unit: number, lesson: number) => completions.includes(lessonCompletionKey(unit, lesson)),
    markLessonComplete: (unit: number, lesson: number) => {
      const added = markGuestLessonComplete(unit, lesson);
      if (added) setCompletions(getGuestCompletions());
      return added;
    },
    recordLastLesson: (unit: number, lesson: number, title?: string) => {
      recordLastLesson(unit, lesson, title);
      setLastLesson(getLastLesson());
    },
    isProjectDone: (unit: number, lesson: number) => localStorage.getItem(projectDoneStorageKey(unit, lesson)) === '1',
    setProjectDone: (unit: number, lesson: number, done: boolean) => {
      const key = projectDoneStorageKey(unit, lesson);
      if (done) localStorage.setItem(key, '1');
      else localStorage.removeItem(key);
      setProjectVersion((v) => v + 1);
    },
    toggleProjectDone: (unit: number, lesson: number) => {
      const next = localStorage.getItem(projectDoneStorageKey(unit, lesson)) !== '1';
      const key = projectDoneStorageKey(unit, lesson);
      if (next) localStorage.setItem(key, '1');
      else localStorage.removeItem(key);
      setProjectVersion((v) => v + 1);
      return next;
    },
    refresh,
  };
}
