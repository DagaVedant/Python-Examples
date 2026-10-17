import { useState } from 'react';
import { PythonEditor, type PythonEditorTheme } from '../../components/PythonEditor';

export type LessonCodeBlockProps = {
  filename: string;
  initialCode: string;
  expectedOutput?: string[];
  theme: PythonEditorTheme;
  fakeFiles?: Record<string, string>;
  pyodideLoading: boolean;
  onRun: (
    code: string,
    opts?: { fakeFiles?: Record<string, string> },
  ) => Promise<{ output: string; error: string | null }>;
};

export function LessonCodeBlock({
  filename,
  initialCode,
  expectedOutput,
  theme,
  fakeFiles,
  pyodideLoading,
  onRun,
}: LessonCodeBlockProps) {
  const [code, setCode] = useState(initialCode);
  const [running, setRunning] = useState(false);
  const [liveOutput, setLiveOutput] = useState<string[] | null>(null);
  const [runError, setRunError] = useState(false);

  const displayLines =
    liveOutput ??
    (expectedOutput?.length ? expectedOutput : ['Run the code to see output']);

  const handleRun = async () => {
    setRunning(true);
    setLiveOutput(null);
    setRunError(false);
    try {
      const { output, error } = await onRun(code, { fakeFiles });
      if (error) {
        setLiveOutput([error]);
        setRunError(true);
      } else {
        const trimmed = output.trimEnd();
        setLiveOutput(trimmed ? trimmed.split('\n') : ['No output']);
      }
    } catch {
      setLiveOutput(['Could not run code. Try again.']);
      setRunError(true);
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="lesson-code-block">
      <div className="lesson-code-head">
        <span className="lesson-code-fn">{filename}</span>
        <button
          type="button"
          className="lesson-run-btn"
          onClick={handleRun}
          disabled={running || pyodideLoading}
        >
          {running ? 'Running…' : pyodideLoading ? 'Loading Python…' : 'Run'}
        </button>
      </div>
      <PythonEditor value={code} onChange={setCode} theme={theme} />
      <div className="lesson-output-box">
        <div className="lesson-output-label">Output</div>
        {displayLines.map((line, i) => (
          <div
            key={i}
            className={
              'lesson-output-line' +
              (runError ? ' lesson-output-line--error' : '') +
              (!liveOutput && !expectedOutput?.length ? ' lesson-output-line--muted' : '')
            }
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
