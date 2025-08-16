<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'

// Initialize app
onMounted(() => {
  // Add any global initialization here
  document.title = 'Kana Study - Learn Hiragana & Katakana'
})
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: #333;
  background-color: #F5F5DC;
}

#app {
  min-height: 100vh;
  position: relative;
}

.main-content {
  position: relative;
  z-index: 1;
}

/* Global utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Remove default button styles */
button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}

/* Remove default link styles */
a {
  color: inherit;
  text-decoration: none;
}

/* Focus styles */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #8B4513;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Selection styles */
::selection {
  background: #CD853F;
  color: #F5F5DC;
}

/* Scrollbar styles */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #F5F5DC;
}

::-webkit-scrollbar-thumb {
  background: #CD853F;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #8B4513;
}

/* Responsive typography */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}

/* Prevent horizontal overflow */
html,
body {
  overflow-x: hidden;
}

/* Enhance performance for animations */
.hero,
.features-section,
.charts-section,
.quiz-cta-section {
  will-change: transform;
}

/* Improve text rendering */
h1, h2, h3, h4, h5, h6 {
  text-rendering: optimizeLegibility;
}

/* Loading states */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

/* Print styles */
@media print {
  .navbar,
  .hero-cta,
  .quiz-cta-section {
    display: none;
  }
  
  .container {
    padding: 0;
  }
  
  * {
    background: white !important;
    color: black !important;
  }
}
</style>
