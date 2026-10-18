import { useEffect, useState } from 'react';

export type BodyTheme = 'light' | 'dark';

function read(): BodyTheme {
  if (typeof document === 'undefined') return 'light';
  return document.body.classList.contains('dark') ? 'dark' : 'light';
}

/** Follows the `dark` class on <body>, which the nav toggle sets. */
export function useBodyTheme(): BodyTheme {
  const [theme, setTheme] = useState<BodyTheme>(read);

  useEffect(() => {
    const sync = () => setTheme(read());
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return theme;
}
