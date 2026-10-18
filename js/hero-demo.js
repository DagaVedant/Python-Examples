(function () {
  const DEMO_OUTPUT = 'Hello!\nYou can code.';
  const runBtn = document.getElementById('hero-demo-run');
  const output = document.getElementById('hero-demo-output');
  if (!runBtn || !output) return;

  let animating = false;

  function typeOutput(text) {
    return new Promise((resolve) => {
      output.textContent = '';
      output.classList.add('is-running');
      let i = 0;
      const tick = () => {
        if (i <= text.length) {
          output.textContent = text.slice(0, i);
          i += 1;
          setTimeout(tick, 45);
        } else {
          output.classList.remove('is-running');
          resolve();
        }
      };
      tick();
    });
  }

  runBtn.addEventListener('click', async () => {
    if (animating) return;
    animating = true;
    runBtn.disabled = true;
    output.textContent = '';
    output.classList.add('is-running');
    // Lightweight simulated run. Pyodide would add multi-MB load for a 2-line print.
    await new Promise((r) => setTimeout(r, 280));
    await typeOutput(DEMO_OUTPUT);
    runBtn.disabled = false;
    animating = false;
  });
})();
