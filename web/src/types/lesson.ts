export type QuizOption = {
  text: string;
  correct: boolean;
};

export type QuizItem = {
  question: string;
  options: QuizOption[];
  correct: string;
  wrong: string;
};

export type PracticeTask = {
  text: string;
  hint?: string;
  starterTip?: string;
  starter: string;
  gradingNote?: string;
};

export type CodeBlock = {
  filename: string;
  lines: string[];
  output?: string[];
};

export type ProjectSpec = {
  title?: string;
  desc: string;
  starter?: string;
  gradingNote?: string;
};

export type LessonData = {
  format: 'v2' | string;
  unit: number;
  lesson: number;
  unitLessons: number;
  unitTitle: string;
  title: string;
  readTime?: number;
  goal: string;
  learn: string[];
  idea: string;
  code: CodeBlock;
  changeOneLine?: string;
  code2?: CodeBlock;
  practice: PracticeTask[];
  quiz: QuizItem | QuizItem[];
  project?: ProjectSpec;
  fakeFiles?: Record<string, string>;
};
