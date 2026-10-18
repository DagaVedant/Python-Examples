# React conversion swarm (`convert_to_react`)

## Repo
`C:\Users\DagaV\Desktop\Coding Projects\Python Examples`

## Already done
- Vite React+TS app in `web/`
- All 110 lessons: `Unit N/lesson M/data.json` + `web/public/lessons/N-M.json`
- `course-info.json` + `web/public/course-info.json`
- Skeleton pages in `web/src/pages/`
- Types in `web/src/types/lesson.ts`

## Rules
- Work ONLY on branch context / files under `web/src` unless your task says to touch JSON.
- Prefer TypeScript + React function components.
- Match existing navy / DM Sans look from the static site (no purple AI-slop theme).
- Do not rewrite lesson content; load from JSON.
- Do not commit unless asked.
- Keep changes focused; avoid drive-by refactors.
- If another agent owns a file, write a new file and export from an index when possible.

## Lesson JSON shape
See `web/src/types/lesson.ts`. Load via `loadLessonJson(unit, lesson)` → `/lessons/{unit}-{lesson}.json`.
