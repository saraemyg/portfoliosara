<template>
  <div class="contact-page">
    <div class="contact-inner">

      <!-- Kaomoji character -->
      <div class="kaomoji-wrap" @mouseenter="excited = true" @mouseleave="excited = false">
        <div class="speech-bubble" :class="{ active: excited }">
          Let's build something great together! ✨
        </div>
        <span class="kaomoji" :class="{ excited }">{{ excited ? '(≧◡≦)' : '(｡◕‿◕｡)' }}</span>
      </div>

      <h1 class="contact-heading serif reveal-heading">Let's connect.</h1>
      <p class="contact-sub reveal-sub">
        I'm currently open to research collaborations, internship inquiries,
        and interesting data problems.
      </p>

      <div class="contact-links reveal-links">

        <!-- Phone -->
        <!-- <div class="contact-link contact-link--static">
          <span class="link-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.55 2 2 0 0 1 3.6 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <span class="link-label mono">Phone</span>
          <span class="link-value link-value--muted">+60 19 291· [ add yours ]</span>
        </div> -->

        <!-- Email -->
        <a href="mailto:saraem.yg@gmail.com" class="contact-link">
          <span class="link-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </span>
          <span class="link-label mono">Email</span>
          <span class="link-value">saraem.yg@gmail.com</span>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/saraemyg" target="_blank" rel="noopener noreferrer" class="contact-link">
          <span class="link-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </span>
          <span class="link-label mono">GitHub</span>
          <span class="link-value">github.com/saraemyg</span>
        </a>

        <!-- LinkedIn -->
        <a href="https://linkedin.com/in/saraemilia1108" target="_blank" rel="noopener noreferrer" class="contact-link">
          <span class="link-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </span>
          <span class="link-label mono">LinkedIn</span>
          <span class="link-value">linkedin.com/in/saraemilia1108</span>
        </a>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const excited = ref(false)

onMounted(() => {
  gsap.fromTo('.kaomoji-wrap',
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.05 }
  )
  gsap.fromTo('.reveal-heading',
    { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'power2.out', delay: 0.2 }
  )
  gsap.fromTo('.reveal-sub',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.4 }
  )
  gsap.fromTo('.contact-link, .contact-link--static',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.6 }
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

/* ── Kaomoji ── */
.kaomoji-wrap {
  position: relative;
  display: inline-block;
  margin-bottom: 32px;
  cursor: default;
  user-select: none;
}

.kaomoji {
  font-size: 32px;
  display: block;
  transition: transform 0.2s ease;
  line-height: 1;
}

.kaomoji.excited {
  transform: scale(1.18) rotate(-5deg);
}

.speech-bubble {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  background: linear-gradient(135deg, rgba(249,208,216,0.95) 0%, rgba(187,218,247,0.95) 100%);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 16px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease, transform 0.25s ease;
  box-shadow: 0 4px 16px rgba(212,144,154,0.2);
}

.speech-bubble::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 7px solid transparent;
  border-top-color: rgba(187,218,247,0.95);
}

.speech-bubble.active {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

html.dark .speech-bubble {
  background: linear-gradient(135deg, rgba(212,144,154,0.85) 0%, rgba(139,184,208,0.85) 100%);
}

html.dark .speech-bubble::after {
  border-top-color: rgba(139,184,208,0.85);
}

/* ── Heading ── */
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
  margin-bottom: 48px;
  max-width: 440px;
}

/* ── Links ── */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.contact-link,
.contact-link--static {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 0;
  border-bottom: 1px solid var(--bg-secondary);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.contact-link:first-child,
.contact-link--static:first-child {
  border-top: 1px solid var(--bg-secondary);
}

.contact-link--static { cursor: default; }

.link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(249,208,216,0.25) 0%, rgba(187,218,247,0.2) 100%);
  color: var(--highlight);
  flex-shrink: 0;
  transition: background 0.2s ease, color 0.2s ease;
}

.contact-link:hover .link-icon {
  background: linear-gradient(135deg, rgba(249,208,216,0.5) 0%, rgba(187,218,247,0.4) 100%);
  color: var(--text-primary);
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
  font-size: 15px;
  color: var(--accent);
  font-weight: 400;
  transition: color 0.2s ease;
}

.link-value--muted {
  color: var(--text-secondary);
  font-size: 13px;
  font-style: italic;
}

.contact-link:hover .link-value {
  color: var(--text-primary);
  text-decoration: underline;
  text-decoration-color: var(--accent);
  text-underline-offset: 3px;
}
</style>
