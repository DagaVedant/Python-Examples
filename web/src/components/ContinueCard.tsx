import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLastLesson, type LastLesson } from '../lib/lastLesson';
import './ContinueCard.css';

function lessonHref(unit: number, lesson: number): string {
  return `/lesson/${unit}/${lesson}`;
}

export function ContinueCard() {
  const [last, setLast] = useState<LastLesson>(getLastLesson);

  useEffect(() => {
    setLast(getLastLesson());
    const onStorage = (event: StorageEvent) => {
      if (event.key == null || event.key === 'last-lesson') {
        setLast(getLastLesson());
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const label = `Continue: Unit ${last.unit} · ${last.title}`;

  return (
    <div className="continue-slot" id="continue-slot">
      <Link className="continue-card" to={lessonHref(last.unit, last.lesson)}>
        <span className="continue-card-text">{label}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
}
