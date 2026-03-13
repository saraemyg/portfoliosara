<template>
  <router-link :to="`/projects/${project.slug}`" class="project-band">
    <div class="band-left">
      <h3 class="band-title serif">{{ project.title }}</h3>
      <p class="band-description">{{ project.description }}</p>
      <div class="band-tags">
        <span v-for="tag in project.tech.slice(0, 5)" :key="tag" class="band-tag mono">{{ tag }}</span>
        <span v-if="project.tech.length > 5" class="band-tag mono band-tag--more">+{{ project.tech.length - 5 }}</span>
      </div>
    </div>
    <div class="band-right">
      <span class="band-date text-secondary mono">{{ project.date }}</span>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.project-band {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 0;
  border-left: 4px solid transparent;
  padding-left: 20px;
  margin-left: -24px;
  text-decoration: none;
  transition: border-color 0.2s ease, padding-left 0.2s ease;
}

.project-band:hover {
  border-left-color: var(--accent);
}

.band-left {
  flex: 1;
  min-width: 0;
}

.band-title {
  font-family: var(--font-serif);
  font-size: 22px;
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.3;
  transition: color 0.2s ease;
}

.project-band:hover .band-title {
  color: var(--accent);
}

.band-description {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.band-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.band-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  background-color: var(--bg-secondary);
  padding: 3px 8px;
  border-radius: 3px;
  letter-spacing: 0.02em;
}

.band-tag--more {
  color: var(--text-secondary);
}

.band-right {
  flex-shrink: 0;
  text-align: right;
  padding-top: 4px;
}

.band-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  white-space: nowrap;
}
</style>
