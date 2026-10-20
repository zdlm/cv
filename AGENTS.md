# AGENTS.md: Leo Zhang personal website

Read this before changing anything. It explains what the site is, how it is built, the rules the owner has set, and what is still open.

## The project

- **Owner:** Leo Zhang (张丁亮). Full-stack engineer at the LEGO Group in Copenhagen, nearly 20 years of experience, Beijing → Copenhagen in 2015.
- **What it is:** a personal website and CV with a strong personality, not a plain résumé. It is hosted on GitHub Pages from the `zdlm/cv` repo, branch `main`, folder `/`. Target URL: `https://zdlm.github.io/cv/`.
- **Languages:** English (default), Danish, Chinese. Every visible string exists in all three.
- **Priorities set by the owner (Oct 2026):**
  1. AI comes first. Everything related to his job and to AI goes near the top.
  2. Things outside the day job (job coaching, the free course, teaching Chinese, the WeChat publication 生活在丹麦) go lower on the page, after a divider labelled "Outside work".
- **Stack:** plain HTML, CSS and JavaScript. No framework, no build step, no npm dependencies at runtime. Keep it that way.

## Files

| Path | What it is |
|---|---|
| `index.html` | Page skeleton. Each section is a `<section id="…">` with empty containers that `main.js` fills. Static strings use `data-t="path.in.content"`. |
| `assets/content.js` | **All content.** `window.SITE` = language-independent data (dates, links, numbers, ids). `window.CONTENT.{en,da,zh}` = all text. Edit content here, not in HTML. |
| `assets/main.js` | Renders everything from `SITE` + `CONTENT`, the language switch, the brick wall, the copy-email button, and the wall's build animation. |
| `assets/style.css` | Design tokens (light and dark), layout, and print styles. |
| `assets/data/` | **Private source material. Git-ignored and never published.** Raw data from WeChat, Blogger, YouTube, Notion, LinkedIn, and the coaching report. `assets/data/README.md` lists the files. |
| `assets/og.jpg` | 1200×630 share image (`og:image`) for LinkedIn, WeChat, Slack. Regenerate it if the photo, title or job changes. |
| `404.html` | Self-contained "This brick isn't laid yet" page. Inline styles and absolute `/cv/` links, because Pages serves it at any depth. |
| `scripts/check.mjs` | Pre-publish check: `content.js` parses, every English string exists in Danish and Chinese, every `data-t` key exists. Deliberate gaps go in its `ALLOWED` list. |
| `.github/workflows/check.yml` | Runs `scripts/check.mjs` on every push to `main`. Pages still deploys from the branch. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |
| `README.md` | Short human-facing readme (how to run and publish). |

## Page order (top to bottom)

`#top` hero → `#ai` All in on AI (at work, tools, how I think about AI) → `#wall` career brick wall, including the year-by-year notes → `#work` → `#projects` → `#toolbox` → `#education` → `#beyond` divider ("Outside work") → `#coaching` 1:1 job coaching → `#course` free job-search course → `#teaching` Saturday Chinese class → `#denmark` 生活在丹麦 / Live in Denmark (WeChat + blog) → `#contact`.

Nav: AI, Work, Projects, Coaching, Teaching, Live in Denmark, Contact. Below 1100px it drops to a second header row that scrolls sideways. The link for the section in view gets `aria-current` (`setupSpy`; `SPY` in `main.js` maps sections without their own link, such as `#wall` → Work).

Projects (`#projects`, "Things I've built"): **work projects come first** ("At work": Customer Data Platform at the LEGO Group and Routes, emissions and bunkering at ZeroNorth as the two lead panels, then Tradeshift UI, marked My favourite, and Tradeshift Chrome). The owner said (Oct 2026) these are his most important projects and the AI projects matter less: never remove or demote them. Below a divider come "AI projects on the side": three selected ones (`SITE.ai.featured`), then "More AI projects" (the other nine in one grid, filter chips always visible; on a click the cards glide to their new places, FLIP in `applyFilter`). Every AI card ends with a result line in seal red (`ai.results.<id>`, all three languages) and the tool tags. Planned next: screenshots or short recordings for the three selected AI projects.

Interactive parts: a quick-facts strip under the hero (`ui.quick`; the owner removed the "Save CV as PDF" and "Get in touch" buttons, Ctrl/Cmd+P still prints the CV); filter chips over the AI project cards; and the four Outside work sections shown as tabs (`setupTabs` in `main.js`). Links into a hidden tab open that tab first, and links into a closed `<details>` open it. Under Work, jobs that started before `SITE.earlierBefore` fold into "Earlier roles" (`#jobs-earlier`). Print shows all tabs, all project groups and the earlier roles. The wall's Year by year row has one marker per year; hovering shows its note and selecting it opens the detail panel. The panel opens on the latest year note, not the newest job, so it doesn't repeat the first entry under Work. AI project markers are stacked per quarter (`SITE.ai.items[id].at`).

## How content works

- Text lookup: `t("ai.title")` reads `CONTENT[lang].ai.title` and falls back to English.
- Dates are `"YYYY-MM"`. `to: null` means "now". Dates are formatted per language with `Intl`.
- **The brick wall** (`renderWall`) has six rows: `year` (`CONTENT[lang].years`), `ai`, `side` (`SITE.side`), `teach` (`SITE.teach`), `work` (`SITE.jobs`), and `study` (`SITE.edu`). Year notes are positioned at June of each year. A duration brick's width equals its duration. Grey bricks = Beijing (before `SITE.movedToCopenhagen`), coloured = Copenhagen. Bricks that overlap in a row are stacked automatically.
- **Adding a job:** add it to `SITE.jobs` (newest first) and add `jobs.<id>` (org, role, city, body, note) to all three languages.
- **Changing a number** (followers, people hired, and so on): numbers live in `SITE` (for example `SITE.denmark.stats`, `SITE.coaching`, `SITE.course.youtubeSubs`). Some sentences also repeat numbers in text, so search all three languages.
- **Language choice:** `?lang=da` / `?lang=zh`, otherwise localStorage, otherwise English.

## Design rules

- Concept: "Twenty years, brick by brick". The colours come from Beijing hutong grey bricks and Nyhavn façades. The only ornament is a red seal with 张, stamped on the corner of his photo in the hero.
- Fonts: Bricolage Grotesque (display), Newsreader (body), Noto Sans SC / Noto Serif SC (Chinese), Ma Shan Zheng (seal glyph only).
- All colours are CSS tokens in `:root`, with dark-mode overrides under `prefers-color-scheme` and `[data-theme]`. Don't hard-code colours in components.
- Reuse existing building blocks: `.tc-head` (section head), `.dk-stats` (big numbers), `.co-how` (title + text list), `.tc-plan` (numbered steps), `.channel` (cards), `.dk-recent` (Chinese title + translation).
- Watch for class-name clashes: `.course` is a brick-wall row, so the free-course section uses `.freecourse`. `.intro` is a paragraph style, so the opening animation class on `<html>` is `.opening`.
- Type scale: six steps in `:root` (`--fs-xs` 0.8rem, `--fs-sm` 0.92rem, `--fs-md` 1.05rem, `--fs-body` 1.125rem, `--fs-lede` 1.25rem, `--fs-h3` 1.35rem), modelled on apple.com. Use a token, not a new size. Only display headings (`clamp()`) and seal glyphs have their own sizes. Big type gets tighter letter-spacing.
- Header: frosted glass (`backdrop-filter: saturate(1.8) blur(20px)` over 78% paper), opaque where unsupported.
- Motion (rule changed by the owner, Oct 2026: scroll-driven animation is allowed, in the spirit of Apple's product pages):
  - Allowed: animation that is **driven by or triggered by scrolling** and helps tell the story, like pinning, scrubbing or revealing as you read. Use `--ease` (`cubic-bezier(0.4, 0, 0.6, 1)`), `--dur-fast` (0.24s) and `--dur` (0.32s) for transitions.
  - Not allowed: ambient animation that runs on its own (loops, floating, autoplaying decoration), and blanket "fade up every section" reveals. Content must never wait for an animation to become readable.
  - Every animation needs a static version: skip it under `prefers-reduced-motion`, and keep the page complete where the browser lacks support (CSS scroll-driven animations go inside `@supports (animation-timeline: view())`).
  - What exists now: the opening moment (the seal stamps in, the greeting cycles Hej → 你好 → Hi). The **wall plays year by year** on screens of at least 1000×720 (`setupScrub`): `.wall-stage` (the section title, the wall and the panel) sticks under the header while `.wall-run` scrolls past, so playing starts once the title "Twenty years, brick by brick" reaches the top (about 50px of scroll per year, `PX_PER_YEAR`). A "now" cursor sweeps across, bricks not yet reached wait as faint full-length ghosts, running bricks grow up to the cursor, and the panel shows the latest year note passed. If the stage doesn't fit the screen it goes `.compact` (no hover hint, one-line key); if that still doesn't fit, the wall stays static. Smaller screens keep the one-time build animation (`setupBuild`). **Work plays one job at a time** on the same screens (`setupWorkPlay`): once the "Work" title reaches the top, the stage pins; a rail on the left lists the jobs (dates + company, current one marked in seal red) and every job sits in one spot on the right. Scrolling about 420px (`PX_PER_JOB`) fades the current job out upwards and then the next one in from below, never two at once. Links to `#job-…` (the rail, the wall's "Read more") scroll to the moment that job is shown. Narrow screens get a CSS-only version: each job fades in as it enters and out as it leaves the top. While playing, the earlier roles (CICC, NMC, BIStone) leave their fold and play last, under an "Earlier roles" group in the rail; whenever Work isn't playing they go back into the fold. Pinning for both the wall and Work goes through one helper, `pinStage`; language switches re-measure every pin. Print undoes all of it. In Projects, the two lead work cards each have a **diagram that draws itself as you read** (`DIAGRAMS` in `main.js`, `.dg-*` in `style.css`, CSS scroll-driven, complete by mid-screen): Customer Data Platform shows upstream systems flowing into 360° profiles and out to audience segments; ZeroNorth shows the direct line through weather and the optimised route around it. Labels live in `projects.<id>.diagram` in all three languages and say only what the card text says; keep it that way, nothing internal. The finished picture is the static default. In "How I think about AI", **each take lights up** as it scrolls into the reading zone (CSS only).
- The page must not scroll sideways at 390px. Ctrl/Cmd+P prints a clean CV (see `@media print`).
- Copy style: plain, short sentences, no em-dash asides, sentence case. Danish was written by an AI and should be reviewed by a native speaker.

## Privacy rules (from the owner)

- Never publish anything from `assets/data/`. It stays in `.gitignore`.
- Coaching cases are anonymised. Don't add details that could identify a student (names, ages, where they met, life details).
- Teaching: no student names or ages, and nothing about school-internal discussions.
- Don't publish: phone number, the WeChat admin login email, AppID, income, or the 代购 (purchasing-agent) business.
- His Chinese full name (张丁亮) appears only where he already shows it publicly (Xiaohongshu name). Ask before adding it elsewhere.
- Don't mention the cloud computing work project.

## Facts the owner has confirmed or corrected

- Saturday Chinese class runs 10:00–12:45 (same as the school site).
- The code-review agent was built with **GitHub Copilot** (not Codex).
- Remove "customer data questions answered automatically" from AI at work. Keep: Copilot code reviewer, automated onboarding for new engineers, voice + AI workflow (Typeless).
- AI use started when ChatGPT came out (end of 2022). In 2025 he went all in, using AI for work, learning and personal projects.
- YouTube channel 「AI时代求职」 (@ai_of_tomorrow) is him on camera, not AI-generated.
- AI tools: Claude, Claude Code, GitHub Copilot, Codex, ChatGPT, Typeless.
- Job coaching: 4 people hired, 5 currently in coaching (as of 2026-10-20).

## Open items

1. **AI projects** live in `~/Private/` on the owner's Mac. Twelve are on the site, grouped in `SITE.ai.groups`. `assets/data/ai-projects.json` lists all of them, including the ones left off the site and why. Ask before adding a project. Never publish candidate data from `jobs_in_copenhagen/candidates/`. The owner asked to keep Lawyer-DK, brainstorm, Toonify and CNY ⇄ DKK off the site.
2. **Side jobs** (consulting company and more): the owner will add these one by one.
3. **WeChat Channels link:** waiting for the owner's link.
4. **Missing course lessons:** lessons 2–5, 33 and 38 are not in the YouTube playlist, so the "Lessons 1–5" link points to lesson 1.
5. **Photo:** `assets/leo.jpg` (720×900, cropped from the photo the owner sent on 2026-10-20). It sits in the hero with the 张 seal stamped on its lower-left corner (`.hero-photo`). Print shows the photo small, without the seal.
6. **Danish copy:** needs review by a native speaker.

## Working on it

- Preview locally: `python3 -m http.server 8000`, then open `http://localhost:8000` (`?lang=zh` / `?lang=da`).
- After editing `content.js`, run `node scripts/check.mjs` (parse + all three languages complete).
- Subscript digits (CO₂) are drawn by the `"Subscripts"` `@font-face` in `style.css`, because the Newsreader web subset lacks them.
- Check desktop (1280px) and mobile (390px) in light and dark. For the wall, also scroll through it on a 1280×800 or larger viewport and confirm the stage stays pinned and the panel fits. Make sure `document.documentElement.scrollWidth` is not larger than the viewport.
- Git: commit only when the owner asks. Commit as `leo zhang <zdlm@users.noreply.github.com>`. Agents usually can't push (SSH key on the owner's Mac), so the owner runs `git push origin main` himself.
- Don't commit `assets/data/`. Run `git status` before committing.
