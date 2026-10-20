import { useEffect, useState } from 'react';

type Step = { id: string; label: string };

export function LessonStepper({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let idx = 0;
      steps.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [steps]);

  return (
    <ol className="lesson-stepper" aria-label="Lesson steps">
      {steps.map((s, i) => {
        const state = i < active ? 'is-done' : i === active ? 'is-now' : '';
        return (
          <li key={s.id} className={state} aria-current={i === active ? 'step' : undefined}>
            <a href={`#${s.id}`}>
              <span className="lesson-stepper-dot" aria-hidden="true">
                {i < active ? '✓' : ''}
              </span>
              {s.label}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
