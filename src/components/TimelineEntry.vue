<template>
  <div class="timeline-entry">
    <div class="timeline-line-col">
      <div class="timeline-dot"></div>
      <div class="timeline-line"></div>
    </div>
    <div class="timeline-content">
      <div class="timeline-header">
        <span class="timeline-role">{{ role }}</span>
        <span class="timeline-period text-secondary mono">{{ period }}</span>
      </div>
      <p class="timeline-org serif-italic">{{ org }}</p>
      <p v-if="orgSub" class="timeline-org-sub mono">{{ orgSub }}</p>

      <!-- Images: shown only if provided -->
      <div v-if="images && images.length" class="timeline-imgs">
        <img
          v-for="(src, i) in images"
          :key="i"
          :src="src"
          :alt="`${org} photo ${i + 1}`"
          class="timeline-img"
        />
      </div>

      <!-- Bullets with bold support -->
      <ul v-if="bullets && bullets.length" class="timeline-bullets">
        <li
          v-for="(bullet, i) in bullets"
          :key="i"
          class="timeline-bullet"
        >
          <span class="bullet-pip"></span>
          <span v-html="bullet"></span>
        </li>
      </ul>
      <p v-else class="timeline-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  role: { type: String, required: true },
  org: { type: String, required: true },
  orgSub: { type: String, default: '' },
  period: { type: String, required: true },
  description: { type: String, default: '' },
  bullets: { type: Array, default: null },
  images: { type: Array, default: null }
})
</script>

<style scoped>
.timeline-entry {
  display: flex;
  gap: 20px;
  padding-bottom: 48px;
}

.timeline-entry:last-child {
  padding-bottom: 0;
}

.timeline-entry:last-child .timeline-line {
  display: none;
}

.timeline-line-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 5px;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--highlight);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 0 3px rgba(212, 144, 154, 0.15);
}

.timeline-line {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, var(--accent), rgba(123, 167, 201, 0.1));
  margin-top: 4px;
  min-height: 40px;
}

.timeline-content {
  flex: 1;
  min-width: 0;
}

.timeline-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.timeline-role {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.timeline-period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  white-space: nowrap;
}

.timeline-org {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 15px;
  color: var(--accent);
  margin-bottom: 2px;
}

.timeline-org-sub {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
  margin-bottom: 8px;
}

/* Images */
.timeline-imgs {
  display: flex;
  gap: 8px;
  margin: 12px 0;
  flex-wrap: nowrap;
  max-width: 380px;
  overflow: hidden;
}

.timeline-img {
  width: calc(50% - 4px);
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  display: block;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.timeline-img:first-child:last-child {
  width: 100%;
  max-width: 380px;
  height: 120px;
}

.timeline-img:hover { transform: scale(1.02); }

/* Bullet list */
.timeline-bullets {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

.timeline-bullet {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--text-secondary);
}

.timeline-bullet strong {
  color: var(--text-primary);
  font-weight: 600;
}

.bullet-pip {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--highlight);
  flex-shrink: 0;
  margin-top: 8px;
}

.timeline-description {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-top: 8px;
}
</style>
