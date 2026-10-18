import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCourseInfo } from '../../lib/loadCourseInfo';
import type { CourseUnit } from '../../types/courseInfo';
import '../CourseGrid.css';
import './unit-section.css';
import { useUnitSectionProgress } from './useUnitSectionProgress';

export const UNIT_5_NUMBER = 5;

export type Unit5SectionProps = {
  /** Preloaded unit from course-info; when omitted, unit 5 is fetched. */
  unit?: CourseUnit;
  /** Optional completion keys (e.g. from useGuestProgress or Supabase). */
  completedKeys?: string[];
};

function lessonPath(unit: number, lesson: number): string {
  return `/lesson?unit=${unit}&lesson=${lesson}`;
}

export function Unit5Section({ unit: unitProp, completedKeys }: Unit5SectionProps) {
  const [unit, setUnit] = useState<CourseUnit | null>(unitProp ?? null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (unitProp) {
      setUnit(unitProp);
      setError(null);
      return undefined;
    }

    let cancelled = false;

    loadCourseInfo()
      .then((course) => {
        if (cancelled) return;
        const found = course.units.find((u) => u.number === UNIT_5_NUMBER);
        if (!found) {
          setError(`Unit ${UNIT_5_NUMBER} not found in course-info`);
          setUnit(null);
          return;
        }
        setUnit(found);
        setError(null);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : 'Failed to load course');
        setUnit(null);
      });

    return () => {
      cancelled = true;
    };
  }, [unitProp]);

  const progress = useUnitSectionProgress(unit ?? undefined, completedKeys);

  if (error) {
    return (
      <p className="course-grid-status course-grid-status--error" role="alert">
        Could not load unit 5: {error}
      </p>
    );
  }

  if (!unit) {
    return (
      <p className="course-grid-status" aria-busy="true">
        Loading unit 5…
      </p>
    );
  }

  return (
    <section className="unit" aria-labelledby="unit-title-5">
      <div className="unit-header">
        <div>
          <small>Unit {unit.number}</small>
          <strong id="unit-title-5">{unit.title}</strong>
        </div>
        <span className="unit-progress" aria-live="polite">
          {progress.completedCount} / {progress.totalCount}
        </span>
      </div>
      {unit.lessons.map((lesson) => {
        const done = progress.isLessonComplete(lesson.number);
        return (
          <Link
            key={lesson.number}
            to={lessonPath(unit.number, lesson.number)}
            className={`unit-lesson-link${done ? ' lesson-done' : ''}`}
            aria-current={done ? 'step' : undefined}
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
        );
      })}
    </section>
  );
}
