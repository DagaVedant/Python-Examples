import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/auth.css';

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const { session, loading, updatePassword } = useAuth();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [waited, setWaited] = useState(false);

  useEffect(() => {
    if (loading) return;
    const t = window.setTimeout(() => setWaited(true), 800);
    return () => window.clearTimeout(t);
  }, [loading]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setSubmitting(true);
    const { error: authError } = await updatePassword(password);
    setSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    setDone(true);
  }

  if (loading || !waited) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <p className="auth-lead">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <h1>Reset link expired</h1>
          <p className="auth-lead">
            That reset link is invalid or has expired. Request a new one from the forgot password
            page.
          </p>
          <div className="auth-link">
            <Link to="/forgot-password">Request a new link</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Choose a new password</h1>
        <p className="auth-lead">Enter a new password for your account.</p>

        {done ? (
          <>
            <div className="auth-success" role="status">
              Your password was updated.
            </div>
            <div className="auth-link">
              <button type="button" className="auth-text-btn" onClick={() => navigate('/', { replace: true })}>
                Go to home
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="reset-password">New password</label>
            <input
              id="reset-password"
              type="password"
              autoComplete="new-password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="reset-confirm">Confirm password</label>
            <input
              id="reset-confirm"
              type="password"
              autoComplete="new-password"
              placeholder="*******"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : 'Save password'}
            </button>
          </form>
        )}

        {error ? <div className="auth-error">{error}</div> : null}
      </div>
    </div>
  );
}
