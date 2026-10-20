import type { LessonData } from '../types/lesson';

export async function loadLessonJson(unit: number, lesson: number): Promise<LessonData> {
  const res = await fetch(`/lessons/${unit}-${lesson}.json`);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} loading /lessons/${unit}-${lesson}.json`);
  }
  return (await res.json()) as LessonData;
}
