<template>
  <div class="project-detail">
    <div class="container-narrow">

      <!-- Not found -->
      <div v-if="!project" class="not-found">
        <p class="text-secondary">Project not found.</p>
        <router-link to="/projects" class="back-link accent-text">← Back to Projects</router-link>
      </div>

      <!-- Project content -->
      <template v-else>
        <!-- Back link -->
        <router-link to="/projects" class="back-link accent-text">← Projects</router-link>

        <!-- Title area -->
        <header class="detail-header">
          <h1 class="detail-title serif">{{ project.title }}</h1>
          <div class="detail-meta">
            <span class="detail-date mono">{{ project.date }}</span>
            <span class="detail-category mono">{{ project.category }}</span>
          </div>
          <div class="detail-tags">
            <span v-for="tag in project.tech" :key="tag" class="detail-tag mono">{{ tag }}</span>
          </div>
        </header>

        <!-- Project image placeholder -->
        <div class="project-img-placeholder">
          <div class="img-inner">
            <svg class="img-flower" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <ellipse cx="18" cy="7" rx="5" ry="8" fill="#F9D0D8" opacity="0.6" transform="rotate(0 18 18)"/>
              <ellipse cx="18" cy="7" rx="5" ry="8" fill="#BBDAF7" opacity="0.55" transform="rotate(72 18 18)"/>
              <ellipse cx="18" cy="7" rx="5" ry="8" fill="#F9D0D8" opacity="0.6" transform="rotate(144 18 18)"/>
              <ellipse cx="18" cy="7" rx="5" ry="8" fill="#BBDAF7" opacity="0.55" transform="rotate(216 18 18)"/>
              <ellipse cx="18" cy="7" rx="5" ry="8" fill="#F9D0D8" opacity="0.6" transform="rotate(288 18 18)"/>
              <circle cx="18" cy="18" r="4" fill="#F4E0B0" opacity="0.8"/>
            </svg>
            <span class="img-placeholder-text mono">[Project Screenshot]</span>
          </div>
        </div>

        <hr class="rule-navy detail-rule" />

        <!-- CV-style bullet summary (if exists) -->
        <section v-if="project.bullets && project.bullets.length" class="detail-section reveal-section bullets-section">
          <h2 class="section-label">Highlights</h2>
          <ul class="detail-bullets">
            <li
              v-for="(bullet, i) in project.bullets"
              :key="i"
              class="detail-bullet"
            >
              <span class="bullet-dot"></span>
              <span v-html="bullet"></span>
            </li>
          </ul>
        </section>

        <!-- Sections -->
        <div class="detail-sections">
          <section class="detail-section reveal-section">
            <h2 class="section-label">Overview</h2>
            <p>{{ project.overview }}</p>
          </section>

          <section class="detail-section reveal-section">
            <h2 class="section-label">Problem</h2>
            <p>{{ project.problem }}</p>
          </section>

          <section class="detail-section reveal-section">
            <h2 class="section-label">Approach</h2>
            <p>{{ project.approach }}</p>
          </section>

          <section class="detail-section reveal-section">
            <h2 class="section-label">Results</h2>
            <p>{{ project.results }}</p>
          </section>
        </div>

        <!-- Footer links -->
        <div class="detail-footer">
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="footer-link accent-text">
            View on GitHub →
          </a>
          <router-link to="/projects" class="back-link accent-text">← Back to Projects</router-link>
        </div>
      </template>

    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()

const project = computed(() => {
  return projects.find(p => p.slug === route.params.slug) || null
})

function runAnimations() {
  if (!project.value) return

  gsap.fromTo('.detail-header',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.1 }
  )

  gsap.fromTo('.project-img-placeholder',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.25 }
  )

  gsap.fromTo('.reveal-section',
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.detail-sections',
        start: 'top 82%',
        once: true
      }
    }
  )
}

onMounted(() => { runAnimations() })

watch(() => route.params.slug, () => {
  ScrollTrigger.getAll().forEach(t => t.kill())
  setTimeout(runAnimations, 100)
})
</script>

<style scoped>
.project-detail {
  padding-top: calc(64px + 56px);
  padding-bottom: 96px;
  min-height: 100vh;
}

@media (max-width: 767px) {
  .project-detail {
    padding-bottom: calc(96px + 60px);
  }
}

.not-found {
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.back-link {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.01em;
  margin-bottom: 40px;
  transition: opacity 0.2s ease;
}

.back-link:hover { opacity: 0.7; }

/* Header */
.detail-header { margin-bottom: 32px; }

.detail-title {
  font-family: var(--font-serif);
  font-size: clamp(28px, 4.5vw, 44px);
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 16px;
}

.detail-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.detail-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--warm);
}

.detail-category {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--highlight);
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.detail-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  background-color: var(--bg-secondary);
  padding: 4px 10px;
  border-radius: 3px;
  letter-spacing: 0.02em;
}

/* Project image placeholder */
.project-img-placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #fce8ec 0%, #e8f2fd 45%, #fef8e8 100%);
  border: 1px dashed rgba(212, 144, 154, 0.35);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 28px 0;
  overflow: hidden;
}

.img-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.img-flower { opacity: 0.8; }

.img-placeholder-text {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  opacity: 0.55;
  letter-spacing: 0.06em;
}

.detail-rule {
  margin: 32px 0;
  width: 100%;
  max-width: none;
  opacity: 0.3;
}

/* Bullet highlights section */
.bullets-section {
  background: linear-gradient(135deg, rgba(252, 232, 236, 0.35) 0%, rgba(232, 242, 253, 0.3) 100%);
  border-radius: 8px;
  padding: 24px 20px;
  margin-bottom: 16px;
}

.detail-bullets {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-bullet {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

.detail-bullet strong {
  color: var(--text-primary);
  font-weight: 600;
}

.bullet-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--highlight);
  flex-shrink: 0;
  margin-top: 8px;
}

/* Sections */
.detail-sections {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 64px;
}

.detail-section { border: none; padding: 0; }

.section-label {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-left: 3px solid var(--highlight);
  padding-left: 12px;
  margin-bottom: 16px;
  line-height: 1.4;
}

.detail-section p {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-secondary);
}

/* Footer links */
.detail-footer {
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  padding-top: 32px;
  border-top: 1px solid var(--bg-secondary);
}

.footer-link {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.footer-link:hover { opacity: 0.7; }
</style>
