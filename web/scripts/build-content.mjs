import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = path.join(webRoot, '..', 'content');
const publicDir = path.join(webRoot, 'public');
const site = 'https://pythonexamples.vercel.app';

const course = JSON.parse(fs.readFileSync(path.join(contentDir, 'course.json'), 'utf8'));

fs.rmSync(path.join(publicDir, 'lessons'), { recursive: true, force: true });
fs.mkdirSync(path.join(publicDir, 'lessons'), { recursive: true });
fs.writeFileSync(path.join(publicDir, 'course-info.json'), JSON.stringify(course));

const searchLessons = [];
const today = new Date().toISOString().slice(0, 10);
const urls = [
  ['/', '1.0'],
  ['/login', '0.4'],
  ['/signup', '0.4'],
  ['/privacy', '0.3'],
  ['/terms', '0.3'],
];

for (const unit of course.units) {
  for (const lesson of unit.lessons) {
    const file = path.join(contentDir, `unit-${unit.number}`, `lesson-${lesson.number}.json`);
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    fs.writeFileSync(
      path.join(publicDir, 'lessons', `${unit.number}-${lesson.number}.json`),
      JSON.stringify(data),
    );
    searchLessons.push({
      unit: unit.number,
      lesson: lesson.number,
      title: lesson.title,
      goal: data.goal ?? '',
    });
    urls.push([`/lesson/${unit.number}/${lesson.number}`, '0.8']);
  }
}

fs.writeFileSync(path.join(publicDir, 'search-index.json'), JSON.stringify({ lessons: searchLessons }));

const entries = urls
  .map(
    ([loc, priority]) =>
      `  <url>\n    <loc>${site}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join('\n');
fs.writeFileSync(
  path.join(publicDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
);
fs.writeFileSync(
  path.join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /account\nDisallow: /reset-password\nDisallow: /certificate\n\nSitemap: ${site}/sitemap.xml\n`,
);

console.log(`Built content for ${searchLessons.length} lessons`);
