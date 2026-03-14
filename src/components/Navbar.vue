<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner">
      <router-link to="/" class="nav-logo">Sara Emilia</router-link>

      <div class="nav-right">
        <!-- Desktop links -->
        <div class="nav-links">
          <router-link to="/projects" class="nav-link" active-class="nav-link--active">Work</router-link>
          <router-link to="/experience" class="nav-link" active-class="nav-link--active">Experience</router-link>
          <router-link to="/contact" class="nav-link" active-class="nav-link--active">Contact</router-link>
        </div>

        <!-- Dark mode toggle -->
        <button class="dark-toggle" @click="toggleDark" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <!-- Sun icon (shown in dark mode) -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile bottom bar -->
  <nav class="mobile-bar">
    <router-link to="/projects" class="mobile-bar-item" active-class="mobile-bar-item--active" aria-label="Work">
      <!-- Briefcase icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
      <span>Work</span>
    </router-link>
    <router-link to="/experience" class="mobile-bar-item" active-class="mobile-bar-item--active" aria-label="Experience">
      <!-- Clock icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
      <span>Experience</span>
    </router-link>
    <router-link to="/contact" class="mobile-bar-item" active-class="mobile-bar-item--active" aria-label="Contact">
      <!-- Mail icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
      <span>Contact</span>
    </router-link>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 64px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
}

.navbar.scrolled {
  background-color: var(--bg);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

html.dark .navbar.scrolled {
  background-color: rgba(21, 21, 26, 0.92);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 18px;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
}

.nav-logo:hover {
  color: var(--accent);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links {
  display: none;
  align-items: center;
  gap: 28px;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link--active {
  color: var(--accent);
}

.nav-link--active::after {
  width: 100%;
}

.dark-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--text-secondary);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.dark-toggle:hover {
  color: var(--text-primary);
  background-color: var(--bg-secondary);
}

/* Mobile bottom bar */
.mobile-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: var(--bg);
  border-top: 1px solid var(--bg-secondary);
  height: 60px;
  padding: 0 8px;
  padding-bottom: env(safe-area-inset-bottom, 0);
}

@media (min-width: 768px) {
  .mobile-bar {
    display: none;
  }
}

.mobile-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 10px;
  font-family: var(--font-sans);
  transition: color 0.2s ease;
}

.mobile-bar-item:hover,
.mobile-bar-item--active {
  color: var(--accent);
}
</style>
