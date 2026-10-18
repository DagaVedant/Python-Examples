import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { loadCourseInfo } from '../../lib/loadCourseInfo';
import type { CourseUnit } from '../../types/courseInfo';
import '../CourseGrid.css';
import './UnitSection.css';

const UNIT_NUMBER = 1;

/** Matches static site guest-completions entries (`"1-3"`). */
export function lessonCompletionKey(unit: number, lesson: number): string {
  return `${unit}-${lesson}`;
}

const GUEST_COMPLETIONS_KEY = 'guest-completions';
const EMPTY_COMPLETIONS: readonly string[] = [];

let cachedRaw: string | null = null;
let cachedSnapshot: readonly string[] = EMPTY_COMPLETIONS;

function subscribeGuestCompletions(onStoreChange: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === GUEST_COMPLETIONS_KEY || event.key === null) {
      onStoreChange();
    }
  };
  window.addEventListener('storage', onStorage);
  window.addEventListener('guest-completions-updated', onStoreChange);
  window.addEventListener('lesson-complete', onStoreChange);
  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener('guest-completions-updated', onStoreChange);
    window.removeEventListener('lesson-complete', onStoreChange);
  };
}

function getGuestCompletionSnapshot(): readonly string[] {
  try {
    const raw = localStorage.getItem(GUEST_COMPLETIONS_KEY);
    if (raw === cachedRaw) return cachedSnapshot;
    cachedRaw = raw;
    if (!raw) {
      cachedSnapshot = EMPTY_COMPLETIONS;
      return cachedSnapshot;
    }
    const parsed: unknown = JSON.parse(raw);
    cachedSnapshot = Array.isArray(parsed) ? (parsed as string[]) : EMPTY_COMPLETIONS;
    return cachedSnapshot;
  } catch {
    cachedRaw = null;
    cachedSnapshot = EMPTY_COMPLETIONS;
    return cachedSnapshot;
  }
}

/** Guest progress from localStorage; replace or compose with `useGuestProgress` when wired. */
export function useGuestCompletionKeys(): readonly string[] {
  return useSyncExternalStore(
    subscribeGuestCompletions,
    getGuestCompletionSnapshot,
    () => EMPTY_COMPLETIONS,
  );
}

export type Unit1SectionProps = {
  /** Unit 1 from course-info; fetched automatically when omitted. */
  unit?: CourseUnit;
  /** Completed lesson keys like `"1-3"`. Defaults to guest localStorage. */
  completedKeys?: readonly string[];
};

function lessonPath(unit: number, lesson: number): string {
  return `/lesson?unit=${unit}&lesson=${lesson}`;
}

export function Unit1Section({ unit: unitProp, completedKeys: completedKeysProp }: Unit1SectionProps) {
  const guestKeys = useGuestCompletionKeys();
  const completedKeys = completedKeysProp ?? guestKeys;
  const completedSet = useMemo(() => new Set(completedKeys), [completedKeys]);

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
          setError('Unit 1 not found in course-info.json');
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
        Loading unit 1…
      </p>
    );
  }

  const unitDone = unit.lessons.filter((lesson) =>
    completedSet.has(lessonCompletionKey(UNIT_NUMBER, lesson.number)),
  ).length;

  return (
    <section className="unit" aria-labelledby="unit-title-1">
      <div className="unit-header">
        <div>
          <small>Unit {unit.number}</small>
          <strong id="unit-title-1">{unit.title}</strong>
        </div>
        <span className="unit-progress" aria-live="polite">
          {unitDone} / {unit.lessons.length}
        </span>
      </div>
      {unit.lessons.map((lesson) => {
        const done = completedSet.has(lessonCompletionKey(UNIT_NUMBER, lesson.number));
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
