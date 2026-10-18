import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCompletions } from '../hooks/useCompletions';
import { loadCourseInfo } from '../lib/loadCourseInfo';
import type { CourseInfo } from '../types/courseInfo';
import './CourseTree.css';

type Props = {
  /** Current unit and lesson, if any. Used to highlight and to open that unit. */
  unit?: number;
  lesson?: number;
};

function slug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function CourseTree({ unit, lesson }: Props) {
  const [course, setCourse] = useState<CourseInfo | null>(null);
  const [open, setOpen] = useState<Record<number, boolean>>(unit ? { [unit]: true } : { 1: true });
  const { isLessonComplete, completions } = useCompletions();

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
    if (unit) setOpen((prev) => ({ ...prev, [unit]: true }));
  }, [unit]);

  if (!course) return <aside className="course-tree" aria-hidden="true" />;

  const total = course.units.reduce((n, u) => n + u.lessons.length, 0);

  return (
    <nav className="course-tree" aria-label="Course outline">
      <div className="course-tree-head">
        <span>python-course</span>
        <span>
          {completions.length}/{total}
        </span>
      </div>
      <ul className="course-tree-units">
        {course.units.map((u) => {
          const isOpen = Boolean(open[u.number]);
          const done = u.lessons.filter((l) => isLessonComplete(u.number, l.number)).length;
          return (
            <li key={u.number}>
              <button
                type="button"
                className={`course-tree-unit${isOpen ? ' is-open' : ''}`}
                aria-expanded={isOpen}
                onClick={() => setOpen((prev) => ({ ...prev, [u.number]: !isOpen }))}
              >
                <span className="course-tree-caret" aria-hidden="true" />
                <span className="course-tree-unit-name">
                  {u.number}. {u.title}
                </span>
                <span className="course-tree-count">
                  {done}/{u.lessons.length}
                </span>
              </button>
              {isOpen && (
                <ul className="course-tree-lessons">
                  {u.lessons.map((l) => {
                    const current = u.number === unit && l.number === lesson;
                    const complete = isLessonComplete(u.number, l.number);
                    return (
                      <li key={l.number}>
                        <Link
                          to={`/lesson?unit=${u.number}&lesson=${l.number}`}
                          className={`course-tree-file${current ? ' is-current' : ''}${complete ? ' is-done' : ''}`}
                          aria-current={current ? 'page' : undefined}
                        >
                          <span className="course-tree-state" aria-hidden="true">
                            {complete ? '✓' : '·'}
                          </span>
                          <span className="course-tree-file-name">
                            {u.number}.{l.number}_{slug(l.title)}.py
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
