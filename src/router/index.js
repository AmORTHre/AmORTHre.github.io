import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue')
    }
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: () => import('../views/TestView.vue')
    // }
  ]
})

export default router
