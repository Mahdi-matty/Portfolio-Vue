import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('../views/Contact.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: ()=>import('../views/Resume.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: ()=>import('../views/Portfolio.vue')
    },
  ]
})

export default router
