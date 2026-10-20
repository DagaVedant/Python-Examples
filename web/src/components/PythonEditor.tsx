import { useEffect, useRef } from 'react';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { Compartment } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { useBodyTheme } from '../hooks/useBodyTheme';

export type PythonEditorTheme = 'light' | 'dark';

export type PythonEditorProps = {
  value: string;
  onChange: (value: string) => void;
  theme?: PythonEditorTheme;
  className?: string;
};

function themeExtensions(theme: PythonEditorTheme) {
  return theme === 'dark' ? [oneDark] : [];
}

export function PythonEditor({
  value,
  onChange,
  className,
}: PythonEditorProps) {
  const theme = useBodyTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const themeCompartment = useRef(new Compartment());
  const onChangeRef = useRef(onChange);
  const valueRef = useRef(value);

  onChangeRef.current = onChange;

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return;

    valueRef.current = value;

    const view = new EditorView({
      doc: value,
      parent,
      extensions: [
        basicSetup,
        EditorView.lineWrapping,
        EditorView.contentAttributes.of({ 'aria-label': 'Python code editor' }),
        python(),
        themeCompartment.current.of(themeExtensions(theme)),
        EditorView.updateListener.of((update) => {
          if (!update.docChanged) return;
          const next = update.state.doc.toString();
          valueRef.current = next;
          onChangeRef.current(next);
        }),
        EditorView.theme({
          '&': {
            fontSize: '14px',
            borderRadius: 'var(--rsm, 6px)',
            overflow: 'hidden',
            border: '1px solid var(--border, #e5e7eb)',
          },
          '&.cm-focused': {
            outline: '2px solid var(--blue-md, #b8cce8)',
            outlineOffset: '1px',
          },
          '.cm-scroller': {
            fontFamily:
              'var(--font-mono)',
            minHeight: '8rem',
          },
          '.cm-content': {
            padding: '10px 0',
          },
          '.cm-gutters': {
            borderRight: '1px solid var(--border, #e5e7eb)',
          },
        }),
      ],
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, []);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      effects: themeCompartment.current.reconfigure(themeExtensions(theme)),
    });
  }, [theme]);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const current = view.state.doc.toString();
    if (current === value) return;
    valueRef.current = value;
    view.dispatch({
      changes: { from: 0, to: current.length, insert: value },
    });
  }, [value]);

  return <div ref={containerRef} className={className} />;
}
