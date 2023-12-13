import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/auth/Index.vue'
import Home from '../views/formList/Index.vue'
import Field from '../views/field/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/field',
      name: 'field',
      component: Field
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    }
  ]
})

export default router