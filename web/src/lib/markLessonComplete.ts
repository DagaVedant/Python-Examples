import { markGuestLessonComplete } from '../hooks/useGuestProgress';
import { recordActivity } from '../hooks/useStreaks';
import { supabase } from './supabase';

/**
 * Persist lesson completion for guest (localStorage) or signed-in user (Supabase).
 * Dispatches `lesson-complete` when newly completed (guest path) or after a successful insert.
 * Always records streak activity on a new completion.
 */
export async function markLessonComplete(
  unit: number,
  lesson: number,
  opts?: { userId?: string | null },
): Promise<boolean> {
  const userId = opts?.userId;
  if (!userId) {
    const added = markGuestLessonComplete(unit, lesson);
    if (added) recordActivity();
    return added;
  }

  const { error } = await supabase.from('completions').insert({
    user_id: userId,
    unit,
    lesson,
  });

  if (error) {
    // Unique violation → already done
    if (error.code === '23505') return false;
    console.warn('Could not save completion', error.message);
    return false;
  }

  recordActivity();
  window.dispatchEvent(new CustomEvent('lesson-complete'));
  return true;
}
