import { lazy, Suspense } from 'react';

export type PythonEditorTheme = 'light' | 'dark';

export type PythonEditorProps = {
  value: string;
  onChange: (value: string) => void;
  theme?: PythonEditorTheme;
  className?: string;
};

const CodeMirrorEditor = lazy(() => import('./CodeMirrorEditor'));

export function PythonEditor(props: PythonEditorProps) {
  return (
    <Suspense fallback={<div className={props.className} style={{ minHeight: '8rem' }} />}>
      <CodeMirrorEditor {...props} />
    </Suspense>
  );
}
