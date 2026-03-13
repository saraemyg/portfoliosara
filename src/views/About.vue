<template>
  <div class="about-page">
    <div class="container">

      <!-- Top split: bio + photo -->
      <div class="about-split">
        <!-- Left: Bio -->
        <div class="about-left reveal-bio">
          <h1 class="about-heading serif">About</h1>

          <p class="bio-paragraph">
            I'm Sara Emilia — a final-year Computer Science student at Multimedia University, Selangor, Malaysia,
            specialising in data science and applied AI. My work spans computer vision, machine learning systems,
            and data engineering. I'm drawn to problems where the data already exists but has never been properly
            listened to, and where the right model paired with clear communication can shift how decisions are made.
          </p>

          <p class="bio-paragraph">
            My work sits at the intersection of rigorous engineering and practical impact. At BoomGrow, I saw
            firsthand how thoughtfully deployed AI can reshape operations that have been manual for decades.
            I'm drawn to problems where the gap between "we have the data" and "we can act on it" is bridged
            through both strong models and good communication — whether that's a well-calibrated dashboard or
            a well-explained prediction.
          </p>
        </div>

        <!-- Right: Photo placeholder -->
        <div class="about-right reveal-photo">
          <div class="photo-placeholder">
            <span class="text-secondary">[Photo]</span>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <section class="skills-section reveal-skills">
        <h2 class="skills-heading serif">Technical Skills</h2>

        <div class="skills-grid">
          <div
            v-for="group in skills.technical"
            :key="group.category"
            class="skill-group"
          >
            <h3 class="skill-category mono">{{ group.category }}</h3>
            <p class="skill-list">{{ group.skills.join(', ') }}</p>
          </div>
        </div>
      </section>

      <!-- Languages Section -->
      <section class="languages-section reveal-languages">
        <h2 class="sub-heading mono">Languages</h2>
        <p class="languages-line text-secondary">
          <span v-for="(lang, index) in skills.languages" :key="lang.lang">
            <span class="lang-name">{{ lang.lang }}</span>
            <span class="lang-level"> — {{ lang.level }}</span>
            <span v-if="index < skills.languages.length - 1" class="lang-sep"> · </span>
          </span>
        </p>
      </section>

      <!-- Certifications Section -->
      <section class="certifications-section reveal-certs">
        <h2 class="sub-heading mono">Certifications</h2>
        <ul class="cert-list">
          <li v-for="cert in skills.certifications" :key="cert" class="cert-item">
            <span class="cert-dot"></span>
            <span class="cert-text">{{ cert }}</span>
          </li>
        </ul>
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '@/data/skills'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.fromTo('.reveal-bio',
    { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power2.out', delay: 0.1 }
  )

  gsap.fromTo('.reveal-photo',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.3 }
  )

  const scrollSections = ['.reveal-skills', '.reveal-languages', '.reveal-certs']
  scrollSections.forEach(sel => {
    gsap.fromTo(sel,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sel,
          start: 'top 83%',
          once: true
        }
      }
    )
  })
})
</script>

<style scoped>
.about-page {
  padding-top: calc(64px + 64px);
  padding-bottom: 96px;
  min-height: 100vh;
}

@media (max-width: 767px) {
  .about-page {
    padding-bottom: calc(96px + 60px);
  }
}

/* Split layout */
.about-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  margin-bottom: 80px;
}

@media (min-width: 768px) {
  .about-split {
    grid-template-columns: 60fr 40fr;
    gap: 64px;
    align-items: start;
  }
}

/* Bio */
.about-heading {
  font-family: var(--font-serif);
  font-size: clamp(40px, 6vw, 64px);
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 32px;
}

.bio-paragraph {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.85;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.bio-paragraph:last-child {
  margin-bottom: 0;
}

/* Photo placeholder */
.about-right {
  display: flex;
  align-items: flex-start;
  padding-top: 8px;
}

@media (min-width: 768px) {
  .about-right {
    padding-top: 80px;
  }
}

.photo-placeholder {
  width: 100%;
  aspect-ratio: 3/4;
  background-color: var(--bg-secondary);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--text-secondary);
  max-width: 320px;
}

/* Skills */
.skills-section {
  margin-bottom: 56px;
  padding-top: 40px;
  border-top: 1px solid var(--bg-secondary);
}

.skills-heading {
  font-family: var(--font-serif);
  font-size: clamp(24px, 3.5vw, 32px);
  color: var(--text-primary);
  margin-bottom: 36px;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.skill-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (min-width: 640px) {
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 48px;
  }

  .skill-group:first-child {
    grid-column: 1 / -1;
  }
}

.skill-category {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-variant-caps: small-caps;
}

.skill-list {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Languages */
.languages-section {
  margin-bottom: 48px;
  padding-top: 40px;
  border-top: 1px solid var(--bg-secondary);
}

.sub-heading {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.languages-line {
  font-family: var(--font-sans);
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.lang-name {
  color: var(--text-primary);
  font-weight: 500;
}

.lang-level {
  color: var(--text-secondary);
}

.lang-sep {
  color: var(--text-secondary);
  opacity: 0.5;
}

/* Certifications */
.certifications-section {
  padding-top: 40px;
  border-top: 1px solid var(--bg-secondary);
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cert-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--text-secondary);
}

.cert-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--warm);
  flex-shrink: 0;
}

.cert-text {
  line-height: 1.5;
}
</style>
