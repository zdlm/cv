# Leo Zhang · personal site

Plain HTML, CSS and JavaScript. No build step.

- `index.html` – page structure
- `assets/content.js` – **all text, in English, Danish and Chinese**. Edit this file to update the CV.
- `assets/main.js` – renders the content, the brick wall and the language switch
- `assets/style.css` – design, dark mode and print styles (Ctrl/Cmd+P prints a clean CV)

Language: `?lang=da` or `?lang=zh` in the URL, or the switch in the header (remembered per browser). English is the default.

## Run locally

    python3 -m http.server 8000

then open http://localhost:8000

## Publish on GitHub Pages

1. Push to `main`.
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site appears at `https://zdlm.github.io/cv/` after a minute.
