import { useCallback, useEffect, useMemo, useState } from 'react';
import type { CourseUnit } from '../../types/courseInfo';

export const GUEST_COMPLETIONS_KEY = 'guest-completions';

export function lessonCompletionKey(unit: number, lesson: number): string {
  return `${unit}-${lesson}`;
}

export function readGuestCompletions(): string[] {
  try {
    const raw = localStorage.getItem(GUEST_COMPLETIONS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === 'string');
  } catch {
    return [];
  }
}

export type UnitSectionProgress = {
  completedKeys: string[];
  isLessonComplete: (lessonNumber: number) => boolean;
  completedCount: number;
  totalCount: number;
};

/**
 * Guest progress from localStorage, with optional override when useGuestProgress (or auth) is wired.
 */
export function useUnitSectionProgress(
  unit: CourseUnit | undefined,
  completedKeysOverride?: string[],
): UnitSectionProgress {
  const [guestKeys, setGuestKeys] = useState<string[]>(() => readGuestCompletions());

  useEffect(() => {
    if (completedKeysOverride !== undefined) return undefined;

    const refresh = () => setGuestKeys(readGuestCompletions());

    const onStorage = (event: StorageEvent) => {
      if (event.key === GUEST_COMPLETIONS_KEY || event.key === null) refresh();
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('guest-progress-changed', refresh);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('guest-progress-changed', refresh);
    };
  }, [completedKeysOverride]);

  const completedKeys = completedKeysOverride ?? guestKeys;
  const totalCount = unit?.lessons.length ?? 0;

  const isLessonComplete = useCallback(
    (lessonNumber: number) => {
      if (!unit) return false;
      return completedKeys.includes(lessonCompletionKey(unit.number, lessonNumber));
    },
    [completedKeys, unit],
  );

  const completedCount = useMemo(() => {
    if (!unit) return 0;
    return unit.lessons.filter((lesson) => isLessonComplete(lesson.number)).length;
  }, [unit, isLessonComplete]);

  return {
    completedKeys,
    isLessonComplete,
    completedCount,
    totalCount,
  };
}
