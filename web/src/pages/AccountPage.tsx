import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/auth.css';

export function AccountPage() {
  const navigate = useNavigate();
  const { user, loading, signOut, updatePassword, deleteAccount } = useAuth();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSubmitting, setPasswordSubmitting] = useState(false);
  const [deleteError, setDeleteError] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate('/login', { replace: true });
  }, [loading, user, navigate]);

  async function handleChangePassword(e: FormEvent) {
    e.preventDefault();
    setPasswordMsg('');
    setPasswordError('');

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setPasswordError('Passwords do not match.');
      return;
    }

    setPasswordSubmitting(true);
    const { error } = await updatePassword(password);
    setPasswordSubmitting(false);

    if (error) {
      setPasswordError(error.message);
      return;
    }

    setPassword('');
    setConfirm('');
    setPasswordMsg('Password updated.');
  }

  async function handleSignOut() {
    await signOut();
    navigate('/', { replace: true });
  }

  async function handleDelete() {
    setDeleteError('');
    setDeleting(true);
    const { error } = await deleteAccount();
    setDeleting(false);

    if (error) {
      setDeleteError(error.message);
      setConfirmDelete(false);
      return;
    }

    navigate('/', { replace: true });
  }

  if (loading || !user) {
    return (
      <div className="auth-page">
        <div className="auth-card auth-card-wide">
          <p className="auth-lead">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card auth-card-wide">
        <h1>Account</h1>
        <p className="auth-lead">Manage your Learn Python account.</p>

        <section className="account-section">
          <h2 className="account-heading">Email</h2>
          <p className="account-email">{user.email}</p>
        </section>

        <section className="account-section">
          <h2 className="account-heading">Change password</h2>
          <form onSubmit={handleChangePassword}>
            <label htmlFor="account-password">New password</label>
            <input
              id="account-password"
              type="password"
              autoComplete="new-password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="account-confirm">Confirm password</label>
            <input
              id="account-confirm"
              type="password"
              autoComplete="new-password"
              placeholder="*******"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button type="submit" disabled={passwordSubmitting}>
              {passwordSubmitting ? 'Saving...' : 'Update password'}
            </button>
          </form>
          {passwordMsg ? (
            <div className="auth-success" role="status">
              {passwordMsg}
            </div>
          ) : null}
          {passwordError ? <div className="auth-error">{passwordError}</div> : null}
        </section>

        <section className="account-section">
          <h2 className="account-heading">Sign out</h2>
          <button type="button" className="auth-secondary-btn" onClick={() => void handleSignOut()}>
            Sign out
          </button>
        </section>

        <section className="account-section account-danger">
          <h2 className="account-heading">Delete account</h2>
          <p className="auth-lead account-danger-lead">
            This permanently removes your account and saved lesson progress. It cannot be undone.
          </p>

          {!confirmDelete ? (
            <button
              type="button"
              className="auth-danger-btn"
              onClick={() => setConfirmDelete(true)}
            >
              Delete account
            </button>
          ) : (
            <div className="account-confirm">
              <p className="auth-lead">Are you sure? Type confirm by clicking below.</p>
              <div className="account-confirm-actions">
                <button
                  type="button"
                  className="auth-danger-btn"
                  disabled={deleting}
                  onClick={() => void handleDelete()}
                >
                  {deleting ? 'Deleting...' : 'Yes, delete my account'}
                </button>
                <button
                  type="button"
                  className="auth-secondary-btn"
                  disabled={deleting}
                  onClick={() => setConfirmDelete(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {deleteError ? <div className="auth-error">{deleteError}</div> : null}
        </section>

        <div className="auth-link">
          <Link to="/">Back to course</Link>
        </div>
      </div>
    </div>
  );
}
