import { useCallback, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { SoundToggle } from './SoundToggle';

type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';

function readTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
}

function applyBodyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.body.classList.toggle('dark', theme === 'dark');
}

type AppShellProps = {
  children?: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const { user, loading, signOut } = useAuth();
  const [theme, setTheme] = useState<Theme>(() => {
    const initial = readTheme();
    applyBodyTheme(initial);
    return initial;
  });

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyBodyTheme(next);
      return next;
    });
  }, []);

  const isDark = theme === 'dark';

  return (
    <>
      <nav style={navStyle(isDark)}>
        <Link to="/" style={brandStyle(isDark)}>
          Learn Python
        </Link>
        <div style={navRightStyle}>
          {!loading &&
            (user ? (
              <button
                type="button"
                style={accountBtnStyle(isDark)}
                onClick={() => void signOut()}
              >
                Sign out
              </button>
            ) : (
              <Link to="/login" style={accountLinkStyle(isDark)}>
                Sign in
              </Link>
            ))}
          <SoundToggle />
          <button
            type="button"
            style={themeBtnStyle(isDark)}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>
      {children}
    </>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function navStyle(isDark: boolean): React.CSSProperties {
  return {
    background: 'var(--bg)',
    borderBottom: '1px solid var(--border)',
    padding: '14px clamp(20px, 6vw, 120px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background 0.2s, border-color 0.2s',
  };
}

function brandStyle(isDark: boolean): React.CSSProperties {
  return {
    fontWeight: 600,
    fontSize: 15,
    color: 'var(--blue-tx)',
    textDecoration: 'none',
  };
}

const navRightStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
};

function accountLinkStyle(isDark: boolean): React.CSSProperties {
  return {
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--blue-tx)',
    padding: '6px 12px',
    border: '1px solid var(--border)',
    borderRadius: 8,
    background: 'var(--surface)',
    textDecoration: 'none',
  };
}

function accountBtnStyle(isDark: boolean): React.CSSProperties {
  return {
    ...accountLinkStyle(isDark),
    cursor: 'pointer',
    fontFamily: 'inherit',
  };
}

function themeBtnStyle(isDark: boolean): React.CSSProperties {
  return {
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
    transition: 'background 0.2s, border-color 0.2s, color 0.2s',
  };
}
