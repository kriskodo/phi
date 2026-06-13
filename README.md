# Phi · Cocktail Bar

A modern redesign for **Phi** — a cocktail bar on Tsar Shishman Street, Sofia,
where innovative cocktails meet contemporary art. The name is the golden ratio
(φ ≈ 1.618), and the whole site is composed around it: a glassmorphic interface
over a painterly "Negroni" canvas (campari red-orange, vermouth amber, botanical
green) on deep plum-espresso.

**Live site:** https://kriskodo.github.io/phi/
**Menu (what the table QR points to):** https://kriskodo.github.io/phi/#/menu

## Pages
- **Home** — hero with an animated golden spiral and the golden-section bar (1 : 1.618)
- **Menu** — the full cocktail list, the destination for the table QR code
- **About** — the φ philosophy and the rotating gallery on the walls
- **Visit** — hours, location, contact, and a live QR code to the menu

## Stack
- React + TypeScript (Vite)
- React Router (HashRouter — robust on GitHub Pages)
- Framer Motion — page transitions, scroll reveals, hero load sequence
- `qrcode.react` — the scannable menu QR

## Develop
```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deploy
Pushing to the working branch runs `.github/workflows/deploy.yml`, which builds
the site and publishes `dist/` to GitHub Pages (Pages source: GitHub Actions).
The Vite `base` is set to `/phi/` for the project-page URL.

## Design skill
The official **frontend-design** skill is vendored at
`.claude/skills/frontend-design/` so any Claude Code session opened on this
repo — including Claude Code on the web — auto-loads it. To use the
auto-updating official plugin instead:

```
/plugin marketplace add anthropics/claude-code
/plugin install frontend-design@claude-code-plugins
```
