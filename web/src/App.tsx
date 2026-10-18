import { Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { CelebrateRoot } from './hooks/useCelebrate';
import { CertificatePage } from './pages/CertificatePage';
import { HomePage } from './pages/HomePage';
import { LessonPage } from './pages/LessonPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

export default function App() {
  return (
    <CelebrateRoot>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson" element={<LessonPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
        </Routes>
      </AppShell>
    </CelebrateRoot>
  );
}
