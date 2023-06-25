import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Books',
      component: () => import("../components/Books.vue")
    },
    {
      path: '/ping',
      name: 'ping',
      component: () => import("../components/Ping.vue")
    },
  ]
})

export default router
