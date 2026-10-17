import type { CourseInfo } from '../types/courseInfo';

export async function loadCourseInfo(): Promise<CourseInfo> {
  const res = await fetch('/course-info.json');
  if (!res.ok) {
    throw new Error(`Failed to load course info (${res.status})`);
  }
  return res.json() as Promise<CourseInfo>;
}
