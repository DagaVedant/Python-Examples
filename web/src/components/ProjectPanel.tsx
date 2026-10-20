import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { LessonData, ProjectSpec } from '../types/lesson';
import { PYODIDE_LOAD_MESSAGE } from '../lib/serviceMessages';
import { useBodyTheme } from '../hooks/useBodyTheme';
import { usePyodide } from '../hooks/usePyodide';
import { PythonEditor } from './PythonEditor';
import './ProjectPanel.css';

const AI_DISCLAIMER_KEY = 'ai-disclaimer-seen';

function projectDoneKey(unit: number, lesson: number) {
  return `project-done:${unit}:${lesson}`;
}

function readDone(unit: number, lesson: number): boolean {
  try {
    return localStorage.getItem(projectDoneKey(unit, lesson)) === '1';
  } catch {
    return false;
  }
}

function writeDone(unit: number, lesson: number, done: boolean) {
  try {
    const key = projectDoneKey(unit, lesson);
    if (done) localStorage.setItem(key, '1');
    else localStorage.removeItem(key);
  } catch {
  }
}

export type ProjectCheckResult = {
  passed: boolean;
  feedback: string;
  hint?: string;
};

export type ProjectPanelProps = {
  unit: number;
  lesson: number;
  title: string;
  project: ProjectSpec;
  signedIn?: boolean;
  onCheck?: (code: string, output: string, runError?: string) => Promise<ProjectCheckResult>;
};

export function ProjectPanel({
  unit,
  lesson,
  title,
  project,
  signedIn = false,
  onCheck,
}: ProjectPanelProps) {
  const theme = useBodyTheme();
  const { runIsolated, loading: pyodideLoading, ensureLoaded, loadError } = usePyodide();
  const starter = project.starter ?? '';

  const [editorOpen, setEditorOpen] = useState(false);
  const [code, setCode] = useState(starter);
  const [done, setDone] = useState(() => readDone(unit, lesson));
  const [running, setRunning] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [runError, setRunError] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);
  const [checkRow, setCheckRow] = useState<{ show: boolean; tone: 'correct' | 'wrong' | 'neutral'; text: string }>({
    show: false,
    tone: 'neutral',
    text: '',
  });

  useEffect(() => {
    setDone(readDone(unit, lesson));
    setCode(project.starter ?? '');
    setEditorOpen(false);
    setOutputLines([]);
    setRunError(null);
    setCheckRow({ show: false, tone: 'neutral', text: '' });
  }, [unit, lesson, project.starter]);

  useEffect(() => {
    void ensureLoaded().catch(() => {
    });
  }, [ensureLoaded]);

  const toggleDone = useCallback(() => {
    setDone((prev) => {
      const next = !prev;
      writeDone(unit, lesson, next);
      return next;
    });
  }, [unit, lesson]);

  const handleRun = useCallback(async () => {
    setRunning(true);
    setRunError(null);
    setOutputLines([]);
    try {
      const { output, error } = await runIsolated(code);
      if (error) {
        setRunError(error);
      } else if (output.trim()) {
        setOutputLines(output.trimEnd().split('\n'));
      }
    } finally {
      setRunning(false);
    }
  }, [code, runIsolated]);

  const handleCheck = useCallback(async () => {
    if (!signedIn) return;

    if (!localStorage.getItem(AI_DISCLAIMER_KEY)) {
      const ok = window.confirm(
        "Checking sends your code to an AI service to grade it.\nDon't type personal information in the editor. Continue?",
      );
      if (!ok) return;
      localStorage.setItem(AI_DISCLAIMER_KEY, '1');
    }

    setChecking(true);
    setCheckRow({ show: true, tone: 'neutral', text: 'Checking…' });

    try {
      const { output, error: pyErr } = await runIsolated(code);
      const result = onCheck
        ? await onCheck(code, pyErr ? '' : output, pyErr ?? undefined)
        : {
            passed: false,
            feedback:
              'Project AI check is not wired in the React app yet. Use Run to verify output, or mark yourself done.',
          };

      setCheckRow({
        show: true,
        tone: result.passed ? 'correct' : 'wrong',
        text: (result.passed ? '✓ ' : '✗ ') + result.feedback + (result.hint ? ` Hint: ${result.hint}` : ''),
      });

      if (result.passed) {
        writeDone(unit, lesson, true);
        setDone(true);
      }
    } catch {
      setCheckRow({
        show: true,
        tone: 'wrong',
        text: 'Could not check your code right now. Try again in a moment.',
      });
    } finally {
      setChecking(false);
    }
  }, [signedIn, code, runIsolated, onCheck, unit, lesson]);

  const cardClass = useMemo(() => `project-card${done ? ' project-done' : ''}`, [done]);

  if (!project.desc) return null;

  return (
    <section className="project-panel" aria-label={`Lesson project: ${title}`} aria-labelledby="project-panel-heading">
      <p className="section-label" id="project-panel-heading" style={{ marginBottom: '0.75rem', fontSize: 13, fontWeight: 600, color: 'var(--text2)' }}>
        Lesson project
      </p>
      <div className={cardClass}>
        <div className="project-head">
          <div className="project-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div>
            {project.title ? <p className="project-title">{project.title}</p> : null}
            <p className="project-desc">{project.desc}</p>
          </div>
        </div>

        {loadError ? (
          <p className="project-load-note" role="alert">
            {PYODIDE_LOAD_MESSAGE}
          </p>
        ) : null}

        {starter ? (
          <>
            <button
              type="button"
              className="practice-toggle-btn"
              onClick={() => setEditorOpen((o) => !o)}
              aria-expanded={editorOpen}
            >
              {editorOpen ? 'Close editor' : 'Open editor'}
            </button>

            <div className={`project-editor-wrap${editorOpen ? ' open' : ''}`}>
              <PythonEditor value={code} onChange={setCode} theme={theme} />
              <div className="project-ide-footer">
                <button
                  type="button"
                  className="run-btn"
                  onClick={() => void handleRun()}
                  disabled={running || pyodideLoading}
                >
                  {running ? 'Running…' : 'Run'}
                </button>
                <button
                  type="button"
                  className={`run-btn${done ? ' done' : ''}`}
                  onClick={toggleDone}
                  aria-pressed={done}
                >
                  {done ? '✓ Done' : "I'm done"}
                </button>
                {signedIn ? (
                  <button
                    type="button"
                    className="run-btn"
                    onClick={() => void handleCheck()}
                    disabled={checking || pyodideLoading}
                  >
                    Check
                  </button>
                ) : (
                  <p className="project-guest-note">
                    AI check needs a free account.{' '}
                    <Link to="/signup">Sign up</Link> to use it. You can still Run and mark yourself done.
                  </p>
                )}
              </div>
              <div className="practice-output-box">
                <div className="output-label">Output</div>
                {runError ? (
                  <div className="output-line output-error">{runError}</div>
                ) : outputLines.length ? (
                  outputLines.map((line, i) => (
                    <div key={i} className="output-line">
                      {line}
                    </div>
                  ))
                ) : (
                  <div className="output-empty">No output yet</div>
                )}
              </div>
              {checkRow.show ? (
                <div className={`practice-ai-row show ${checkRow.tone === 'neutral' ? '' : checkRow.tone}`}>
                  {checkRow.text}
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

export function ProjectPanelFromLesson({
  lesson,
  signedIn,
  onCheck,
}: {
  lesson: Pick<LessonData, 'unit' | 'lesson' | 'title' | 'project'>;
  signedIn?: boolean;
  onCheck?: ProjectPanelProps['onCheck'];
}) {
  if (!lesson.project) return null;
  return (
    <ProjectPanel
      unit={lesson.unit}
      lesson={lesson.lesson}
      title={lesson.title}
      project={lesson.project}
      signedIn={signedIn}
      onCheck={onCheck}
    />
  );
}
