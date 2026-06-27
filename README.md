# Daniel Kline — GitHub Pages Portfolio

Static portfolio site (plain HTML/CSS/JS, no build step) hosted on GitHub Pages.

## Structure
- `index.html` — home (hero, featured projects, about)
- `projects/index.html` — projects (Churp, Budget Tracker, Systems & Tooling, Home Lab)
- `projects/churp.html`, `projects/spiral-mods.html` — case studies
- `skills/index.html` — skills
- `resume/index.html` — resume + contact (embeds `assets/resume/Daniel_Kline_Resume.pdf`)

## Updating the resume PDF
Replace `assets/resume/Daniel_Kline_Resume.pdf` with the latest version (same filename) and the embed/download links update automatically.

## GitHub Pages setup
This is a user site: repo named `DanielSK-Dev.github.io`, served from the repo root.
Push to `main`; Pages builds automatically.

## Notes
- Dark/light mode toggle and mobile nav included (`assets/js/main.js`).
- Relative links throughout.
