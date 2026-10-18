import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CertificatesPanel } from '../components/CertificatesPanel';
import { ContinueCard } from '../components/ContinueCard';
import { HeroDemo } from '../components/HeroDemo';
import { CourseTree } from '../components/CourseTree';
import { HomeRoadmap } from '../components/HomeRoadmap';
import { StreakBadge } from '../components/StreakBadge';
import { useCompletions } from '../hooks/useCompletions';
import { usePageMeta } from '../hooks/usePageMeta';
import { loadCourseInfo } from '../lib/loadCourseInfo';
import type { CourseUnit } from '../types/courseInfo';
import '../styles/home.css';

const PYTHON_LOGO =
  'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png';

export function HomePage() {
  const [units, setUnits] = useState<CourseUnit[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { completions } = useCompletions();

  usePageMeta({
    title: 'Free beginner course in the browser',
    description:
      'A free beginner Python course that runs in your browser. Optional accounts save progress. AI practice feedback for signed-in users.',
    path: '/',
  });

  useEffect(() => {
    let cancelled = false;
    loadCourseInfo()
      .then((info) => {
        if (!cancelled) setUnits(info.units);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Could not load course');
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="home-page">
      <div className="app-split">
      <CourseTree />
      <div className="home-main">
      <div className="home-streak-bar">
        <div id="streak-slot">
          <StreakBadge />
        </div>
      </div>

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-brand-row">
            <img src={PYTHON_LOGO} alt="" />
            <p className="hero-brand">Learn Python</p>
          </div>
          <h1>Write your first program today, for free</h1>
          <p className="hero-lead">
            Start in the browser with Lesson 1. No install. Account optional if you want to save
            progress.
          </p>
          <div className="hero-ctas">
            <Link className="hero-cta-primary" to="/lesson?unit=1&lesson=1">
              Start lesson 1
            </Link>
            <Link className="hero-cta-secondary" to="/signup">
              Create account (optional)
            </Link>
          </div>
        </div>
        <HeroDemo />
      </section>

      <ContinueCard />

      {error && <p className="home-error">{error}</p>}
      {units === null && !error && <p className="home-loading">Loading course…</p>}
      {units && <HomeRoadmap units={units} completedKeys={completions} />}
      {units && <CertificatesPanel units={units} completedKeys={completions} />}
      </div>
      </div>
    </div>
  );
}
