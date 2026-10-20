import { supabase } from './supabase';

export const AI_CHECKS_PER_DAY = 20;

export type AiGradeResult = {
  passed: boolean;
  feedback: string;
  hint: string;
  remaining: number;
};

export type AiGradeError = {
  kind: 'busy' | 'unauthorized' | 'invalid';
  message: string;
  remaining?: number;
};

const BUSY_MESSAGE =
  'AI feedback is busy right now. Try again later. Your lesson still works without it.';

type GradePracticePayload = {
  task: string;
  code: string;
  output: string;
  lessonTopic?: string;
  gradingNote?: string | null;
  unit: number;
  lesson: number;
  taskIndex: number;
};

export async function requestAiPracticeGrade(
  payload: GradePracticePayload,
  accessToken: string,
): Promise<{ ok: true; result: AiGradeResult } | { ok: false; error: AiGradeError }> {
  const { data, error } = await supabase.functions.invoke('grade-practice', {
    headers: { Authorization: `Bearer ${accessToken}` },
    body: {
      ...payload,
      task: payload.task.replace(/<[^>]+>/g, ''),
    },
  });

  const body =
    data && typeof data === 'object'
      ? (data as Record<string, unknown>)
      : null;

  if (error || (body && body.error)) {
    const code = body?.error != null ? String(body.error) : '';
    if (code === 'unauthorized') {
      return {
        ok: false,
        error: {
          kind: 'unauthorized',
          message: 'Sign in again to use AI feedback.',
        },
      };
    }
    const remaining =
      typeof body?.remaining === 'number' ? body.remaining : undefined;
    return {
      ok: false,
      error: { kind: 'busy', message: BUSY_MESSAGE, remaining },
    };
  }

  if (
    !body ||
    typeof body.passed !== 'boolean' ||
    typeof body.feedback !== 'string'
  ) {
    return {
      ok: false,
      error: { kind: 'busy', message: BUSY_MESSAGE },
    };
  }

  const remaining =
    typeof body.remaining === 'number' ? body.remaining : AI_CHECKS_PER_DAY;

  return {
    ok: true,
    result: {
      passed: body.passed,
      feedback: body.feedback,
      hint: typeof body.hint === 'string' ? body.hint : '',
      remaining,
    },
  };
}
