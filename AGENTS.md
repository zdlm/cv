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
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |
| `README.md` | Short human-facing readme (how to run and publish). |

## Page order (top to bottom)

`#top` hero → `#ai` All in on AI (at work, tools, 15 project cards in 4 groups, how I think about AI) → `#wall` career brick wall → `#work` → `#projects` → `#toolbox` → `#education` → `#beyond` divider ("Outside work") → `#coaching` 1:1 job coaching → `#course` free job-search course → `#teaching` Saturday Chinese class → `#denmark` 生活在丹麦 / Live in Denmark (WeChat + blog) → `#years` year by year → `#contact`.

Nav (hidden below 1100px): AI, Work, Projects, Coaching, Teaching, Live in Denmark, Contact.

Interactive parts: a quick-facts strip under the hero (`ui.quick`) with "Save CV as PDF" (`window.print()`) and "Get in touch" buttons; filter chips over the AI project cards; and the four Outside work sections shown as tabs (`setupTabs` in `main.js`). Links into a hidden tab open that tab first. Print shows all tabs and all project groups. The wall has an "AI projects" row on top, where each project is a small brick stacked per quarter (`SITE.ai.items[id].at`).

## How content works

- Text lookup: `t("ai.title")` reads `CONTENT[lang].ai.title` and falls back to English.
- Dates are `"YYYY-MM"`. `to: null` means "now". Dates are formatted per language with `Intl`.
- **The brick wall** (`renderWall`) has five rows: `life` (round markers from `SITE.life`), `side` (`SITE.side`), `teach` (`SITE.teach`), `work` (`SITE.jobs`), `study` (`SITE.edu`). A brick's width equals its duration. Grey bricks = Beijing (before `SITE.movedToCopenhagen`), coloured = Copenhagen. Bricks that overlap in a row are stacked automatically.
- **Adding a job:** add it to `SITE.jobs` (newest first) and add `jobs.<id>` (org, role, city, body, note) to all three languages.
- **Changing a number** (followers, people hired, and so on): numbers live in `SITE` (for example `SITE.denmark.stats`, `SITE.coaching`, `SITE.course.youtubeSubs`). Some sentences also repeat numbers in text, so search all three languages.
- **Language choice:** `?lang=da` / `?lang=zh`, otherwise localStorage, otherwise English.

## Design rules

- Concept: "Twenty years, brick by brick". The colours come from Beijing hutong grey bricks and Nyhavn façades. The only ornament is a red seal with 张.
- Fonts: Bricolage Grotesque (display), Newsreader (body), Noto Sans SC / Noto Serif SC (Chinese), Ma Shan Zheng (seal glyph only).
- All colours are CSS tokens in `:root`, with dark-mode overrides under `prefers-color-scheme` and `[data-theme]`. Don't hard-code colours in components.
- Reuse existing building blocks: `.tc-head` (section head), `.dk-stats` (big numbers), `.co-how` (title + text list), `.tc-plan` (numbered steps), `.channel` (cards), `.dk-recent` (Chinese title + translation).
- Watch for class-name clashes: `.course` is a brick-wall row, so the free-course section uses `.freecourse`. `.intro` is a paragraph style, so the opening animation class on `<html>` is `.opening`.
- Motion: one opening moment (the seal stamps in and the greeting cycles Hej → 你好 → Hi), and the wall builds once when it scrolls into view. Both are skipped under `prefers-reduced-motion`. Don't add more ambient animation.
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
5. **Photo:** none yet. The old photo shows his daughter, so ask before using it.
6. **Danish copy:** needs review by a native speaker.

## Working on it

- Preview locally: `python3 -m http.server 8000`, then open `http://localhost:8000` (`?lang=zh` / `?lang=da`).
- After editing `content.js`, check that it still parses: `node -e "global.window={};require('./assets/content.js')"`.
- Check desktop (1280px) and mobile (390px) in light and dark. Make sure `document.documentElement.scrollWidth` is not larger than the viewport.
- Git: commit only when the owner asks. Commit as `leo zhang <zdlm@users.noreply.github.com>`. Agents usually can't push (SSH key on the owner's Mac), so the owner runs `git push origin main` himself.
- Don't commit `assets/data/`. Run `git status` before committing.
