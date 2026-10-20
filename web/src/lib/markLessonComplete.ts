import { getGuestCompletions, markGuestLessonComplete } from '../hooks/useGuestProgress';
import { recordActivity } from '../hooks/useStreaks';
import { supabase } from './supabase';

export async function mergeGuestCompletions(userId: string): Promise<void> {
  const guest = getGuestCompletions();
  if (guest.length === 0) return;

  const rows: { user_id: string; unit: number; lesson: number }[] = [];
  for (const key of guest) {
    const parts = key.split('-');
    if (parts.length !== 2) continue;
    const unit = Number(parts[0]);
    const lesson = Number(parts[1]);
    if (!Number.isInteger(unit) || !Number.isInteger(lesson) || unit < 1 || lesson < 1) {
      continue;
    }
    rows.push({ user_id: userId, unit, lesson });
  }
  if (rows.length === 0) return;

  const { error } = await supabase.from('completions').upsert(rows, {
    onConflict: 'user_id,unit,lesson',
    ignoreDuplicates: true,
  });

  if (!error) return;

  for (const row of rows) {
    const { error: insertError } = await supabase.from('completions').insert(row);
    if (insertError && insertError.code !== '23505') {
      console.warn('Could not merge guest completion', insertError.message);
    }
  }
}

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
    if (error.code === '23505') return false;
    console.warn('Could not save completion', error.message);
    return false;
  }

  recordActivity();
  window.dispatchEvent(new CustomEvent('lesson-complete'));
  return true;
}
