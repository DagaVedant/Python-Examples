/** Base URL for auth email links (confirm, reset). */
export function authSiteOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'https://pythonexamples.vercel.app';
}

export function emailConfirmRedirect(): string {
  return `${authSiteOrigin()}/login`;
}

export function passwordResetRedirect(): string {
  return `${authSiteOrigin()}/reset-password`;
}
