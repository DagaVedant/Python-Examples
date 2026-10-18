import { createClient } from '@supabase/supabase-js';

/** Public Supabase anon key (safe in the browser). */
const SUPABASE_URL = 'https://udzpwekkpedmtudcsyve.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkenB3ZWtrcGVkbXR1ZGNzeXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMzAzMjYsImV4cCI6MjA5NjYwNjMyNn0.xaMqyzNabeeE7bYVbAVwz8HCFIwQrGczF9x1FrXJv-A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
