import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { recordLastLesson } from '../hooks/useGuestProgress';
import { loadLessonJson } from '../lib/loadLesson';
import type { LessonData } from '../types/lesson';
import { LessonLoadedView } from './lesson/LessonLoadedView';
import './LessonPage.css';

export function LessonPage() {
  const [params] = useSearchParams();
  const unit = Number(params.get('unit') || 1);
  const lesson = Number(params.get('lesson') || 1);
  const [data, setData] = useState<LessonData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setData(null);
    setError(null);
    loadLessonJson(unit, lesson)
      .then((L) => {
        if (!cancelled) setData(L);
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      });
    return () => {
      cancelled = true;
    };
  }, [unit, lesson]);

  useEffect(() => {
    if (!data) return;
    recordLastLesson(data.unit, data.lesson, data.title);
    document.title = `${data.unit}.${data.lesson} ${data.title}`;
  }, [data]);

  if (error) {
    return (
      <main className="lesson-page">
        <div className="lesson-wrap">
          <p>
            Could not load lesson {unit}.{lesson}: {error}
          </p>
          <p>
            Ensure <code>web/public/lessons/{unit}-{lesson}.json</code> exists.
          </p>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="lesson-page">
        <div className="lesson-wrap">Loading lesson…</div>
      </main>
    );
  }

  return <LessonLoadedView data={data} />;
}
