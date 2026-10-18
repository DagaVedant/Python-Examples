import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import '../styles/auth.css';

export function TermsPage() {
  usePageMeta({
    title: 'Terms of Use',
    description: 'Terms for using the free Learn Python browser course at pythonexamples.vercel.app.',
    path: '/terms',
  });

  return (
    <div className="auth-page legal-page">
      <article className="auth-card legal-card">
        <h1>Terms of Use</h1>
        <p className="auth-lead">Last updated: October 18, 2026</p>

        <p>
          These terms cover use of Learn Python at{' '}
          <a href="https://pythonexamples.vercel.app">https://pythonexamples.vercel.app</a>. By
          using the site, you agree to them.
        </p>

        <h2>The service</h2>
        <p>
          Learn Python is a free educational site. Lessons run in your browser. Accounts are
          optional. Creating an account lets you save progress with Supabase and use AI practice
          feedback when that feature is available.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Use the site for learning. Do not abuse the service, attempt to disrupt it, scrape it in
          a way that harms availability, or misuse the AI feedback feature (for example by
          automated bulk requests).
        </p>

        <h2>Accounts</h2>
        <p>
          You are responsible for keeping your login details safe. Provide an accurate email if you
          sign up. We may disable accounts that violate these terms or harm the service.
        </p>

        <h2>AI feedback</h2>
        <p>
          AI practice feedback is offered to signed-in users on a best-effort basis, subject to
          daily limits. Feedback may be incomplete or incorrect. Use it as a learning aid, not as
          guaranteed advice.
        </p>

        <h2>Content and availability</h2>
        <p>
          Course materials are provided as-is for education. The site may change, pause, or stop
          without notice. We are not liable for lost progress, downtime, or decisions you make based
          on lesson or AI output.
        </p>

        <h2>Privacy</h2>
        <p>
          How we handle data is described in the <Link to="/privacy">Privacy Policy</Link>.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms. Continued use of the site after changes means you accept the
          updated terms. The date at the top of this page shows the latest update.
        </p>

        <div className="auth-link">
          <Link to="/">Back to home</Link>
          {' · '}
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </article>
    </div>
  );
}
