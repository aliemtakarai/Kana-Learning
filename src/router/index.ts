import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hiragana from '../views/Hiragana.vue'
import Katakana from '../views/Katakana.vue'
import Quiz from '../views/Quiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hiragana',
      name: 'hiragana',
      component: Hiragana
    },
    {
      path: '/katakana',
      name: 'katakana',
      component: Katakana
    },
    {
      path: '/quiz/:level?',
      name: 'quiz',
      component: Quiz,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
