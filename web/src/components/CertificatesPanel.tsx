import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { CourseUnit } from '../types/courseInfo';
import './CertificatesPanel.css';

type Props = {
  units: CourseUnit[];
  completedKeys: readonly string[];
};

function completedUnitNumbers(completedKeys: readonly string[], units: CourseUnit[]): number[] {
  const set = new Set(completedKeys);
  return units
    .filter((unit) => unit.lessons.every((lesson) => set.has(`${unit.number}-${lesson.number}`)))
    .map((unit) => unit.number);
}

export function CertificatesPanel({ units, completedKeys }: Props) {
  const doneNums = useMemo(
    () => completedUnitNumbers(completedKeys, units),
    [completedKeys, units],
  );

  const courseComplete = doneNums.length > 0 && doneNums.length === units.length;

  if (!doneNums.length) return null;

  const byNumber = Object.fromEntries(units.map((u) => [u.number, u]));

  return (
    <section className="certificates-panel" aria-label="Certificates" id="certificates-slot">
      <h2 className="certificates-heading">Certificates</h2>
      <p className="certificates-blurb">You finished these — open a certificate to print or share.</p>
      <div className="certificates-links">
        {doneNums.map((n) => {
          const title = byNumber[n]?.title ?? `Unit ${n}`;
          return (
            <Link key={n} className="cert-link" to={`/certificate?unit=${n}`}>
              Unit {n}: {title}
            </Link>
          );
        })}
        {courseComplete ? (
          <Link className="cert-link cert-link-course" to="/certificate?course=1">
            Course complete — Learn Python
          </Link>
        ) : null}
      </div>
    </section>
  );
}
