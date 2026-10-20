import { useCallback, useRef, useState } from 'react';

const PYODIDE_VERSION = '0.26.2';
const PYODIDE_INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

interface PyodideNamespace {
  destroy: () => void;
}

interface PyodideInterface {
  setStdout: (opts: { batched: (text: string) => void }) => void;
  setStdin: (opts: { stdin: () => string }) => void;
  runPython: (code: string, opts?: { globals?: PyodideNamespace }) => void;
  globals: {
    get: (name: string) => () => PyodideNamespace;
  };
  FS: {
    writeFile: (path: string, data: string) => void;
  };
}

declare global {
  interface Window {
    loadPyodide?: (config: { indexURL: string }) => Promise<PyodideInterface>;
  }
}

export type RunIsolatedResult = {
  output: string;
  error: string | null;
};

export type RunIsolatedOptions = {
  allowInput?: boolean;
  fakeFiles?: Record<string, string>;
};

let pyodideSingleton: PyodideInterface | null = null;
let pyodideLoadPromise: Promise<PyodideInterface> | null = null;

function loadPyodideScript(): Promise<void> {
  if (window.loadPyodide) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${PYODIDE_INDEX_URL}pyodide.js"]`,
    );
    if (existing) {
      if (window.loadPyodide) resolve();
      else existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Failed to load Pyodide')), {
        once: true,
      });
      return;
    }
    const script = document.createElement('script');
    script.src = `${PYODIDE_INDEX_URL}pyodide.js`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Pyodide'));
    document.head.appendChild(script);
  });
}

async function loadPyodideInstance(): Promise<PyodideInterface> {
  if (pyodideSingleton) return pyodideSingleton;
  if (!pyodideLoadPromise) {
    pyodideLoadPromise = (async () => {
      await loadPyodideScript();
      if (!window.loadPyodide) {
        throw new Error('Pyodide loader not available');
      }
      pyodideSingleton = await window.loadPyodide({ indexURL: PYODIDE_INDEX_URL });
      return pyodideSingleton;
    })();
  }
  return pyodideLoadPromise;
}

function seedFakeFiles(py: PyodideInterface, fakeFiles?: Record<string, string>) {
  if (!fakeFiles) return;
  for (const [name, content] of Object.entries(fakeFiles)) {
    py.FS.writeFile(name, content);
  }
}

export async function runIsolated(
  code: string,
  { allowInput = true, fakeFiles }: RunIsolatedOptions = {},
): Promise<RunIsolatedResult> {
  const py = await loadPyodideInstance();
  seedFakeFiles(py, fakeFiles);

  let output = '';
  py.setStdout({ batched: (text) => {
    output += text + '\n';
  } });

  if (allowInput) {
    py.setStdin({
      stdin: () => {
        const answer = window.prompt('Type your answer, then press OK:') ?? '';
        output += answer + '\n';
        return answer + '\n';
      },
    });
  } else {
    py.setStdin({ stdin: () => '\n' });
  }

  const namespace = py.globals.get('dict')();
  try {
    py.runPython(code, { globals: namespace });
    return { output, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { output, error: message };
  } finally {
    namespace.destroy();
  }
}

export function usePyodide() {
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(() => pyodideSingleton !== null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const loadingRef = useRef(false);

  const ensureLoaded = useCallback(async () => {
    if (pyodideSingleton) {
      setReady(true);
      return;
    }
    if (loadingRef.current) {
      await pyodideLoadPromise;
      setReady(true);
      return;
    }
    loadingRef.current = true;
    setLoading(true);
    setLoadError(null);
    try {
      await loadPyodideInstance();
      setReady(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setLoadError(message);
      throw err;
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, []);

  const run = useCallback(
    async (code: string, options?: RunIsolatedOptions): Promise<RunIsolatedResult> => {
      await ensureLoaded();
      return runIsolated(code, options);
    },
    [ensureLoaded],
  );

  return {
    loading,
    ready,
    loadError,
    ensureLoaded,
    runIsolated: run,
  };
}
