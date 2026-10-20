import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const contentDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../content');
const course = JSON.parse(fs.readFileSync(path.join(contentDir, 'course.json'), 'utf8'));

const kind = (value) => (value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value);

let passed = 0;
const failures = [];

for (const unit of course.units) {
  for (const entry of unit.lessons) {
    const file = path.join(contentDir, `unit-${unit.number}`, `lesson-${entry.number}.json`);
    const label = path.relative(contentDir, file);
    const errors = [];

    let lesson = null;
    try {
      lesson = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (err) {
      errors.push(err.code === 'ENOENT' ? 'file missing' : `invalid JSON: ${err.message}`);
    }

    if (lesson) {
      const strings = ['format', 'title', 'goal', 'idea'];
      for (const key of strings) {
        if (typeof lesson[key] !== 'string' || !lesson[key]) errors.push(`${key}: expected non-empty string, got ${kind(lesson[key])}`);
      }
      if (lesson.unit !== unit.number) errors.push(`unit: expected ${unit.number}, got ${lesson.unit}`);
      if (lesson.lesson !== entry.number) errors.push(`lesson: expected ${entry.number}, got ${lesson.lesson}`);
      if (lesson.title !== entry.title) errors.push(`title: "${lesson.title}" does not match course.json "${entry.title}"`);

      if (!Array.isArray(lesson.learn) || lesson.learn.some((item) => typeof item !== 'string')) {
        errors.push('learn: expected string[]');
      }

      const blocks = [['code', lesson.code]];
      if (lesson.code2 !== undefined) blocks.push(['code2', lesson.code2]);
      for (const [name, block] of blocks) {
        if (!block || typeof block !== 'object') {
          errors.push(`${name}: expected object, got ${kind(block)}`);
          continue;
        }
        if (typeof block.filename !== 'string') errors.push(`${name}.filename: expected string`);
        if (!Array.isArray(block.lines) || block.lines.some((line) => typeof line !== 'string')) {
          errors.push(`${name}.lines: expected string[]`);
        }
        if (block.output !== undefined && (!Array.isArray(block.output) || block.output.some((line) => typeof line !== 'string'))) {
          errors.push(`${name}.output: expected string[]`);
        }
      }

      if (!Array.isArray(lesson.practice) || lesson.practice.length === 0) {
        errors.push('practice: expected non-empty array');
      } else {
        lesson.practice.forEach((task, i) => {
          if (typeof task?.text !== 'string') errors.push(`practice[${i}].text: expected string`);
          if (typeof task?.starter !== 'string') errors.push(`practice[${i}].starter: expected string`);
        });
      }

      const quiz = Array.isArray(lesson.quiz) ? lesson.quiz : lesson.quiz ? [lesson.quiz] : [];
      if (quiz.length === 0) errors.push('quiz: expected at least one question');
      quiz.forEach((item, i) => {
        if (typeof item?.question !== 'string') errors.push(`quiz[${i}].question: expected string`);
        if (typeof item?.correct !== 'string') errors.push(`quiz[${i}].correct: expected string`);
        if (typeof item?.wrong !== 'string') errors.push(`quiz[${i}].wrong: expected string`);
        if (!Array.isArray(item?.options) || item.options.length === 0) {
          errors.push(`quiz[${i}].options: expected non-empty array`);
        } else {
          const right = item.options.filter((option) => option?.correct === true).length;
          if (right !== 1) errors.push(`quiz[${i}].options: expected exactly one correct option, found ${right}`);
        }
      });

      if (lesson.project !== undefined && typeof lesson.project?.desc !== 'string') {
        errors.push('project.desc: expected string');
      }

      const raw = fs.readFileSync(file, 'utf8');
      const bad = [...raw].filter((ch) => ch.charCodeAt(0) > 127);
      if (bad.length > 0) {
        errors.push(`non-ASCII characters: ${[...new Set(bad)].map((ch) => `U+${ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`).join(', ')}`);
      }
    }

    if (errors.length > 0) failures.push({ label, errors });
    else passed += 1;
  }
}

console.log(`Checked ${passed + failures.length} lessons: ${passed} passed, ${failures.length} failed`);
for (const failure of failures) {
  console.log(`FAIL ${failure.label}`);
  for (const error of failure.errors) console.log(`  - ${error}`);
}
process.exit(failures.length > 0 ? 1 : 0);
