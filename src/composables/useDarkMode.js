import { ref, watch } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  function toggleDark() {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return { isDark, toggleDark }
}
