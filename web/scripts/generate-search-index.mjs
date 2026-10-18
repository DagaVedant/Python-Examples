/**
 * Build-time search index: lesson titles from course-info.json
 * plus goals from each Unit N/lesson M/data.json.
 *
 * Usage: npm run generate-search-index  (from web/)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(webRoot, '..');
const courseInfoPath = path.join(webRoot, 'public', 'course-info.json');
const outPath = path.join(webRoot, 'public', 'search-index.json');

const courseInfo = JSON.parse(fs.readFileSync(courseInfoPath, 'utf8'));

const lessons = [];

for (const unit of courseInfo.units ?? []) {
  for (const lesson of unit.lessons ?? []) {
    const dataPath = path.join(
      repoRoot,
      `Unit ${unit.number}`,
      `lesson ${lesson.number}`,
      'data.json',
    );
    let goal = '';
    if (fs.existsSync(dataPath)) {
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      if (typeof data.goal === 'string') goal = data.goal;
    } else {
      console.warn(`Missing lesson data: ${dataPath}`);
    }
    lessons.push({
      unit: unit.number,
      lesson: lesson.number,
      title: lesson.title,
      goal,
    });
  }
}

fs.writeFileSync(outPath, `${JSON.stringify({ lessons }, null, 2)}\n`, 'utf8');
console.log(`Wrote ${lessons.length} lessons to ${path.relative(webRoot, outPath)}`);
