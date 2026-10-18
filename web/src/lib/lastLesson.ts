export const LAST_LESSON_KEY = 'last-lesson';

export type LastLesson = {
  unit: number;
  lesson: number;
  title: string;
};

export const DEFAULT_LAST_LESSON: LastLesson = {
  unit: 1,
  lesson: 1,
  title: 'What is a Program',
};

export function recordLastLesson(unit: number, lesson: number, title: string): void {
  localStorage.setItem(
    LAST_LESSON_KEY,
    JSON.stringify({
      unit: Number(unit),
      lesson: Number(lesson),
      title: String(title || ''),
    }),
  );
}

export function getLastLesson(): LastLesson {
  try {
    const raw = localStorage.getItem(LAST_LESSON_KEY);
    if (!raw) return DEFAULT_LAST_LESSON;
    const data = JSON.parse(raw) as Partial<LastLesson>;
    if (!data || data.unit == null || data.lesson == null) return DEFAULT_LAST_LESSON;
    return {
      unit: Number(data.unit),
      lesson: Number(data.lesson),
      title: String(data.title || DEFAULT_LAST_LESSON.title),
    };
  } catch {
    return DEFAULT_LAST_LESSON;
  }
}
