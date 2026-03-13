# Sara Emilia — Personal Portfolio

Personal portfolio website for Sara Emilia Binti Sharifudin, Data Scientist & AI Researcher.

**Live:** [saraemyg.vercel.app](https://saraemyg.vercel.app)

---

## Stack

- **Vue 3** (Composition API) + **Vite**
- **Vue Router** (hash history for SPA)
- **GSAP** + ScrollTrigger for animations
- **Google Fonts** — DM Serif Display, Inter, JetBrains Mono
- Deployed on **Vercel**

## Pages

| Route | Page |
|---|---|
| `/` | Home — editorial hero, stats, snapshot, selected work |
| `/projects` | All projects with AI/ML · Full-Stack · Data Analytics filter |
| `/projects/:slug` | Individual project detail |
| `/experience` | BoomGrow internship, achievements, leadership timeline |
| `/about` | Bio, skills, languages, certifications |
| `/contact` | Minimal contact links |

## Local development

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build   # outputs to dist/
```

Push to `main` → Vercel auto-deploys.

## Customisation

| What | Where |
|---|---|
| Tagline | `src/views/Home.vue` → `const tagline` |
| Your photo | Replace the placeholder in `src/views/Home.vue` hero-right section |
| Projects | `src/data/projects.js` |
| Experience & leadership | `src/data/experience.js` |
| Skills | `src/data/skills.js` |
| Colours | `src/assets/main.css` → `:root` CSS variables |
