import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCompletions } from '../hooks/useCompletions';
import { loadCourseInfo } from '../lib/loadCourseInfo';
import { loadSearchIndex } from '../lib/loadSearchIndex';
import type { CourseInfo } from '../types/courseInfo';
import type { SearchLesson } from '../types/searchIndex';
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

function matchesQuery(entry: SearchLesson, q: string): boolean {
  if (!q) return true;
  return `${entry.title} ${entry.goal}`.toLowerCase().includes(q);
}

export function CourseTree({ unit, lesson }: Props) {
  const navigate = useNavigate();
  const [course, setCourse] = useState<CourseInfo | null>(null);
  const [index, setIndex] = useState<SearchLesson[] | null>(null);
  const [query, setQuery] = useState('');
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
    let cancelled = false;
    loadSearchIndex()
      .then((data) => {
        if (!cancelled) setIndex(data.lessons);
      })
      .catch(() => {
        if (!cancelled) setIndex([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (unit) setOpen((prev) => ({ ...prev, [unit]: true }));
  }, [unit]);

  const q = query.toLowerCase().trim();
  const matches = index && q ? index.filter((entry) => matchesQuery(entry, q)) : [];
  const matchKeys =
    q.length > 0 ? new Set(matches.map((m) => `${m.unit}:${m.lesson}`)) : null;

  useEffect(() => {
    if (!q || !index) return;
    const matched = index.filter((entry) => matchesQuery(entry, q));
    if (matched.length === 0) return;
    const next: Record<number, boolean> = {};
    for (const m of matched) next[m.unit] = true;
    setOpen((prev) => ({ ...prev, ...next }));
  }, [q, index]);

  if (!course) return <aside className="course-tree" aria-hidden="true" />;

  const total = course.units.reduce((n, u) => n + u.lessons.length, 0);

  const visibleUnits = course.units
    .map((u) => ({
      unit: u,
      lessons: matchKeys
        ? u.lessons.filter((l) => matchKeys.has(`${u.number}:${l.number}`))
        : u.lessons,
    }))
    .filter((row) => row.lessons.length > 0);

  function openTopResult() {
    if (matches.length === 0) return;
    const top = matches[0];
    navigate(`/lesson/${top.unit}/${top.lesson}`);
  }

  return (
    <nav className="course-tree" aria-label="Course outline">
      <div className="course-tree-search">
        <label className="sr-only" htmlFor="course-tree-search-input">
          Search lessons
        </label>
        <input
          id="course-tree-search-input"
          type="search"
          className="course-tree-search-input"
          placeholder="Search lessons"
          value={query}
          autoComplete="off"
          spellCheck={false}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              openTopResult();
            }
          }}
        />
        {q && (
          <p className="course-tree-search-meta" aria-live="polite">
            {matches.length === 0
              ? 'No matches'
              : `${matches.length} match${matches.length === 1 ? '' : 'es'}`}
          </p>
        )}
      </div>
      <div className="course-tree-head">
        <span>python-course</span>
        <span>
          {completions.length}/{total}
        </span>
      </div>
      <ul className="course-tree-units">
        {visibleUnits.map(({ unit: u, lessons }) => {
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
                  {lessons.map((l) => {
                    const current = u.number === unit && l.number === lesson;
                    const complete = isLessonComplete(u.number, l.number);
                    return (
                      <li key={l.number}>
                        <Link
                          to={`/lesson/${u.number}/${l.number}`}
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
