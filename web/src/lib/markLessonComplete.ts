import { markGuestLessonComplete } from '../hooks/useGuestProgress';
import { supabase } from './supabase';

/**
 * Persist lesson completion for guest (localStorage) or signed-in user (Supabase).
 * Dispatches `lesson-complete` when newly completed (guest path) or after a successful insert.
 */
export async function markLessonComplete(
  unit: number,
  lesson: number,
  opts?: { userId?: string | null },
): Promise<boolean> {
  const userId = opts?.userId;
  if (!userId) {
    return markGuestLessonComplete(unit, lesson);
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

  window.dispatchEvent(new CustomEvent('lesson-complete'));
  return true;
}
