import { useCallback, useEffect, useState } from 'react';
import { looksLikeNetworkError } from '../lib/serviceMessages';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../lib/supabase';

export function useSupabaseStatus() {
  const [available, setAvailable] = useState(true);
  const [checked, setChecked] = useState(false);

  const check = useCallback(async () => {
    try {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 8000);
      const res = await fetch(`${SUPABASE_URL}/auth/v1/health`, {
        method: 'GET',
        signal: controller.signal,
        headers: { apikey: SUPABASE_ANON_KEY },
      }).finally(() => window.clearTimeout(timer));

      // Any HTTP response means the host answered.
      setAvailable(res.status > 0);
    } catch (err) {
      if (!navigator.onLine || looksLikeNetworkError(err)) {
        setAvailable(false);
      } else {
        setAvailable(false);
      }
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
