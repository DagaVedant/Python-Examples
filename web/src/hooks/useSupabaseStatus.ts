import { useCallback, useEffect, useState } from 'react';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../lib/supabase';

export function useSupabaseStatus() {
  const [available, setAvailable] = useState(true);
  const [checked, setChecked] = useState(false);

  const check = useCallback(async () => {
    try {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 8000);
      await fetch(`${SUPABASE_URL}/auth/v1/health`, {
        method: 'GET',
        signal: controller.signal,
        headers: { apikey: SUPABASE_ANON_KEY },
      }).finally(() => window.clearTimeout(timer));

      setAvailable(true);
    } catch {
      setAvailable(false);
    } finally {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    void check();
    const id = window.setInterval(() => void check(), 60_000);
    const onOnline = () => void check();
    window.addEventListener('online', onOnline);
    return () => {
      window.clearInterval(id);
      window.removeEventListener('online', onOnline);
    };
  }, [check]);

  return { available, checked, recheck: check };
}
