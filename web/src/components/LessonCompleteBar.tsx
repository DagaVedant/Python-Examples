import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCompletions } from '../hooks/useCompletions';
import { markLessonComplete } from '../lib/markLessonComplete';
import './LessonCompleteBar.css';

type Props = {
  unit: number;
  lesson: number;
  quizAllPassed: boolean;
  userId?: string | null;
};

const NUDGE_KEY = 'signup-nudge-dismissed';

export function LessonCompleteBar({ unit, lesson, quizAllPassed, userId }: Props) {
  const { isLessonComplete } = useCompletions();
  const [done, setDone] = useState(false);
  const [nudgeOpen, setNudgeOpen] = useState(false);

  useEffect(() => {
    setDone(isLessonComplete(unit, lesson));
    setNudgeOpen(false);
  }, [unit, lesson, isLessonComplete]);

  useEffect(() => {
    if (!quizAllPassed || done) return;
    void markLessonComplete(unit, lesson, { userId }).then((added) => {
      setDone(true);
      if (
        (added || isLessonComplete(unit, lesson)) &&
        unit === 1 &&
        lesson === 1 &&
        !userId &&
        !localStorage.getItem(NUDGE_KEY)
      ) {
        setNudgeOpen(true);
      }
    });
  }, [quizAllPassed, done, unit, lesson, userId, isLessonComplete]);

  const dismissNudge = () => {
    localStorage.setItem(NUDGE_KEY, '1');
    setNudgeOpen(false);
  };

  let statusText: string;
  let statusDone = false;
  if (done || quizAllPassed) {
    statusText = '✓ Lesson complete';
    statusDone = true;
  } else {
    statusText = 'Finish the quiz questions to complete';
  }

  return (
    <div className="lesson-complete-wrap">
      <div className="complete-slot">
        <div className={`complete-status${statusDone ? ' done' : ''}`}>{statusText}</div>
      </div>
      {nudgeOpen ? (
        <div className="signup-nudge" role="status">
          <p>
            Nice work on your first lesson. You can create a free account if you want to save your progress across
            devices, but it is optional.
          </p>
          <div className="signup-nudge-actions">
            <Link className="signup-nudge-primary" to="/signup">
              Create account
            </Link>
            <button type="button" className="signup-nudge-dismiss" onClick={dismissNudge}>
              Not now
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
