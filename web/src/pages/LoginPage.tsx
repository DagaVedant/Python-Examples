import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/auth.css';

export function LoginPage() {
  const navigate = useNavigate();
  const { session, loading, signInWithPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    setSubmitting(true);
    const { error: authError } = await signInWithPassword(email.trim(), password);
    setSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    navigate('/', { replace: true });
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
        <h1>Log In to Learn Python</h1>
        <p className="auth-lead">
          Log in to save progress across devices and use AI practice checks
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="auth-forgot">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className="auth-link">
          No account? <Link to="/signup">Sign Up</Link>
        </div>

        {error ? <div className="auth-error">{error}</div> : null}
      </div>
    </div>
  );
}
