<template>
  <div class="quiz-page">
    <!-- Quiz Setup -->
    <div v-if="!quizStarted" class="quiz-setup">
      <div class="container">
        <div class="setup-content">
          <div class="setup-header">
            <h1>{{ t('quiz.title') }}</h1>
            <p>{{ t('quiz.selectLevel') }}</p>
          </div>

          <div class="level-selection">
            <div 
              v-for="level in quizLevels" 
              :key="level.id"
              :class="['level-card', { selected: selectedLevel === level.id }]"
              @click="selectedLevel = level.id"
            >
              <div class="level-icon">{{ level.icon }}</div>
              <div class="level-info">
                <h3>{{ t(`quiz.level.${level.id}`) }}</h3>
                <p>{{ level.description[currentLanguage] }}</p>
                <div class="level-stats">
                  <span>{{ level.characterCount }} {{ t('common.total') }}</span>
                  <span>{{ level.estimatedTime }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="quiz-options">
            <div class="option-group">
              <h4>{{ t('quiz.types.kanaToRomaji') }}</h4>
              <div class="radio-group">
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
            </div>
          </div>

          <button 
            @click="startQuiz" 
            :disabled="!selectedLevel"
            class="start-quiz-btn"
          >
            {{ t('common.start') }} {{ t('quiz.title') }}
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
              <span class="level-badge">{{ t(`quiz.level.${selectedLevel}`) }}</span>
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
            <div class="question-type">{{ t(`quiz.types.${quizType}`) }}</div>
            
            <div class="question-content">
              <div v-if="quizType === 'kanaToRomaji'" class="question-text">
                {{ t('quiz.whatIs') }} 
                <span class="highlight">{{ t('quiz.romaji') }}</span> 
                {{ t('quiz.character') }}
              </div>
              <div v-else class="question-text">
                {{ t('quiz.whatIs') }} 
                <span class="highlight">{{ t('quiz.character') }}</span> 
                {{ t('quiz.romaji') }}
              </div>

              <div class="question-display">
                <div v-if="quizType === 'kanaToRomaji'" class="kana-display">
                  {{ currentQuestion?.kana }}
                </div>
                <div v-else class="romaji-display">
                  {{ currentQuestion?.romaji }}
                </div>
              </div>

              <div class="answer-instruction">
                {{ t('quiz.chooseAnswer') }}
              </div>
            </div>

            <!-- Answer Options -->
            <div class="answer-options">
              <button
                v-for="(option, index) in currentOptions"
                :key="index"
                :class="['answer-btn', { 
                  selected: selectedAnswer === option,
                  correct: showResult && option === correctAnswer,
                  incorrect: showResult && selectedAnswer === option && option !== correctAnswer
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
import { ref, computed, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import { allHiragana, allKatakana, hiraganaBasic, katakanaBasic } from '../data/kanaData'
import type { KanaCharacter } from '../data/kanaData'

interface Props {
  level?: string
}

const props = withDefaults(defineProps<Props>(), {
  level: 'basic'
})

const { t, currentLanguage } = useI18n()

// Quiz state
const quizStarted = ref(false)
const quizCompleted = ref(false)
const selectedLevel = ref(props.level || 'basic')
const quizType = ref<'kanaToRomaji' | 'romajiToKana'>('kanaToRomaji')

// Question state
const currentQuestionIndex = ref(0)
const currentQuestion = ref<KanaCharacter | null>(null)
const currentOptions = ref<string[]>([])
const selectedAnswer = ref<string>('')
const showResult = ref(false)
const correctAnswers = ref(0)
const quizQuestions = ref<KanaCharacter[]>([])

const quizLevels = [
  {
    id: 'basic',
    icon: '🌱',
    description: { en: 'Hiragana & Katakana fundamentals', id: 'Dasar-dasar Hiragana & Katakana' },
    characterCount: 92,
    estimatedTime: '~10 mins'
  },
  {
    id: 'intermediate',
    icon: '🔥',
    description: { en: 'Including Dakuten marks', id: 'Termasuk tanda Dakuten' },
    characterCount: 132,
    estimatedTime: '~15 mins'
  },
  {
    id: 'advanced',
    icon: '⚡',
    description: { en: 'Complete character set', id: 'Set karakter lengkap' },
    characterCount: 152,
    estimatedTime: '~20 mins'
  }
]

const totalQuestions = computed(() => Math.min(quizQuestions.value.length, 10))
const correctAnswer = computed(() => {
  if (!currentQuestion.value) return ''
  return quizType.value === 'kanaToRomaji' 
    ? currentQuestion.value.romaji 
    : currentQuestion.value.kana
})
const isAnswerCorrect = computed(() => selectedAnswer.value === correctAnswer.value)

const getQuizCharacters = (level: string): KanaCharacter[] => {
  switch (level) {
    case 'basic':
      return [...hiraganaBasic, ...katakanaBasic]
    case 'intermediate':
      return [...allHiragana.slice(0, 66), ...allKatakana.slice(0, 66)]
    case 'advanced':
      return [...allHiragana, ...allKatakana]
    default:
      return [...hiraganaBasic, ...katakanaBasic]
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

const generateOptions = (correct: string, allCharacters: KanaCharacter[]): string[] => {
  const options = [correct]
  const otherOptions = allCharacters
    .filter(char => {
      const value = quizType.value === 'kanaToRomaji' ? char.romaji : char.kana
      return value !== correct
    })
    .map(char => quizType.value === 'kanaToRomaji' ? char.romaji : char.kana)
  
  const shuffledOthers = shuffleArray(otherOptions)
  for (let i = 0; i < 3 && i < shuffledOthers.length; i++) {
    options.push(shuffledOthers[i])
  }
  
  return shuffleArray(options)
}

const startQuiz = () => {
  const characters = getQuizCharacters(selectedLevel.value)
  quizQuestions.value = shuffleArray(characters).slice(0, 10)
  currentQuestionIndex.value = 0
  correctAnswers.value = 0
  quizStarted.value = true
  quizCompleted.value = false
  loadQuestion()
}

const loadQuestion = () => {
  if (currentQuestionIndex.value >= quizQuestions.value.length) {
    completeQuiz()
    return
  }

  currentQuestion.value = quizQuestions.value[currentQuestionIndex.value]
  const allCharacters = getQuizCharacters(selectedLevel.value)
  currentOptions.value = generateOptions(correctAnswer.value, allCharacters)
  selectedAnswer.value = ''
  showResult.value = false
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
    loadQuestion()
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
}

const restartQuiz = () => {
  quizCompleted.value = false
  startQuiz()
}

const getResultMessage = (): string => {
  const percentage = (correctAnswers.value / totalQuestions.value) * 100
  if (percentage >= 80) return t('quiz.excellent')
  if (percentage >= 60) return t('quiz.good')
  return t('quiz.needPractice')
}

const getResultSubtitle = (): string => {
  const percentage = (correctAnswers.value / totalQuestions.value) * 100
  if (percentage >= 80) return 'Amazing work! You\'ve mastered this level.'
  if (percentage >= 60) return 'Well done! Keep practicing to improve further.'
  return 'Don\'t give up! Practice makes perfect.'
}

onMounted(() => {
  if (props.level) {
    selectedLevel.value = props.level
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
  padding: 4rem 0;
}

.setup-content {
  text-align: center;
}

.setup-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--chocolate-primary);
  margin-bottom: 1rem;
}

.setup-header p {
  font-size: 1.2rem;
  color: var(--chocolate-light);
  margin-bottom: 3rem;
}

.level-selection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.level-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-align: left;
}

.level-card:hover {
  border-color: var(--chocolate-primary);
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(139, 69, 19, 0.15);
}

.level-card.selected {
  border-color: var(--chocolate-primary);
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  box-shadow: 0 8px 24px rgba(139, 69, 19, 0.3);
  transform: translateY(-4px);
}

.level-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 69, 19, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.level-card.selected .level-icon {
  background: rgba(245, 245, 220, 0.2);
  transform: scale(1.1);
}

.level-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: inherit;
}

.level-info p {
  margin-bottom: 1rem;
  opacity: 0.8;
}

.level-stats {
  display: flex;
  gap: 1rem;
}

.level-stats span {
  background: rgba(139, 69, 19, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
}

.level-card.selected .level-stats span {
  background: rgba(245, 245, 220, 0.2);
}

.quiz-options {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.option-group h4 {
  color: var(--chocolate-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.radio-group {
  display: flex;
  gap: 2rem;
  justify-content: center;
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

.radio-option input[type="radio"]:checked ~ * {
  color: var(--cream);
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
  width: 22px;
  height: 22px;
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
  background: var(--cream);
  border-radius: 50%;
}

.start-quiz-btn {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  border: none;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.start-quiz-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(139, 69, 19, 0.3);
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
  margin-bottom: 3rem;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
}

.progress-section {
  flex: 1;
  max-width: 500px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.question-counter {
  font-weight: 600;
  color: var(--chocolate-primary);
}

.level-badge {
  background: var(--chocolate-primary);
  color: var(--cream);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
}

.progress-bar {
  height: 8px;
  background: rgba(139, 69, 19, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--chocolate-primary), var(--chocolate-light));
  transition: width 0.5s ease;
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
  font-weight: 500;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.question-text {
  text-align: center;
  font-size: 1.2rem;
  color: var(--chocolate-primary);
  margin-bottom: 2rem;
}

.highlight {
  font-weight: 700;
  color: var(--chocolate-light);
}

.question-display {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: var(--cream);
  border-radius: 20px;
}

.kana-display {
  font-size: 4rem;
  font-weight: bold;
  color: var(--chocolate-primary);
}

.romaji-display {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--chocolate-primary);
  font-family: monospace;
}

.answer-instruction {
  text-align: center;
  color: var(--chocolate-light);
  margin-bottom: 2rem;
}

.answer-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.answer-btn {
  padding: 1.5rem 1rem;
  border: 2px solid rgba(139, 69, 19, 0.2);
  border-radius: 16px;
  background: var(--cream);
  color: var(--chocolate-primary);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
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
}

.result-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
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
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.correct-answer {
  font-size: 1rem;
  opacity: 0.8;
}

.next-btn {
  background: linear-gradient(135deg, var(--chocolate-primary), var(--chocolate-light));
  color: var(--cream);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.next-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3);
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
  margin-bottom: 1rem;
}

.results-subtitle {
  font-size: 1.2rem;
  color: var(--chocolate-light);
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

  .results-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .results-actions {
    flex-direction: column;
    align-items: center;
  }

  .level-selection {
    grid-template-columns: 1fr;
  }

  .radio-group {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .question-card {
    padding: 2rem 1.5rem;
  }

  .kana-display {
    font-size: 3rem;
  }

  .romaji-display {
    font-size: 2rem;
  }

  .score-circle {
    width: 120px;
    height: 120px;
  }

  .score-number {
    font-size: 2rem;
  }
}
</style>