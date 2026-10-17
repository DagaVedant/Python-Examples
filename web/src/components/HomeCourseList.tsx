import { Link } from 'react-router-dom';
import type { CourseUnit } from '../types/courseInfo';

type Props = {
  units: CourseUnit[];
};

function lessonHref(unit: number, lesson: number) {
  return `/lesson?unit=${unit}&lesson=${lesson}`;
}

export function HomeCourseList({ units }: Props) {
  return (
    <main className="course" id="course">
      {units.map((unit) => (
        <div className="unit" key={unit.number}>
          <div className="unit-header">
            <div>
              <small>Unit {unit.number}</small>
              <strong>{unit.title}</strong>
            </div>
            <span className="unit-progress" id={`unit-progress-${unit.number}`} />
          </div>
          {unit.lessons.map((lesson) => (
            <Link key={lesson.number} to={lessonHref(unit.number, lesson.number)}>
              <span className="num">
                {unit.number}.{lesson.number}
              </span>
              <span>{lesson.title}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          ))}
        </div>
      ))}
    </main>
  );
}
