import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCourseInfo } from '../../lib/loadCourseInfo';
import type { CourseUnit } from '../../types/courseInfo';
import '../CourseGrid.css';
import './unit-section.css';

const UNIT_NUMBER = 3;

function lessonPath(unit: number, lesson: number): string {
  return `/lesson?unit=${unit}&lesson=${lesson}`;
}

function lessonKey(unit: number, lesson: number): string {
  return `${unit}-${lesson}`;
}

function readGuestCompletions(): string[] {
  try {
    const raw = localStorage.getItem('guest-completions');
    const parsed = JSON.parse(raw ?? '[]') as unknown;
    return Array.isArray(parsed) ? parsed.filter((k): k is string => typeof k === 'string') : [];
  } catch {
    return [];
  }
}

/**
 * Guest completion keys from localStorage; swap for `useGuestProgress()` when wired.
 */
function useGuestCompletionKeys(): string[] {
  const [completed, setCompleted] = useState<string[]>(() => readGuestCompletions());

  useEffect(() => {
    const refresh = () => setCompleted(readGuestCompletions());

    const onStorage = (event: StorageEvent) => {
      if (event.key === 'guest-completions') refresh();
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('lesson-complete', refresh);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('lesson-complete', refresh);
    };
  }, []);

  return completed;
}

export type Unit3SectionProps = {
  /** Preloaded unit from course-info; fetched when omitted. */
  unit?: CourseUnit;
  /** When set, overrides guest localStorage (e.g. signed-in completions from useGuestProgress). */
  completedKeys?: string[];
};

export function Unit3Section({ unit: unitProp, completedKeys }: Unit3SectionProps) {
  const guestCompleted = useGuestCompletionKeys();
  const completed = completedKeys ?? guestCompleted;

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
        const match = course.units.find((u) => u.number === UNIT_NUMBER) ?? null;
        if (!match) {
          setError(`Unit ${UNIT_NUMBER} not found in course-info.json`);
          return;
        }
        setUnit(match);
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

  const unitDone = useMemo(() => {
    if (!unit) return 0;
    return unit.lessons.filter((lesson) => completed.includes(lessonKey(UNIT_NUMBER, lesson.number))).length;
  }, [unit, completed]);

  if (error) {
    return (
      <p className="course-grid-status course-grid-status--error" role="alert">
        Could not load unit: {error}
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
    <section className="unit" aria-labelledby="unit-title-3">
      <div className="unit-header">
        <div>
          <small>Unit {unit.number}</small>
          <strong id="unit-title-3">{unit.title}</strong>
        </div>
        <span className="unit-progress">
          {unitDone} / {unit.lessons.length}
        </span>
      </div>
      {unit.lessons.map((lesson) => {
        const done = completed.includes(lessonKey(UNIT_NUMBER, lesson.number));
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
