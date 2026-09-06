<template>
  <div class="quiz-page">
    <!-- Quiz Setup -->
    <div v-if="!quizStarted" class="quiz-setup">
      <div class="container">
        <div class="setup-content">
          <div class="setup-header">
            <h1>{{ t('quiz.title') }}</h1>
            <p>{{ quizCategory === 'kana' ? t('quiz.selectKanaLevel') : t('quiz.selectKanjiLevel') }}</p>
          </div>

          <!-- Category Toggle: Kana Quiz vs Kanji Quiz -->
          <div class="quiz-category-toggle">
            <button 
              :class="['toggle-btn', { active: quizCategory === 'kana' }]"
              @click="setQuizCategory('kana')"
              type="button"
            >
              <span class="toggle-icon">あ</span>
              <span>{{ t('quiz.kanaQuiz') }}</span>
            </button>
            <button 
              :class="['toggle-btn', { active: quizCategory === 'kanji' }]"
              @click="setQuizCategory('kanji')"
              type="button"
            >
              <span class="toggle-icon">漢</span>
              <span>{{ t('quiz.kanjiQuiz') }}</span>
            </button>
          </div>

          <!-- Level Selection Grid -->
          <div class="level-selection">
            <div 
              v-for="level in currentLevelList" 
              :key="level.id"
              :class="['level-card', { selected: selectedLevel === level.id }]"
              @click="selectedLevel = level.id"
            >
              <div class="level-icon">
                <!-- Basic Kana: Book -->
                <svg v-if="level.icon === 'book'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>

                <!-- Intermediate Kana: Flame -->
                <svg v-else-if="level.icon === 'flame'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                </svg>

                <!-- Advanced Kana: Zap -->
                <svg v-else-if="level.icon === 'zap'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>

                <!-- N5: Target -->
                <svg v-else-if="level.icon === 'target'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>

                <!-- N4: Layers -->
                <svg v-else-if="level.icon === 'layers'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>

                <!-- N3: Award -->
                <svg v-else-if="level.icon === 'award'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>

                <!-- N2: Graduation / Cap -->
                <svg v-else-if="level.icon === 'graduation'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>

                <!-- N1: Mountain -->
                <svg v-else-if="level.icon === 'mountain'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 3l4 8 5-5 5 15H2L8 3z"/>
                </svg>

                <!-- All: Trophy -->
                <svg v-else-if="level.icon === 'trophy'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                  <path d="M4 22h16"/>
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34"/>
                  <path d="M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2z"/>
                </svg>
              </div>
              <div class="level-info">
                <h3>{{ level.title ? level.title[currentLanguage] : t(`quiz.level.${level.id}`) }}</h3>
                <p>{{ level.description[currentLanguage] }}</p>
                <div class="level-stats">
                  <span>{{ level.characterCount }} {{ t('common.total') }}</span>
                  <span>{{ level.estimatedTime }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quiz Question Options -->
          <div class="quiz-options">
            <div class="option-group">
              <h4>{{ t('quiz.chooseAnswer') }}</h4>
              <!-- Kana Quiz Types -->
              <div v-if="quizCategory === 'kana'" class="radio-group">
                <label class="radio-option">
                  <input 
                    type="radio" 
                    value="kanaToRomaji" 
                    v-model="quizType"
                  >
                  <span class="radio-custom"></span>
                  {{ t('quiz.types.kanaToRomaji') }}
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    value="romajiToKana" 
                    v-model="quizType"
                  >
                  <span class="radio-custom"></span>
                  {{ t('quiz.types.romajiToKana') }}
                </label>
              </div>

              <!-- Kanji Quiz Types -->
              <div v-else class="radio-group kanji-radios">
                <label class="radio-option">
                  <input 
                    type="radio" 
                    value="kanjiToMeaning" 
                    v-model="quizType"
                  >
                  <span class="radio-custom"></span>
                  {{ t('quiz.types.kanjiToMeaning') }}
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    value="meaningToKanji" 
                    v-model="quizType"
                  >
                  <span class="radio-custom"></span>
                  {{ t('quiz.types.meaningToKanji') }}
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    value="kanjiToReading" 
                    v-model="quizType"
                  >
                  <span class="radio-custom"></span>
                  {{ t('quiz.types.kanjiToReading') }}
                </label>
              </div>
            </div>
          </div>

          <button 
            @click="startQuiz" 
            :disabled="!selectedLevel"
            class="start-quiz-btn"
          >
            {{ t('common.start') }} {{ quizCategory === 'kana' ? t('quiz.kanaQuiz') : t('quiz.kanjiQuiz') }}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Active Quiz -->
    <div v-else-if="!quizCompleted" class="active-quiz">
      <div class="container">
        <!-- Quiz Header -->
        <div class="quiz-header">
          <div class="progress-section">
            <div class="progress-info">
              <span class="question-counter">
                {{ t('quiz.question') }} {{ currentQuestionIndex + 1 }} {{ t('quiz.of') }} {{ totalQuestions }}
              </span>
              <span class="level-badge">{{ getLevelBadgeText() }}</span>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }"
              ></div>
            </div>
          </div>

          <button @click="quitQuiz" class="quit-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ t('common.back') }}
          </button>
        </div>

        <!-- Question Section -->
        <div class="question-section">
          <div class="question-card">
            <div class="question-type">{{ getQuestionTypeLabel() }}</div>
            
            <div class="question-content">
              <div class="question-text">
                {{ getQuestionPromptText() }}
              </div>

              <div class="question-display">
                <div v-if="currentQuestion?.isChar" class="kana-display">
                  {{ currentQuestion?.prompt }}
                </div>
                <div v-else class="romaji-display">
                  {{ currentQuestion?.prompt }}
                </div>
              </div>

              <div class="answer-instruction">
                {{ t('quiz.chooseAnswer') }}
              </div>
            </div>

            <!-- Answer Options -->
            <div class="answer-options" :class="{ 'single-col': isLongOptionMode }">
              <button
                v-for="(option, index) in currentQuestion?.options"
                :key="index"
                :class="['answer-btn', { 
                  selected: selectedAnswer === option,
                  correct: showResult && option === correctAnswer,
                  incorrect: showResult && selectedAnswer === option && option !== correctAnswer,
                  'char-btn': isCharAnswerMode
                }]"
                @click="selectAnswer(option)"
                :disabled="showResult"
              >
                {{ option }}
              </button>
            </div>

            <!-- Result Feedback -->
            <div v-if="showResult" class="result-feedback">
              <div :class="['result-message', { correct: isAnswerCorrect, incorrect: !isAnswerCorrect }]">
                <div class="result-icon">
                  <svg v-if="isAnswerCorrect" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="result-text">
                  <div class="result-title">
                    {{ isAnswerCorrect ? t('quiz.correct') : t('quiz.incorrect') }}
                  </div>
                  <div v-if="!isAnswerCorrect" class="correct-answer">
                    {{ t('quiz.correctAnswer') }} {{ correctAnswer }}
                  </div>
                </div>
              </div>

              <!-- Study Explanation Card for Kanji -->
              <div v-if="quizCategory === 'kanji' && currentQuestion?.rawKanji" class="kanji-study-card">
                <div class="study-card-top">
                  <span class="study-kanji">{{ currentQuestion.rawKanji.kanji }}</span>
                  <div class="study-details">
                    <div class="study-meaning">{{ currentQuestion.rawKanji.meaning[currentLanguage] }}</div>
                    <div class="study-readings">
                      <span v-if="currentQuestion.rawKanji.onyomi"><strong>On:</strong> {{ currentQuestion.rawKanji.onyomi }}</span>
                      <span v-if="currentQuestion.rawKanji.kunyomi"><strong>Kun:</strong> {{ currentQuestion.rawKanji.kunyomi }}</span>
                    </div>
                  </div>
                </div>
                <div v-if="currentQuestion.rawKanji.examples?.length" class="study-example">
                  <span class="study-example-tag">{{ t('common.example') }}:</span>
                  <strong>{{ currentQuestion.rawKanji.examples[0].word }}</strong>
                  <span class="study-reading">({{ currentQuestion.rawKanji.examples[0].reading }})</span>
                  <span>— {{ currentQuestion.rawKanji.examples[0].meaning[currentLanguage] }}</span>
                </div>
              </div>

              <button @click="nextQuestion" class="next-btn">
                {{ currentQuestionIndex < totalQuestions - 1 ? t('quiz.nextQuestion') : t('common.finish') }}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quiz Results -->
    <div v-else class="quiz-results">
      <div class="container">
        <div class="results-content">
          <div class="results-header">
            <div class="score-circle">
              <div class="score-number">{{ Math.round((correctAnswers / totalQuestions) * 100) }}%</div>
              <div class="score-label">{{ t('quiz.finalScore') }}</div>
            </div>
            
            <h2 class="results-title">{{ getResultMessage() }}</h2>
            <p class="results-subtitle">{{ getResultSubtitle() }}</p>
            <div class="results-badge-wrap">
              <span class="level-badge">{{ quizCategory === 'kana' ? t('quiz.kanaQuiz') : t('quiz.kanjiQuiz') }} • {{ getLevelBadgeText() }}</span>
            </div>
          </div>

          <div class="results-stats">
            <div class="stat-card">
              <div class="stat-number">{{ correctAnswers }}</div>
              <div class="stat-label">{{ t('common.correct') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ totalQuestions - correctAnswers }}</div>
              <div class="stat-label">{{ t('common.incorrect') }}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">{{ totalQuestions }}</div>
              <div class="stat-label">{{ t('common.total') }}</div>
            </div>
          </div>

          <div class="results-actions">
            <button @click="restartQuiz" class="action-btn primary">
              {{ t('quiz.restartQuiz') }}
            </button>
            <button @click="quitQuiz" class="action-btn tertiary">
              {{ t('quiz.changeLevel') }}
            </button>
            <button @click="$router.push('/')" class="action-btn secondary">
              {{ t('quiz.backToHome') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { allHiragana, allKatakana, hiraganaBasic, katakanaBasic } from '../data/kanaData'
import type { KanaCharacter } from '../data/kanaData'
import { kanjiN5, kanjiN4, kanjiN3, kanjiN2, kanjiN1, allKanji } from '../data/kanjiData'
import type { KanjiCharacter } from '../data/kanjiData'

interface Props {
  level?: string
}

const props = withDefaults(defineProps<Props>(), {
  level: ''
})

const route = useRoute()
const router = useRouter()
const { t, currentLanguage } = useI18n()

// Quiz state
const quizStarted = ref(false)
const quizCompleted = ref(false)
const quizCategory = ref<'kana' | 'kanji'>('kana')
const selectedLevel = ref('basic')
const quizType = ref<string>('kanaToRomaji')

interface QuestionData {
  prompt: string
  isChar: boolean
  correctAnswer: string
  options: string[]
  rawKana?: KanaCharacter
  rawKanji?: KanjiCharacter
}

// Question state
const currentQuestionIndex = ref(0)
const selectedAnswer = ref<string>('')
const showResult = ref(false)
const correctAnswers = ref(0)
const quizQuestions = ref<QuestionData[]>([])

const kanaQuizLevels = [
  {
    id: 'basic',
    icon: 'book',
    title: { en: 'Basic Kana', id: 'Kana Dasar' },
    description: { en: 'Hiragana & Katakana fundamentals', id: 'Dasar-dasar Hiragana & Katakana' },
    characterCount: 92,
    estimatedTime: '~10 mins'
  },
  {
    id: 'intermediate',
    icon: 'flame',
    title: { en: 'Intermediate Kana', id: 'Kana Menengah' },
    description: { en: 'Including Dakuten & Handakuten marks', id: 'Termasuk tanda Dakuten & Handakuten' },
    characterCount: 142,
    estimatedTime: '~15 mins'
  },
  {
    id: 'advanced',
    icon: 'zap',
    title: { en: 'Advanced Kana', id: 'Kana Lengkap' },
    description: { en: 'Complete character set with combinations', id: 'Set karakter lengkap dengan kombinasi' },
    characterCount: 208,
    estimatedTime: '~20 mins'
  }
]

const kanjiQuizLevels = [
  {
    id: 'N5',
    icon: 'target',
    title: { en: 'JLPT N5', id: 'JLPT N5' },
    description: { en: 'Beginner - Numbers, time, core daily kanji', id: 'Dasar - Angka, waktu, kanji sehari-hari' },
    characterCount: kanjiN5.length,
    estimatedTime: '~5 mins'
  },
  {
    id: 'N4',
    icon: 'layers',
    title: { en: 'JLPT N4', id: 'JLPT N4' },
    description: { en: 'Elementary - Verbs, family, shop, daily actions', id: 'Pemula Lanjutan - Kata kerja, keluarga, toko' },
    characterCount: kanjiN4.length,
    estimatedTime: '~5 mins'
  },
  {
    id: 'N3',
    icon: 'award',
    title: { en: 'JLPT N3', id: 'JLPT N3' },
    description: { en: 'Intermediate - Society, decisions, rules', id: 'Menengah - Masyarakat, keputusan, aturan' },
    characterCount: kanjiN3.length,
    estimatedTime: '~5 mins'
  },
  {
    id: 'N2',
    icon: 'graduation',
    title: { en: 'JLPT N2', id: 'JLPT N2' },
    description: { en: 'Upper Intermediate - Abstract concepts, news, business', id: 'Menengah Atas - Konsep abstrak, berita, bisnis' },
    characterCount: kanjiN2.length,
    estimatedTime: '~5 mins'
  },
  {
    id: 'N1',
    icon: 'mountain',
    title: { en: 'JLPT N1', id: 'JLPT N1' },
    description: { en: 'Advanced - Formal nuance, literature, mastery', id: 'Lanjutan - Nuansa formal, sastra, tingkat mahir' },
    characterCount: kanjiN1.length,
    estimatedTime: '~5 mins'
  },
  {
    id: 'all',
    icon: 'trophy',
    title: { en: 'All Levels (N5-N1)', id: 'Semua Level (N5-N1)' },
    description: { en: 'Master Challenge - Mixed kanji across all levels', id: 'Tantangan Master - Campuran kanji semua level' },
    characterCount: allKanji.length,
    estimatedTime: '~10 mins'
  }
]

const currentLevelList = computed(() => {
  return quizCategory.value === 'kana' ? kanaQuizLevels : kanjiQuizLevels
})

const setQuizCategory = (category: 'kana' | 'kanji') => {
  quizCategory.value = category
  if (category === 'kanji') {
    selectedLevel.value = 'N5'
    quizType.value = 'kanjiToMeaning'
  } else {
    selectedLevel.value = 'basic'
    quizType.value = 'kanaToRomaji'
  }
}

const totalQuestions = computed(() => quizQuestions.value.length || 10)
const currentQuestion = computed(() => quizQuestions.value[currentQuestionIndex.value] || null)
const correctAnswer = computed(() => currentQuestion.value?.correctAnswer || '')
const isAnswerCorrect = computed(() => selectedAnswer.value === correctAnswer.value)

const isCharAnswerMode = computed(() => {
  return quizType.value === 'romajiToKana' || quizType.value === 'meaningToKanji'
})

const isLongOptionMode = computed(() => {
  return quizType.value === 'kanjiToMeaning' || quizType.value === 'kanjiToReading'
})

const getKanaCharacters = (level: string): KanaCharacter[] => {
  switch (level) {
    case 'basic':
      return [...hiraganaBasic, ...katakanaBasic]
    case 'intermediate':
      return [...allHiragana.slice(0, 71), ...allKatakana.slice(0, 71)]
    case 'advanced':
      return [...allHiragana, ...allKatakana]
    default:
      return [...hiraganaBasic, ...katakanaBasic]
  }
}

const getKanjiCharacters = (level: string): KanjiCharacter[] => {
  switch (level) {
    case 'N5': return kanjiN5
    case 'N4': return kanjiN4
    case 'N3': return kanjiN3
    case 'N2': return kanjiN2
    case 'N1': return kanjiN1
    case 'all': return allKanji
    default: return kanjiN5
  }
}

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const formatReading = (k: KanjiCharacter): string => {
  if (k.onyomi && k.kunyomi) {
    return `${k.onyomi} / ${k.kunyomi}`
  }
  return k.onyomi || k.kunyomi
}

const generateQuestion = (
  item: KanaCharacter | KanjiCharacter,
  category: 'kana' | 'kanji',
  type: string,
  fullPool: (KanaCharacter | KanjiCharacter)[]
): QuestionData => {
  if (category === 'kana') {
    const kanaChar = item as KanaCharacter
    const pool = fullPool as KanaCharacter[]
    if (type === 'kanaToRomaji') {
      const correct = kanaChar.romaji
      const distractors = shuffleArray(
        Array.from(new Set(pool.map(c => c.romaji).filter(r => r !== correct)))
      ).slice(0, 3)
      return {
        prompt: kanaChar.kana,
        isChar: true,
        correctAnswer: correct,
        options: shuffleArray([correct, ...distractors]),
        rawKana: kanaChar
      }
    } else {
      const correct = kanaChar.kana
      const distractors = shuffleArray(
        Array.from(new Set(pool.map(c => c.kana).filter(k => k !== correct)))
      ).slice(0, 3)
      return {
        prompt: kanaChar.romaji,
        isChar: false,
        correctAnswer: correct,
        options: shuffleArray([correct, ...distractors]),
        rawKana: kanaChar
      }
    }
  } else {
    const kanjiChar = item as KanjiCharacter
    const pool = fullPool as KanjiCharacter[]
    const lang = currentLanguage.value

    if (type === 'kanjiToMeaning') {
      const correct = kanjiChar.meaning[lang]
      const distractors = shuffleArray(
        Array.from(new Set(pool.map(k => k.meaning[lang]).filter(m => m !== correct)))
      ).slice(0, 3)
      return {
        prompt: kanjiChar.kanji,
        isChar: true,
        correctAnswer: correct,
        options: shuffleArray([correct, ...distractors]),
        rawKanji: kanjiChar
      }
    } else if (type === 'meaningToKanji') {
      const correct = kanjiChar.kanji
      const distractors = shuffleArray(
        Array.from(new Set(pool.map(k => k.kanji).filter(k => k !== correct)))
      ).slice(0, 3)
      return {
        prompt: kanjiChar.meaning[lang],
        isChar: false,
        correctAnswer: correct,
        options: shuffleArray([correct, ...distractors]),
        rawKanji: kanjiChar
      }
    } else {
      // kanjiToReading
      const correct = formatReading(kanjiChar)
      const distractors = shuffleArray(
        Array.from(new Set(pool.map(k => formatReading(k)).filter(r => r !== correct)))
      ).slice(0, 3)
      return {
        prompt: kanjiChar.kanji,
        isChar: true,
        correctAnswer: correct,
        options: shuffleArray([correct, ...distractors]),
        rawKanji: kanjiChar
      }
    }
  }
}

const startQuiz = () => {
  const pool = quizCategory.value === 'kana' 
    ? getKanaCharacters(selectedLevel.value) 
    : getKanjiCharacters(selectedLevel.value)

  const pickedItems = shuffleArray(pool).slice(0, 10)
  quizQuestions.value = pickedItems.map(item =>
    generateQuestion(item, quizCategory.value, quizType.value, pool)
  )

  currentQuestionIndex.value = 0
  correctAnswers.value = 0
  selectedAnswer.value = ''
  showResult.value = false
  quizStarted.value = true
  quizCompleted.value = false
}

const selectAnswer = (answer: string) => {
  if (showResult.value) return
  selectedAnswer.value = answer
  showResult.value = true
  
  if (isAnswerCorrect.value) {
    correctAnswers.value++
  }
}

const nextQuestion = () => {
  currentQuestionIndex.value++
  if (currentQuestionIndex.value >= totalQuestions.value) {
    completeQuiz()
  } else {
    selectedAnswer.value = ''
    showResult.value = false
  }
}

const completeQuiz = () => {
  quizCompleted.value = true
}

const quitQuiz = () => {
  quizStarted.value = false
  quizCompleted.value = false
  currentQuestionIndex.value = 0
  correctAnswers.value = 0
  selectedAnswer.value = ''
  showResult.value = false
}

const restartQuiz = () => {
  quizCompleted.value = false
  startQuiz()
}

const getQuestionPromptText = (): string => {
  if (quizCategory.value === 'kana') {
    if (quizType.value === 'kanaToRomaji') {
      return `${t('quiz.whatIs')} ${t('quiz.romaji')} ${t('quiz.character')}`
    } else {
      return `${t('quiz.whatIs')} ${t('quiz.character')} ${t('quiz.romaji')}`
    }
  } else {
    if (quizType.value === 'kanjiToMeaning') {
      return t('quiz.whatIsMeaningOf')
    } else if (quizType.value === 'meaningToKanji') {
      return t('quiz.whichKanjiMeans')
    } else {
      return t('quiz.whatIsReadingOf')
    }
  }
}

const getQuestionTypeLabel = (): string => {
  return t(`quiz.types.${quizType.value}`)
}

const getLevelBadgeText = (): string => {
  if (quizCategory.value === 'kana') {
    return t(`quiz.level.${selectedLevel.value}`)
  } else {
    const found = kanjiQuizLevels.find(l => l.id === selectedLevel.value)
    return found ? (found.title[currentLanguage.value] || found.id) : selectedLevel.value
  }
}

const getResultMessage = (): string => {
  const percentage = (correctAnswers.value / totalQuestions.value) * 100
  if (percentage >= 80) return t('quiz.excellent')
  if (percentage >= 60) return t('quiz.good')
  return t('quiz.needPractice')
}

const getResultSubtitle = (): string => {
  const percentage = (correctAnswers.value / totalQuestions.value) * 100
  if (currentLanguage.value === 'id') {
    if (percentage >= 80) return 'Kerja luar biasa! Anda telah menguasai level ini.'
    if (percentage >= 60) return 'Bagus sekali! Terus berlatih untuk hasil yang lebih baik.'
    return 'Jangan menyerah! Latihan membuat sempurna.'
  }
  if (percentage >= 80) return "Amazing work! You've mastered this level."
  if (percentage >= 60) return 'Well done! Keep practicing to improve further.'
  return "Don't give up! Practice makes perfect."
}

const initFromRoute = () => {
  const levelParam = (props.level || (route.query.level as string) || '').toLowerCase()
  const modeParam = ((route.query.mode as string) || '').toLowerCase()

  if (['n5', 'n4', 'n3', 'n2', 'n1', 'all-kanji', 'all', 'kanji'].includes(levelParam) || modeParam === 'kanji') {
    quizCategory.value = 'kanji'
    quizType.value = 'kanjiToMeaning'
    if (['n5', 'n4', 'n3', 'n2', 'n1'].includes(levelParam)) {
      selectedLevel.value = levelParam.toUpperCase()
    } else {
      selectedLevel.value = 'N5'
    }
  } else {
    quizCategory.value = 'kana'
    quizType.value = 'kanaToRomaji'
    selectedLevel.value = ['basic', 'intermediate', 'advanced'].includes(levelParam) ? levelParam : 'basic'
  }
}

onMounted(() => {
  initFromRoute()
})

watch(() => [props.level, route.query], () => {
  if (!quizStarted.value) {
    initFromRoute()
  }
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

.quiz-page {
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  background: var(--cream);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Quiz Setup */
.quiz-setup {
  padding: 3rem 0 5rem;
}

.setup-content {
  text-align: center;
}

.setup-header h1 {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--chocolate-primary);
  margin-bottom: 0.5rem;
}

.setup-header p {
  font-size: 1.15rem;
  color: var(--chocolate-light);
  margin-bottom: 2rem;
}

/* Category Toggle */
.quiz-category-toggle {
  display: inline-flex;
  background: rgba(139, 69, 19, 0.08);
  padding: 0.35rem;
  border-radius: 50px;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  border: 1px solid rgba(139, 69, 19, 0.12);
}

.toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 2rem;
  border-radius: 40px;
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--chocolate-primary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background: rgba(139, 69, 19, 0.06);
}

.toggle-btn.active {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  box-shadow: 0 4px 14px rgba(139, 69, 19, 0.25);
}

.toggle-icon {
  font-size: 1.25rem;
  font-weight: bold;
}

/* Level Selection */
.level-selection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.level-card {
  background: white;
  border-radius: 20px;
  padding: 1.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(139, 69, 19, 0.1);
  text-align: left;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.level-card:hover {
  border-color: var(--chocolate-light);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.12);
}

.level-card.selected {
  border-color: var(--chocolate-primary);
  background: linear-gradient(135deg, rgba(139, 69, 19, 0.04), rgba(205, 133, 63, 0.08));
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.18);
  transform: translateY(-2px);
}

.level-icon {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: rgba(139, 69, 19, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--chocolate-primary);
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.level-icon svg {
  width: 25px;
  height: 25px;
}

.level-card:hover .level-icon {
  background: rgba(139, 69, 19, 0.14);
  transform: scale(1.05);
}

.level-card.selected .level-icon {
  background: rgba(139, 69, 19, 0.12);
  color: #000000;
  border: 1.5px solid rgba(139, 69, 19, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: scale(1.05);
}

.level-card.selected .level-icon svg {
  stroke: #000000;
  color: #000000;
}

.level-info h3 {
  font-size: 1.25rem;
  color: var(--chocolate-primary);
  margin-bottom: 0.35rem;
  font-weight: 700;
}

.level-info p {
  color: var(--chocolate-light);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.level-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.82rem;
  color: var(--chocolate-lightest);
  font-weight: 600;
}

/* Quiz Options */
.quiz-options {
  margin-bottom: 3rem;
}

.option-group h4 {
  font-size: 1.1rem;
  color: var(--chocolate-primary);
  margin-bottom: 1rem;
}

.radio-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-weight: 500;
  color: var(--chocolate-primary);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 2px solid rgba(139, 69, 19, 0.1);
  transition: all 0.3s ease;
  background: white;
}

.radio-option:hover {
  background: rgba(139, 69, 19, 0.05);
  border-color: rgba(139, 69, 19, 0.2);
  transform: translateY(-1px);
}

.radio-option:has(input[type="radio"]:checked) {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  transform: translateY(-2px);
}

.radio-option input[type="radio"] {
  display: none;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid var(--chocolate-light);
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.radio-option input[type="radio"]:checked + .radio-custom {
  border-color: var(--cream);
  background: var(--cream);
  box-shadow: 0 0 0 2px var(--chocolate-primary);
}

.radio-option input[type="radio"]:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: var(--chocolate-primary);
  border-radius: 50%;
}

.start-quiz-btn {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  border: none;
  padding: 1.25rem 3rem;
  border-radius: 50px;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 20px rgba(139, 69, 19, 0.25);
}

.start-quiz-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(139, 69, 19, 0.35);
}

.start-quiz-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Active Quiz */
.active-quiz {
  padding: 2rem 0 4rem;
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.progress-section {
  flex: 1;
  max-width: 600px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.question-counter {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--chocolate-primary);
}

.level-badge {
  background: rgba(139, 69, 19, 0.12);
  color: var(--chocolate-primary);
  padding: 0.35rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.progress-bar {
  height: 8px;
  background: rgba(139, 69, 19, 0.15);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--chocolate-light), var(--chocolate-primary));
  border-radius: 4px;
  transition: width 0.4s ease;
}

.quit-btn {
  background: rgba(139, 69, 19, 0.1);
  color: var(--chocolate-primary);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quit-btn:hover {
  background: rgba(139, 69, 19, 0.2);
}

.question-section {
  max-width: 700px;
  margin: 0 auto;
}

.question-card {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 40px rgba(139, 69, 19, 0.1);
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.question-type {
  text-align: center;
  color: var(--chocolate-light);
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.question-text {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--chocolate-primary);
  margin-bottom: 2rem;
}

.question-display {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: var(--cream);
  border-radius: 20px;
  border: 1px solid rgba(139, 69, 19, 0.08);
}

.kana-display {
  font-size: 4.5rem;
  font-weight: bold;
  color: var(--chocolate-primary);
  line-height: 1.1;
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
}

.romaji-display {
  font-size: 2rem;
  font-weight: 700;
  color: var(--chocolate-primary);
  line-height: 1.3;
}

.answer-instruction {
  text-align: center;
  color: var(--chocolate-light);
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.answer-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.answer-btn {
  padding: 1.25rem 1rem;
  border: 2px solid rgba(139, 69, 19, 0.2);
  border-radius: 16px;
  background: var(--cream);
  color: var(--chocolate-primary);
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 64px;
  line-height: 1.35;
  word-break: break-word;
}

.answer-btn.char-btn {
  font-size: 1.75rem;
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
}

.answer-btn:hover:not(:disabled) {
  border-color: var(--chocolate-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139, 69, 19, 0.15);
}

.answer-btn.selected {
  border-color: var(--chocolate-primary);
  background: var(--chocolate-primary);
  color: var(--cream);
}

.answer-btn.correct {
  border-color: #22c55e;
  background: #22c55e;
  color: white;
}

.answer-btn.incorrect {
  border-color: #ef4444;
  background: #ef4444;
  color: white;
}

.answer-btn:disabled {
  cursor: not-allowed;
}

.result-feedback {
  text-align: center;
  padding: 2rem;
  background: var(--cream);
  border-radius: 20px;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.result-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.result-message.correct {
  color: #22c55e;
}

.result-message.incorrect {
  color: #ef4444;
}

.result-icon {
  flex-shrink: 0;
}

.result-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.correct-answer {
  font-size: 1rem;
  color: var(--chocolate-primary);
  font-weight: 600;
}

/* Kanji Study Card under result */
.kanji-study-card {
  margin-bottom: 1.75rem;
  padding: 1.25rem 1.5rem;
  background: white;
  border: 1px solid rgba(139, 69, 19, 0.15);
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.05);
}

.study-card-top {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 0.75rem;
}

.study-kanji {
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--chocolate-primary);
  line-height: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
}

.study-details {
  flex: 1;
}

.study-meaning {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--chocolate-primary);
  margin-bottom: 0.35rem;
}

.study-readings {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--chocolate-light);
}

.study-example {
  font-size: 0.95rem;
  color: var(--chocolate-primary);
  border-top: 1px dashed rgba(139, 69, 19, 0.15);
  padding-top: 0.6rem;
}

.study-example-tag {
  font-weight: 600;
  color: var(--chocolate-light);
  margin-right: 0.5rem;
}

.study-reading {
  color: var(--chocolate-light);
  margin: 0 0.35rem;
}

.next-btn {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 6px 18px rgba(139, 69, 19, 0.25);
}

.next-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(139, 69, 19, 0.35);
}

/* Quiz Results */
.quiz-results {
  padding: 4rem 0;
  text-align: center;
}

.results-header {
  margin-bottom: 3rem;
}

.score-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 12px 30px rgba(139, 69, 19, 0.3);
}

.score-number {
  font-size: 2.5rem;
  font-weight: 700;
}

.score-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.results-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--chocolate-primary);
  margin-bottom: 0.75rem;
}

.results-subtitle {
  font-size: 1.15rem;
  color: var(--chocolate-light);
  margin-bottom: 1.5rem;
}

.results-badge-wrap {
  display: flex;
  justify-content: center;
}

.results-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--chocolate-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--chocolate-light);
  font-weight: 500;
}

.results-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.action-btn {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.action-btn.primary {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
}

.action-btn.secondary {
  background: var(--cream);
  color: var(--chocolate-primary);
  border-color: var(--chocolate-primary);
}

.action-btn.tertiary {
  background: rgba(139, 69, 19, 0.1);
  color: var(--chocolate-primary);
  border-color: rgba(139, 69, 19, 0.2);
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .quiz-header {
    flex-direction: column;
    gap: 1rem;
  }

  .progress-section {
    width: 100%;
  }

  .answer-options {
    grid-template-columns: 1fr;
  }

  .answer-options.single-col {
    grid-template-columns: 1fr;
  }

  .results-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .results-actions {
    flex-direction: column;
    align-items: stretch;
    max-width: 320px;
    margin: 0 auto;
  }

  .level-selection {
    grid-template-columns: 1fr;
  }

  .radio-group {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .setup-header h1 {
    font-size: 2.2rem;
  }

  .quiz-category-toggle {
    width: 100%;
    justify-content: center;
  }

  .toggle-btn {
    padding: 0.65rem 1.25rem;
    font-size: 0.95rem;
  }

  .question-card {
    padding: 2rem 1.25rem;
  }

  .kana-display {
    font-size: 3.5rem;
  }

  .romaji-display {
    font-size: 1.6rem;
  }

  .score-circle {
    width: 120px;
    height: 120px;
  }

  .score-number {
    font-size: 2rem;
  }

  .study-kanji {
    font-size: 2.25rem;
  }
}
</style>