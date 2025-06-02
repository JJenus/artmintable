import { createRouter, createWebHistory } from 'vue-router'
import SupportPage from '../views/SupportPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', component: SupportPage }],
})

export default router
