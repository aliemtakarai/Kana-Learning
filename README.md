
# Kana Learning

Kana Learning is a modern, responsive web application designed to help users learn, practice, and master Japanese **Hiragana** and **Katakana** writing systems. Built with Vue 3, TypeScript, and Vite, it provides interactive charts, detailed character cards with bilingual examples, and adaptive quizzes.

## ✨ Features

- **Complete Kana Character Reference (208 Total Characters)**:
  - **Basic (Gojūon)**: 46 Hiragana & 46 Katakana characters.
  - **Dakuten (゛)**: 20 Hiragana & 20 Katakana characters.
  - **Handakuten (゜)**: 5 Hiragana & 5 Katakana characters.
  - **Combination (拗音 / Yōon)**: 33 Hiragana & 33 Katakana blended syllable characters (e.g., `きゃ`, `シュ`, `ちょ`).
- **JLPT Kanji Reference (N5 to N1)**:
  - Categorized by JLPT levels: **N5** (Beginner), **N4** (Elementary), **N3** (Intermediate), **N2** (Upper Intermediate), and **N1** (Advanced).
  - Search by Kanji, On'yomi, Kun'yomi, or English/Indonesian meanings in real time.
  - Interactive modals with stroke counts, readings, meanings, and practical vocabulary examples.
- **Interactive Character Cards & Modals**: View Romaji, On'yomi/Kun'yomi, pronunciation guides, and example vocabulary.
- **Adaptive Quiz System**:
  - **Basic Level (92 characters)**: Hiragana & Katakana fundamentals.
  - **Intermediate Level (142 characters)**: Includes Dakuten & Handakuten marks.
  - **Advanced Level (208 characters)**: Complete character set including all combination syllables.
  - **Dual Quiz Modes**: Kana to Romaji & Romaji to Kana.
  - Instant answer validation, score calculation, and progress tracking.
- **Multilingual Support (i18n)**: Switch seamlessly between English (`EN`) and Indonesian (`ID`).
- **Modern & Mobile-Optimized Design**: Clean chocolate-and-cream aesthetic with full responsiveness.

## 📁 Project Structure

```text
public/             # Static assets (images, favicon)
src/
├── App.vue         # Main application component
├── main.ts         # App entry point
├── components/     # Reusable components (e.g., NavBar)
├── composables/    # Reusable composables (i18n support)
├── data/           # Datasets (kanaData.ts, kanjiData.ts)
├── router/         # Vue Router configuration
└── views/          # Page views (Home, Hiragana, Katakana, Kanji, Quiz)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm, pnpm, or yarn

### Installation
```bash
npm install
```

### Running the App
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
MIT
