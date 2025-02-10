import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/components/Inicio.vue'
import Download from '@/components/Download.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/download',
      name: 'download',
      component: Download,
    }
  ],
})

export default router
