import { useCallback, useEffect, useState } from 'react';

export const GUEST_COMPLETIONS_KEY = 'guest-completions';
export const LAST_LESSON_KEY = 'last-lesson';

export type LastLesson = {
  unit: number;
  lesson: number;
  title: string;
};

export const DEFAULT_LAST_LESSON: LastLesson = {
  unit: 1,
  lesson: 1,
  title: 'What is a Program',
};

/** Same format as static site: `"${unit}-${lesson}"`. */
export function lessonCompletionKey(unit: number, lesson: number): string {
  return `${unit}-${lesson}`;
}

/** Same format as `js/project-check.js` `doneKey`. */
export function projectDoneStorageKey(unit: number, lesson: number): string {
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

export function setGuestCompletions(list: string[]): void {
  localStorage.setItem(GUEST_COMPLETIONS_KEY, JSON.stringify(list));
}

export function isGuestLessonComplete(unit: number, lesson: number): boolean {
  return getGuestCompletions().includes(lessonCompletionKey(unit, lesson));
}

/** Returns true if the lesson was newly marked complete. Dispatches `lesson-complete` when added. */
export function markGuestLessonComplete(unit: number, lesson: number): boolean {
  const key = lessonCompletionKey(unit, lesson);
  const list = getGuestCompletions();
  if (list.includes(key)) return false;
  setGuestCompletions([...list, key]);
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

export function isProjectDone(unit: number, lesson: number): boolean {
  return localStorage.getItem(projectDoneStorageKey(unit, lesson)) === '1';
}

export function setProjectDone(unit: number, lesson: number, done: boolean): void {
  const key = projectDoneStorageKey(unit, lesson);
  if (done) localStorage.setItem(key, '1');
  else localStorage.removeItem(key);
}

/** Toggle project done; returns new done state (matches static site toggle). */
export function toggleProjectDone(unit: number, lesson: number): boolean {
  const next = localStorage.getItem(projectDoneStorageKey(unit, lesson)) !== '1';
  setProjectDone(unit, lesson, next);
  return next;
}

function isGuestProgressStorageKey(key: string | null): boolean {
  if (!key) return false;
  return key === GUEST_COMPLETIONS_KEY || key === LAST_LESSON_KEY || key.startsWith('project-done:');
}

export type UseGuestProgressResult = {
  completions: string[];
  lastLesson: LastLesson;
  isLessonComplete: (unit: number, lesson: number) => boolean;
  markLessonComplete: (unit: number, lesson: number) => boolean;
  recordLastLesson: (unit: number, lesson: number, title?: string) => void;
  isProjectDone: (unit: number, lesson: number) => boolean;
  setProjectDone: (unit: number, lesson: number, done: boolean) => void;
  toggleProjectDone: (unit: number, lesson: number) => boolean;
  refresh: () => void;
};

export function useGuestProgress(): UseGuestProgressResult {
  const [completions, setCompletions] = useState<string[]>(() => getGuestCompletions());
  const [lastLesson, setLastLesson] = useState<LastLesson>(() => getLastLesson());
  const [projectVersion, setProjectVersion] = useState(0);

  const refresh = useCallback(() => {
    setCompletions(getGuestCompletions());
    setLastLesson(getLastLesson());
    setProjectVersion((v) => v + 1);
  }, []);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (isGuestProgressStorageKey(e.key)) refresh();
    };
    const onLessonComplete = () => refresh();
    window.addEventListener('storage', onStorage);
    window.addEventListener('lesson-complete', onLessonComplete);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('lesson-complete', onLessonComplete);
    };
  }, [refresh]);

  const isLessonComplete = useCallback(
    (unit: number, lesson: number) => completions.includes(lessonCompletionKey(unit, lesson)),
    [completions],
  );

  const markLessonComplete = useCallback((unit: number, lesson: number) => {
    const added = markGuestLessonComplete(unit, lesson);
    if (added) setCompletions(getGuestCompletions());
    return added;
  }, []);

  const recordLastLessonState = useCallback((unit: number, lesson: number, title?: string) => {
    recordLastLesson(unit, lesson, title);
    setLastLesson(getLastLesson());
  }, []);

  const isProjectDoneCb = useCallback(
    (unit: number, lesson: number) => isProjectDone(unit, lesson),
    [projectVersion],
  );

  const setProjectDoneCb = useCallback((unit: number, lesson: number, done: boolean) => {
    setProjectDone(unit, lesson, done);
    setProjectVersion((v) => v + 1);
  }, []);

  const toggleProjectDoneCb = useCallback((unit: number, lesson: number) => {
    const next = toggleProjectDone(unit, lesson);
    setProjectVersion((v) => v + 1);
    return next;
  }, []);

  return {
    completions,
    lastLesson,
    isLessonComplete,
    markLessonComplete,
    recordLastLesson: recordLastLessonState,
    isProjectDone: isProjectDoneCb,
    setProjectDone: setProjectDoneCb,
    toggleProjectDone: toggleProjectDoneCb,
    refresh,
  };
}
