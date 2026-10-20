import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CelebrateRoot } from './hooks/useCelebrate';
import { AccountPage } from './pages/AccountPage';
import { CertificatePage } from './pages/CertificatePage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { HomePage } from './pages/HomePage';
import { LessonPage } from './pages/LessonPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
import { SignupPage } from './pages/SignupPage';
import { TermsPage } from './pages/TermsPage';

function OldLessonLink() {
  const [params] = useSearchParams();
  return <Navigate replace to={`/lesson/${Number(params.get('unit')) || 1}/${Number(params.get('lesson')) || 1}`} />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <CelebrateRoot>
        <AppShell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lesson" element={<OldLessonLink />} />
            <Route path="/lesson/:unit/:lesson" element={<LessonPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppShell>
      </CelebrateRoot>
    </ErrorBoundary>
  );
}
