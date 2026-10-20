import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { requestAiPracticeGrade, AI_CHECKS_PER_DAY } from '../lib/gradePractice';
import { gradePracticeLocally, type LocalGradeResult } from '../lib/practiceGrade';
import { resolveHint, resolveStarterTip } from '../lib/practiceHints';
import { PYODIDE_LOAD_MESSAGE } from '../lib/serviceMessages';
import { useBodyTheme } from '../hooks/useBodyTheme';
import { usePyodide } from '../hooks/usePyodide';
import type { LessonData, PracticeTask } from '../types/lesson';
import { PythonEditor, type PythonEditorTheme } from './PythonEditor';
import './PracticePanel.css';

export type PracticePanelProps = {
  lesson: Pick<LessonData, 'unit' | 'lesson' | 'title' | 'practice' | 'fakeFiles'>;
  theme?: PythonEditorTheme;
};

function guestSaveKey(unit: number, lesson: number, index: number): string {
  return `guest-save:${unit}:${lesson}:${index}`;
}

type AiFeedbackState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'ready'; passed: boolean; text: string }
  | { status: 'note'; text: string };

type TaskState = {
  code: string;
  editorOpen: boolean;
  hintStage: 0 | 1 | 2;
  output: { lines: string[]; isError: boolean } | null;
  running: boolean;
  saveStatus: string;
  localGrade: LocalGradeResult | null;
  lastRunOutput: string;
  lastRunError: string | null;
  ai: AiFeedbackState;
};

type PracticeTaskRowProps = {
  index: number;
  task: PracticeTask;
  unit: number;
  lesson: number;
  lessonTitle: string;
  editorTheme: PythonEditorTheme;
  fakeFiles?: Record<string, string>;
  onRun: (code: string, fakeFiles?: Record<string, string>) => Promise<{ output: string; error: string | null }>;
  pyodideLoading: boolean;
  signedIn: boolean;
  accessToken: string | null;
  remainingChecks: number | null;
  onRemainingChange: (n: number) => void;
};

function PracticeTaskRow({
  index,
  task,
  unit,
  lesson,
  lessonTitle,
  editorTheme,
  fakeFiles,
  onRun,
  pyodideLoading,
  signedIn,
  accessToken,
  remainingChecks,
  onRemainingChange,
}: PracticeTaskRowProps) {
  const [state, setState] = useState<TaskState>(() => {
    const saved = localStorage.getItem(guestSaveKey(unit, lesson, index));
    return {
      code: saved ?? (task.starter?.trim() ? task.starter : `# ${task.text.replace(/<[^>]+>/g, '')}\n`),
      editorOpen: false,
      hintStage: 0,
      output: null,
      running: false,
      saveStatus: saved != null ? 'Previously saved' : '',
      localGrade: null,
      lastRunOutput: '',
      lastRunError: null,
      ai: { status: 'idle' },
    };
  });

  const toggleEditor = () => {
    setState((s) => ({ ...s, editorOpen: !s.editorOpen }));
  };

  const onHintClick = () => {
    setState((s) => {
      if (s.hintStage === 0) return { ...s, hintStage: 1 };
      if (s.hintStage === 1) return { ...s, hintStage: 2 };
      return s;
    });
  };

  const onSave = () => {
    localStorage.setItem(guestSaveKey(unit, lesson, index), state.code);
    setState((s) => ({ ...s, saveStatus: 'Saved on this device' }));
  };

  const onRunClick = async () => {
    setState((s) => ({
      ...s,
      running: true,
      output: null,
      localGrade: null,
      ai: { status: 'idle' },
    }));
    try {
      const { output, error } = await onRun(state.code, fakeFiles);
      const grade = gradePracticeLocally(task, state.code, error ? '' : output, error);
      if (error) {
        setState((s) => ({
          ...s,
          running: false,
          output: { lines: [error], isError: true },
          localGrade: grade,
          lastRunOutput: '',
          lastRunError: error,
        }));
        return;
      }
      const trimmed = output.trimEnd();
      setState((s) => ({
        ...s,
        running: false,
        output: trimmed
          ? { lines: trimmed.split('\n'), isError: false }
          : { lines: ['No output'], isError: false },
        localGrade: grade,
        lastRunOutput: trimmed,
        lastRunError: null,
      }));
    } catch {
      setState((s) => ({
        ...s,
        running: false,
        output: { lines: ['Could not run code. Try again.'], isError: true },
        localGrade: {
          passed: false,
          feedback: 'Could not run code. Try again.',
        },
        lastRunOutput: '',
        lastRunError: 'Could not run code. Try again.',
      }));
    }
  };

  const onAiClick = async () => {
    if (!signedIn || !accessToken) return;
    if (state.localGrade == null && state.output == null) {
      setState((s) => ({
        ...s,
        ai: { status: 'note', text: 'Press Run first, then ask for AI feedback.' },
      }));
      return;
    }
    setState((s) => ({ ...s, ai: { status: 'loading' } }));
    const result = await requestAiPracticeGrade(
      {
        task: task.text,
        code: state.code,
        output: state.lastRunError ? state.lastRunError : state.lastRunOutput,
        lessonTopic: lessonTitle,
        gradingNote: task.gradingNote ?? null,
        unit,
        lesson,
        taskIndex: index,
      },
      accessToken,
    );
    if (!result.ok) {
      if (typeof result.error.remaining === 'number') {
        onRemainingChange(result.error.remaining);
      }
      setState((s) => ({
        ...s,
        ai: { status: 'note', text: result.error.message },
      }));
      return;
    }
    onRemainingChange(result.result.remaining);
    const hintPart =
      !result.result.passed && result.result.hint.trim()
        ? ` Hint: ${result.result.hint.trim()}`
        : '';
    setState((s) => ({
      ...s,
      ai: {
        status: 'ready',
        passed: result.result.passed,
        text: result.result.feedback + hintPart,
      },
    }));
  };

  const hintLabel =
    state.hintStage === 0 ? 'Hint' : state.hintStage === 1 ? 'More help' : 'Hints shown';

  const remainingLabel =
    remainingChecks == null
      ? `${AI_CHECKS_PER_DAY} AI checks / day`
      : `${remainingChecks} AI check${remainingChecks === 1 ? '' : 's'} left today`;

  return (
    <li className="practice-panel__item">
      <span className="practice-panel__num" aria-hidden="true">
        {index + 1}
      </span>
      <div className="practice-panel__content">
        <span dangerouslySetInnerHTML={{ __html: task.text }} />
        <div className="practice-panel__actions">
          <button type="button" className="practice-panel__toggle" onClick={toggleEditor}>
            {state.editorOpen ? 'Close editor' : 'Open editor'}
          </button>
          <button
            type="button"
            className="practice-panel__hint-btn"
            onClick={onHintClick}
            disabled={state.hintStage >= 2}
          >
            {hintLabel}
          </button>
        </div>
        {state.editorOpen && (
          <div className="practice-panel__editor-wrap">
            <PythonEditor
              value={state.code}
              onChange={(code) => setState((s) => ({ ...s, code }))}
              theme={editorTheme}
            />
            <div className="practice-panel__footer">
              <button
                type="button"
                className="practice-panel__run-btn"
                onClick={onRunClick}
                disabled={state.running || pyodideLoading}
              >
                {state.running ? 'Running...' : pyodideLoading ? 'Loading Python...' : 'Run'}
              </button>
              <button type="button" className="practice-panel__save-btn" onClick={onSave}>
                Save
              </button>
              {signedIn ? (
                <button
                  type="button"
                  className="practice-panel__ai-btn"
                  onClick={() => void onAiClick()}
                  disabled={state.ai.status === 'loading' || pyodideLoading}
                >
                  {state.ai.status === 'loading' ? 'Checking...' : 'AI feedback'}
                </button>
              ) : null}
              {state.saveStatus ? (
                <span className="practice-panel__save-status">{state.saveStatus}</span>
              ) : null}
            </div>
            {signedIn ? (
              <p className="practice-panel__ai-meta">{remainingLabel}</p>
            ) : (
              <p className="practice-panel__guest-note">
                Sign in for AI feedback.{' '}
                <Link to="/login">Log in</Link> or <Link to="/signup">sign up</Link>.
              </p>
            )}
            {state.output && (
              <div className="practice-panel__output-box">
                <div className="practice-panel__output-label">Output</div>
                {state.output.lines.map((line, i) => (
                  <div
                    key={i}
                    className={
                      'practice-panel__output-line' +
                      (state.output!.isError
                        ? ' practice-panel__output-line--error'
                        : line === 'No output'
                          ? ' practice-panel__output-line--muted'
                          : '')
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}
            {state.localGrade && (
              <div
                className={
                  'practice-panel__grade' +
                  (state.localGrade.passed
                    ? ' practice-panel__grade--pass'
                    : ' practice-panel__grade--fail')
                }
                role="status"
              >
                <span className="practice-panel__grade-label">
                  {state.localGrade.passed ? 'Pass' : 'Not yet'}
                </span>
                <span>{state.localGrade.feedback}</span>
              </div>
            )}
            {state.ai.status === 'ready' && (
              <div
                className={
                  'practice-panel__ai-row' +
                  (state.ai.passed
                    ? ' practice-panel__ai-row--pass'
                    : ' practice-panel__ai-row--fail')
                }
                role="status"
              >
                <span className="practice-panel__grade-label">AI</span>
                <span>{state.ai.text}</span>
              </div>
            )}
            {state.ai.status === 'note' && (
              <div className="practice-panel__ai-row practice-panel__ai-row--note" role="status">
                {state.ai.text}
              </div>
            )}
            {state.hintStage >= 1 && (
              <div className="practice-panel__hint-box" role="status">
                <span className="practice-panel__hint-label">Hint</span>
                <span>{resolveHint(task)}</span>
                {state.hintStage >= 2 && (
                  <div className="practice-panel__hint-extra">
                    <span className="practice-panel__hint-label">Starter tip</span>
                    <span>{resolveStarterTip(task)}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {state.hintStage >= 1 && !state.editorOpen && (
          <div className="practice-panel__hint-box" role="status">
            <span className="practice-panel__hint-label">Hint</span>
            <span>{resolveHint(task)}</span>
            {state.hintStage >= 2 && (
              <div className="practice-panel__hint-extra">
                <span className="practice-panel__hint-label">Starter tip</span>
                <span>{resolveStarterTip(task)}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export function PracticePanel({ lesson, theme }: PracticePanelProps) {
  const { unit, lesson: lessonNum, title, practice, fakeFiles } = lesson;
  const { runIsolated, loading, ensureLoaded, loadError } = usePyodide();
  const { session, user } = useAuth();
  const bodyTheme = useBodyTheme();
  const editorTheme = theme ?? bodyTheme;
  const [remainingChecks, setRemainingChecks] = useState<number | null>(null);

  useEffect(() => {
    void ensureLoaded();
  }, [ensureLoaded]);

  const tasks = useMemo(() => practice, [practice]);

  const run = useCallback(
    (code: string, files?: Record<string, string>) =>
      runIsolated(code, { fakeFiles: files }),
    [runIsolated],
  );

  if (!tasks.length) {
    return null;
  }

  return (
    <section className="practice-panel" aria-labelledby="practice-panel-heading">
      <h2 id="practice-panel-heading">Practice</h2>
      {loadError ? (
        <p className="practice-panel__load-note" role="alert">
          {PYODIDE_LOAD_MESSAGE}
        </p>
      ) : null}
      <ul className="practice-panel__list">
        {tasks.map((task, index) => (
          <PracticeTaskRow
            key={index}
            index={index}
            task={task}
            unit={unit}
            lesson={lessonNum}
            lessonTitle={title}
            editorTheme={editorTheme}
            fakeFiles={fakeFiles}
            onRun={run}
            pyodideLoading={loading}
            signedIn={Boolean(user)}
            accessToken={session?.access_token ?? null}
            remainingChecks={remainingChecks}
            onRemainingChange={setRemainingChecks}
          />
        ))}
      </ul>
    </section>
  );
}
