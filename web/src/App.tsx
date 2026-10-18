import { Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CelebrateRoot } from './hooks/useCelebrate';
import { AccountPage } from './pages/AccountPage';
import { CertificatePage } from './pages/CertificatePage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { HomePage } from './pages/HomePage';
import { LessonPage } from './pages/LessonPage';
import { LoginPage } from './pages/LoginPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
import { SignupPage } from './pages/SignupPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <ErrorBoundary>
      <CelebrateRoot>
        <AppShell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lesson" element={<LessonPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </AppShell>
      </CelebrateRoot>
    </ErrorBoundary>
  );
}
