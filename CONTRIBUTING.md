# Contributing

Fixes to lessons are the most useful contribution: wrong facts, wrong quiz answers, examples that do not run, unclear wording.

- Lessons live in `content/unit-N/lesson-M.json`. Edit the file, not the generated copies in `web/public`.
- Keep the existing voice and keep text ASCII only (plain quotes and dashes).
- Run `cd web && npm run check:lessons` and `npm run build` before opening a pull request.
- For code changes, keep them small and say what behavior changes, if any.
- Bug reports: say the lesson (for example 4.3), what you did and what you saw.
