import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EvrotransView from '../views/EvrotransView.vue'
import MagView from '../views/MagView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sites/frontend/evrotrans',
      name: 'evrotrans',
      component: EvrotransView
    },
    {
      path: '/sites/keys/mag',
      name: 'mag',
      component: MagView
    }
  ]
})

export default router
