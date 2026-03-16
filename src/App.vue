<template>
  <div class="app-wrapper">
    <!-- Custom cursor -->
    <div ref="cursorDot" class="cursor-dot" aria-hidden="true"></div>
    <div ref="cursorRing" class="cursor-ring" aria-hidden="true"></div>

    <FlowerCanvas />
    <Navbar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FlowerCanvas from '@/components/FlowerCanvas.vue'

const cursorDot  = ref(null)
const cursorRing = ref(null)

let ringX = 0, ringY = 0
let rafId = null

function onMouseMove(e) {
  const x = e.clientX
  const y = e.clientY
  // hide custom cursor when lightbox is open
  const lbOpen = !!document.querySelector('.lb-overlay')
  const hide = lbOpen ? '0' : null
  if (cursorDot.value)  { cursorDot.value.style.opacity  = hide ?? cursorDot.value.style.opacity }
  if (cursorRing.value) { cursorRing.value.style.opacity = hide ?? cursorRing.value.style.opacity }
  if (lbOpen) return

  if (cursorDot.value) {
    cursorDot.value.style.transform = `translate(${x}px, ${y}px)`
  }
  if (!rafId) rafId = requestAnimationFrame(lerpRing)
  ringX += (x - ringX) * 0.18
  ringY += (y - ringY) * 0.18
}

function lerpRing() {
  if (cursorRing.value) {
    cursorRing.value.style.transform = `translate(${ringX}px, ${ringY}px)`
  }
  rafId = requestAnimationFrame(lerpRing)
}

function onMouseEnter() {
  cursorDot.value && (cursorDot.value.style.opacity = '1')
  cursorRing.value && (cursorRing.value.style.opacity = '1')
}
function onMouseLeave() {
  cursorDot.value && (cursorDot.value.style.opacity = '0')
  cursorRing.value && (cursorRing.value.style.opacity = '0')
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  document.documentElement.addEventListener('mouseleave', onMouseLeave)
  document.documentElement.addEventListener('mouseenter', onMouseEnter)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.documentElement.removeEventListener('mouseleave', onMouseLeave)
  document.documentElement.removeEventListener('mouseenter', onMouseEnter)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style>
/* Hide default cursor everywhere except lightbox */
*, *::before, *::after { cursor: none !important; }

.lb-overlay,
.lb-overlay * { cursor: default !important; }
.lb-arrow,
.lb-close { cursor: pointer !important; }

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

/* ── Custom cursor ── */
.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  will-change: transform;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Small solid dot */
.cursor-dot {
  width: 8px;
  height: 8px;
  background: #7BA7C9;
  margin-left: -4px;
  margin-top: -4px;
}

/* Larger soft ring that lags behind */
.cursor-ring {
  width: 28px;
  height: 28px;
  border: 1.5px solid rgba(123, 167, 201, 0.55);
  background: rgba(187, 218, 247, 0.08);
  margin-left: -14px;
  margin-top: -14px;
}

/* On mobile, hide custom cursor and restore default */
@media (hover: none) {
  .cursor-dot, .cursor-ring { display: none; }
  *, *::before, *::after { cursor: auto !important; }
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
