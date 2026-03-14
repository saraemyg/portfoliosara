<template>
  <div class="home">

    <section class="hero">
      <div class="hero-layout container">

        <div class="hero-left">
          <p class="hero-kicker mono reveal-kicker">MMU Computer Science · Data Science Track</p>

          <h1 class="hero-name serif reveal-hero-name">
            Sara Emilia<br>
            <span class="name-second">Binti Sharifudin</span>
          </h1>

          <p class="hero-role mono reveal-role">Data Scientist &amp; AI Researcher</p>

          <hr class="rule-navy hero-rule reveal-rule" />

          <p class="hero-tagline serif reveal-tagline">{{ tagline }}</p>
          <p class="tagline-hint mono">✏️ edit tagline in Home.vue → const tagline</p>

          <div class="hero-bio reveal-bio">
            <p>Final-year CS student at Multimedia University (CGPA 3.71), specialising in Data Science. I build AI systems end-to-end — from scraping raw data and training models to deploying dashboards that non-technical people actually reach for.</p>
          </div>

          <div class="hero-links reveal-links">
            <a href="mailto:saraem.yg@gmail.com" class="hero-link mono">saraem.yg@gmail.com</a>
            <a href="https://linkedin.com/in/saraemilia1108" target="_blank" rel="noopener noreferrer" class="hero-link mono">LinkedIn ↗</a>
            <a href="https://github.com/saraemyg" target="_blank" rel="noopener noreferrer" class="hero-link mono">GitHub ↗</a>
          </div>
        </div>

        <div class="hero-right reveal-right">

          <div class="hero-photo-wrap">
            <div class="hero-photo-placeholder">
              <div class="photo-inner">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#F9D0D8" opacity="0.65" transform="rotate(0 20 20)"/>
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#BBDAF7" opacity="0.6"  transform="rotate(72 20 20)"/>
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#F9D0D8" opacity="0.65" transform="rotate(144 20 20)"/>
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#BBDAF7" opacity="0.6"  transform="rotate(216 20 20)"/>
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#F9D0D8" opacity="0.65" transform="rotate(288 20 20)"/>
                  <circle cx="20" cy="20" r="4.5" fill="#F4E0B0" opacity="0.8"/>
                </svg>
                <span class="photo-label mono">[ your photo here ]</span>
              </div>
            </div>
            <p class="photo-caption mono">Sara Emilia · Selangor, MY</p>
          </div>

          <div class="hero-meta-card">
            <div class="meta-item">
              <span class="meta-key mono">Currently</span>
              <span class="meta-val">FYP — Real-time Surveillance AI</span>
            </div>
            <div class="meta-divider"></div>
            <div class="meta-item">
              <span class="meta-key mono">Based in</span>
              <span class="meta-val">Selangor, Malaysia</span>
            </div>
            <div class="meta-divider"></div>
            <div class="meta-item">
              <span class="meta-key mono">Open to</span>
              <span class="meta-val">Research &amp; grad opportunities</span>
            </div>
          </div>

        </div>
      </div>

      <div class="hero-scroll-hint">
        <div class="scroll-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
        </div>
        <span class="scroll-label mono">scroll to explore</span>
      </div>
    </section>

    <!-- Skills showcase (replaces stats) -->
    <section class="skills-showcase spring-section--bold">
      <div class="container">
        <p class="skills-label mono reveal-skills-label">Technical Skills</p>
        <div class="skills-showcase-grid reveal-skills-grid">
          <div v-for="group in skills.technical" :key="group.category" class="skill-row">
            <span class="skill-cat mono">{{ group.category }}</span>
            <div class="skill-pills">
              <span v-for="s in group.skills" :key="s" class="skill-pill">{{ s }}</span>
            </div>
          </div>
        </div>
        <div class="skills-extras reveal-skills-extras">
          <div class="extras-group">
            <span class="skill-cat mono">Languages</span>
            <div class="skill-pills">
              <span v-for="l in skills.languages" :key="l.lang" class="skill-pill skill-pill--warm">
                {{ l.lang }} <span class="pill-level">{{ l.level }}</span>
              </span>
            </div>
          </div>
          <div class="extras-group">
            <span class="skill-cat mono">Certifications</span>
            <div class="skill-pills">
              <span v-for="c in skills.certifications" :key="c" class="skill-pill skill-pill--blue">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About / Bio section -->
    <section class="about-home-section">
      <div class="container">
        <div class="about-home-split">
          <div class="about-home-left reveal-about-left">
            <span class="section-tag mono">Sara Emilia</span>
            <h2 class="about-home-heading serif">Building things that<br>make data meaningful.</h2>
            <p class="about-home-bio">
              I'm a final-year Computer Science student at Multimedia University, Selangor, Malaysia,
              specialising in data science and applied AI. My work spans computer vision, machine learning systems,
              and data engineering.
            </p>
            <p class="about-home-bio">
              I'm drawn to problems where the data already exists but has never been properly listened to —
              where the right model paired with clear communication can shift how decisions are made.
            </p>
          </div>
          <div class="about-home-right reveal-about-right">
            <div class="about-photo-placeholder">
              <div class="photo-inner">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#F9D0D8" opacity="0.65" transform="rotate(0 20 20)"/>
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#BBDAF7" opacity="0.6"  transform="rotate(72 20 20)"/>
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#F9D0D8" opacity="0.65" transform="rotate(144 20 20)"/>
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#BBDAF7" opacity="0.6"  transform="rotate(216 20 20)"/>
                  <ellipse cx="20" cy="7" rx="5.5" ry="9" fill="#F9D0D8" opacity="0.65" transform="rotate(288 20 20)"/>
                  <circle cx="20" cy="20" r="4.5" fill="#F4E0B0" opacity="0.8"/>
                </svg>
                <span class="photo-label mono">[ your photo here ]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="snapshot-section">
      <div class="container">
        <div class="snapshot-grid">
          <div class="snapshot-card reveal-snap">
            <span class="snap-label mono">in my world</span>
            <p class="snap-text serif">Computer vision, data storytelling, and finding the best teh tarik in Cyberjaya.</p>
          </div>
          <div class="snapshot-card snapshot-img reveal-snap">
            <div class="snap-img-placeholder">
              <span class="snap-img-text mono">[ add a photo — lab / event / anything you! ]</span>
            </div>
          </div>
          <div class="snapshot-card reveal-snap">
            <span class="snap-label mono">quick facts</span>
            <ul class="snap-facts">
              <li class="mono">🎓 MMU · Oct 2023 – Oct 2026</li>
              <li class="mono">💻 Data Science specialisation</li>
              <li class="mono">🌱 CGPA 3.71</li>
              <li class="mono">🏆 DSDR 2025 International Finalist</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="work-section">
      <div class="container">
        <h2 class="section-heading serif reveal-work-heading">Selected Work</h2>
        <div class="project-list">
          <div v-for="project in featuredProjects" :key="project.id" class="project-band-wrapper reveal-project">
            <ProjectBand :project="project" />
            <div class="band-rule"></div>
          </div>
        </div>
        <div class="view-all reveal-view-all">
          <router-link to="/projects" class="view-all-link accent-text">View all work →</router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectBand from '@/components/ProjectBand.vue'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

gsap.registerPlugin(ScrollTrigger)

// ✏️  YOUR TAGLINE — replace with something that sounds like you
const tagline = '"your one sentence — the thing that makes you, you"'

const featuredProjects = projects.slice(0, 4)

onMounted(() => {
  const heroEls = ['.reveal-kicker','.reveal-hero-name','.reveal-role','.reveal-rule','.reveal-tagline','.reveal-bio','.reveal-links']
  gsap.fromTo(heroEls,
    { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.75, stagger: 0.09, ease: 'power2.out', delay: 0.15 }
  )
  gsap.fromTo('.reveal-right',
    { opacity: 0, x: 40 },
    { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out', delay: 0.5 }
  )
  gsap.fromTo('.reveal-tagline',
    { letterSpacing: '-0.04em' },
    { letterSpacing: '0.01em', duration: 1.6, ease: 'power3.out', delay: 0.55 }
  )
  gsap.fromTo('.hero-scroll-hint',
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: 'power2.out', delay: 1.4 }
  )

  gsap.fromTo(['.reveal-skills-label', '.reveal-skills-grid', '.reveal-skills-extras'],
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: '.skills-showcase', start: 'top 80%', once: true } }
  )

  gsap.fromTo('.reveal-about-left',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '.about-home-section', start: 'top 82%', once: true } }
  )
  gsap.fromTo('.reveal-about-right',
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '.about-home-section', start: 'top 82%', once: true } }
  )

  gsap.fromTo('.reveal-snap',
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: '.snapshot-section', start: 'top 82%', once: true } }
  )
  gsap.fromTo('.reveal-work-heading',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '.reveal-work-heading', start: 'top 85%', once: true } }
  )
  gsap.fromTo('.reveal-project',
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: '.project-list', start: 'top 82%', once: true } }
  )
  gsap.fromTo('.reveal-view-all',
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '.reveal-view-all', start: 'top 90%', once: true } }
  )
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: calc(var(--nav-height) + 24px);
  padding-bottom: 60px;
  position: relative;
}

.hero-layout {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: start;
  padding-top: 48px;
}

@media (min-width: 768px) {
  .hero-layout {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
    align-items: center;
    padding-top: 32px;
  }
}

.hero-left { display: flex; flex-direction: column; gap: 18px; }

.hero-kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-name {
  font-family: var(--font-serif);
  font-size: clamp(42px, 7vw, 76px);
  color: var(--text-primary);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.name-second {
  font-size: clamp(30px, 5vw, 54px);
  opacity: 0.72;
}

.hero-role {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-rule { margin: 0; opacity: 0.45; width: 160px; }

.hero-tagline {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(18px, 2.5vw, 26px);
  color: var(--text-primary);
  line-height: 1.45;
  letter-spacing: 0.01em;
  padding: 14px 18px;
  border-left: 3px solid var(--highlight);
  background: linear-gradient(135deg, rgba(249,208,216,0.1) 0%, rgba(187,218,247,0.08) 100%);
  border-radius: 0 6px 6px 0;
}

.tagline-hint {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--highlight);
  letter-spacing: 0.06em;
  opacity: 0.65;
  margin-top: -10px;
}

.hero-bio { display: flex; flex-direction: column; gap: 12px; }

.hero-bio p {
  font-family: var(--font-sans);
  font-size: clamp(14px, 1.5vw, 15.5px);
  color: var(--text-secondary);
  line-height: 1.8;
}

.hero-links { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 4px; }

.hero-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: opacity 0.2s ease;
}

.hero-link:hover { opacity: 0.65; }

.hero-right { display: flex; flex-direction: column; gap: 24px; }

.hero-photo-wrap { display: flex; flex-direction: column; align-items: center; gap: 10px; }

.hero-photo-placeholder {
  width: 100%;
  max-width: 280px;
  aspect-ratio: 3/4;
  background: linear-gradient(160deg, #fce8ec 0%, #e8f2fd 45%, #fef8e8 100%);
  border: 1px dashed rgba(212,144,154,0.4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 8px var(--bg), 0 0 0 9px rgba(212,144,154,0.18);
  transform: rotate(-1.5deg);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.hero-photo-placeholder:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow: 0 0 0 8px var(--bg), 0 8px 32px rgba(212,144,154,0.25), 0 0 0 9px rgba(212,144,154,0.22);
}

.photo-inner { display: flex; flex-direction: column; align-items: center; gap: 12px; }

.photo-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  opacity: 0.5;
  letter-spacing: 0.06em;
}

.photo-caption {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
  opacity: 0.6;
}

.hero-meta-card {
  background: linear-gradient(135deg, rgba(249,208,216,0.12) 0%, rgba(187,218,247,0.1) 100%);
  border: 1px solid var(--bg-secondary);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.meta-item { display: flex; align-items: baseline; gap: 12px; padding: 10px 0; }

.meta-key {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--highlight);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  flex-shrink: 0;
  width: 72px;
}

.meta-val { font-family: var(--font-sans); font-size: 13px; color: var(--text-secondary); line-height: 1.5; }

.meta-divider { height: 1px; background-color: var(--bg-secondary); }

.hero-scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0;
  margin-top: 24px;
}

.scroll-arrow { color: var(--text-secondary); animation: pulse-down 2.2s ease-in-out infinite; }

@keyframes pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.45; }
  50%       { transform: translateY(7px); opacity: 0.9; }
}

.scroll-label { font-family: var(--font-mono); font-size: 10px; color: var(--text-secondary); letter-spacing: 0.1em; }

/* ── Skills Showcase ── */
.skills-showcase { padding: 72px 0; }

.skills-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 28px;
}

.skills-showcase-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.skill-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.skill-cat {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--highlight);
  min-width: 180px;
  flex-shrink: 0;
}

@media (max-width: 639px) {
  .skill-cat { min-width: 100%; }
}

.skill-pills { display: flex; flex-wrap: wrap; gap: 6px; }

.skill-pill {
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--text-secondary);
  background: rgba(255,255,255,0.55);
  border: 1px solid rgba(212,144,154,0.2);
  border-radius: 20px;
  padding: 3px 12px;
  transition: background 0.2s ease, color 0.2s ease;
}

html.dark .skill-pill {
  background: rgba(255,255,255,0.06);
  border-color: rgba(212,144,154,0.18);
}

.skill-pill:hover { background: rgba(249,208,216,0.35); color: var(--text-primary); }

.skill-pill--warm { border-color: rgba(232,201,126,0.35); }
.skill-pill--warm:hover { background: rgba(244,224,176,0.35); }

.skill-pill--blue { border-color: rgba(187,218,247,0.45); }
.skill-pill--blue:hover { background: rgba(187,218,247,0.3); }

.pill-level {
  font-size: 10px;
  opacity: 0.65;
  margin-left: 4px;
}

.skills-extras {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 48px;
  padding-top: 16px;
  border-top: 1px solid rgba(212,144,154,0.15);
}

.extras-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

/* ── About / Bio ── */
.about-home-section {
  padding: 88px 0;
  background-color: var(--bg);
}

.about-home-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 768px) {
  .about-home-split {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
}

.about-home-left { display: flex; flex-direction: column; gap: 20px; }

.section-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

.about-home-heading {
  font-family: var(--font-serif);
  font-size: clamp(28px, 4vw, 44px);
  color: var(--text-primary);
  line-height: 1.2;
}

.about-home-bio {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-secondary);
}

.about-home-right { display: flex; justify-content: center; }

.about-photo-placeholder {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 3/4;
  background: linear-gradient(160deg, #fce8ec 0%, #e8f2fd 45%, #fef8e8 100%);
  border: 1px dashed rgba(212,144,154,0.4);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(1deg);
  transition: transform 0.4s ease;
}

.about-photo-placeholder:hover { transform: rotate(0deg) scale(1.02); }

/* ── Snapshot ── */
.snapshot-section { padding: 64px 0; background-color: var(--bg); }

.snapshot-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }

@media (min-width: 640px) {
  .snapshot-grid { grid-template-columns: repeat(3, 1fr); }
}

.snapshot-card {
  background: linear-gradient(145deg, rgba(252,232,236,0.18) 0%, rgba(232,242,253,0.15) 100%);
  border: 1px solid var(--bg-secondary);
  border-radius: 8px;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.snap-label { font-family: var(--font-mono); font-size: 10px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; }

.snap-text { font-family: var(--font-serif); font-style: italic; font-size: 17px; color: var(--text-primary); line-height: 1.55; }

.snap-facts { display: flex; flex-direction: column; gap: 8px; list-style: none; }

.snap-facts li { font-family: var(--font-mono); font-size: 12px; color: var(--text-secondary); line-height: 1.5; letter-spacing: 0.02em; }

.snapshot-img { padding: 0; overflow: hidden; }

.snap-img-placeholder {
  width: 100%;
  height: 100%;
  min-height: 180px;
  background: linear-gradient(135deg, #fce8ec 0%, #e8f2fd 50%, #fef8e8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 8px;
}

.snap-img-text { font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary); opacity: 0.5; letter-spacing: 0.04em; text-align: center; line-height: 1.6; }

/* ── Work ── */
.work-section { padding: 96px 0; }

.section-heading { font-family: var(--font-serif); font-size: clamp(28px, 4vw, 40px); color: var(--text-primary); margin-bottom: 48px; }

.project-list { margin-bottom: 40px; }

.band-rule { height: 1px; background-color: var(--bg-secondary); }

.view-all { padding-top: 8px; }

.view-all-link { font-family: var(--font-sans); font-size: 15px; font-weight: 500; color: var(--accent); text-decoration: none; transition: opacity 0.2s ease; }

.view-all-link:hover { opacity: 0.75; }

@media (max-width: 767px) { .home { padding-bottom: 60px; } }
</style>
