<template>
  <!-- Top Navbar / Header -->
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <!-- Logo/Brand -->
      <RouterLink to="/" class="brand" @click="handleNavClick('home')">
        <div class="brand-icon">
          <span class="kana-icon">あ</span>
          <span class="kana-icon">カ</span>
        </div>
        <span class="brand-text">{{ t('home.title') }}</span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <div class="nav-links desktop-nav">
        <RouterLink to="/" class="nav-link" :class="{ active: $route.name === 'home' }">
          {{ t('navigation.home') }}
        </RouterLink>
        <RouterLink to="/hiragana" class="nav-link" :class="{ active: $route.name === 'hiragana' }">
          {{ t('navigation.hiragana') }}
        </RouterLink>
        <RouterLink to="/katakana" class="nav-link" :class="{ active: $route.name === 'katakana' }">
          {{ t('navigation.katakana') }}
        </RouterLink>
        <RouterLink to="/kanji" class="nav-link" :class="{ active: $route.name === 'kanji' }">
          {{ t('navigation.kanji') }}
        </RouterLink>
        <RouterLink to="/quiz" class="nav-link" :class="{ active: $route.name === 'quiz' }">
          {{ t('navigation.quiz') }}
        </RouterLink>
      </div>

      <!-- Language Selector -->
      <div class="language-selector">
        <button 
          :class="['lang-btn', { active: currentLanguage === 'en' }]"
          @click="setLanguage('en')"
          aria-label="Switch language to English"
        >
          EN
        </button>
        <button 
          :class="['lang-btn', { active: currentLanguage === 'id' }]"
          @click="setLanguage('id')"
          aria-label="Switch language to Indonesian"
        >
          ID
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Bottom Navigation Bar (like native mobile apps) -->
  <nav class="bottom-nav" aria-label="Mobile Navigation">
    <div class="bottom-nav-container">
      <!-- Home -->
      <RouterLink 
        to="/" 
        class="bottom-nav-link" 
        :class="{ active: $route.name === 'home' }"
        @click="handleNavClick('home')"
      >
        <div class="bottom-nav-icon-container">
          <svg class="bottom-nav-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 10.5L12 3l9 7.5v10a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20.5v-10z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <span class="bottom-nav-label">{{ t('navigation.home') }}</span>
      </RouterLink>

      <!-- Hiragana -->
      <RouterLink 
        to="/hiragana" 
        class="bottom-nav-link" 
        :class="{ active: $route.name === 'hiragana' }"
        @click="handleNavClick('hiragana')"
      >
        <div class="bottom-nav-icon-container">
          <span class="bottom-nav-char">あ</span>
        </div>
        <span class="bottom-nav-label">{{ t('navigation.hiragana') }}</span>
      </RouterLink>

      <!-- Katakana -->
      <RouterLink 
        to="/katakana" 
        class="bottom-nav-link" 
        :class="{ active: $route.name === 'katakana' }"
        @click="handleNavClick('katakana')"
      >
        <div class="bottom-nav-icon-container">
          <span class="bottom-nav-char">カ</span>
        </div>
        <span class="bottom-nav-label">{{ t('navigation.katakana') }}</span>
      </RouterLink>

      <!-- Kanji -->
      <RouterLink 
        to="/kanji" 
        class="bottom-nav-link" 
        :class="{ active: $route.name === 'kanji' }"
        @click="handleNavClick('kanji')"
      >
        <div class="bottom-nav-icon-container">
          <span class="bottom-nav-char">漢</span>
        </div>
        <span class="bottom-nav-label">{{ t('navigation.kanji') }}</span>
      </RouterLink>

      <!-- Quiz -->
      <RouterLink 
        to="/quiz" 
        class="bottom-nav-link" 
        :class="{ active: $route.name === 'quiz' }"
        @click="handleNavClick('quiz')"
      >
        <div class="bottom-nav-icon-container">
          <svg class="bottom-nav-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        </div>
        <span class="bottom-nav-label">{{ t('navigation.quiz') }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const route = useRoute()
const { t, currentLanguage, setLanguage } = useI18n()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleNavClick = (routeName: string) => {
  if (route.name === routeName) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Chocolate color palette */
:root {
  --chocolate-primary: #8B4513;
  --chocolate-light: #A0522D;
  --chocolate-lighter: #CD853F;
  --chocolate-lightest: #DEB887;
  --cream: #F5F5DC;
  --warm-beige: #F0E68C;
  --soft-brown: #D2B48C;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(245, 245, 220, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(139, 69, 19, 0.1);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(245, 245, 220, 0.98);
  box-shadow: 0 8px 32px rgba(139, 69, 19, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--chocolate-primary);
  font-weight: 700;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.brand:hover {
  color: var(--chocolate-light);
  transform: translateY(-1px);
}

.brand-icon {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.kana-icon {
  font-size: 1.5rem;
  font-weight: bold;
  animation: float 3s ease-in-out infinite;
}

.kana-icon:nth-child(2) {
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--chocolate-primary);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(139, 69, 19, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  color: var(--chocolate-light);
  background: rgba(139, 69, 19, 0.05);
  transform: translateY(-1px);
}

.nav-link.active {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  transform: translateY(-1px);
}

.nav-link.active::before {
  width: 100%;
}

.language-selector {
  display: flex;
  background: rgba(139, 69, 19, 0.1);
  border-radius: 20px;
  padding: 0.25rem;
  gap: 0.25rem;
}

.lang-btn {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 15px;
  background: transparent;
  color: var(--chocolate-primary);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: rgba(139, 69, 19, 0.1);
  transform: scale(1.05);
}

.lang-btn.active {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  box-shadow: 0 2px 8px rgba(139, 69, 19, 0.3);
  transform: scale(1.05);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* Mobile Bottom Navigation (Hidden on Desktop) */
.bottom-nav {
  display: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .nav-container {
    padding: 0 1.25rem;
    height: 60px;
  }

  .brand {
    font-size: 1.15rem;
    gap: 0.5rem;
  }

  .brand-text {
    display: inline-block;
  }

  .kana-icon {
    font-size: 1.35rem;
  }

  .language-selector {
    display: flex;
    padding: 0.2rem;
    gap: 0.2rem;
  }

  .lang-btn {
    padding: 0.35rem 0.65rem;
    font-size: 0.8rem;
    border-radius: 12px;
  }

  .navbar {
    position: fixed;
    width: 100%;
  }

  /* Bottom Navigation Styles */
  .bottom-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(245, 245, 220, 0.96);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(139, 69, 19, 0.12);
    box-shadow: 0 -4px 20px rgba(139, 69, 19, 0.08);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }

  .bottom-nav-container {
    display: flex;
    width: 100%;
    height: 62px;
    align-items: center;
    justify-content: space-around;
    padding: 0 0.5rem;
    max-width: 540px;
    margin: 0 auto;
  }

  .bottom-nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    text-decoration: none;
    color: rgba(139, 69, 19, 0.62);
    transition: all 0.2s ease;
    padding: 4px 0;
    gap: 2px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  .bottom-nav-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 28px;
    border-radius: 14px;
    transition: all 0.25s ease;
  }

  .bottom-nav-icon {
    display: block;
    color: inherit;
    transition: transform 0.2s ease;
  }

  .bottom-nav-char {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
    transition: transform 0.2s ease;
  }

  .bottom-nav-label {
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: 0.01em;
    color: inherit;
    transition: color 0.2s ease, font-weight 0.2s ease;
    white-space: nowrap;
  }

  /* Active tab */
  .bottom-nav-link.active {
    color: var(--chocolate-primary);
  }

  .bottom-nav-link.active .bottom-nav-icon-container {
    background: rgba(139, 69, 19, 0.12);
  }

  .bottom-nav-link.active .bottom-nav-icon,
  .bottom-nav-link.active .bottom-nav-char {
    transform: scale(1.08);
  }

  .bottom-nav-link.active .bottom-nav-label {
    font-weight: 700;
    color: var(--chocolate-primary);
  }

  /* Press effect */
  .bottom-nav-link:active {
    transform: scale(0.94);
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
    height: 56px;
  }

  .brand {
    font-size: 1.1rem;
  }

  .brand-icon {
    gap: 0.1rem;
  }

  .kana-icon {
    font-size: 1.25rem;
  }

  .bottom-nav-container {
    height: 58px;
    padding: 0 0.25rem;
  }

  .bottom-nav-icon-container {
    width: 40px;
    height: 26px;
  }

  .bottom-nav-char {
    font-size: 1.05rem;
  }

  .bottom-nav-label {
    font-size: 0.65rem;
  }
}

@media (max-width: 360px) {
  .brand-text {
    font-size: 0.95rem;
  }

  .lang-btn {
    padding: 0.3rem 0.5rem;
    font-size: 0.75rem;
  }
}
</style>
