import { useCallback, useEffect, useMemo, useState } from 'react';
import type { QuizItem } from '../types/lesson';
import './QuizPanel.css';

export type QuizPanelProps = {
  quiz: QuizItem | QuizItem[];
  onPassedChange?: (passed: boolean[], allPassed: boolean) => void;
};

type QuestionAnswer = {
  selectedIndex: number;
  correct: boolean;
};

export function QuizPanel({ quiz, onPassedChange }: QuizPanelProps) {
  const quizList = useMemo(
    () =>
      (Array.isArray(quiz) ? quiz : [quiz]).map((item) => {
        const options = item.options.filter((option) => !option.correct);
        const correct = item.options.filter((option) => option.correct);
        options.splice(Math.floor(Math.random() * (options.length + 1)), 0, ...correct);
        return { ...item, options };
      }),
    [quiz],
  );

  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(QuestionAnswer | null)[]>(() =>
    quizList.map(() => null),
  );
  const [passed, setPassed] = useState<boolean[]>(() => quizList.map(() => false));

  useEffect(() => {
    setQuizIndex(0);
    setSelectedIndex(null);
    setAnswers(quizList.map(() => null));
    setPassed(quizList.map(() => false));
  }, [quizList]);

  const current = quizList[quizIndex];
  const currentAnswer = answers[quizIndex];
  const locked = currentAnswer !== null;
  const score = passed.filter(Boolean).length;

  useEffect(() => {
    onPassedChange?.(passed, passed.length > 0 && passed.every(Boolean));
  }, [passed, onPassedChange]);

  const restoreQuestion = useCallback(
    (index: number) => {
      setQuizIndex(index);
      const saved = answers[index];
      setSelectedIndex(saved?.selectedIndex ?? null);
    },
    [answers],
  );

  if (quizList.length === 0 || !current) {
    return null;
  }

  const handleCheck = () => {
    if (selectedIndex === null || locked) return;
    const isCorrect = current.options[selectedIndex].correct;
    const nextAnswer: QuestionAnswer = { selectedIndex, correct: isCorrect };
    setAnswers((prev) => {
      const copy = [...prev];
      copy[quizIndex] = nextAnswer;
      return copy;
    });
    if (isCorrect) {
      setPassed((prev) => {
        const copy = [...prev];
        copy[quizIndex] = true;
        return copy;
      });
    }
  };

  const handleReset = () => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[quizIndex] = null;
      return copy;
    });
    setPassed((prev) => {
      const copy = [...prev];
      copy[quizIndex] = false;
      return copy;
    });
    setSelectedIndex(null);
  };

  const goPrev = () => {
    if (quizIndex > 0) restoreQuestion(quizIndex - 1);
  };

  const goNext = () => {
    if (quizIndex < quizList.length - 1) restoreQuestion(quizIndex + 1);
  };

  const feedback =
    currentAnswer === null
      ? null
      : currentAnswer.correct
        ? current.correct
        : current.wrong;

  return (
    <div className="quiz-panel">
      <div className="quiz-card">
        <div className="quiz-header">
          <div className="quiz-header-title">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Quick check
          </div>
          <div className="quiz-meta">
            {quizList.length > 1 && (
              <span className="quiz-score" aria-live="polite">
                Score: {score} / {quizList.length}
              </span>
            )}
          </div>
        </div>

        {quizList.length > 1 && (
          <div className="quiz-progress" id="quiz-progress">
            Question {quizIndex + 1} of {quizList.length}
          </div>
        )}

        <div className="quiz-question" id="quiz-question">
          {current.question}
        </div>

        <div
          className={`quiz-options${locked ? ' locked' : ''}`}
          id="quiz-options"
          role="radiogroup"
          aria-label={`Question ${quizIndex + 1}`}
        >
          {current.options.map((opt, i) => (
            <button
              key={`${quizIndex}-${i}-${opt.text.slice(0, 24)}`}
              type="button"
              className={[
                'option',
                currentAnswer !== null
                  ? opt.correct
                    ? 'correct'
                    : i === currentAnswer.selectedIndex
                      ? 'wrong'
                      : ''
                  : selectedIndex === i
                    ? 'selected'
                    : '',
              ]
                .filter(Boolean)
                .join(' ')}
              role="radio"
              aria-checked={selectedIndex === i}
              disabled={locked}
              onClick={() => {
                if (locked) return;
                setSelectedIndex(i);
              }}
              onKeyDown={(e) => {
                if (locked) return;
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndex(i);
                }
              }}
            >
              <span className="option-dot" aria-hidden="true" />
              {opt.text}
            </button>
          ))}
        </div>

        <div className="quiz-footer">
          {quizList.length > 1 && (
            <div className="quiz-nav">
              <button
                type="button"
                className="nav-btn-quiz"
                onClick={goPrev}
                disabled={quizIndex === 0}
              >
                Previous
              </button>
              <button
                type="button"
                className="nav-btn-quiz"
                onClick={goNext}
                disabled={quizIndex >= quizList.length - 1}
              >
                Next
              </button>
            </div>
          )}

          <button
            type="button"
            className="check-btn"
            id="check-btn"
            disabled={selectedIndex === null || locked}
            onClick={handleCheck}
          >
            Check answer
          </button>

          {currentAnswer !== null && !currentAnswer.correct && (
            <button type="button" className="reset-btn" onClick={handleReset}>
              ↺ Try again
            </button>
          )}

          {feedback !== null && (
            <span
              className={`feedback ${currentAnswer?.correct ? 'correct' : 'wrong'}`}
              role="alert"
            >
              {currentAnswer?.correct ? '✓ ' : '✗ '}
              {feedback}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
