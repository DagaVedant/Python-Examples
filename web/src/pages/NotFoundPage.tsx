import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import '../styles/auth.css';

export function NotFoundPage() {
  usePageMeta({
    title: 'Page not found',
    description: 'This page does not exist on Learn Python.',
    path: '/404',
    noIndex: true,
  });

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Page not found</h1>
        <p className="auth-lead">
          That link does not match a page on Learn Python. Head home to pick a lesson, or jump into
          lesson 1.
        </p>
        <div className="auth-link">
          <Link to="/">Back to home</Link>
          {' · '}
          <Link to="/lesson?unit=1&lesson=1">Start lesson 1</Link>
        </div>
      </div>
    </div>
  );
}
