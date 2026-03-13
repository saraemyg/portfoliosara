<template>
  <div class="stat-counter">
    <div class="stat-number serif highlight-underline">{{ number }}</div>
    <div class="stat-label text-secondary">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.stat-counter {
  text-align: center;
  padding: 24px 16px;
}

.stat-number {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 56px);
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 10px;
  text-decoration: underline;
  text-decoration-color: var(--warm);
  text-underline-offset: 5px;
  text-decoration-thickness: 2px;
}

.stat-label {
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
  max-width: 140px;
  margin: 0 auto;
  letter-spacing: 0.01em;
}
</style>
