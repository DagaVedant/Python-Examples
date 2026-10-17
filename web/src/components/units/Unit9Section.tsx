import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { lessonCompletionKey, useGuestProgress } from '../../hooks/useGuestProgress';
import { loadCourseInfo } from '../../lib/loadCourseInfo';
import type { CourseUnit } from '../../types/courseInfo';
import '../CourseGrid.css';
import './UnitSection.css';

export const UNIT_NUMBER = 9;

export type Unit9SectionProps = {
  /** Unit 9 from course-info; fetched automatically when omitted. */
  unit?: CourseUnit;
  /** Completed lesson keys like `"9-3"`. Defaults to guest / useGuestProgress completions. */
  completedKeys?: readonly string[];
};

function lessonPath(unit: number, lesson: number): string {
  return `/lesson?unit=${unit}&lesson=${lesson}`;
}

/** Unit 9 progress; pass `completedKeys` to override (e.g. signed-in user). */
export function useUnit9Progress(completedKeysOverride?: readonly string[]) {
  const guest = useGuestProgress();
  const keys = completedKeysOverride ?? guest.completions;

  const completedSet = useMemo(() => new Set(keys), [keys]);

  const isLessonComplete = (lesson: number) =>
    completedSet.has(lessonCompletionKey(UNIT_NUMBER, lesson));

  const completedCount = useMemo(() => {
    let count = 0;
    completedSet.forEach((key) => {
      if (key.startsWith(`${UNIT_NUMBER}-`)) count += 1;
    });
    return count;
  }, [completedSet]);

  return {
    ...guest,
    completions: keys,
    isLessonComplete,
    completedCount,
  };
}

export function Unit9Section({ unit: unitProp, completedKeys: completedKeysProp }: Unit9SectionProps) {
  const { isLessonComplete, completedCount } = useUnit9Progress(completedKeysProp);

  const [unit, setUnit] = useState<CourseUnit | null>(unitProp ?? null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (unitProp) {
      setUnit(unitProp);
      return;
    }

    let cancelled = false;
    loadCourseInfo()
      .then((course) => {
        if (cancelled) return;
        const found = course.units.find((u) => u.number === UNIT_NUMBER);
        if (!found) {
          setError('Unit 9 not found in course-info.json');
          return;
        }
        setUnit(found);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load course info');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [unitProp]);

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
        Loading unit 9…
      </p>
    );
  }

  return (
    <section className="unit" aria-labelledby="unit-title-9">
      <div className="unit-header">
        <div>
          <small>Unit {unit.number}</small>
          <strong id="unit-title-9">{unit.title}</strong>
        </div>
        <span className="unit-progress" aria-live="polite">
          {completedCount} / {unit.lessons.length}
        </span>
      </div>
      {unit.lessons.map((lesson) => {
        const done = isLessonComplete(lesson.number);
        return (
          <Link
            key={lesson.number}
            to={lessonPath(UNIT_NUMBER, lesson.number)}
            className={`unit-lesson-link${done ? ' lesson-done' : ''}`}
          >
            <span className="num">
              {UNIT_NUMBER}.{lesson.number}
            </span>
            <span>{lesson.title}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        );
      })}
    </section>
  );
}
