import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import '../styles/auth.css';

export function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Policy',
    description:
      'How Learn Python handles accounts, progress data, analytics, and AI practice feedback.',
    path: '/privacy',
  });

  return (
    <div className="auth-page legal-page">
      <article className="auth-card legal-card">
        <h1>Privacy Policy</h1>
        <p className="auth-lead">Last updated: October 18, 2026</p>

        <p>
          Learn Python is a free browser-based course at{' '}
          <a href="https://pythonexamples.vercel.app">https://pythonexamples.vercel.app</a>. This
          page explains what we collect and how we use it.
        </p>

        <h2>Accounts are optional</h2>
        <p>
          You can complete lessons without an account. Progress stays in your browser on this device
          unless you create an account and sign in.
        </p>

        <h2>What we store when you sign up</h2>
        <p>
          If you create an account, we store your email address and an encrypted password through
          Supabase Auth. When you are signed in, we may store which lessons you have completed so
          your progress can sync across devices.
        </p>

        <h2>AI practice feedback</h2>
        <p>
          Signed-in users may request AI feedback on practice exercises. That feature sends your
          practice code and related lesson context to our backend so a language model can return
          feedback. Guests do not get AI feedback. We limit how many AI checks each account can make
          each day.
        </p>

        <h2>Analytics</h2>
        <p>
          We use Vercel Web Analytics to understand aggregate traffic. It is designed to be
          cookie-free and does not identify you personally for marketing.
        </p>

        <h2>Hosting and processors</h2>
        <p>
          The site is hosted on Vercel. Authentication and progress data are handled by Supabase. We
          do not sell your personal information.
        </p>

        <h2>Cookies and local storage</h2>
        <p>
          We use browser local storage for guest progress, theme preference, and similar app state.
          Account sessions use Supabase auth storage as needed to keep you signed in.
        </p>

        <h2>Deleting your account</h2>
        <p>
          Signed-in users can delete their account from the Account page. That removes your auth
          user and stored completion records associated with that account.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent through the contact options listed on the live
          site or project repository linked from the site.
        </p>

        <div className="auth-link">
          <Link to="/">Back to home</Link>
          {' · '}
          <Link to="/terms">Terms of Use</Link>
        </div>
      </article>
    </div>
  );
}
