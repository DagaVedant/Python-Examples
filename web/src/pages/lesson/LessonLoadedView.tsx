import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CourseTree } from '../../components/CourseTree';
import { LessonCompleteBar } from '../../components/LessonCompleteBar';
import { PracticePanel } from '../../components/PracticePanel';
import { ProjectPanelFromLesson } from '../../components/ProjectPanel';
import { QuizPanel } from '../../components/QuizPanel';
import { useAuth } from '../../hooks/useAuth';
import { usePyodide } from '../../hooks/usePyodide';
import { loadCourseInfo } from '../../lib/loadCourseInfo';
import { getLessonNeighbors, type LessonNavLink } from '../../lib/lessonNav';
import type { LessonData } from '../../types/lesson';
import { LessonCodeBlock } from './LessonCodeBlock';
import { LessonStepper } from './LessonStepper';

function lessonHref(unit: number, lesson: number): string {
  return `/lesson?unit=${unit}&lesson=${lesson}`;
}

function resolveEditorTheme(): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'light';
  if (document.body.classList.contains('dark')) return 'dark';
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
}

export type LessonLoadedViewProps = {
  data: LessonData;
};

export function LessonLoadedView({ data }: LessonLoadedViewProps) {
  const lesson = data;
  const { user } = useAuth();
  const { runIsolated, loading: pyodideLoading, ensureLoaded } = usePyodide();
  const editorTheme = resolveEditorTheme();
  const [quizAllPassed, setQuizAllPassed] = useState(false);
  const [neighbors, setNeighbors] = useState<{
    prev: LessonNavLink | null;
    next: LessonNavLink | null;
  }>({ prev: null, next: null });

  useEffect(() => {
    void ensureLoaded();
  }, [ensureLoaded]);

  useEffect(() => {
    setQuizAllPassed(false);
  }, [lesson.unit, lesson.lesson]);

  useEffect(() => {
    let cancelled = false;
    loadCourseInfo()
      .then((info) => {
        if (!cancelled) setNeighbors(getLessonNeighbors(info, lesson.unit, lesson.lesson));
      })
      .catch(() => {
        if (!cancelled) setNeighbors({ prev: null, next: null });
      });
    return () => {
      cancelled = true;
    };
  }, [lesson.unit, lesson.lesson]);

  const run = useCallback(
    (code: string, opts?: { fakeFiles?: Record<string, string> }) =>
      runIsolated(code, { fakeFiles: opts?.fakeFiles }),
    [runIsolated],
  );

  const onQuizPassedChange = useCallback((_passed: boolean[], allPassed: boolean) => {
    setQuizAllPassed(allPassed);
  }, []);

  const quizCount = useMemo(
    () => (Array.isArray(lesson.quiz) ? lesson.quiz.length : 1),
    [lesson.quiz],
  );

  const mainCode = lesson.code.lines.join('\n');
  const code2Initial = lesson.code2?.lines.join('\n');

  return (
    <main className="lesson-page">
      <div className="app-split">
        <CourseTree unit={lesson.unit} lesson={lesson.lesson} />
        <div className="lesson-main">
          <header className="lesson-header">
            <p className="lesson-crumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>
                Unit {lesson.unit}: {lesson.unitTitle}
              </span>
              {lesson.readTime != null && <span>{lesson.readTime} min</span>}
            </p>
            <h1>
              {lesson.unit}.{lesson.lesson} {lesson.title}
            </h1>
          </header>

          <LessonStepper
            steps={[
              { id: 'step-read', label: 'Read' },
              { id: 'step-try', label: 'Try it' },
              { id: 'step-practice', label: 'Practice' },
              { id: 'step-quiz', label: 'Quiz' },
            ]}
          />

          <div className="lesson-two">
            <div className="lesson-wrap">
        <p className="lesson-goal">{lesson.goal}</p>

        <section id="step-read" className="lesson-idea" aria-labelledby="lesson-idea-heading">
          <h2 id="lesson-idea-heading">Idea</h2>
          <div dangerouslySetInnerHTML={{ __html: lesson.idea }} />
        </section>

        {lesson.fakeFiles && Object.keys(lesson.fakeFiles).length > 0 && (
          <section className="lesson-fake-files" aria-labelledby="fake-files-heading">
            <h2 id="fake-files-heading">Practice files</h2>
            <p className="lesson-fake-note">
              These files live in a practice folder on this page, not on your computer. Your code
              can open them by name.
            </p>
            {Object.entries(lesson.fakeFiles).map(([name, body]) => (
              <div key={name} className="lesson-fake-file">
                <div className="lesson-fake-file-name">{name}</div>
                <pre className="lesson-fake-file-body">{body}</pre>
              </div>
            ))}
          </section>
        )}

        <section id="step-try" className="lesson-code-section" aria-labelledby="lesson-code-heading">
          <h2 id="lesson-code-heading">Example</h2>
          <LessonCodeBlock
            filename={lesson.code.filename}
            initialCode={mainCode}
            expectedOutput={lesson.code.output}
            theme={editorTheme}
            fakeFiles={lesson.fakeFiles}
            pyodideLoading={pyodideLoading}
            onRun={run}
          />
        </section>

        {lesson.changeOneLine && (
          <section className="lesson-try-step">
            <h2>Try it</h2>
            <div dangerouslySetInnerHTML={{ __html: lesson.changeOneLine }} />
          </section>
        )}

        {lesson.code2 && code2Initial && (
          <section className="lesson-code-section" aria-labelledby="lesson-code2-heading">
            <h2 id="lesson-code2-heading">Another example</h2>
            <LessonCodeBlock
              filename={lesson.code2.filename}
              initialCode={code2Initial}
              expectedOutput={lesson.code2.output}
              theme={editorTheme}
              fakeFiles={lesson.fakeFiles}
              pyodideLoading={pyodideLoading}
              onRun={run}
            />
          </section>
        )}

        <div id="step-practice">
          <PracticePanel lesson={lesson} theme={editorTheme} />
        </div>

        <div id="step-quiz">
          <QuizPanel quiz={lesson.quiz} onPassedChange={onQuizPassedChange} />
        </div>

        <LessonCompleteBar
          unit={lesson.unit}
          lesson={lesson.lesson}
          quizAllPassed={quizAllPassed}
          userId={user?.id}
        />

        <ProjectPanelFromLesson lesson={lesson} signedIn={Boolean(user)} />

        <nav className="lesson-nav" aria-label="Lesson navigation">
          {neighbors.prev ? (
            <Link
              className="lesson-nav-btn"
              to={lessonHref(neighbors.prev.unit, neighbors.prev.lesson)}
            >
              ← {neighbors.prev.unit}.{neighbors.prev.lesson} {neighbors.prev.title}
            </Link>
          ) : (
            <span />
          )}
          {neighbors.next ? (
            <Link
              className="lesson-nav-btn lesson-nav-btn--next"
              to={lessonHref(neighbors.next.unit, neighbors.next.lesson)}
            >
              {neighbors.next.unit}.{neighbors.next.lesson} {neighbors.next.title} →
            </Link>
          ) : null}
        </nav>
            </div>

            <aside className="lesson-side" aria-label="Lesson summary">
              <h2>You will learn</h2>
              <ul>
                {lesson.learn.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2>Practice</h2>
              <ul>
                {lesson.practice.map((task, i) => (
                  <li key={i}>
                    <a href="#step-practice">{task.text}</a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
