import { createClient } from '@supabase/supabase-js';

/** Public Supabase config, set as VITE_ env vars (see .env.example). The anon key is safe in the browser. */
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!url || !anonKey) {
  throw new Error(
    'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Copy web/.env.example to web/.env.local and fill both in.',
  );
}

export const SUPABASE_URL: string = url;
export const SUPABASE_ANON_KEY: string = anonKey;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
