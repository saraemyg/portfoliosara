<template>
  <teleport to="body">
    <transition name="lb-fade">
      <div
        v-if="visible"
        class="lb-overlay"
        @click.self="$emit('close')"
      >
        <!-- Close -->
        <button class="lb-close" @click="$emit('close')" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <!-- Prev -->
        <button
          class="lb-arrow lb-prev"
          @click="prev"
          :disabled="idx === 0"
          aria-label="Previous photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <!-- Image -->
        <div class="lb-img-wrap">
          <transition name="lb-img" mode="out-in">
            <img
              :key="idx"
              :src="images[idx]"
              :alt="`Photo ${idx + 1} of ${images.length}`"
              class="lb-img"
            />
          </transition>
          <p class="lb-counter mono">{{ idx + 1 }} / {{ images.length }}</p>
        </div>

        <!-- Next -->
        <button
          class="lb-arrow lb-next"
          @click="next"
          :disabled="idx === images.length - 1"
          aria-label="Next photo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  images:     { type: Array,   required: true },
  startIndex: { type: Number,  default: 0 },
  visible:    { type: Boolean, default: false }
})
const emit = defineEmits(['close'])

const idx = ref(props.startIndex)

watch(() => props.startIndex, v => { idx.value = v })

watch(() => props.visible, open => {
  if (open) {
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

function prev() { if (idx.value > 0) idx.value-- }
function next() { if (idx.value < props.images.length - 1) idx.value++ }

function onKey(e) {
  if (e.key === 'Escape')     emit('close')
  if (e.key === 'ArrowLeft')  prev()
  if (e.key === 'ArrowRight') next()
}
</script>

<style scoped>
.lb-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(10, 8, 14, 0.88);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
}

/* Image */
.lb-img-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: min(90vw, 820px);
  max-height: 90vh;
}

.lb-img {
  max-width: 100%;
  max-height: calc(90vh - 48px);
  object-fit: contain;
  border-radius: 8px;
  display: block;
  box-shadow: 0 24px 64px rgba(0,0,0,0.5);
}

.lb-counter {
  font-family: var(--font-mono);
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.1em;
}

/* Arrows */
.lb-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(187, 218, 247, 0.12);
  border: 1px solid rgba(187, 218, 247, 0.25);
  color: rgba(255,255,255,0.85);
  flex-shrink: 0;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.lb-arrow:hover:not(:disabled) {
  background: rgba(187, 218, 247, 0.28);
  color: #fff;
  transform: scale(1.08);
}

.lb-arrow:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}

/* Close button */
.lb-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, color 0.2s ease;
}

.lb-close:hover {
  background: rgba(255,255,255,0.18);
  color: #fff;
}

/* Overlay enter/leave */
.lb-fade-enter-active,
.lb-fade-leave-active { transition: opacity 0.25s ease; }
.lb-fade-enter-from,
.lb-fade-leave-to    { opacity: 0; }

/* Image swap */
.lb-img-enter-active,
.lb-img-leave-active { transition: opacity 0.18s ease; }
.lb-img-enter-from,
.lb-img-leave-to     { opacity: 0; }
</style>
