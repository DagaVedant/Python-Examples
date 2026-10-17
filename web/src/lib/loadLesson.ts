import type { LessonData } from '../types/lesson';

/** Load lesson JSON from Vite public/lessons/{unit}-{lesson}.json */
export async function loadLessonJson(unit: number, lesson: number): Promise<LessonData> {
  const res = await fetch(`/lessons/${unit}-${lesson}.json`);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} loading /lessons/${unit}-${lesson}.json`);
  }
  return (await res.json()) as LessonData;
}
