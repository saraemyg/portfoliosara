import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function usePageReveal(targets, options = {}) {
  onMounted(() => {
    const els = typeof targets === 'string' ? document.querySelectorAll(targets) : targets
    gsap.fromTo(els,
      { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0)',
        duration: options.duration || 0.8,
        stagger: options.stagger || 0.08,
        ease: 'power2.out',
        delay: options.delay || 0
      }
    )
  })
}

export function useScrollReveal(targets) {
  onMounted(() => {
    const els = typeof targets === 'string' ? document.querySelectorAll(targets) : [targets]
    els.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      )
    })
  })
}

export function useTaglineAnimation(target) {
  onMounted(() => {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (!el) return
    gsap.fromTo(el,
      { letterSpacing: '-0.05em', opacity: 0 },
      { letterSpacing: '0em', opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.3 }
    )
  })
}
