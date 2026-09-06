<template>
  <div class="home-page">
    <!-- Modern Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <!-- Floating shapes removed for performance -->
      </div>
      
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l3.09 8.26L24 12l-8.91 3.74L12 24l-3.09-8.26L0 12l8.91-3.74L12 0z"/>
            </svg>
            <span>{{ t('home.heroText') }}</span>
          </div>
          
          <h1 class="hero-title">
            <span class="title-line">{{ t('home.subtitle') }}</span>
          </h1>
          
          <p class="hero-description">
            {{ t('home.description') }}
          </p>
          
          <div class="hero-cta">
            <button @click="scrollToCharts" class="cta-primary">
              <span>{{ t('home.startLearning') }}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button @click="startQuiz('basic')" class="cta-secondary">
              {{ t('home.takeQuiz') }}
            </button>
          </div>
        </div>
        
        <div class="hero-visual">
          <img src="/hero/image.webp" alt="Hero" class="hero-image" />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ t('home.whyChoose') }}</h2>
          <p>{{ t('home.whyChooseSubtitle') }}</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>{{ t('home.features.progressive.title') }}</h3>
            <p>{{ t('home.features.progressive.description') }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>{{ t('home.features.interactive.title') }}</h3>
            <p>{{ t('home.features.interactive.description') }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M10 4V2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M14 4V2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>{{ t('home.features.mobile.title') }}</h3>
            <p>{{ t('home.features.mobile.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Kana Charts Section -->
    <section class="charts-section" ref="chartsSection">
      <div class="container">
        <div class="section-header">
          <h2>{{ t('home.charts.title') }}</h2>
          <p>{{ t('home.charts.subtitle') }}</p>
        </div>
        
        <!-- Chart Type Selector -->
        <div class="chart-selector">
          <button 
            :class="['selector-btn', { active: activeChart === 'hiragana' }]"
            @click="activeChart = 'hiragana'"
          >
            <span class="btn-icon">ひ</span>
            {{ t('home.charts.hiragana') }}
          </button>
          <button 
            :class="['selector-btn', { active: activeChart === 'katakana' }]"
            @click="activeChart = 'katakana'"
          >
            <span class="btn-icon">カ</span>
            {{ t('home.charts.katakana') }}
          </button>
        </div>
        
        <!-- Chart Container -->
        <div class="modern-chart-container">
          <!-- Category Tabs -->
          <div class="category-tabs">
            <button 
              :class="['category-tab', { active: activeCategory === 'basic' }]"
              @click="activeCategory = 'basic'"
            >
              <span class="tab-number">01</span>
              <span class="tab-text">{{ t('home.charts.basic') }}</span>
            </button>
            <button 
              :class="['category-tab', { active: activeCategory === 'dakuten' }]"
              @click="activeCategory = 'dakuten'"
            >
              <span class="tab-number">02</span>
              <span class="tab-text">{{ t('home.charts.dakuten') }}</span>
            </button>
            <button 
              :class="['category-tab', { active: activeCategory === 'handakuten' }]"
              @click="activeCategory = 'handakuten'"
            >
              <span class="tab-number">03</span>
              <span class="tab-text">{{ t('home.charts.handakuten') }}</span>
            </button>
            <button 
              :class="['category-tab', { active: activeCategory === 'combination' }]"
              @click="activeCategory = 'combination'"
            >
              <span class="tab-number">04</span>
              <span class="tab-text">{{ t('home.charts.combination') }}</span>
            </button>
          </div>
          
          <!-- Kana Grid -->
          <div class="modern-kana-grid">
            <div 
              v-for="(char, index) in getCurrentCharacters" 
              :key="`${activeChart}-${activeCategory}-${index}`"
              class="modern-kana-card"
              @click="playCharacterSound(char)"
            >
              <div class="card-content">
                <div class="kana-display">{{ char.kana }}</div>
                <div class="romaji-display">{{ char.romaji }}</div>
                <div class="card-hover-effect"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quiz CTA Section -->
    <section class="quiz-cta-section">
      <div class="container">
        <div class="cta-content">
          <div class="cta-text">
            <h2>{{ t('home.quiz.title') }}</h2>
            <p>{{ t('home.quiz.subtitle') }}</p>
          </div>
          
          <div class="image-placeholder-small">
          </div>
        </div>
        
        <div class="quiz-levels-modern">
          <div class="level-card modern">
            <div class="level-header">
              <div class="level-info">
                <h3>{{ t('home.quiz.levels.basic.title') }}</h3>
                <p>{{ t('home.quiz.levels.basic.description') }}</p>
              </div>
            </div>
            <div class="level-stats">
              <span class="stat">{{ t('home.quiz.levels.basic.characters') }}</span>
              <span class="stat">{{ t('home.quiz.levels.basic.time') }}</span>
            </div>
            <button @click="startQuiz('basic')" class="level-btn basic">
              {{ t('home.quiz.levels.basic.button') }}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div class="level-card modern">
            <div class="level-header">
              <div class="level-info">
                <h3>{{ t('home.quiz.levels.intermediate.title') }}</h3>
                <p>{{ t('home.quiz.levels.intermediate.description') }}</p>
              </div>
            </div>
            <div class="level-stats">
              <span class="stat">{{ t('home.quiz.levels.intermediate.characters') }}</span>
              <span class="stat">{{ t('home.quiz.levels.intermediate.time') }}</span>
            </div>
            <button @click="startQuiz('intermediate')" class="level-btn intermediate">
              {{ t('home.quiz.levels.intermediate.button') }}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div class="level-card modern">
            <div class="level-header">
              <div class="level-info">
                <h3>{{ t('home.quiz.levels.advanced.title') }}</h3>
                <p>{{ t('home.quiz.levels.advanced.description') }}</p>
              </div>
            </div>
            <div class="level-stats">
              <span class="stat">{{ t('home.quiz.levels.advanced.characters') }}</span>
              <span class="stat">{{ t('home.quiz.levels.advanced.time') }}</span>
            </div>
            <button @click="startQuiz('advanced')" class="level-btn advanced">
              {{ t('home.quiz.levels.advanced.button') }}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import {
  hiraganaBasic,
  hiraganaDakuten,
  hiraganaHandakuten,
  hiraganaCombination,
  katakanaBasic,
  katakanaDakuten,
  katakanaHandakuten,
  katakanaCombination
} from '../data/kanaData'

const router = useRouter()
const { t } = useI18n()

const chartsSection = ref<HTMLElement>()
const activeChart = ref<'hiragana' | 'katakana'>('hiragana')
const activeCategory = ref<'basic' | 'dakuten' | 'handakuten' | 'combination'>('basic')

const getCurrentCharacters = computed(() => {
  const chartType = activeChart.value
  const category = activeCategory.value
  
  if (chartType === 'hiragana') {
    switch (category) {
      case 'basic': return hiraganaBasic
      case 'dakuten': return hiraganaDakuten
      case 'handakuten': return hiraganaHandakuten
      case 'combination': return hiraganaCombination
      default: return hiraganaBasic
    }
  } else {
    switch (category) {
      case 'basic': return katakanaBasic
      case 'dakuten': return katakanaDakuten
      case 'handakuten': return katakanaHandakuten
      case 'combination': return katakanaCombination
      default: return katakanaBasic
    }
  }
})

const scrollToCharts = () => {
  chartsSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const startQuiz = (level: 'basic' | 'intermediate' | 'advanced') => {
  router.push({ name: 'quiz', params: { level } })
}

const playCharacterSound = (char: any) => {
  // Placeholder for character sound functionality
  console.log(`Playing sound for: ${char.kana} (${char.romaji})`)
}

// Defer non-critical animations for smoother first load
onMounted(() => {
  setTimeout(() => {
    document.body.classList.add('animations-ready')
  }, 300)
})
</script>
<style scoped>
.home-page {  
  overflow-x: hidden;
}
/* Soft Chocolate Color Palette */
:root { 
   --chocolate-primary: #8B4513;  
   --chocolate-light: #A0522D;  
   --chocolate-lighter: #CD853F;  
   --chocolate-lightest: #DEB887;  
   --cream: #F5F5DC;  
   --warm-beige: #F0E68C;  
   --soft-brown: #D2B48C;
}
/* Modern Hero Section */
.hero {  
  min-height: 100vh;  
  background: linear-gradient(135deg, var(--chocolate-primary) 0%, var(--chocolate-light) 50%, var(--chocolate-lighter) 100%);  
  position: relative;  
  display: flex;  
  align-items: center;  
  color: var(--cream);}
.hero-background {  
  position: absolute;  
  inset: 0;  
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(245, 245, 220, 0.2);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(245, 245, 220, 0.3);
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
}

.title-highlight {
  display: block;
  background: linear-gradient(45deg, var(--warm-beige), var(--chocolate-lightest), var(--soft-brown));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-primary,
.cta-secondary {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cta-primary {
  background: var(--cream);
  color: var(--chocolate-primary);
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: var(--warm-beige);
}

.cta-secondary {
  background: rgba(245, 245, 220, 0.2);
  color: var(--cream);
  border: 2px solid rgba(245, 245, 220, 0.3);
}

.cta-secondary:hover {
  background: rgba(245, 245, 220, 0.3);
  transform: translateY(-3px);
}

.hero-image {
  width: 100%;
  max-width: 450px;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: 16px;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
}

.image-placeholder {
  width: 400px;
  height: 300px;
  background: rgba(245, 245, 220, 0.1);
  border-radius: 20px;
  border: 2px dashed rgba(245, 245, 220, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.placeholder-content {
  text-align: center;
  z-index: 2;
}

.kana-preview {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
}
.kana-char {
  font-size: 3rem;
  font-weight: bold;
  opacity: 0.7;
  animation: pulse 2s ease-in-out infinite;
  color: var(--warm-beige);
}

.kana-char:nth-child(2) { animation-delay: 0.5s; }
.kana-char:nth-child(3) { animation-delay: 1s; }

@keyframes pulse {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

/* Features Section */
.features-section {
  padding: 6rem 0;
  background: var(--cream);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--chocolate-primary);
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.2rem;
  color: var(--chocolate-light);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(139, 69, 19, 0.15);
  border-color: var(--chocolate-lighter);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cream);
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--chocolate-primary);
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--chocolate-light);
  line-height: 1.6;
}

/* Charts Section */
.charts-section {
  padding: 6rem 0;
  background: white;
}

.chart-selector {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.selector-btn {
  padding: 1rem 2rem;
  background: white;
  border: 2px solid var(--soft-brown);
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--chocolate-primary);
}

.selector-btn:hover {
  border-color: var(--chocolate-primary);
  transform: translateY(-2px);
  background: var(--cream);
}

.selector-btn.active {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  transform: translateY(-2px);
}

.selector-btn.active .btn-icon {
  transform: scale(1.1);
}

.btn-icon {
  font-size: 1.5rem;
}

.modern-chart-container {
  background: white;
  border-radius: 24px;
  box-shadow: 0 8px 40px rgba(139, 69, 19, 0.1);
  padding: 2rem;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.category-tabs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-tab {
  padding: 1.5rem;
  background: var(--cream);
  border: none;
  border-radius: 16px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--chocolate-primary);
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.category-tab:hover {
  background: var(--soft-brown);
  transform: translateX(5px);
}

.category-tab.active {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  transform: translateX(10px);
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  border-left: 4px solid var(--chocolate-light);
}

.tab-number {
  width: 32px;
  height: 32px;
  background: rgba(245, 245, 220, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.category-tab.active .tab-number {
  background: rgba(245, 245, 220, 0.4);
  transform: scale(1.1);
}

.tab-text {
  font-weight: 600;
}

.modern-kana-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 1rem;
}

.modern-kana-card {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  will-change: transform, opacity;
}

.card-content {
  background: var(--cream);
  border-radius: 16px;
  padding: 1.5rem 0.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.modern-kana-card:hover .card-content {
  background: white;
  border-color: var(--chocolate-primary);
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.2);
}

.kana-display {
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--chocolate-primary);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: inline-block;
  line-height: 1.2;
}

.modern-kana-card:hover .kana-display {
  color: var(--chocolate-light);
  transform: scale(1.1);
}

.romaji-display {
  font-size: 0.9rem;
  color: var(--chocolate-light);
  font-weight: 500;
  white-space: nowrap;
}

.card-hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(245, 245, 220, 0.5), transparent);
  transition: left 0.5s ease;
}

.modern-kana-card:hover .card-hover-effect {
  left: 100%;
}

/* Quiz CTA Section */
.quiz-cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--chocolate-primary) 0%, var(--chocolate-light) 100%);
  color: var(--cream);
}

.cta-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
}

.cta-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-text p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.image-placeholder-small {
  width: 200px;
  height: 150px;
  background: rgba(245, 245, 220, 0.1);
  border-radius: 16px;
  border: 2px dashed rgba(245, 245, 220, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.quiz-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.quiz-levels-modern {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.level-card.modern {
  background: rgba(245, 245, 220, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(245, 245, 220, 0.2);
  transition: all 0.3s ease;
}

.level-card.modern:hover {
  transform: translateY(-5px);
  background: rgba(245, 245, 220, 0.15);
}

.level-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.level-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.level-info p {
  opacity: 0.8;
  font-size: 0.9rem;
}

.level-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat {
  background: rgba(245, 245, 220, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.level-btn {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.level-btn.basic { 
  background: linear-gradient(135deg, var(--chocolate-lightest), var(--soft-brown)); 
  color: var(--chocolate-primary);
}
.level-btn.intermediate { 
  background: linear-gradient(135deg, var(--chocolate-lighter), var(--chocolate-light)); 
  color: var(--cream);
}
.level-btn.advanced { 
  background: linear-gradient(135deg, var(--chocolate-light), var(--chocolate-primary)); 
  color: var(--cream);
}

.level-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3);
}

/* Mobile Responsiveness */
@media (max-width: 1024px) {
  .modern-chart-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .category-tabs {
    flex-direction: row;
    overflow-x: auto;
  }
  
  .category-tab {
    min-width: 200px;
  }
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .image-placeholder {
    width: 300px;
    height: 200px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .chart-selector {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .quiz-levels-modern {
    grid-template-columns: 1fr;
  }
  
  .hero-cta {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-container {
    padding: 0 1rem;
  }
  
  .modern-chart-container {
    padding: 1rem;
  }
  
  .category-tabs {
    gap: 0.5rem;
  }
  
  .category-tab {
    padding: 1rem;
    min-width: 150px;
  }
  
  .modern-kana-grid {
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap: 0.8rem;
  }

  .kana-display {
    font-size: 1.6rem;
    white-space: nowrap;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
}

/* Global styles to disable animations until ready */
:global(body):not(.animations-ready) .shape,
:global(body):not(.animations-ready) .floating-card,
:global(body):not(.animations-ready) .modern-kana-card {
  animation: none !important;
  opacity: 0.8;
}
</style>
