import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCompletions } from '../../hooks/useCompletions';
import { loadCourseInfo } from '../../lib/loadCourseInfo';
import type { CourseInfo } from '../../types/courseInfo';

type Props = {
  unit: number;
  lesson: number;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`lesson-tree-chevron${open ? ' is-open' : ''}`}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function Check() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="5 12 10 17 19 7" />
    </svg>
  );
}

export function LessonSidebar({ unit, lesson }: Props) {
  const [course, setCourse] = useState<CourseInfo | null>(null);
  const [open, setOpen] = useState<Record<number, boolean>>({ [unit]: true });
  const { isLessonComplete } = useCompletions();

  useEffect(() => {
    let cancelled = false;
    loadCourseInfo()
      .then((info) => {
        if (!cancelled) setCourse(info);
      })
      .catch(() => {
        if (!cancelled) setCourse(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setOpen((prev) => ({ ...prev, [unit]: true }));
  }, [unit]);

  if (!course) return null;

  return (
    <nav className="lesson-tree" aria-label="Course outline">
      <p className="lesson-tree-title">Course</p>
      <ul className="lesson-tree-units">
        {course.units.map((u) => {
          const isOpen = Boolean(open[u.number]);
          const done = u.lessons.filter((l) => isLessonComplete(u.number, l.number)).length;
          return (
            <li key={u.number}>
              <button
                type="button"
                className="lesson-tree-unit"
                aria-expanded={isOpen}
                onClick={() => setOpen((prev) => ({ ...prev, [u.number]: !isOpen }))}
              >
                <Chevron open={isOpen} />
                <span className="lesson-tree-unit-name">
                  <span className="lesson-tree-unit-num">{u.number}</span>
                  {u.title}
                </span>
                <span className="lesson-tree-count">
                  {done}/{u.lessons.length}
                </span>
              </button>
              {isOpen && (
                <ul className="lesson-tree-lessons">
                  {u.lessons.map((l) => {
                    const current = u.number === unit && l.number === lesson;
                    const complete = isLessonComplete(u.number, l.number);
                    return (
                      <li key={l.number}>
                        <Link
                          to={`/lesson?unit=${u.number}&lesson=${l.number}`}
                          className={`lesson-tree-lesson${current ? ' is-current' : ''}`}
                          aria-current={current ? 'page' : undefined}
                        >
                          <span
                            className={`lesson-tree-dot${complete ? ' is-done' : ''}`}
                            aria-hidden="true"
                          >
                            {complete && <Check />}
                          </span>
                          <span className="lesson-tree-lesson-name">
                            <span className="lesson-tree-lesson-num">
                              {u.number}.{l.number}
                            </span>{' '}
                            {l.title}
                          </span>
                          {complete && <span className="sr-only">Completed</span>}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
