import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCourseInfo } from '../../lib/loadCourseInfo';
import type { CourseUnit } from '../../types/courseInfo';
import '../CourseGrid.css';
import './UnitSection.css';

export const UNIT_NUMBER = 4;

const GUEST_COMPLETIONS_KEY = 'guest-completions';

export function lessonProgressKey(unit: number, lesson: number): string {
  return `${unit}-${lesson}`;
}

function readGuestCompletions(): Set<string> {
  try {
    const raw = localStorage.getItem(GUEST_COMPLETIONS_KEY);
    if (!raw) return new Set();
    const list = JSON.parse(raw) as unknown;
    if (!Array.isArray(list)) return new Set();
    return new Set(list.filter((item): item is string => typeof item === 'string'));
  } catch {
    return new Set();
  }
}

/** Guest completion state; swap for useGuestProgress when wired on HomePage. */
export function useUnit4Progress(): {
  completed: Set<string>;
  isLessonComplete: (lesson: number) => boolean;
  completedCount: number;
} {
  const [completed, setCompleted] = useState<Set<string>>(() => readGuestCompletions());

  useEffect(() => {
    const sync = () => setCompleted(readGuestCompletions());
    window.addEventListener('lesson-complete', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('lesson-complete', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const isLessonComplete = (lesson: number) => completed.has(lessonProgressKey(UNIT_NUMBER, lesson));

  const completedCount = useMemo(() => {
    let count = 0;
    completed.forEach((key) => {
      if (key.startsWith(`${UNIT_NUMBER}-`)) count += 1;
    });
    return count;
  }, [completed]);

  return { completed, isLessonComplete, completedCount };
}

type Unit4SectionProps = {
  /** When provided, skips fetching course-info (e.g. HomePage already loaded it). */
  unit?: CourseUnit;
};

function lessonHref(lesson: number): string {
  return `/lesson?unit=${UNIT_NUMBER}&lesson=${lesson}`;
}

export function Unit4Section({ unit: unitProp }: Unit4SectionProps) {
  const [unit, setUnit] = useState<CourseUnit | null>(unitProp ?? null);
  const [error, setError] = useState<string | null>(null);
  const { isLessonComplete, completedCount } = useUnit4Progress();

  useEffect(() => {
    if (unitProp) {
      setUnit(unitProp);
      return;
    }

    let cancelled = false;

    loadCourseInfo()
      .then((info) => {
        if (cancelled) return;
        const found = info.units.find((u) => u.number === UNIT_NUMBER);
        if (!found) {
          setError(`Unit ${UNIT_NUMBER} not found in course-info`);
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
        Loading unit {UNIT_NUMBER}…
      </p>
    );
  }

  const lessonTotal = unit.lessons.length;

  return (
    <section className="unit" aria-labelledby="unit-title-4">
      <div className="unit-header">
        <div>
          <small>Unit {unit.number}</small>
          <strong id="unit-title-4">{unit.title}</strong>
        </div>
        <span className="unit-progress" aria-label="Unit progress">
          {completedCount} / {lessonTotal}
        </span>
      </div>
      {unit.lessons.map((lesson) => {
        const done = isLessonComplete(lesson.number);
        return (
          <Link
            key={lesson.number}
            to={lessonHref(lesson.number)}
            className={`unit-lesson-link${done ? ' lesson-done' : ''}`}
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
