import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { usePageMeta } from '../hooks/usePageMeta';
import '../styles/auth.css';

export function ForgotPasswordPage() {
  usePageMeta({
    title: 'Forgot password',
    description: 'Reset your Learn Python account password by email.',
    path: '/forgot-password',
    noIndex: true,
  });

  const navigate = useNavigate();
  const { session, loading, resetPasswordForEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && session) navigate('/account', { replace: true });
  }, [loading, session, navigate]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }

    setSubmitting(true);
    const { error: authError } = await resetPasswordForEmail(email.trim());
    setSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    setSent(true);
  }

  if (loading) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <p className="auth-lead">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Reset your password</h1>
        <p className="auth-lead">
          Enter the email for your account. If it exists, we will send a reset link.
        </p>

        {sent ? (
          <div className="auth-success" role="status">
            Check your email for a link to set a new password. The link opens this site.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="forgot-email">Email</label>
            <input
              id="forgot-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send reset link'}
            </button>
          </form>
        )}

        <div className="auth-link">
          <Link to="/login">Back to log in</Link>
        </div>

        {error ? <div className="auth-error">{error}</div> : null}
      </div>
    </div>
  );
}
