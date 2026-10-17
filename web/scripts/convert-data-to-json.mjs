/**
 * Convert Unit N/lesson M/data.js → data.json (+ web/public/lessons/U-L.json)
 * Usage: node scripts/convert-data-to-json.mjs [unit] [lesson]
 *        node scripts/convert-data-to-json.mjs --all
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const webPublic = path.join(root, 'web', 'public', 'lessons');

function listLessons() {
  const units = fs.readdirSync(root).filter((n) => /^Unit \d+$/.test(n));
  const out = [];
  for (const unitDir of units.sort((a, b) => Number(a.slice(5)) - Number(b.slice(5)))) {
    const unitPath = path.join(root, unitDir);
    const lessons = fs.readdirSync(unitPath).filter((n) => /^lesson \d+$/.test(n));
    for (const lessonDir of lessons.sort((a, b) => Number(a.slice(7)) - Number(b.slice(7)))) {
      out.push({
        unit: Number(unitDir.slice(5)),
        lesson: Number(lessonDir.slice(7)),
        dir: path.join(unitPath, lessonDir),
      });
    }
  }
  return out;
}

async function convertOne(unit, lesson) {
  const dir = path.join(root, `Unit ${unit}`, `lesson ${lesson}`);
  const jsPath = path.join(dir, 'data.js');
  if (!fs.existsSync(jsPath)) throw new Error(`Missing ${jsPath}`);

  const mod = await import(pathToFileURL(jsPath).href + `?t=${Date.now()}`);
  const data = mod.default;
  if (!data || typeof data !== 'object') throw new Error('No default export');

  const json = JSON.stringify(data, null, 2) + '\n';
  const jsonPath = path.join(dir, 'data.json');
  fs.writeFileSync(jsonPath, json, 'utf8');

  fs.mkdirSync(webPublic, { recursive: true });
  fs.writeFileSync(path.join(webPublic, `${unit}-${lesson}.json`), json, 'utf8');

  return jsonPath;
}

const args = process.argv.slice(2);
if (args[0] === '--all') {
  const all = listLessons();
  let ok = 0;
  for (const { unit, lesson } of all) {
    try {
      await convertOne(unit, lesson);
      ok += 1;
      console.log(`OK ${unit}-${lesson}`);
    } catch (e) {
      console.error(`FAIL ${unit}-${lesson}:`, e.message);
    }
  }
  console.log(`Done ${ok}/${all.length}`);
} else if (args.length >= 2) {
  const unit = Number(args[0]);
  const lesson = Number(args[1]);
  const p = await convertOne(unit, lesson);
  console.log('Wrote', p);
} else {
  console.log('Usage: node scripts/convert-data-to-json.mjs --all | <unit> <lesson>');
  process.exit(1);
}
