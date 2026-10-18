import { Link } from 'react-router-dom';
import { lessonCompletionKey } from '../hooks/useGuestProgress';
import type { CourseUnit } from '../types/courseInfo';
import './HomeRoadmap.css';

type Props = {
  units: CourseUnit[];
  completedKeys: readonly string[];
};

export function HomeRoadmap({ units, completedKeys }: Props) {
  const isDone = (unit: number, lesson: number) =>
    completedKeys.includes(lessonCompletionKey(unit, lesson));
  const doneCount = (u: CourseUnit) => u.lessons.filter((l) => isDone(u.number, l.number)).length;
  const currentUnit = units.find((u) => doneCount(u) < u.lessons.length)?.number;
  const currentLesson = units
    .find((u) => u.number === currentUnit)
    ?.lessons.find((l) => !isDone(currentUnit as number, l.number))?.number;

  return (
    <main className="roadmap" id="course">
      <ol className="roadmap-route">
        {units.map((u) => {
          const done = doneCount(u);
          const complete = done === u.lessons.length;
          const current = u.number === currentUnit;
          const status = complete
            ? 'Complete'
            : done > 0
              ? `In progress, ${done} of ${u.lessons.length} done`
              : current
                ? 'Up next'
                : 'Not started';
          return (
            <li
              key={u.number}
              className={`roadmap-stop${complete ? ' is-done' : ''}${current ? ' is-now' : ''}`}
            >
              <h3>
                {u.number}. {u.title}
              </h3>
              <p>{status}</p>
              <ul className="roadmap-chips">
                {u.lessons.map((l) => {
                  const d = isDone(u.number, l.number);
                  const here = u.number === currentUnit && l.number === currentLesson;
                  return (
                    <li key={l.number}>
                      <Link
                        to={`/lesson?unit=${u.number}&lesson=${l.number}`}
                        className={`roadmap-chip${d ? ' is-done' : ''}${here ? ' is-here' : ''}`}
                      >
                        {u.number}.{l.number} {l.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
