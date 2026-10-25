import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { StatusBanner } from './StatusBanner';
import '../styles/auth.css';

type AppShellProps = {
  children?: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const { user, loading } = useAuth();
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
