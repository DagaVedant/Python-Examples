/**
 * Validate every Unit N/lesson M/data.json against lesson shape rules.
 * Usage: npm run check:lessons  (from web/)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '../..');

const UNIT_DIR_RE = /^Unit (\d+)$/;
const LESSON_DIR_RE = /^lesson (\d+)$/;

/** @typedef {{ file: string, reasons: string[] }} FileResult */

/**
 * @param {unknown} value
 * @param {string} label
 * @returns {string[]}
 */
function expectString(value, label) {
  if (typeof value !== 'string') {
    return [`${label}: expected string, got ${typeOf(value)}`];
  }
  return [];
}

/**
 * @param {unknown} value
 * @param {string} label
 * @returns {string[]}
 */
function expectNumber(value, label) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return [`${label}: expected number, got ${typeOf(value)}`];
  }
  return [];
}

/**
 * @param {unknown} value
 * @param {string} label
 * @returns {string[]}
 */
function expectStringArray(value, label) {
  if (!Array.isArray(value)) {
    return [`${label}: expected string[], got ${typeOf(value)}`];
  }
  /** @type {string[]} */
  const errors = [];
  value.forEach((item, i) => {
    if (typeof item !== 'string') {
      errors.push(`${label}[${i}]: expected string, got ${typeOf(item)}`);
    }
  });
  return errors;
}

/** @param {unknown} value */
function typeOf(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

/**
 * Recursively find non-ASCII characters in string values.
 * @param {unknown} value
 * @param {string} pathLabel
 * @returns {string[]}
 */
function findNonAscii(value, pathLabel) {
  /** @type {string[]} */
  const errors = [];
  if (typeof value === 'string') {
    for (let i = 0; i < value.length; i++) {
      const code = value.charCodeAt(i);
      if (code > 127) {
        const ch = value[i];
        errors.push(
          `${pathLabel}: non-ASCII character U+${code.toString(16).toUpperCase().padStart(4, '0')} (${JSON.stringify(ch)}) at index ${i}`,
        );
        // One report per string is enough for readability; still list each offending code point.
        // Continue so authors see every bad character in this string.
      }
    }
    return errors;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => {
      errors.push(...findNonAscii(item, `${pathLabel}[${i}]`));
    });
    return errors;
  }
  if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      errors.push(...findNonAscii(child, pathLabel ? `${pathLabel}.${key}` : key));
    }
  }
  return errors;
}

/**
 * @param {unknown} code
 * @param {string} label
 * @returns {string[]}
 */
function validateCodeBlock(code, label) {
  if (!code || typeof code !== 'object' || Array.isArray(code)) {
    return [`${label}: expected object, got ${typeOf(code)}`];
  }
  /** @type {Record<string, unknown>} */
  const obj = /** @type {Record<string, unknown>} */ (code);
  /** @type {string[]} */
  const errors = [];
  errors.push(...expectString(obj.filename, `${label}.filename`));
  errors.push(...expectStringArray(obj.lines, `${label}.lines`));
  if (obj.output !== undefined) {
    errors.push(...expectStringArray(obj.output, `${label}.output`));
  }
  return errors;
}

/**
 * @param {unknown} task
 * @param {string} label
 * @returns {string[]}
 */
function validatePracticeTask(task, label) {
  if (!task || typeof task !== 'object' || Array.isArray(task)) {
    return [`${label}: expected object, got ${typeOf(task)}`];
  }
  /** @type {Record<string, unknown>} */
  const obj = /** @type {Record<string, unknown>} */ (task);
  /** @type {string[]} */
  const errors = [];
  errors.push(...expectString(obj.text, `${label}.text`));
  errors.push(...expectString(obj.starter, `${label}.starter`));
  for (const optional of ['hint', 'starterTip', 'gradingNote']) {
    if (obj[optional] !== undefined) {
      errors.push(...expectString(obj[optional], `${label}.${optional}`));
    }
  }
  return errors;
}

/**
 * @param {unknown} quizItem
 * @param {string} label
 * @returns {string[]}
 */
function validateQuizItem(quizItem, label) {
  if (!quizItem || typeof quizItem !== 'object' || Array.isArray(quizItem)) {
    return [`${label}: expected object, got ${typeOf(quizItem)}`];
  }
  /** @type {Record<string, unknown>} */
  const obj = /** @type {Record<string, unknown>} */ (quizItem);
  /** @type {string[]} */
  const errors = [];
  errors.push(...expectString(obj.question, `${label}.question`));
  errors.push(...expectString(obj.correct, `${label}.correct`));
  errors.push(...expectString(obj.wrong, `${label}.wrong`));

  if (!Array.isArray(obj.options)) {
    errors.push(`${label}.options: expected array, got ${typeOf(obj.options)}`);
    return errors;
  }
  if (obj.options.length === 0) {
    errors.push(`${label}.options: must not be empty`);
  }

  let correctCount = 0;
  obj.options.forEach((opt, i) => {
    const optLabel = `${label}.options[${i}]`;
    if (!opt || typeof opt !== 'object' || Array.isArray(opt)) {
      errors.push(`${optLabel}: expected object, got ${typeOf(opt)}`);
      return;
    }
    /** @type {Record<string, unknown>} */
    const option = /** @type {Record<string, unknown>} */ (opt);
    errors.push(...expectString(option.text, `${optLabel}.text`));
    if (typeof option.correct !== 'boolean') {
      errors.push(`${optLabel}.correct: expected boolean, got ${typeOf(option.correct)}`);
    } else if (option.correct === true) {
      correctCount += 1;
    }
  });

  if (correctCount !== 1) {
    errors.push(
      `${label}.options: expected exactly one option with correct:true, found ${correctCount}`,
    );
  }
  return errors;
}

/**
 * @param {unknown} data
 * @returns {string[]}
 */
function validateLesson(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return [`root: expected object, got ${typeOf(data)}`];
  }
  /** @type {Record<string, unknown>} */
  const lesson = /** @type {Record<string, unknown>} */ (data);
  /** @type {string[]} */
  const errors = [];

  // Required top-level fields (minimum set + types from lesson.ts)
  const required = [
    'format',
    'unit',
    'lesson',
    'title',
    'goal',
    'learn',
    'idea',
    'code',
    'practice',
    'quiz',
  ];
  for (const key of required) {
    if (!(key in lesson) || lesson[key] === undefined || lesson[key] === null) {
      errors.push(`missing required field: ${key}`);
    }
  }

  if (lesson.format !== undefined && lesson.format !== null) {
    errors.push(...expectString(lesson.format, 'format'));
  }
  if (lesson.unit !== undefined && lesson.unit !== null) {
    errors.push(...expectNumber(lesson.unit, 'unit'));
  }
  if (lesson.lesson !== undefined && lesson.lesson !== null) {
    errors.push(...expectNumber(lesson.lesson, 'lesson'));
  }
  if (lesson.title !== undefined && lesson.title !== null) {
    errors.push(...expectString(lesson.title, 'title'));
  }
  if (lesson.goal !== undefined && lesson.goal !== null) {
    errors.push(...expectString(lesson.goal, 'goal'));
  }
  if (lesson.idea !== undefined && lesson.idea !== null) {
    errors.push(...expectString(lesson.idea, 'idea'));
  }
  if (lesson.learn !== undefined && lesson.learn !== null) {
    errors.push(...expectStringArray(lesson.learn, 'learn'));
  }

  // Optional fields that exist on LessonData with defined types
  if (lesson.unitLessons !== undefined) {
    errors.push(...expectNumber(lesson.unitLessons, 'unitLessons'));
  }
  if (lesson.unitTitle !== undefined) {
    errors.push(...expectString(lesson.unitTitle, 'unitTitle'));
  }
  if (lesson.readTime !== undefined) {
    errors.push(...expectNumber(lesson.readTime, 'readTime'));
  }
  if (lesson.changeOneLine !== undefined) {
    errors.push(...expectString(lesson.changeOneLine, 'changeOneLine'));
  }

  if (lesson.code !== undefined && lesson.code !== null) {
    errors.push(...validateCodeBlock(lesson.code, 'code'));
  }
  if (lesson.code2 !== undefined) {
    errors.push(...validateCodeBlock(lesson.code2, 'code2'));
  }

  if (lesson.practice !== undefined && lesson.practice !== null) {
    if (!Array.isArray(lesson.practice)) {
      errors.push(`practice: expected array, got ${typeOf(lesson.practice)}`);
    } else {
      if (lesson.practice.length === 0) {
        errors.push('practice: must not be empty');
      }
      lesson.practice.forEach((task, i) => {
        errors.push(...validatePracticeTask(task, `practice[${i}]`));
      });
    }
  }

  if (lesson.quiz !== undefined && lesson.quiz !== null) {
    const quizItems = Array.isArray(lesson.quiz) ? lesson.quiz : [lesson.quiz];
    if (quizItems.length === 0) {
      errors.push('quiz: must not be empty');
    }
    quizItems.forEach((item, i) => {
      const label = Array.isArray(lesson.quiz) ? `quiz[${i}]` : 'quiz';
      errors.push(...validateQuizItem(item, label));
    });
  }

  if (lesson.project !== undefined) {
    if (!lesson.project || typeof lesson.project !== 'object' || Array.isArray(lesson.project)) {
      errors.push(`project: expected object, got ${typeOf(lesson.project)}`);
    } else {
      /** @type {Record<string, unknown>} */
      const project = /** @type {Record<string, unknown>} */ (lesson.project);
      errors.push(...expectString(project.desc, 'project.desc'));
      for (const optional of ['title', 'starter', 'gradingNote']) {
        if (project[optional] !== undefined) {
          errors.push(...expectString(project[optional], `project.${optional}`));
        }
      }
    }
  }

  if (lesson.fakeFiles !== undefined) {
    if (
      !lesson.fakeFiles ||
      typeof lesson.fakeFiles !== 'object' ||
      Array.isArray(lesson.fakeFiles)
    ) {
      errors.push(`fakeFiles: expected object, got ${typeOf(lesson.fakeFiles)}`);
    } else {
      for (const [name, content] of Object.entries(
        /** @type {Record<string, unknown>} */ (lesson.fakeFiles),
      )) {
        errors.push(...expectString(content, `fakeFiles.${name}`));
      }
    }
  }

  errors.push(...findNonAscii(lesson, ''));
  return errors;
}

/**
 * @returns {string[]}
 */
function discoverLessonFiles() {
  /** @type {string[]} */
  const files = [];
  let entries;
  try {
    entries = fs.readdirSync(REPO_ROOT, { withFileTypes: true });
  } catch (err) {
    console.error(`Cannot read repo root: ${REPO_ROOT}`);
    console.error(err);
    process.exit(1);
  }

  const unitDirs = entries
    .filter((e) => e.isDirectory() && UNIT_DIR_RE.test(e.name))
    .sort((a, b) => {
      const na = Number(a.name.match(UNIT_DIR_RE)?.[1] ?? 0);
      const nb = Number(b.name.match(UNIT_DIR_RE)?.[1] ?? 0);
      return na - nb;
    });

  for (const unitDir of unitDirs) {
    const unitPath = path.join(REPO_ROOT, unitDir.name);
    const lessonEntries = fs.readdirSync(unitPath, { withFileTypes: true });
    const lessonDirs = lessonEntries
      .filter((e) => e.isDirectory() && LESSON_DIR_RE.test(e.name))
      .sort((a, b) => {
        const na = Number(a.name.match(LESSON_DIR_RE)?.[1] ?? 0);
        const nb = Number(b.name.match(LESSON_DIR_RE)?.[1] ?? 0);
        return na - nb;
      });

    for (const lessonDir of lessonDirs) {
      const dataPath = path.join(unitPath, lessonDir.name, 'data.json');
      if (fs.existsSync(dataPath)) {
        files.push(dataPath);
      } else {
        files.push(dataPath); // still report missing file as a failure path
      }
    }
  }
  return files;
}

function main() {
  const files = discoverLessonFiles();
  if (files.length === 0) {
    console.error(`No Unit N/lesson M directories found under ${REPO_ROOT}`);
    process.exit(1);
  }

  let passed = 0;
  let failed = 0;
  /** @type {FileResult[]} */
  const failures = [];

  for (const filePath of files) {
    const rel = path.relative(REPO_ROOT, filePath);
    if (!fs.existsSync(filePath)) {
      failed += 1;
      failures.push({ file: rel, reasons: ['file missing: expected data.json'] });
      continue;
    }

    let raw;
    try {
      raw = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      failed += 1;
      failures.push({
        file: rel,
        reasons: [`cannot read file: ${err instanceof Error ? err.message : String(err)}`],
      });
      continue;
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      failed += 1;
      failures.push({
        file: rel,
        reasons: [`invalid JSON: ${err instanceof Error ? err.message : String(err)}`],
      });
      continue;
    }

    const reasons = validateLesson(data);
    if (reasons.length > 0) {
      failed += 1;
      failures.push({ file: rel, reasons });
    } else {
      passed += 1;
    }
  }

  console.log(`Checked ${files.length} lesson data.json file(s) under ${REPO_ROOT}`);
  console.log(`Pass: ${passed}`);
  console.log(`Fail: ${failed}`);

  if (failures.length > 0) {
    console.log('');
    for (const { file, reasons } of failures) {
      console.log(`FAIL  ${file}`);
      for (const reason of reasons) {
        console.log(`  - ${reason}`);
      }
    }
    process.exit(1);
  }

  console.log('All lessons passed.');
  process.exit(0);
}

main();
