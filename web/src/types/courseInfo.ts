export type CourseLesson = {
  number: number;
  title: string;
};

export type CourseUnit = {
  number: number;
  title: string;
  lessons: CourseLesson[];
};

export type CourseInfo = {
  units: CourseUnit[];
};
