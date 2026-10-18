import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const courseInfo = JSON.parse(fs.readFileSync(path.join(publicDir, 'course-info.json'), 'utf8'));

const base = 'https://pythonexamples.vercel.app';
const today = '2026-10-18';
const staticRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/login', priority: '0.5' },
  { path: '/signup', priority: '0.5' },
  { path: '/privacy', priority: '0.4' },
  { path: '/terms', priority: '0.4' },
  { path: '/forgot-password', priority: '0.3' },
];

const urls = staticRoutes.map((r) => ({ loc: `${base}${r.path === '/' ? '/' : r.path}`, priority: r.priority }));

for (const unit of courseInfo.units) {
  for (const lesson of unit.lessons) {
    urls.push({
      loc: `${base}/lesson?unit=${unit.number}&lesson=${lesson.number}`,
      priority: '0.8',
    });
  }
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const body = urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
fs.writeFileSync(
  path.join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
);

console.log(`Wrote sitemap with ${urls.length} URLs`);
