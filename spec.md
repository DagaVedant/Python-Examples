# Learn Python - improvement spec

Live site: https://pythonexamples.vercel.app (stays on vercel.app, no custom domain).
Repo: DagaVedant/Python-Examples (public, MIT, 0 stars, no description or topics).

## Goals

1. Good SEO.
2. A really good README.
3. Portfolio-grade repo and code: a free interactive Python course first, a technical showcase second.
4. GitHub stars come from SEO and the README only. No posting for now. Reddit, Show HN, awesome-list PRs and a Dev.to write-up are deferred ("later").

## Constraints

- Keep lesson voice as is. Only fix factual, quiz or code errors in lessons.
- Keep the design as is. Fixes only, no redesign.
- No paid services. Stay on Vercel, Supabase and OpenRouter free tiers.
- No new dependencies unless needed.
- ASCII punctuation everywhere; no Co-Authored-By or attribution footers in commits or PRs.
- Delivery: audit and fix in one pass, committed in logical batches, user reviews the commits.

## Work items

### 1. SEO
- Prerender all 110 lessons, the unit pages and the landing page to static HTML at build time, each with a unique title, meta description, canonical URL, Open Graph and Twitter tags, and the lesson text in the HTML.
- Add JSON-LD (Course, plus BreadcrumbList or LearningResource per lesson).
- Generate sitemap.xml from the lesson list (all prerendered URLs), keep robots.txt, add a social share image.
- Keep the Vercel SPA rewrite working for the interactive parts and unknown routes (404 stays correct).
- Verify with curl that lesson HTML contains real content, then run Lighthouse SEO.
- User-side steps to list at the end: Google Search Console and Bing Webmaster verification, sitemap submission.

### 2. README
- Course-first: one-line hero, live link, screenshots, features, unit list, "how it's built" (Vite, React, TS, Pyodide, CodeMirror 6, Supabase auth and data, edge function AI feedback), run locally, contributing.
- AI feedback is mentioned quietly as a bonus, not the pitch.
- Screenshots captured from the live site via the built-in browser.
- Repo metadata: description, homepage URL and topics via gh (python, learn-python, education, pyodide, react, vite, supabase, beginners). Add CONTRIBUTING.md and issue templates only if short.

### 3. Repo layout
- Move Unit 1..12 into `content/`. Update the `@content` alias, the lesson check script, build config, README and any hardcoded paths. Build and `npm run check:lessons` must pass.

### 4. Code cleanup (web/src, scripts, supabase/functions)
- Remove all comments and doc blocks.
- Inline single-use helper functions into their callers. Where a helper is used in two or more places and inlining would duplicate real logic, keep it and flag it in the commit message instead of silently deviating. React components themselves stay components.
- Make the code read like a person wrote it: no boilerplate wrappers, straightforward names.
- Remove dead code, unused exports, unused dependencies.
- Behaviour must not change. tsc and build must pass after each batch.

### 5. Audit (report in the final message, fix what is clearly broken)
- Lesson content: factual errors, quiz answers, code that fails in Pyodide, difficulty curve, practice tasks that can be passed trivially.
- Code and security: RLS, edge function auth and rate limits, secrets, env handling, dependency vulnerabilities (npm audit).
- Performance and accessibility: Lighthouse, bundle size, Pyodide load, mobile, keyboard, contrast, reduced motion.

## Already done (this session)
- Vercel project python-examples deployed from repo root, public, alias pythonexamples.vercel.app.
- Supabase project arkeebwgerjumobbgvgn: tables, OPENROUTER_API_KEY secret, grade-practice and delete-account functions (verify_jwt off).
- supabase.ts reads VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.

## Open follow-ups
- User must revoke the Supabase access token pasted in chat.
- Signed-in practice run (AI grading) not yet tested end to end.
- backup/pre-trailer-strip tag still exists locally.

## Out of scope for now
- Custom domain, social posting, awesome-list PRs, Show HN, blog post, new lesson content, redesign.
