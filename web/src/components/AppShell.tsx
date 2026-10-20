import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { StatusBanner } from './StatusBanner';
import '../styles/auth.css';

type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';

function applyBodyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.body.classList.toggle('dark', theme === 'dark');
}

type AppShellProps = {
  children?: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const { user, loading } = useAuth();
  const [theme, setTheme] = useState<Theme>(() => {
    const initial: Theme = localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
    applyBodyTheme(initial);
    return initial;
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyBodyTheme(next);
      return next;
    });
  };

  const isDark = theme === 'dark';

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Site">
        <Link to="/" className="site-nav-brand">
          Learn Python
        </Link>
        <div className="site-nav-right">
          {!loading &&
            (user ? (
              <Link to="/account" className="site-nav-account">
                Account
              </Link>
            ) : (
              <Link to="/login" className="site-nav-account">
                Sign in
              </Link>
            ))}
          <button
            type="button"
            className="site-nav-theme"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>
      <StatusBanner />
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <span>Learn Python</span>
        <div className="site-footer-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </footer>
    </>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
