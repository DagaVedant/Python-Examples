import { useCallback, useEffect, useState, type CSSProperties } from 'react';
import { getSoundEnabled, setSoundEnabled } from '../hooks/useCelebrate';

const btnStyle: CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text2)',
  padding: 0,
};

type SoundToggleProps = {
  className?: string;
  id?: string;
};

export function SoundToggle({ className = '', id = 'sound-tog' }: SoundToggleProps) {
  const [on, setOn] = useState(() => getSoundEnabled());

  useEffect(() => {
    const sync = (e: StorageEvent) => {
      if (e.key === null || e.key === 'pref-sound') {
        setOn(getSoundEnabled());
      }
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  const toggle = useCallback(() => {
    const next = !getSoundEnabled();
    setSoundEnabled(next);
    setOn(next);
  }, []);

  const classes = ['theme-btn', className, on ? '' : 'sound-muted']
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      id={id}
      className={classes}
      style={btnStyle}
      aria-pressed={on}
      aria-label={on ? 'Mute celebration sound' : 'Unmute celebration sound'}
      title={on ? 'Sound on' : 'Sound muted'}
      onClick={toggle}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    </button>
  );
}
