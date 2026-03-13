<template>
  <div class="contact-page">
    <div class="contact-inner">
      <h1 class="contact-heading serif reveal-heading">Let's connect.</h1>
      <p class="contact-sub reveal-sub">
        I'm currently open to research collaborations, internship inquiries,
        and interesting data problems.
      </p>

      <div class="contact-links reveal-links">
        <a href="mailto:saraem.yg@gmail.com" class="contact-link">
          <span class="link-label mono">Email</span>
          <span class="link-value">saraem.yg@gmail.com</span>
        </a>

        <a
          href="https://linkedin.com/in/saraemilia1108"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
        >
          <span class="link-label mono">LinkedIn</span>
          <span class="link-value">linkedin.com/in/saraemilia1108</span>
        </a>

        <a
          href="https://github.com/saraemyg"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
        >
          <span class="link-label mono">GitHub</span>
          <span class="link-value">github.com/saraemyg</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.fromTo('.reveal-heading',
    { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power2.out', delay: 0.1 }
  )

  gsap.fromTo('.reveal-sub',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.35 }
  )

  gsap.fromTo('.contact-link',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.55 }
  )
})
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
  padding-top: calc(64px + 64px);
}

@media (max-width: 767px) {
  .contact-page {
    padding-bottom: calc(64px + 60px);
    align-items: flex-start;
    padding-top: calc(64px + 48px);
  }
}

.contact-inner {
  max-width: 560px;
  width: 100%;
}

.contact-heading {
  font-family: var(--font-serif);
  font-size: clamp(40px, 7vw, 72px);
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 24px;
}

.contact-sub {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.75;
  color: var(--text-secondary);
  margin-bottom: 56px;
  max-width: 440px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.contact-link {
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid var(--bg-secondary);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.contact-link:first-child {
  border-top: 1px solid var(--bg-secondary);
}

.contact-link:hover .link-value {
  text-decoration: underline;
  text-decoration-color: var(--accent);
  text-underline-offset: 3px;
}

.link-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  min-width: 72px;
  flex-shrink: 0;
}

.link-value {
  font-family: var(--font-sans);
  font-size: 16px;
  color: var(--accent);
  font-weight: 400;
  transition: color 0.2s ease;
}

.contact-link:hover .link-value {
  color: var(--text-primary);
}
</style>
