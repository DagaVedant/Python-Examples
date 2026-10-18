import type { CourseInfo, CourseUnit } from '../types/courseInfo';

export type LessonNavLink = {
  unit: number;
  lesson: number;
  title: string;
};

type FlatLesson = LessonNavLink;

function flatten(units: CourseUnit[]): FlatLesson[] {
  const out: FlatLesson[] = [];
  for (const unit of units) {
    for (const lesson of unit.lessons) {
      out.push({ unit: unit.number, lesson: lesson.number, title: lesson.title });
    }
  }
  return out;
}

export function getLessonNeighbors(
  course: CourseInfo,
  unit: number,
  lesson: number,
): { prev: LessonNavLink | null; next: LessonNavLink | null } {
  const flat = flatten(course.units);
  const index = flat.findIndex((item) => item.unit === unit && item.lesson === lesson);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: index > 0 ? flat[index - 1] : null,
    next: index < flat.length - 1 ? flat[index + 1] : null,
  };
}
