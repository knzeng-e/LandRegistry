import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Plots from '@/views/Plots.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/declarations',
      name: 'declaration',
      component: () => import('../views/ListOfRequests.vue')
    },
        {
      path: '/plots',
      name: 'plots',
      component: Plots
    }
  ]
})

export default router
