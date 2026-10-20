import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { loadCourseInfo } from '../lib/loadCourseInfo';
import type { CourseUnit } from '../types/courseInfo';
import './CertificatePage.css';

type CertMode =
  | { type: 'course' }
  | { type: 'unit'; unit: number }
  | { type: 'invalid' };

function SealIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3 7.2 17l.9-5.4L4.2 7.7l5.4-.8L12 2z" />
    </svg>
  );
}

type CertificateContent = {
  titleLine: string;
  achievement: ReactNode;
  documentTitle: string;
};

function CertificateCard({
  titleLine,
  achievement,
  displayName,
}: {
  titleLine: string;
  achievement: ReactNode;
  displayName: string;
}) {
  return (
    <article className="certificate" aria-label="Certificate">
      <span className="corner corner-tl" aria-hidden />
      <span className="corner corner-tr" aria-hidden />
      <span className="corner corner-bl" aria-hidden />
      <span className="corner corner-br" aria-hidden />
      <div className="band" aria-hidden />
      <p className="brand">Learn Python</p>
      <p className="eyebrow">Certificate of completion</p>
      <h1 className="headline">{titleLine}</h1>
      <p className="awarded">Presented to</p>
      <div className="recipient-row">
        <span className="recipient">{displayName}</span>
      </div>
      <p className="achievement">{achievement}</p>
      <div className="meta">
        <div className="meta-block">
          Date
          <span>{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="meta-block">
          Course
          <span>Learn Python</span>
        </div>
        <div className="seal" title="Learn Python">
          <SealIcon />
        </div>
      </div>
    </article>
  );
}

function CertificateError({ message }: { message: string }) {
  return (
    <div className="error-state">
      <h1>Certificate not found</h1>
      <p>{message}</p>
      <Link className="back" to="/">
        Back to course
      </Link>
    </div>
  );
}

export function CertificatePage() {
  const [searchParams] = useSearchParams();
  const mode = useMemo((): CertMode => {
    const unitRaw = searchParams.get('unit');
    const courseRaw = searchParams.get('course');
    if (courseRaw === '1' || courseRaw === 'true') {
      return { type: 'course' };
    }
    if (unitRaw != null && unitRaw !== '') {
      const n = parseInt(unitRaw, 10);
      if (!Number.isNaN(n)) return { type: 'unit', unit: n };
    }
    return { type: 'invalid' };
  }, [searchParams]);

  const [nameInput, setNameInput] = useState(() => {
    try {
      return localStorage.getItem('cert-name') || '';
    } catch {
      return '';
    }
  });
  const [units, setUnits] = useState<CourseUnit[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (mode.type !== 'unit') return;
    let cancelled = false;
    loadCourseInfo()
      .then((info) => {
        if (!cancelled) setUnits(info.units);
      })
      .catch(() => {
        if (!cancelled) setLoadError('Could not load course data.');
      });
    return () => {
      cancelled = true;
    };
  }, [mode.type]);

  const displayName = nameInput.trim() || 'Learner';

  const content = useMemo((): CertificateContent | { error: string } | null => {
    if (mode.type === 'course') {
      return {
        titleLine: 'Course Complete',
        achievement: (
          <>
            for completing every unit in <strong>Learn Python</strong>. From first
            programs through classes.
          </>
        ),
        documentTitle: 'Course Certificate | Learn Python',
      };
    }
    if (mode.type === 'unit') {
      if (loadError) return { error: loadError };
      if (units === null) return null;
      const unit = units.find((u) => u.number === mode.unit);
      if (!unit) {
        return { error: `There is no Unit ${mode.unit} in this course.` };
      }
      return {
        titleLine: `Unit ${unit.number}`,
        achievement: (
          <>
            for completing{' '}
            <strong>
              Unit {unit.number}: {unit.title}
            </strong>{' '}
            in Learn Python.
          </>
        ),
        documentTitle: `Unit ${unit.number} Certificate | Learn Python`,
      };
    }
    return {
      error:
        'Open a certificate from the course page, or use ?unit=N or ?course=1.',
    };
  }, [mode, units, loadError]);

  const certPath =
    mode.type === 'course'
      ? '/certificate?course=1'
      : mode.type === 'unit'
        ? `/certificate?unit=${mode.unit}`
        : '/certificate';

  usePageMeta({
    title:
      content && !('error' in content)
        ? content.documentTitle.replace(/\s*\|\s*Learn Python$/, '')
        : 'Certificate',
    description: 'View or print a Learn Python course or unit completion certificate.',
    path: certPath,
    noIndex: true,
  });

  return (
    <div className="certificate-page">
      <div className="toolbar">
        <div className="toolbar-left">
          <Link className="back" to="/">
            ← Back to course
          </Link>
          <label className="name-field">
            Your name
            <input
              type="text"
              value={nameInput}
              onChange={(e) => {
                setNameInput(e.target.value);
                try {
                  localStorage.setItem('cert-name', e.target.value);
                } catch {
                }
              }}
              placeholder="Optional"
              maxLength={80}
              autoComplete="name"
            />
          </label>
        </div>
        <button type="button" className="print-btn" onClick={() => window.print()}>
          Print / Save PDF
        </button>
      </div>

      <div className="cert-wrap">
        {content === null ? null : 'error' in content ? (
          <CertificateError message={content.error} />
        ) : (
          <CertificateCard
            titleLine={content.titleLine}
            achievement={content.achievement}
            displayName={displayName}
          />
        )}
      </div>
    </div>
  );
}
