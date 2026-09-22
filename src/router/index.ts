import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hiragana from '../views/Hiragana.vue'
import Katakana from '../views/Katakana.vue'
import Kanji from '../views/Kanji.vue'
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
      path: '/kanji',
      name: 'kanji',
      component: Kanji
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

const pageTitles: Record<string, string> = {
  home: 'Kana Learning - Master Japanese Hiragana, Katakana & JLPT Kanji',
  hiragana: 'Hiragana Characters & Charts - Kana Learning',
  katakana: 'Katakana Characters & Charts - Kana Learning',
  kanji: 'JLPT Kanji Reference (N5-N1) - Kana Learning',
  quiz: 'Japanese Practice Quiz - Kana Learning'
}

router.afterEach((to) => {
  const routeName = (to.name as string) || 'home'
  document.title = pageTitles[routeName] || 'Kana Learning - Master Japanese Hiragana, Katakana & JLPT Kanji'
})

export default router
