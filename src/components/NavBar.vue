<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <!-- Logo/Brand -->
      <RouterLink to="/" class="brand">
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
        <RouterLink to="/quiz" class="nav-link" :class="{ active: $route.name === 'quiz' }">
          {{ t('navigation.quiz') }}
        </RouterLink>
      </div>

      <!-- Language Selector -->
      <div class="language-selector">
        <button 
          :class="['lang-btn', { active: currentLanguage === 'en' }]"
          @click="setLanguage('en')"
        >
          EN
        </button>
        <button 
          :class="['lang-btn', { active: currentLanguage === 'id' }]"
          @click="setLanguage('id')"
        >
          ID
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="mobile-menu-btn" 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isMobileMenuOpen"
      >
        <div class="hamburger" :class="{ open: isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <Transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="mobile-nav">
        <div class="mobile-nav-content">
          <div class="mobile-nav-header">
            <h3 class="mobile-nav-title">{{ t('navigation.home') }}</h3>
            <button class="mobile-close-btn" @click="closeMobileMenu" aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div class="mobile-nav-links">
            <RouterLink 
              to="/" 
              class="mobile-nav-link" 
              @click="closeMobileMenu"
              :class="{ active: $route.name === 'home' }"
            >
              <span class="mobile-link-icon">🏠</span>
              {{ t('navigation.home') }}
            </RouterLink>
            <RouterLink 
              to="/hiragana" 
              class="mobile-nav-link" 
              @click="closeMobileMenu"
              :class="{ active: $route.name === 'hiragana' }"
            >
              <span class="mobile-link-icon">あ</span>
              {{ t('navigation.hiragana') }}
            </RouterLink>
            <RouterLink 
              to="/katakana" 
              class="mobile-nav-link" 
              @click="closeMobileMenu"
              :class="{ active: $route.name === 'katakana' }"
            >
              <span class="mobile-link-icon">カ</span>
              {{ t('navigation.katakana') }}
            </RouterLink>
            <RouterLink 
              to="/quiz" 
              class="mobile-nav-link" 
              @click="closeMobileMenu"
              :class="{ active: $route.name === 'quiz' }"
            >
              <span class="mobile-link-icon">🎯</span>
              {{ t('navigation.quiz') }}
            </RouterLink>
          </div>
          
          <!-- Mobile Language Selector -->
          <div class="mobile-language-selector">
            <span class="mobile-lang-label">Language:</span>
            <div class="mobile-lang-buttons">
              <button 
                :class="['mobile-lang-btn', { active: currentLanguage === 'en' }]"
                @click="setLanguage('en')"
              >
                EN
              </button>
              <button 
                :class="['mobile-lang-btn', { active: currentLanguage === 'id' }]"
                @click="setLanguage('id')"
              >
                ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, currentLanguage, setLanguage } = useI18n()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
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

.mobile-menu-btn {
  display: none;
  background: rgba(139, 69, 19, 0.08);
  border: 2px solid rgba(139, 69, 19, 0.15);
  border-radius: 10px;
  cursor: pointer;
  padding: 0.8rem;
  z-index: 1001;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 2px 4px rgba(139, 69, 19, 0.1);
}

.mobile-menu-btn:hover {
  background: rgba(139, 69, 19, 0.15);
  border-color: rgba(139, 69, 19, 0.3);
  box-shadow: 0 4px 8px rgba(139, 69, 19, 0.15);
  transform: translateY(-1px);
}

.mobile-menu-btn:focus {
  outline: 2px solid var(--chocolate-primary);
  outline-offset: 2px;
}

.hamburger {
  width: 28px;
  height: 20px;
  position: relative;
  transition: all 0.3s ease;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--chocolate-primary);
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: all 0.3s ease;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2) {
  top: 8px;
}

.hamburger span:nth-child(3) {
  top: 16px;
}

.hamburger.open span:nth-child(1) {
  top: 8px;
  transform: rotate(135deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.open span:nth-child(3) {
  top: 8px;
  transform: rotate(-135deg);
}

.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(245, 245, 220, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(139, 69, 19, 0.1);
  box-shadow: 0 8px 32px rgba(139, 69, 19, 0.15);
  max-height: calc(100vh - 70px);
  overflow-y: auto;
}

.mobile-nav-content {
  padding: 0;
}

.mobile-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 1rem;
  border-bottom: 1px solid rgba(139, 69, 19, 0.1);
}

.mobile-nav-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--chocolate-primary);
  margin: 0;
}

.mobile-close-btn {
  background: rgba(139, 69, 19, 0.1);
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--chocolate-primary);
  transition: all 0.3s ease;
}

.mobile-close-btn:hover {
  background: rgba(139, 69, 19, 0.2);
}

.mobile-nav-links {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: var(--chocolate-primary);
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(139, 69, 19, 0.03);
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(139, 69, 19, 0.1), transparent);
  transition: left 0.5s ease;
}

.mobile-nav-link:hover::before {
  left: 100%;
}

.mobile-nav-link:hover {
  background: rgba(139, 69, 19, 0.1);
  border-color: rgba(139, 69, 19, 0.2);
  transform: translateX(5px);
}

.mobile-nav-link.active {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  border-color: transparent;
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  border-left: 4px solid var(--chocolate-light);
}

.mobile-nav-link.active::before {
  width: 100%;
}

.mobile-nav-link.active .mobile-link-icon {
  transform: scale(1.1);
}

.mobile-link-icon {
  font-size: 1.25rem;
  width: 28px;
  text-align: center;
  flex-shrink: 0;
}

.mobile-language-selector {
  padding: 1rem 2rem 2rem;
  border-top: 1px solid rgba(139, 69, 19, 0.1);
}

.mobile-lang-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--chocolate-light);
  margin-bottom: 0.75rem;
}

.mobile-lang-buttons {
  display: flex;
  gap: 0.5rem;
}

.mobile-lang-btn {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid var(--chocolate-light);
  border-radius: 8px;
  background: transparent;
  color: var(--chocolate-primary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-lang-btn:hover {
  background: rgba(139, 69, 19, 0.1);
  border-color: var(--chocolate-primary);
}

.mobile-lang-btn.active {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  transform: scale(1.05);
}

/* Mobile Menu Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .nav-container {
    padding: 0 1rem;
  }

  .language-selector {
    display: none; /* Hide desktop language selector on mobile */
  }

  .brand-text {
    display: none;
  }

  .navbar {
    position: fixed;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .brand-icon {
    gap: 0.1rem;
  }

  .kana-icon {
    font-size: 1.25rem;
  }

  .mobile-nav-content {
    padding: 0;
  }

  .mobile-nav-header {
    padding: 1rem;
  }

  .mobile-nav-links {
    padding: 0.5rem 1rem;
  }

  .mobile-nav-link {
    padding: 0.75rem 1rem;
  }

  .mobile-language-selector {
    padding: 1rem;
  }

  .mobile-menu-btn {
    padding: 0.5rem;
  }
}
</style>
