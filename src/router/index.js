import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EvrotransView from '../views/EvrotransView.vue'
import MagView from '../views/MagView.vue'
import StavgazView from '../views/StavgazView.vue'
import GogocarsView from '../views/GogocarsView.vue'
import PrintboomView from '../views/PrintboomView.vue'
import AcademyofmotivactionView from '../views/AcademyofmotivactionView.vue'
import ProperegovoryView from '../views/ProperegovoryView.vue'
import YandexView from '../views/YandexView.vue'
import BraingamesView from '../views/BraingamesView.vue'
import GendiffView from '../views/GendiffView.vue'
import TodolistView from '../views/TodolistView.vue'
import HangmanView from '../views/HangmanView.vue'
import HexletView from '../views/HexletView.vue'

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
    },
    {
      path: '/sites/keys/stavgaz',
      name: 'stavgaz',
      component: StavgazView
    },
    {
      path: '/sites/keys/gogocars',
      name: 'gogocars',
      component: GogocarsView
    },
    {
      path: '/sites/wordpress/printboom',
      name: 'printboom',
      component: PrintboomView
    },
    {
      path: '/sites/wordpress/academyofmotivaction',
      name: 'academyofmotivaction',
      component: AcademyofmotivactionView
    },
    {
      path: '/sites/html/properegovory',
      name: 'properegovory',
      component: ProperegovoryView
    },
    {
      path: '/pet/tusks/yandex',
      name: 'yandex',
      component: YandexView
    },
    {
      path: '/pet/tusks/hexlet',
      name: 'hexlet',
      component: HexletView
    },
    {
      path: '/pet/educational-projects/brain-games',
      name: 'brain-games',
      component: BraingamesView
    },
    {
      path: '/pet/educational-projects/gendiff',
      name: 'gendiff',
      component: GendiffView
    },
    {
      path: '/pet/pet-projects/todolist',
      name: 'todolist',
      component: TodolistView
    },
    {
      path: '/pet/pet-projects/hangman',
      name: 'hangman',
      component: HangmanView
    }
  ]
})

export default router
