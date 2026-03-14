<template>
  <div class="flower-canvas" aria-hidden="true">
    <div
      v-for="(f, i) in flowers"
      :key="i"
      class="flower-item"
      :ref="el => { if (el) flowerRefs[i] = el }"
      :style="{ left: f.x, top: f.y, '--glow': f.glow }"
    >
      <svg :width="f.size" :height="f.size" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="10" rx="8" ry="14" :fill="f.c1" :opacity="f.op" transform="rotate(0 30 30)"/>
        <ellipse cx="30" cy="10" rx="8" ry="14" :fill="f.c2" :opacity="f.op * 0.88" transform="rotate(72 30 30)"/>
        <ellipse cx="30" cy="10" rx="8" ry="14" :fill="f.c1" :opacity="f.op" transform="rotate(144 30 30)"/>
        <ellipse cx="30" cy="10" rx="8" ry="14" :fill="f.c2" :opacity="f.op * 0.88" transform="rotate(216 30 30)"/>
        <ellipse cx="30" cy="10" rx="8" ry="14" :fill="f.c1" :opacity="f.op" transform="rotate(288 30 30)"/>
        <circle cx="30" cy="30" r="7" fill="#F4E0B0" :opacity="Math.min(f.op + 0.18, 0.85)"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { gsap } from 'gsap'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
const svgOpacity = computed(() => isDark.value ? '0.22' : '1')

const flowerRefs = ref([])
const tweens = []

const flowers = [
  { x: '3%',  y: '8%',  size: 62, delay: 0,   c1: '#F9D0D8', c2: '#BBDAF7', op: 0.42, glow: 'rgba(249,208,216,0.7)' },
  { x: '89%', y: '5%',  size: 50, delay: 1.6,  c1: '#BBDAF7', c2: '#F9D0D8', op: 0.38, glow: 'rgba(187,218,247,0.7)' },
  { x: '80%', y: '70%', size: 74, delay: 0.7,  c1: '#F9D0D8', c2: '#F4E0B0', op: 0.32, glow: 'rgba(249,208,216,0.6)' },
  { x: '1%',  y: '60%', size: 46, delay: 2.3,  c1: '#F4E0B0', c2: '#F9D0D8', op: 0.38, glow: 'rgba(244,224,176,0.7)' },
  { x: '91%', y: '35%', size: 56, delay: 0.4,  c1: '#BBDAF7', c2: '#F9D0D8', op: 0.35, glow: 'rgba(187,218,247,0.7)' },
  { x: '46%', y: '91%', size: 40, delay: 1.9,  c1: '#F9D0D8', c2: '#BBDAF7', op: 0.33, glow: 'rgba(249,208,216,0.6)' },
  { x: '22%', y: '4%',  size: 52, delay: 1.0,  c1: '#F4E0B0', c2: '#BBDAF7', op: 0.34, glow: 'rgba(244,224,176,0.65)' },
  { x: '63%', y: '2%',  size: 44, delay: 1.2,  c1: '#F9D0D8', c2: '#F4E0B0', op: 0.37, glow: 'rgba(249,208,216,0.6)' },
  { x: '14%', y: '42%', size: 38, delay: 2.9,  c1: '#BBDAF7', c2: '#F9D0D8', op: 0.28, glow: 'rgba(187,218,247,0.6)' },
  { x: '70%', y: '48%', size: 60, delay: 0.2,  c1: '#F9D0D8', c2: '#BBDAF7', op: 0.3,  glow: 'rgba(249,208,216,0.6)' },
  { x: '36%', y: '76%', size: 48, delay: 1.4,  c1: '#F4E0B0', c2: '#F9D0D8', op: 0.36, glow: 'rgba(244,224,176,0.65)' },
  { x: '54%', y: '16%', size: 54, delay: 0.6,  c1: '#BBDAF7', c2: '#F4E0B0', op: 0.31, glow: 'rgba(187,218,247,0.6)' },
  { x: '7%',  y: '28%', size: 42, delay: 3.1,  c1: '#F9D0D8', c2: '#BBDAF7', op: 0.28, glow: 'rgba(249,208,216,0.6)' },
  { x: '94%', y: '82%', size: 58, delay: 1.7,  c1: '#BBDAF7', c2: '#F9D0D8', op: 0.33, glow: 'rgba(187,218,247,0.65)' },
  { x: '32%', y: '52%', size: 34, delay: 2.5,  c1: '#F4E0B0', c2: '#BBDAF7', op: 0.25, glow: 'rgba(244,224,176,0.55)' },
  { x: '77%', y: '22%', size: 46, delay: 0.9,  c1: '#F9D0D8', c2: '#F4E0B0', op: 0.3,  glow: 'rgba(249,208,216,0.6)' },
]

onMounted(() => {
  flowerRefs.value.forEach((el, i) => {
    if (!el) return
    const f = flowers[i]

    const driftX = 18 + Math.random() * 22
    const driftY = 14 + Math.random() * 18
    const rot = 10 + Math.random() * 18

    const t = gsap.to(el, {
      x: (Math.random() > 0.5 ? 1 : -1) * driftX,
      y: (Math.random() > 0.5 ? 1 : -1) * driftY,
      rotation: (Math.random() > 0.5 ? 1 : -1) * rot,
      duration: 6 + Math.random() * 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: f.delay
    })
    tweens.push(t)
  })
})

onBeforeUnmount(() => {
  tweens.forEach(t => t.kill())
})
</script>

<style scoped>
.flower-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.flower-item {
  position: absolute;
  pointer-events: auto;
  cursor: default;
  transition: filter 0.5s ease, transform 0.5s ease;
  transform-origin: center center;
  will-change: transform;
}

.flower-item svg {
  opacity: v-bind(svgOpacity);
  transition: opacity 0.3s ease;
}

.flower-item:hover {
  filter: drop-shadow(0 0 14px var(--glow)) drop-shadow(0 0 6px var(--glow));
  transform: scale(1.18);
  transition: filter 0.3s ease, transform 0.3s ease;
}
</style>
