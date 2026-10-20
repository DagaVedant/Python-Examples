import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(webRoot, 'dist');
const site = 'https://pythonexamples.vercel.app';
const escapes = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const esc = (text) => text.replace(/[&<>]/g, (c) => escapes[c]);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const course = JSON.parse(fs.readFileSync(path.join(webRoot, 'public', 'course-info.json'), 'utf8'));

const flat = [];
for (const unit of course.units) {
  for (const lesson of unit.lessons) {
    flat.push({ unit: unit.number, unitTitle: unit.title, lesson: lesson.number, title: lesson.title });
  }
}

const courseLd = {
  '@type': 'Course',
  name: 'Learn Python',
  description: 'A free beginner Python course with 110 short lessons that run in your browser.',
  url: `${site}/`,
  isAccessibleForFree: true,
  provider: { '@type': 'Organization', name: 'Learn Python', url: `${site}/` },
};

const homeBody = `<main style="max-width:48rem;margin:0 auto;padding:2rem 1rem;font-family:system-ui,sans-serif">
<h1>Learn Python</h1>
<p>A free beginner Python course that runs in your browser. ${flat.length} short lessons across ${course.units.length} units, each with a code editor, a quiz and practice tasks. No install, no sign-up needed.</p>
${course.units
  .map(
    (unit) =>
      `<h2>Unit ${unit.number}: ${esc(unit.title)}</h2>\n<ol>\n${unit.lessons
        .map(
          (lesson) =>
            `<li><a href="/lesson/${unit.number}/${lesson.number}">${esc(lesson.title)}</a></li>`,
        )
        .join('\n')}\n</ol>`,
  )
  .join('\n')}
</main>`;

{
  const title = 'Learn Python | Free beginner course in the browser';
  const description = 'A free beginner Python course with 110 short lessons. Write and run real Python in your browser, with quizzes and practice tasks. No install needed.';
  const url = `${site}/`;
  const jsonLd = { '@context': 'https://schema.org', ...courseLd };
  const t = esc(title).replace(/"/g, '&quot;');
  const d = esc(description).replace(/"/g, '&quot;');
  fs.writeFileSync(
    path.join(distDir, 'index.html'),
    template
      .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
      .replace(/(<meta name="description" content=")[^"]*"/, `$1${d}"`)
      .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
      .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${t}"`)
      .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${d}"`)
      .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
      .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${t}"`)
      .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${d}"`)
      .replace(
        '</head>',
        `    <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>\n  </head>`,
      )
      .replace('<div id="root"></div>', `<div id="root">${homeBody}</div>`),
  );
}

for (let i = 0; i < flat.length; i++) {
  const item = flat[i];
  const data = JSON.parse(
    fs.readFileSync(path.join(webRoot, 'public', 'lessons', `${item.unit}-${item.lesson}.json`), 'utf8'),
  );
  const prev = flat[i - 1];
  const next = flat[i + 1];
  const url = `${site}/lesson/${item.unit}/${item.lesson}`;
  const title = `${data.title} - Python Lesson ${item.unit}.${item.lesson} | Learn Python`;
  const description = data.goal.length > 160 ? `${data.goal.slice(0, 157)}...` : data.goal;

  const blocks = [data.code, data.code2]
    .filter(Boolean)
    .map(
      (block) =>
        `<h3>${esc(block.filename)}</h3>\n<pre><code>${esc(block.lines.join('\n'))}</code></pre>${
          block.output && block.output.length
            ? `\n<p>Output:</p>\n<pre><code>${esc(block.output.join('\n'))}</code></pre>`
            : ''
        }`,
    )
    .join('\n');

  const quiz = [].concat(data.quiz || []);
  const body = `<main style="max-width:48rem;margin:0 auto;padding:2rem 1rem;font-family:system-ui,sans-serif">
<p><a href="/">Learn Python</a> / Unit ${item.unit}: ${esc(item.unitTitle)}</p>
<h1>${esc(data.title)}</h1>
<p>${esc(data.goal)}</p>
<h2>What you will learn</h2>
<ul>
${data.learn.map((point) => `<li>${esc(point)}</li>`).join('\n')}
</ul>
<h2>The idea</h2>
${data.idea
  .split('\n\n')
  .map((paragraph) => `<p>${paragraph}</p>`)
  .join('\n')}
<h2>Try it</h2>
${blocks}
${data.changeOneLine ? `<p>${data.changeOneLine}</p>` : ''}
<h2>Practice</h2>
<ol>
${data.practice.map((task) => `<li>${esc(task.text)}</li>`).join('\n')}
</ol>
<h2>Quiz</h2>
<ol>
${quiz.map((q) => `<li>${q.question}</li>`).join('\n')}
</ol>
<nav>
${prev ? `<a href="/lesson/${prev.unit}/${prev.lesson}">Previous: ${esc(prev.title)}</a>` : ''}
${next ? `<a href="/lesson/${next.unit}/${next.lesson}">Next: ${esc(next.title)}</a>` : ''}
</nav>
</main>`;

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LearningResource',
        name: data.title,
        description: data.goal,
        url,
        learningResourceType: 'lesson',
        educationalLevel: 'Beginner',
        teaches: data.learn,
        inLanguage: 'en',
        isAccessibleForFree: true,
        isPartOf: { ...courseLd },
        position: i + 1,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Learn Python', item: `${site}/` },
          { '@type': 'ListItem', position: 2, name: `Unit ${item.unit}: ${item.unitTitle}` },
          { '@type': 'ListItem', position: 3, name: data.title, item: url },
        ],
      },
    ],
  };

  const t = esc(title).replace(/"/g, '&quot;');
  const d = esc(description).replace(/"/g, '&quot;');
  const dir = path.join(distDir, 'lesson', String(item.unit), String(item.lesson));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'index.html'),
    template
      .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
      .replace(/(<meta name="description" content=")[^"]*"/, `$1${d}"`)
      .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
      .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${t}"`)
      .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${d}"`)
      .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
      .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${t}"`)
      .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${d}"`)
      .replace(
        '</head>',
        `    <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>\n  </head>`,
      )
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`),
  );
}

console.log(`Prerendered home and ${flat.length} lessons`);
