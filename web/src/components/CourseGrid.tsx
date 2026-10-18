import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseGrid.css';

interface CourseLesson {
  number: number;
  title: string;
}

interface CourseUnit {
  number: number;
  title: string;
  lessons: CourseLesson[];
}

interface CourseInfo {
  units: CourseUnit[];
}

function lessonPath(unit: number, lesson: number): string {
  return `/lesson?unit=${unit}&lesson=${lesson}`;
}

export function CourseGrid() {
  const [course, setCourse] = useState<CourseInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/course-info.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} loading course-info.json`);
        }
        return res.json() as Promise<CourseInfo>;
      })
      .then((data) => {
        if (!cancelled) setCourse(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load course');
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <p className="course-grid-status course-grid-status--error" role="alert">
        Could not load course: {error}
      </p>
    );
  }

  if (!course) {
    return (
      <p className="course-grid-status" aria-busy="true">
        Loading course…
      </p>
    );
  }

  return (
    <div className="course-grid">
      {course.units.map((unit) => (
        <section key={unit.number} className="unit" aria-labelledby={`unit-title-${unit.number}`}>
          <div className="unit-header">
            <div>
              <small>Unit {unit.number}</small>
              <strong id={`unit-title-${unit.number}`}>{unit.title}</strong>
            </div>
          </div>
          {unit.lessons.map((lesson) => (
            <Link
              key={lesson.number}
              to={lessonPath(unit.number, lesson.number)}
              className="unit-lesson-link"
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
      ))}
    </div>
  );
}
