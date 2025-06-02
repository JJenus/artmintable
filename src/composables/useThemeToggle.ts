// src/composables/useThemeToggle.js
import { ref } from 'vue'

const theme = ref('light')

export function useThemeToggle() {
  const toggle = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-bs-theme', theme.value)
  }
  return { theme, toggle }
}
