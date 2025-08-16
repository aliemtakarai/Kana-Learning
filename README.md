
# Kana Learning

Kana Learning is a web application designed to help users learn and practice Japanese Hiragana and Katakana characters. Built with Vue.js and Vite, it provides interactive quizzes and reference views for both kana sets.

## Features
- Hiragana and Katakana reference pages
- Interactive quiz to test your kana knowledge
- Simple and clean UI
- Responsive design
- Multilingual support (i18n)

## Project Structure
```
public/           # Static assets
src/
  App.vue         # Main app component
  main.ts         # App entry point
  components/     # Shared Vue components
  composables/    # Reusable logic (e.g., i18n)
  data/           # Kana data
  router/         # Vue Router setup
  views/          # Main views (Home, Hiragana, Katakana, Quiz)
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

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

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
