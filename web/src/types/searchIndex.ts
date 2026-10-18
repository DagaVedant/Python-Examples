export type SearchLesson = {
  unit: number;
  lesson: number;
  title: string;
  goal: string;
};

export type SearchIndex = {
  lessons: SearchLesson[];
};
