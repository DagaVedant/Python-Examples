import { Component, type ErrorInfo, type ReactNode } from 'react';
import { GENERIC_RENDER_MESSAGE } from '../lib/serviceMessages';

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('React render error', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <main className="error-fallback">
          <h1>Something went wrong</h1>
          <p>{GENERIC_RENDER_MESSAGE}</p>
          <button type="button" className="error-fallback-btn" onClick={() => window.location.reload()}>
            Refresh page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
