/** Friendly ASCII copy for common failure modes. */

export const OFFLINE_MESSAGE =
  'You appear to be offline. Lessons you already opened may still work. Reconnect to load new content or sync progress.';

export const SUPABASE_DOWN_MESSAGE =
  'Account services are temporarily unavailable. You can keep learning as a guest; saved progress and sign-in will work again when the service is back.';

export const PYODIDE_LOAD_MESSAGE =
  'Python could not load in this browser. Check your connection and refresh the page. You can still read the lesson; Run needs the Python runtime.';

export const COURSE_LOAD_MESSAGE =
  'Could not load the course list. Check your connection and try again.';

export const GENERIC_RENDER_MESSAGE =
  'Something went wrong on this page. Try refreshing. Your progress on this device is usually still saved.';

export function isLikelyOffline(): boolean {
  return typeof navigator !== 'undefined' && navigator.onLine === false;
}

export function looksLikeNetworkError(err: unknown): boolean {
  if (err instanceof TypeError) return true;
  const msg = err instanceof Error ? err.message : String(err ?? '');
  return /failed to fetch|network|offline|load failed|timeout/i.test(msg);
}
