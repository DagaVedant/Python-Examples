import { useCallback, useEffect, useRef, useState } from 'react';
import { getGuestCompletions, lessonCompletionKey } from './useGuestProgress';
import { useAuth } from './useAuth';
import { mergeGuestCompletions } from '../lib/markLessonComplete';
import { supabase } from '../lib/supabase';

/** Merged guest + signed-in completion keys (`"unit-lesson"`). */
export function useCompletions() {
  const { user, loading: authLoading } = useAuth();
  const [completions, setCompletions] = useState<string[]>(() => getGuestCompletions());
  const [loading, setLoading] = useState(true);
  /** Tracks which user id already had guest progress merged this session. */
  const mergedUserIdRef = useRef<string | null>(null);

  const refresh = useCallback(async () => {
    const guest = getGuestCompletions();
    if (!user) {
      mergedUserIdRef.current = null;
      setCompletions(guest);
      setLoading(false);
      return;
    }

    if (mergedUserIdRef.current !== user.id) {
      await mergeGuestCompletions(user.id);
      mergedUserIdRef.current = user.id;
    }

    const { data, error } = await supabase
      .from('completions')
      .select('unit, lesson')
      .eq('user_id', user.id);

    if (error || !data) {
      setCompletions(guest);
      setLoading(false);
      return;
    }

    const remote = data.map((row) => lessonCompletionKey(Number(row.unit), Number(row.lesson)));
    setCompletions([...new Set([...guest, ...remote])]);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (authLoading) return;
    void refresh();
  }, [authLoading, refresh]);

  useEffect(() => {
    const onLessonComplete = () => {
      void refresh();
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'guest-completions' || e.key === null) void refresh();
    };
    window.addEventListener('lesson-complete', onLessonComplete);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('lesson-complete', onLessonComplete);
      window.removeEventListener('storage', onStorage);
    };
  }, [refresh]);

  const isLessonComplete = useCallback(
    (unit: number, lesson: number) => completions.includes(lessonCompletionKey(unit, lesson)),
    [completions],
  );

  return { completions, loading, refresh, isLessonComplete, user };
}
