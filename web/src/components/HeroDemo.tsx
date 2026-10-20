import { useRef, useState } from 'react';

const DEMO_OUTPUT = 'Hello!\nYou can code.';

export function HeroDemo() {
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [busy, setBusy] = useState(false);
  const animatingRef = useRef(false);

  const onRun = async () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setBusy(true);
    setOutput('');
    setRunning(true);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await new Promise((r) => window.setTimeout(r, 280));
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOutput(DEMO_OUTPUT);
      setRunning(false);
    } else {
      await new Promise<void>((resolve) => {
        setRunning(true);
        let i = 0;
        const tick = () => {
          if (i <= DEMO_OUTPUT.length) {
            setOutput(DEMO_OUTPUT.slice(0, i));
            i += 1;
            window.setTimeout(tick, 45);
          } else {
            setRunning(false);
            resolve();
          }
        };
        tick();
      });
    }
    setBusy(false);
    animatingRef.current = false;
  };

  return (
    <div className="hero-demo" aria-label="Try a tiny Python example">
      <div className="hero-demo-bar">
        <span className="hero-demo-label">Try it</span>
        <button
          type="button"
          className="hero-demo-run"
          onClick={onRun}
          disabled={busy}
        >
          Run
        </button>
      </div>
      <pre className="hero-demo-code" aria-hidden="true">
        <span className="kw">print</span>(<span className="str">&quot;Hello!&quot;</span>)
        {'\n'}
        <span className="kw">print</span>(<span className="str">&quot;You can code.&quot;</span>)
      </pre>
      <div
        className={`hero-demo-out${running ? ' is-running' : ''}`}
        role="status"
        aria-live="polite"
      >
        {output}
      </div>
    </div>
  );
}
