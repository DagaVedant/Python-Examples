import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { recordLastLesson } from '../hooks/useGuestProgress';
import { usePageMeta } from '../hooks/usePageMeta';
import { loadLessonJson } from '../lib/loadLesson';
import { OFFLINE_MESSAGE, isLikelyOffline } from '../lib/serviceMessages';
import type { LessonData } from '../types/lesson';
import { LessonLoadedView } from './lesson/LessonLoadedView';
import './LessonPage.css';

export function LessonPage() {
  const [params] = useSearchParams();
  const unit = Number(params.get('unit') || 1);
  const lesson = Number(params.get('lesson') || 1);
  const [data, setData] = useState<LessonData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const lessonTitle = data
    ? `${data.unit}.${data.lesson} ${data.title}`
    : `Lesson ${unit}.${lesson}`;
  const lessonDescription = data
    ? `Learn ${data.title} in this free beginner Python lesson. Run examples in your browser.`
    : `Free beginner Python lesson ${unit}.${lesson}. Run examples in your browser.`;

  usePageMeta({
    title: lessonTitle,
    description: lessonDescription,
    path: `/lesson?unit=${unit}&lesson=${lesson}`,
  });

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
  }, [data]);

  if (error) {
    const friendly = isLikelyOffline()
      ? OFFLINE_MESSAGE
      : `Could not load lesson ${unit}.${lesson}. It may not exist, or the network failed. Try another lesson from home.`;
    return (
      <main className="lesson-page">
        <div className="lesson-wrap">
          <p role="alert">{friendly}</p>
          <p>
            <Link to="/">Back to home</Link>
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
