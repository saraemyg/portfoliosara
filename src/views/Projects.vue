<template>
  <div class="projects-page">

    <!-- Spring flower decoration -->
    <div class="page-flower" aria-hidden="true">
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="45" cy="24" rx="10" ry="17" fill="#F9D0D8" opacity="0.5" transform="rotate(0 45 45)"/>
        <ellipse cx="45" cy="24" rx="10" ry="17" fill="#BBDAF7" opacity="0.45" transform="rotate(72 45 45)"/>
        <ellipse cx="45" cy="24" rx="10" ry="17" fill="#F9D0D8" opacity="0.5" transform="rotate(144 45 45)"/>
        <ellipse cx="45" cy="24" rx="10" ry="17" fill="#BBDAF7" opacity="0.45" transform="rotate(216 45 45)"/>
        <ellipse cx="45" cy="24" rx="10" ry="17" fill="#F9D0D8" opacity="0.5" transform="rotate(288 45 45)"/>
        <circle cx="45" cy="45" r="7" fill="#F4E0B0" opacity="0.7"/>
      </svg>
    </div>

    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title serif">Work</h1>
        <p class="page-subtitle text-secondary">All projects &amp; research</p>
      </header>

      <!-- Filter Tabs -->
      <div class="filter-bar">
        <button
          v-for="f in filters"
          :key="f.value"
          class="filter-btn mono"
          :class="{ active: activeFilter === f.value }"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <!-- Projects List -->
      <div class="projects-list">
        <template v-for="(project, index) in filteredProjects" :key="project.id">
          <div class="project-row-wrapper" :style="{ '--i': index }">
            <router-link :to="`/projects/${project.slug}`" class="project-row">
              <div class="row-left">
                <h2 class="row-title serif">{{ project.title }}</h2>
                <p class="row-description">{{ project.description }}</p>
                <div class="row-tags">
                  <span v-for="tag in project.tech.slice(0, 6)" :key="tag" class="row-tag mono">{{ tag }}</span>
                  <span v-if="project.tech.length > 6" class="row-tag mono row-tag--more">+{{ project.tech.length - 6 }}</span>
                </div>
              </div>
              <div class="row-right">
                <span class="row-date mono text-secondary">{{ project.date }}</span>
                <div class="row-filter-badges">
                  <span
                    v-for="ft in project.filterTags"
                    :key="ft"
                    class="row-filter-badge mono"
                    :class="`badge--${ft.toLowerCase().replace('/', '-')}`"
                  >{{ ft }}</span>
                </div>
                <span class="row-category mono">{{ project.category }}</span>
              </div>
            </router-link>
            <div class="row-divider"></div>
          </div>
        </template>

        <p v-if="filteredProjects.length === 0" class="no-results text-secondary">
          No projects in this category yet.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

const filters = [
  { label: 'All', value: 'all' },
  { label: 'AI / ML', value: 'AI/ML' },
  { label: 'Full-Stack', value: 'Full-Stack' },
  { label: 'Data Analytics', value: 'Data Analytics' }
]

const activeFilter = ref('all')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.filterTags.includes(activeFilter.value))
})

onMounted(() => {
  gsap.fromTo('.page-header',
    { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power2.out' }
  )
  gsap.fromTo('.filter-bar',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.3 }
  )
  gsap.fromTo('.project-row-wrapper',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power2.out', delay: 0.45 }
  )
})

// Re-animate rows when filter changes
watch(activeFilter, () => {
  setTimeout(() => {
    gsap.fromTo('.project-row-wrapper',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out' }
    )
  }, 10)
})
</script>

<style scoped>
.projects-page {
  padding-top: calc(64px + 64px);
  padding-bottom: 96px;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

@media (max-width: 767px) {
  .projects-page {
    padding-bottom: calc(96px + 60px);
  }
}

/* Flower decoration */
.page-flower {
  position: absolute;
  top: 80px;
  right: 32px;
  opacity: 0.6;
  pointer-events: none;
}

@media (max-width: 768px) {
  .page-flower { right: 12px; opacity: 0.4; }
}

/* Page header */
.page-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--bg-secondary);
}

.page-title {
  font-family: var(--font-serif);
  font-size: clamp(40px, 6vw, 64px);
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 8px;
}

.page-subtitle {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
}

/* Filter bar */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 48px;
}

.filter-btn {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  padding: 6px 16px;
  border: 1px solid var(--bg-secondary);
  border-radius: 2px;
  color: var(--text-secondary);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.filter-btn.active {
  background-color: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

/* Project rows */
.projects-list { width: 100%; }

.project-row-wrapper { opacity: 1; }

.project-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 0;
  text-decoration: none;
  border-left: 3px solid transparent;
  padding-left: 0;
  transition: border-color 0.2s ease, padding-left 0.2s ease;
}

.project-row:hover {
  border-left-color: var(--accent);
  padding-left: 16px;
}

.row-left {
  flex: 1;
  min-width: 0;
}

.row-title {
  font-family: var(--font-serif);
  font-size: 22px;
  color: var(--text-primary);
  line-height: 1.3;
  margin-bottom: 8px;
  transition: color 0.2s ease;
}

.project-row:hover .row-title {
  color: var(--accent);
}

.row-description {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.row-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.row-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  background-color: var(--bg-secondary);
  padding: 3px 8px;
  border-radius: 3px;
  letter-spacing: 0.02em;
}

.row-tag--more { color: var(--text-secondary); }

.row-right {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding-top: 4px;
  min-width: 160px;
  text-align: right;
}

.row-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--warm);
}

.row-filter-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;
}

.row-filter-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 2px;
  letter-spacing: 0.04em;
}

.badge--ai-ml {
  background: rgba(123, 167, 201, 0.12);
  color: var(--accent);
}

.badge--full-stack {
  background: rgba(232, 201, 126, 0.15);
  color: #b8922c;
}

html.dark .badge--full-stack {
  color: var(--warm);
}

.badge--data-analytics {
  background: rgba(212, 144, 154, 0.12);
  color: var(--highlight);
}

.row-category {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--highlight);
  letter-spacing: 0.02em;
  text-align: right;
  line-height: 1.4;
}

.row-divider {
  height: 1px;
  background-color: var(--bg-secondary);
}

.no-results {
  padding: 48px 0;
  font-family: var(--font-mono);
  font-size: 13px;
  text-align: center;
}

@media (max-width: 640px) {
  .project-row {
    flex-direction: column;
    gap: 16px;
  }

  .row-right {
    align-items: flex-start;
    text-align: left;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    min-width: unset;
  }

  .row-filter-badges { justify-content: flex-start; }
}
</style>
