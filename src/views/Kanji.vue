<template>
  <div class="kanji-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">漢</span>
            {{ t('navigation.kanji') }}
          </div>
          <h1 class="hero-title">{{ t('kanji.title') }}</h1>
          <p class="hero-description">{{ t('kanji.description') }}</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">{{ kanjiN5.length }}</span>
              <span class="stat-label">JLPT N5</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ kanjiN4.length }}</span>
              <span class="stat-label">JLPT N4</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ kanjiN3.length }}</span>
              <span class="stat-label">JLPT N3</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ kanjiN2.length }}</span>
              <span class="stat-label">JLPT N2</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ kanjiN1.length }}</span>
              <span class="stat-label">JLPT N1</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Info Section -->
    <section class="info-section">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">日</div>
            <h3>JLPT N5</h3>
            <p>{{ kanjiGroups[0].description[currentLanguage] }}</p>
          </div>
          <div class="info-card">
            <div class="info-icon">会</div>
            <h3>JLPT N4</h3>
            <p>{{ kanjiGroups[1].description[currentLanguage] }}</p>
          </div>
          <div class="info-card">
            <div class="info-icon">政</div>
            <h3>JLPT N3</h3>
            <p>{{ kanjiGroups[2].description[currentLanguage] }}</p>
          </div>
          <div class="info-card">
            <div class="info-icon">識</div>
            <h3>JLPT N2</h3>
            <p>{{ kanjiGroups[3].description[currentLanguage] }}</p>
          </div>
          <div class="info-card">
            <div class="info-icon">鑑</div>
            <h3>JLPT N1</h3>
            <p>{{ kanjiGroups[4].description[currentLanguage] }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Kanji Charts Section -->
    <section class="charts-section">
      <div class="container">
        <!-- Category Selector -->
        <div class="category-selector">
          <button 
            :class="['category-btn', { active: activeCategory === 'N5' }]"
            @click="activeCategory = 'N5'"
          >
            <span class="btn-number">01</span>
            <div class="btn-content">
              <span class="btn-title">JLPT N5</span>
              <span class="btn-subtitle">{{ kanjiN5.length }} {{ t('common.total') }}</span>
            </div>
          </button>
          <button 
            :class="['category-btn', { active: activeCategory === 'N4' }]"
            @click="activeCategory = 'N4'"
          >
            <span class="btn-number">02</span>
            <div class="btn-content">
              <span class="btn-title">JLPT N4</span>
              <span class="btn-subtitle">{{ kanjiN4.length }} {{ t('common.total') }}</span>
            </div>
          </button>
          <button 
            :class="['category-btn', { active: activeCategory === 'N3' }]"
            @click="activeCategory = 'N3'"
          >
            <span class="btn-number">03</span>
            <div class="btn-content">
              <span class="btn-title">JLPT N3</span>
              <span class="btn-subtitle">{{ kanjiN3.length }} {{ t('common.total') }}</span>
            </div>
          </button>
          <button 
            :class="['category-btn', { active: activeCategory === 'N2' }]"
            @click="activeCategory = 'N2'"
          >
            <span class="btn-number">04</span>
            <div class="btn-content">
              <span class="btn-title">JLPT N2</span>
              <span class="btn-subtitle">{{ kanjiN2.length }} {{ t('common.total') }}</span>
            </div>
          </button>
          <button 
            :class="['category-btn', { active: activeCategory === 'N1' }]"
            @click="activeCategory = 'N1'"
          >
            <span class="btn-number">05</span>
            <div class="btn-content">
              <span class="btn-title">JLPT N1</span>
              <span class="btn-subtitle">{{ kanjiN1.length }} {{ t('common.total') }}</span>
            </div>
          </button>
        </div>

        <!-- Kanji Grid -->
        <div class="kana-grid-container">
          <div class="kana-grid">
            <div 
              v-for="(char, index) in getCurrentCharacters" 
              :key="`kanji-${activeCategory}-${index}`"
              class="kana-card"
              @click="showCharacterDetails(char)"
            >
              <div class="card-main">
                <div class="kana-char">{{ char.kanji }}</div>
                <div class="romaji-text">{{ char.meaning[currentLanguage] }}</div>
              </div>
              <div class="card-example">
                {{ char.onyomi || char.kunyomi }}
              </div>
              <div class="card-hover-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Character Detail Modal -->
    <Transition name="modal">
      <div v-if="selectedCharacter" class="modal-overlay" @click="closeModal">
        <div class="character-modal" @click.stop>
          <button class="modal-close" @click="closeModal" aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <div class="modal-content">
            <div class="modal-char">{{ selectedCharacter.kanji }}</div>
            <div class="modal-romaji">{{ selectedCharacter.meaning[currentLanguage] }}</div>
            
            <div class="modal-readings">
              <div class="reading-item" v-if="selectedCharacter.onyomi">
                <span class="reading-type">{{ t('kanji.onyomi') }}:</span>
                <span class="reading-value">{{ selectedCharacter.onyomi }}</span>
              </div>
              <div class="reading-item" v-if="selectedCharacter.kunyomi">
                <span class="reading-type">{{ t('kanji.kunyomi') }}:</span>
                <span class="reading-value">{{ selectedCharacter.kunyomi }}</span>
              </div>
              <div class="reading-item">
                <span class="reading-type">{{ t('kanji.strokes') }}:</span>
                <span class="reading-value">{{ selectedCharacter.strokes }}</span>
              </div>
            </div>

            <div class="modal-example">
              <h4>{{ t('common.example') }}:</h4>
              <div class="kanji-examples">
                <div 
                  v-for="(ex, i) in selectedCharacter.examples" 
                  :key="i" 
                  class="example-entry"
                >
                  <span class="ex-word">{{ ex.word }}</span>
                  <span class="ex-reading">({{ ex.reading }})</span>:
                  <span class="ex-meaning">{{ ex.meaning[currentLanguage] }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Quiz CTA -->
    <section class="quiz-cta">
      <div class="container">
        <div class="cta-content">
          <h2>{{ t('quiz.title') }}</h2>
          <p>{{ t('home.quiz.subtitle') }}</p>
          <button @click="$router.push('/quiz/basic')" class="cta-button">
            {{ t('quiz.title') }}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import {
  kanjiN5,
  kanjiN4,
  kanjiN3,
  kanjiN2,
  kanjiN1,
  kanjiGroups
} from '../data/kanjiData'
import type { KanjiCharacter, JLPTLevel } from '../data/kanjiData'

const { t, currentLanguage } = useI18n()

const activeCategory = ref<JLPTLevel>('N5')
const selectedCharacter = ref<KanjiCharacter | null>(null)

const getCurrentCharacters = computed(() => {
  switch (activeCategory.value) {
    case 'N5': return kanjiN5
    case 'N4': return kanjiN4
    case 'N3': return kanjiN3
    case 'N2': return kanjiN2
    case 'N1': return kanjiN1
    default: return kanjiN5
  }
})

const showCharacterDetails = (char: KanjiCharacter) => {
  selectedCharacter.value = char
}

const closeModal = () => {
  selectedCharacter.value = null
}
</script>

<style scoped>
/* Use the same chocolate color palette */
:root {
  --chocolate-primary: #8B4513;
  --chocolate-light: #A0522D;
  --chocolate-lighter: #CD853F;
  --chocolate-lightest: #DEB887;
  --cream: #F5F5DC;
  --warm-beige: #F0E68C;
  --soft-brown: #D2B48C;
}

.kanji-page {
  margin-top: 70px;
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--chocolate-primary) 0%, var(--chocolate-light) 50%, var(--chocolate-lighter) 100%);
  color: var(--cream);
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(245, 245, 220, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  margin-bottom: 2rem;
  border: 1px solid rgba(245, 245, 220, 0.3);
}

.badge-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, var(--cream), var(--warm-beige));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--warm-beige);
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Info Section */
.info-section {
  padding: 4rem 0;
  background: var(--cream);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(139, 69, 19, 0.15);
}

.info-icon {
  font-size: 3rem;
  font-weight: bold;
  color: var(--chocolate-primary);
  margin-bottom: 1rem;
}

.info-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--chocolate-primary);
  margin-bottom: 1rem;
}

.info-card p {
  color: var(--chocolate-light);
  line-height: 1.6;
}

/* Charts Section */
.charts-section {
  padding: 4rem 0;
  background: white;
}

.category-selector {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: var(--cream);
  border: 2px solid rgba(139, 69, 19, 0.1);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  color: var(--chocolate-primary);
  min-width: 200px;
}

.category-btn:hover {
  border-color: var(--chocolate-primary);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.2);
}

.category-btn.active {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  border-color: transparent;
}

.btn-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(139, 69, 19, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.category-btn.active .btn-number {
  background: rgba(245, 245, 220, 0.3);
}

.btn-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.btn-subtitle {
  font-size: 0.85rem;
  opacity: 0.7;
}

.kana-grid-container {
  background: var(--cream);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 8px 40px rgba(139, 69, 19, 0.1);
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.kana-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.kana-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.kana-card:hover {
  border-color: var(--chocolate-primary);
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(139, 69, 19, 0.2);
}

.card-main {
  margin-bottom: 1rem;
}

.kana-char {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--chocolate-primary);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: inline-block;
  line-height: 1.2;
}

.kana-card:hover .kana-char {
  transform: scale(1.1);
  color: var(--chocolate-light);
}

.romaji-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--chocolate-light);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-example {
  font-size: 0.8rem;
  color: var(--chocolate-lighter);
  opacity: 0.8;
  border-top: 1px solid rgba(139, 69, 19, 0.1);
  padding-top: 0.75rem;
  margin-top: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-hover-overlay {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(245, 245, 220, 0.5), transparent);
  transition: left 0.5s ease;
}

.kana-card:hover .card-hover-overlay {
  left: 100%;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
}

.character-modal {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--chocolate-light);
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(139, 69, 19, 0.1);
}

.modal-content {
  text-align: center;
}

.modal-char {
  font-size: 4rem;
  font-weight: bold;
  color: var(--chocolate-primary);
  margin-bottom: 0.5rem;
  white-space: nowrap;
}

.modal-romaji {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--chocolate-light);
  margin-bottom: 1.5rem;
  white-space: nowrap;
}

.modal-readings {
  background: var(--cream);
  border-radius: 16px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.reading-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.reading-type {
  font-weight: 700;
  color: var(--chocolate-primary);
  min-width: 90px;
}

.reading-value {
  color: var(--chocolate-light);
}

.modal-example {
  text-align: left;
  margin-bottom: 1rem;
}

.modal-example h4 {
  color: var(--chocolate-primary);
  margin-bottom: 0.75rem;
}

.kanji-examples {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.example-entry {
  font-size: 0.95rem;
  color: var(--chocolate-light);
}

.ex-word {
  font-weight: 700;
  color: var(--chocolate-primary);
}

.ex-reading {
  color: var(--chocolate-lighter);
}

.ex-meaning {
  color: var(--chocolate-light);
}

/* Quiz CTA */
.quiz-cta {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-button {
  background: var(--cream);
  color: var(--chocolate-primary);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  background: var(--warm-beige);
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-stats {
    gap: 1.5rem;
  }

  .category-selector {
    flex-direction: column;
    align-items: center;
  }

  .category-btn {
    min-width: 280px;
  }

  .kana-grid {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 1rem;
  }

  .character-modal {
    padding: 2rem;
    margin: 1rem;
  }

  .modal-char {
    font-size: 3rem;
    white-space: nowrap;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .kana-grid {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  }

  .kana-card {
    padding: 1rem 0.5rem;
  }

  .kana-char {
    font-size: 1.8rem;
    white-space: nowrap;
  }
}
</style>
