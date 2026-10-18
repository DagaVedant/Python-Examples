import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/auth.css';

export function SignupPage() {
  const navigate = useNavigate();
  const { session, loading, signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && session) navigate('/', { replace: true });
  }, [loading, session, navigate]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setSubmitting(true);
    const { data, error: authError } = await signUp(email.trim(), password);
    setSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    if (data.session) {
      navigate('/', { replace: true });
    } else {
      setError('Check your email to confirm your account.');
    }
  }

  if (loading) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <p className="auth-lead">Loading…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign Up for Learn Python</h1>
        <p className="auth-lead">
          Optional — create an account to save progress across devices and get AI practice
          feedback
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            autoComplete="new-password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="signup-confirm">Confirm Password</label>
          <input
            id="signup-confirm"
            type="password"
            autoComplete="new-password"
            placeholder="*******"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button type="submit" disabled={submitting}>
            {submitting ? 'Signing up…' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-link">
          Already have an account? <Link to="/login">Log In</Link>
        </div>

        {error ? <div className="auth-error">{error}</div> : null}
      </div>
    </div>
  );
}
