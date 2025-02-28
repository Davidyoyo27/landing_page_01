import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/components/Inicio.vue'
import Download from '@/components/Download.vue'
import About from '@/components/About.vue'
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'

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
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/privacy_policy',
      name: 'privacy_policy',
      component: PrivacyPolicy,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' });
        }, 100);
      });
    }
  }
})

export default router
