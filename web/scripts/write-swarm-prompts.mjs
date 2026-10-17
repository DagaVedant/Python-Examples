import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const web = path.resolve(__dirname, '..');
const jobs = JSON.parse(fs.readFileSync(path.join(web, 'swarm-jobs.json'), 'utf8'));
const outDir = path.join(web, 'swarm-prompts');
fs.mkdirSync(outDir, { recursive: true });

for (const j of jobs) {
  const body = `Workspace: C:\\Users\\DagaV\\Desktop\\Coding Projects\\Python Examples
Branch: convert_to_react (already checked out)

Read web/SWARM.md first.
Then read web/swarm-jobs.json and execute ONLY job id=${j.id} ("${j.name}").

Job prompt:
${j.prompt}

Constraints:
- Stay on convert_to_react worktree files
- TypeScript/React under web/src for UI jobs
- For LessonJSON jobs: validate/fix data.json + public copy only; write the check md noted in the job
- Do not commit
- Do not rewrite unrelated lesson content
- Prefer new files to reduce merge conflicts

Return: job id, files changed, brief status.
`;
  fs.writeFileSync(path.join(outDir, `${String(j.id).padStart(3, '0')}.md`), body);
}
console.log('wrote', jobs.length, 'prompts');
