<template>
  <div class="experience-page">
    <div class="container">

      <!-- Page Header -->
      <header class="page-header reveal-header">
        <h1 class="page-title serif">Experience</h1>
        <p class="page-subtitle text-secondary">Professional · Leadership · Achievements</p>
      </header>

      <!-- Professional Experience -->
      <section class="exp-section reveal-section">
        <div class="section-label-row">
          <h2 class="exp-section-heading mono">Professional Experience</h2>
        </div>

        <div
          v-for="job in experience.professional"
          :key="job.company"
          class="job-block"
        >
          <!-- Spring gradient accent bar -->
          <div class="job-accent-bar" aria-hidden="true"></div>

          <div class="job-header">
            <div class="job-title-group">
              <h3 class="job-company serif">{{ job.company }}</h3>
            </div>
            <div class="job-meta">
              <span class="job-role">{{ job.role }}</span>
              <span class="job-meta-divider">·</span>
              <span class="job-period mono text-secondary">{{ job.period }}</span>
              <span class="job-meta-divider">·</span>
              <span class="job-location mono text-secondary">{{ job.location }}</span>
            </div>
            <p class="job-type mono text-secondary">{{ job.type }}</p>
          </div>

          <ul class="job-bullets">
            <li v-for="(bullet, i) in job.bullets" :key="i" class="job-bullet">
              <span class="bullet-dot"></span>
              <span v-html="bullet"></span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Achievements & Certifications -->
      <section class="exp-section reveal-achievements">
        <div class="section-label-row">
          <h2 class="exp-section-heading mono">Achievements & Certifications</h2>
        </div>

        <div
          v-for="ach in experience.achievements"
          :key="ach.title"
          class="achievement-block"
        >
          <div class="ach-header">
            <div class="ach-title-row">
              <span class="ach-badge mono">Finalist</span>
              <h3 class="ach-title serif">{{ ach.title }}</h3>
            </div>
            <div class="ach-meta">
              <span class="ach-org mono text-secondary">{{ ach.org }}</span>
              <span class="ach-date mono">{{ ach.date }}</span>
            </div>
          </div>
          <ul class="job-bullets">
            <li v-for="(bullet, i) in ach.bullets" :key="i" class="job-bullet">
              <span class="bullet-dot"></span>
              <span v-html="bullet"></span>
            </li>
          </ul>

          <!-- 1×5 horizontal photo strip below text -->
          <div v-if="ach.images && ach.images.length" class="ach-photo-strip">
            <img
              v-for="(src, i) in ach.images"
              :key="src"
              :src="src"
              class="ach-strip-img"
              alt="DSDR 2025"
              @click="openLightbox(ach.images, i)"
            />
          </div>
        </div>

        <PhotoLightbox
          :images="lb.images"
          :start-index="lb.startIndex"
          :visible="lb.visible"
          @close="lb.visible = false"
        />

        <!-- Certifications -->
        <div class="certifications-block">
          <h4 class="cert-heading mono text-secondary">Certifications</h4>
          <ul class="cert-list">
            <li class="cert-item">
              <span class="cert-dot"></span>
              <span><strong>Microsoft Azure AI Fundamentals</strong> (AI-900)</span>
            </li>
            <li class="cert-item">
              <span class="cert-dot"></span>
              <span><strong>Microsoft Power BI</strong> Data Analyst</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Leadership & Involvement -->
      <section class="exp-section reveal-leadership">
        <div class="section-label-row">
          <h2 class="exp-section-heading mono">Leadership & Involvement</h2>
          <!-- Flower decoration -->
          <svg class="section-flower" width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
            <ellipse cx="26" cy="9" rx="6" ry="10" fill="#F9D0D8" opacity="0.5" transform="rotate(0 26 26)"/>
            <ellipse cx="26" cy="9" rx="6" ry="10" fill="#BBDAF7" opacity="0.45" transform="rotate(72 26 26)"/>
            <ellipse cx="26" cy="9" rx="6" ry="10" fill="#F9D0D8" opacity="0.5" transform="rotate(144 26 26)"/>
            <ellipse cx="26" cy="9" rx="6" ry="10" fill="#BBDAF7" opacity="0.45" transform="rotate(216 26 26)"/>
            <ellipse cx="26" cy="9" rx="6" ry="10" fill="#F9D0D8" opacity="0.5" transform="rotate(288 26 26)"/>
            <circle cx="26" cy="26" r="5" fill="#F4E0B0" opacity="0.7"/>
          </svg>
        </div>

        <div class="timeline">
          <TimelineEntry
            v-for="entry in experience.leadership"
            :key="entry.role + entry.org"
            :role="entry.role"
            :org="entry.org"
            :org-sub="entry.orgSub"
            :period="entry.period"
            :description="entry.description"
            :bullets="entry.bullets"
            :images="entry.images || null"
          />
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TimelineEntry from '@/components/TimelineEntry.vue'
import PhotoLightbox from '@/components/PhotoLightbox.vue'
import { experience } from '@/data/experience'

const lb = ref({ visible: false, images: [], startIndex: 0 })

function openLightbox(images, index) {
  lb.value = { visible: true, images, startIndex: index }
}

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.fromTo('.reveal-header',
    { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power2.out' }
  )

  ;['.reveal-section', '.reveal-achievements', '.reveal-leadership'].forEach(cls => {
    gsap.fromTo(cls,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: cls, start: 'top 82%', once: true }
      }
    )
  })
})
</script>

<style scoped>
.experience-page {
  padding-top: calc(64px + 64px);
  padding-bottom: 96px;
  min-height: 100vh;
}

@media (max-width: 767px) {
  .experience-page { padding-bottom: calc(96px + 60px); }
}

/* Page header */
.page-header {
  margin-bottom: 64px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--bg-secondary);
}

.page-title {
  font-family: var(--font-serif);
  font-size: clamp(40px, 6vw, 64px);
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 6px;
}

.page-subtitle {
  font-family: var(--font-sans);
  font-size: 13px;
  letter-spacing: 0.04em;
}

/* Section heading */
.exp-section { margin-bottom: 72px; }

.section-label-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 36px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--bg-secondary);
}

.exp-section-heading {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-flower { opacity: 0.7; }

/* Job block */
.job-block {
  background: linear-gradient(135deg, rgba(252, 232, 236, 0.2) 0%, rgba(232, 242, 253, 0.18) 60%, rgba(254, 248, 228, 0.2) 100%);
  border-left: 3px solid var(--accent);
  padding: 32px 28px;
  border-radius: 0 8px 8px 0;
  position: relative;
  overflow: hidden;
}

.job-accent-bar {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle at top right, rgba(212, 144, 154, 0.12), transparent 70%);
  pointer-events: none;
}

.job-header { margin-bottom: 20px; }

.job-title-group {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.job-company {
  font-family: var(--font-serif);
  font-size: 26px;
  color: var(--text-primary);
  line-height: 1.2;
}

.job-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  align-items: center;
  margin-bottom: 4px;
}

.job-role {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 600;
  color: var(--accent);
}

.job-meta-divider {
  color: var(--text-secondary);
  font-size: 12px;
}

.job-period,
.job-location {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
}

.job-type {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
  margin-top: 2px;
}

/* Bullet points */
.job-bullets {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.job-bullet {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

.job-bullet strong {
  color: var(--text-primary);
  font-weight: 600;
}

.bullet-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--accent);
  flex-shrink: 0;
  margin-top: 8px;
}

/* Achievement block */
.achievement-block {
  background: linear-gradient(135deg, rgba(232, 201, 126, 0.1) 0%, rgba(252, 232, 236, 0.12) 100%);
  border-left: 3px solid var(--warm);
  padding: 28px 24px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 24px;
}

/* 1×5 horizontal photo strip below achievement text */
.ach-photo-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-top: 20px;
}

.ach-strip-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 6px;
  display: block;
  cursor: zoom-in;
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.ach-strip-img:hover { transform: scale(1.04); opacity: 0.88; }

@media (max-width: 639px) {
  .ach-photo-strip {
    grid-template-columns: repeat(5, 130px);
    overflow-x: auto;
    padding-bottom: 4px;
  }
}

.ach-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 6px;
}

.ach-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  background: rgba(232, 201, 126, 0.25);
  color: #9a7520;
  padding: 2px 8px;
  border-radius: 2px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

html.dark .ach-badge { color: var(--warm); background: rgba(232, 201, 126, 0.15); }

.ach-title {
  font-family: var(--font-serif);
  font-size: 20px;
  color: var(--text-primary);
  line-height: 1.3;
}

.ach-meta {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.ach-org {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
}

.ach-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--warm);
}

/* Certifications */
.certifications-block {
  margin-top: 32px;
  padding: 20px 24px;
  background-color: var(--bg-secondary);
  border-radius: 6px;
}

.cert-heading {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cert-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--text-secondary);
}

.cert-item strong {
  color: var(--text-primary);
  font-weight: 600;
}

.cert-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--warm);
  flex-shrink: 0;
}

/* Timeline */
.timeline { padding-left: 4px; }
</style>
