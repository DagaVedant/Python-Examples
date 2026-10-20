import { useEffect, useState } from 'react';

export function useBodyTheme(): 'light' | 'dark' {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.body.classList.contains('dark') ? 'dark' : 'light',
  );

  useEffect(() => {
    const sync = () => setTheme(document.body.classList.contains('dark') ? 'dark' : 'light');
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return theme;
}
