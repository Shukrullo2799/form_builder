import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/formList/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/field-upsert/:id?',
      name: 'field-upsert',
      component: () => import('../views/field/Index.vue')
    },
    {
      path: '/field/:id',
      name: 'field',
      component: () => import('../views/field/View.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/Index.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
