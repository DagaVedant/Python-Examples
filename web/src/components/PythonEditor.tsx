import { lazy, Suspense } from 'react';

export type PythonEditorProps = {
  value: string;
  onChange: (value: string) => void;
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
