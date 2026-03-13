<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top-border"></div>
      <div class="footer-content">
        <p class="footer-name serif">Sara Emilia Binti Sharifudin</p>
        <p class="footer-role text-secondary">Data Scientist & AI Researcher</p>
        <p class="footer-year text-secondary">{{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: var(--bg);
  padding: 48px 0 40px;
  /* Account for mobile bottom bar */
  padding-bottom: calc(40px + env(safe-area-inset-bottom, 0));
}

@media (min-width: 768px) {
  .footer {
    padding-bottom: 40px;
  }
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-top-border {
  height: 1px;
  background: var(--bg-secondary);
  margin-bottom: 32px;
}

.footer-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.footer-name {
  font-family: var(--font-serif);
  font-size: 18px;
  color: var(--text-primary);
}

.footer-role {
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.footer-year {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  opacity: 0.6;
  margin-top: 4px;
}
</style>
