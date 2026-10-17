import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCourseInfo } from '../../lib/loadCourseInfo';
import type { CourseUnit } from '../../types/courseInfo';
import '../CourseGrid.css';
import './unit-section.css';

const UNIT_NUMBER = 6;

function lessonPath(unit: number, lesson: number): string {
  return `/lesson?unit=${unit}&lesson=${lesson}`;
}

function readGuestCompletions(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem('guest-completions') ?? '[]');
    return Array.isArray(raw) ? raw.filter((k): k is string => typeof k === 'string') : [];
  } catch {
    return [];
  }
}

/**
 * Guest progress for unit 6 (`guest-completions` keys: `6-{lesson}`).
 * Replace with `useGuestProgress()` when that hook lands (swarm job 9).
 */
export function useUnit6LessonProgress(lessonCount: number) {
  const [completedKeys, setCompletedKeys] = useState<string[]>(() => readGuestCompletions());

  const refresh = useCallback(() => {
    setCompletedKeys(readGuestCompletions());
  }, []);

  useEffect(() => {
    window.addEventListener('lesson-complete', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('lesson-complete', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, [refresh]);

  const unitPrefix = `${UNIT_NUMBER}-`;

  const unitCompleted = useMemo(
    () => completedKeys.filter((key) => key.startsWith(unitPrefix)).length,
    [completedKeys],
  );

  const isLessonComplete = useCallback(
    (lesson: number) => completedKeys.includes(`${UNIT_NUMBER}-${lesson}`),
    [completedKeys],
  );

  return {
    completedKeys,
    refresh,
    unitCompleted,
    lessonCount,
    isLessonComplete,
    unitProgressLabel: `${unitCompleted} / ${lessonCount}`,
  };
}

export type Unit6SectionProps = {
  unit?: CourseUnit;
  completedKeys?: string[];
};

export function Unit6Section({ unit: unitProp, completedKeys }: Unit6SectionProps = {}) {
  const [unit, setUnit] = useState<CourseUnit | null>(unitProp ?? null);
  const [error, setError] = useState<string | null>(null);
  const progress = useUnit6LessonProgress(unit?.lessons.length ?? 0);

  useEffect(() => {
    if (unitProp) {
      setUnit(unitProp);
      setError(null);
      return undefined;
    }

    let cancelled = false;

    loadCourseInfo()
      .then((info) => {
        if (cancelled) return;
        const found = info.units.find((u) => u.number === UNIT_NUMBER);
        if (!found) {
          setError('Unit 6 (Lists) not found in course info.');
          return;
        }
        setUnit(found);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load course');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [unitProp]);

  const isComplete = (lessonNumber: number) =>
    completedKeys
      ? completedKeys.includes(`${UNIT_NUMBER}-${lessonNumber}`)
      : progress.isLessonComplete(lessonNumber);

  const completedCount = completedKeys
    ? completedKeys.filter((key) => key.startsWith(`${UNIT_NUMBER}-`)).length
    : progress.unitCompleted;

  const progressLabel = `${completedCount} / ${unit?.lessons.length ?? progress.lessonCount}`;

  if (error) {
    return (
      <p className="course-grid-status course-grid-status--error" role="alert">
        {error}
      </p>
    );
  }

  if (!unit) {
    return (
      <p className="course-grid-status" aria-busy="true">
        Loading unit…
      </p>
    );
  }

  return (
    <section className="unit" aria-labelledby="unit-title-6">
      <div className="unit-header">
        <div>
          <small>Unit {unit.number}</small>
          <strong id="unit-title-6">{unit.title}</strong>
        </div>
        <span className="unit-progress" id="unit-progress-6">
          {progressLabel}
        </span>
      </div>
      {unit.lessons.map((lesson) => (
        <Link
          key={lesson.number}
          to={lessonPath(UNIT_NUMBER, lesson.number)}
          className={`unit-lesson-link${isComplete(lesson.number) ? ' lesson-done' : ''}`}
        >
          <span className="num">
            {unit.number}.{lesson.number}
          </span>
          <span>{lesson.title}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      ))}
    </section>
  );
}
