import { ref, computed } from 'vue';

export type Language = 'en' | 'id';

interface TranslationObject {
  [key: string]: string | TranslationObject;
}

interface Translations {
  [key: string]: TranslationObject;
}

const translations: Translations = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      home: 'Home',
      start: 'Start',
      finish: 'Finish',
      score: 'Score',
      total: 'Total',
      correct: 'Correct',
      incorrect: 'Incorrect',
      tryAgain: 'Try Again',
      continue: 'Continue',
      example: 'Example',
      playSound: 'Play Sound'
    },
    navigation: {
      home: 'Home',
      hiragana: 'Hiragana',
      katakana: 'Katakana',
      kanji: 'Kanji',
      quiz: 'Quiz',
      about: 'About'
    },
    home: {
      title: 'Kana Study',
      subtitle: 'Master Hiragana & Katakana',
      description: 'Your complete guide to mastering Japanese writing systems — explore 208 Kana characters, JLPT N5–N1 Kanji, and test your knowledge with interactive quizzes.',
      heroText: 'Interactive Japanese Learning',
      startLearning: 'Start Learning',
      takeQuiz: 'Take Quiz',
      whyChoose: 'Why Choose Our Platform?',
      whyChooseSubtitle: 'Modern tools for effective Japanese learning',
      features: {
        progressive: {
          title: 'Progressive Learning',
          description: 'Start with basics and advance through dakuten and handakuten marks systematically.'
        },
        interactive: {
          title: 'Interactive Quizzes',
          description: 'Test your knowledge with engaging quizzes designed for different skill levels.'
        },
        mobile: {
          title: 'Mobile Optimized',
          description: 'Learn anywhere, anytime with our fully responsive mobile-friendly design.'
        }
      },
      charts: {
        title: 'Character Charts',
        subtitle: 'Complete Hiragana and Katakana reference',
        hiragana: 'Hiragana',
        katakana: 'Katakana',
        basic: 'Basic',
        dakuten: 'Dakuten (゛)',
        handakuten: 'Handakuten (゜)',
        combination: 'Combination (拗音)'
      },
      quiz: {
        title: 'Ready to Test Your Skills?',
        subtitle: 'Challenge yourself with our adaptive quiz system',
        levels: {
          basic: {
            title: 'Basic Level',
            description: 'Hiragana & Katakana fundamentals',
            characters: '92 Characters',
            time: '~10 mins',
            button: 'Start Basic Quiz'
          },
          intermediate: {
            title: 'Intermediate',
            description: 'Including Dakuten & Handakuten marks',
            characters: '142 Characters',
            time: '~15 mins',
            button: 'Start Intermediate'
          },
          advanced: {
            title: 'Advanced',
            description: 'Complete character set with combinations',
            characters: '208 Characters',
            time: '~20 mins',
            button: 'Start Advanced'
          }
        }
      }
    },
    hiragana: {
      title: 'Hiragana Characters',
      description: 'Hiragana (ひらがな) is a Japanese syllabary, one of the components of the Japanese writing system. It represents every sound in the Japanese language.',
      learnMore: 'Hiragana is used for native Japanese words and grammatical elements. Each character represents a sound (syllable) and is phonetic.',
      basicInfo: 'The basic hiragana chart contains 46 characters, representing all the sounds in Japanese.',
      dakutenInfo: 'Dakuten (゛) marks modify the pronunciation of certain hiragana characters.',
      handakutenInfo: 'Handakuten (゜) marks are used only with the \'h\' row characters to create \'p\' sounds.',
      combinationInfo: 'Combination characters (Yōon) combine standard kana with small ya, yu, or yo (ゃ, ゅ, ょ) to create blended syllables.'
    },
    katakana: {
      title: 'Katakana Characters',
      description: 'Katakana (カタカナ) is a Japanese syllabary, used primarily for foreign words, onomatopoeia, and emphasis.',
      learnMore: 'Katakana characters represent the same sounds as hiragana but are used for different purposes in Japanese writing.',
      basicInfo: 'The basic katakana chart contains 46 characters, each corresponding to a hiragana character.',
      dakutenInfo: 'Dakuten (゛) marks modify katakana pronunciation in the same way as hiragana.',
      handakutenInfo: 'Handakuten (゜) marks create \'p\' sounds with katakana \'h\' row characters.',
      combinationInfo: 'Combination katakana (Yōon) combine characters with small ya, yu, or yo (ャ, ュ, ョ) to represent blended sounds.'
    },
    kanji: {
      title: 'Kanji Characters',
      description: 'Kanji (漢字) are Chinese characters used in the Japanese writing system. Explore kanji organized by JLPT levels from N5 to N1.',
      onyomi: 'On\'yomi',
      kunyomi: 'Kun\'yomi',
      meaning: 'Meaning',
      strokes: 'Strokes',
      examples: 'Vocabulary Examples',
      searchPlaceholder: 'Search kanji, reading, or meaning...',
      allLevels: 'All Levels',
      levelN5: 'JLPT N5',
      levelN4: 'JLPT N4',
      levelN3: 'JLPT N3',
      levelN2: 'JLPT N2',
      levelN1: 'JLPT N1',
      totalKanji: 'Total Kanji',
      noResults: 'No kanji found matching your query.'
    },
    quiz: {
      title: 'Quiz',
      kanaQuiz: 'Kana Quiz',
      kanjiQuiz: 'Kanji Quiz',
      selectLevel: 'Select Quiz Level',
      selectKanaLevel: 'Select Kana Quiz Level',
      selectKanjiLevel: 'Select JLPT Kanji Level',
      question: 'Question',
      of: 'of',
      whatIs: 'What is the',
      character: 'character?',
      romaji: 'romaji for',
      whatIsMeaningOf: 'What is the meaning of this Kanji?',
      whichKanjiMeans: 'Which Kanji means:',
      whatIsReadingOf: 'What is the reading of this Kanji?',
      chooseAnswer: 'Choose your answer:',
      correct: 'Correct!',
      incorrect: 'Incorrect!',
      correctAnswer: 'The correct answer is:',
      nextQuestion: 'Next Question',
      finalScore: 'Final Score',
      excellent: 'Excellent!',
      good: 'Good job!',
      needPractice: 'Keep practicing!',
      restartQuiz: 'Restart Quiz',
      backToHome: 'Back to Home',
      changeLevel: 'Change Level / Mode',
      timeUp: 'Time\'s up!',
      timeRemaining: 'Time remaining',
      seconds: 'seconds',
      progress: 'Progress',
      level: {
        basic: 'Basic',
        intermediate: 'Intermediate',
        advanced: 'Advanced'
      },
      types: {
        kanaToRomaji: 'Kana to Romaji',
        romajiToKana: 'Romaji to Kana',
        kanjiToMeaning: 'Kanji to Meaning',
        meaningToKanji: 'Meaning to Kanji',
        kanjiToReading: 'Kanji to Reading'
      }
    },
    about: {
      title: 'About Kana Study',
      description: 'Learn Japanese writing systems with modern, interactive tools.',
      mission: 'Our mission is to make learning Japanese characters accessible and enjoyable for everyone.',
      features: 'Features include interactive character charts, progressive quizzes, and multilingual support.'
    }
  },
  id: {
    common: {
      loading: 'Memuat...',
      error: 'Terjadi kesalahan',
      back: 'Kembali',
      next: 'Selanjutnya',
      previous: 'Sebelumnya',
      home: 'Beranda',
      start: 'Mulai',
      finish: 'Selesai',
      score: 'Skor',
      total: 'Total',
      correct: 'Benar',
      incorrect: 'Salah',
      tryAgain: 'Coba Lagi',
      continue: 'Lanjutkan',
      example: 'Contoh',
      playSound: 'Putar Suara'
    },
    navigation: {
      home: 'Beranda',
      hiragana: 'Hiragana',
      katakana: 'Katakana',
      kanji: 'Kanji',
      quiz: 'Kuis',
      about: 'Tentang'
    },
    home: {
      title: 'Belajar Kana',
      subtitle: 'Kuasai Hiragana & Katakana',
      description: 'Panduan lengkap Anda untuk menguasai sistem penulisan bahasa Jepang — pelajari 208 karakter Kana, Kanji JLPT N5–N1, dan uji pengetahuan Anda dengan kuis interaktif.',
      heroText: 'Pembelajaran Bahasa Jepang Interaktif',
      startLearning: 'Mulai Belajar',
      takeQuiz: 'Ikuti Kuis',
      whyChoose: 'Mengapa Memilih Platform Kami?',
      whyChooseSubtitle: 'Alat modern untuk pembelajaran bahasa Jepang yang efektif',
      features: {
        progressive: {
          title: 'Pembelajaran Progresif',
          description: 'Mulai dari dasar dan berkembang melalui tanda dakuten dan handakuten secara sistematis.'
        },
        interactive: {
          title: 'Kuis Interaktif',
          description: 'Uji pengetahuan Anda dengan kuis menarik yang dirancang untuk berbagai tingkat kemampuan.'
        },
        mobile: {
          title: 'Dioptimalkan untuk Mobile',
          description: 'Belajar kapan saja, di mana saja dengan desain responsif yang ramah mobile.'
        }
      },
      charts: {
        title: 'Tabel Karakter',
        subtitle: 'Referensi lengkap Hiragana dan Katakana',
        hiragana: 'Hiragana',
        katakana: 'Katakana',
        basic: 'Dasar',
        dakuten: 'Dakuten (゛)',
        handakuten: 'Handakuten (゜)',
        combination: 'Kombinasi (拗音)'
      },
      quiz: {
        title: 'Siap Menguji Kemampuan Anda?',
        subtitle: 'Tantang diri Anda dengan sistem kuis adaptif kami',
        levels: {
          basic: {
            title: 'Level Dasar',
            description: 'Dasar-dasar Hiragana & Katakana',
            characters: '92 Karakter',
            time: '~10 menit',
            button: 'Mulai Kuis Dasar'
          },
          intermediate: {
            title: 'Menengah',
            description: 'Termasuk tanda Dakuten & Handakuten',
            characters: '142 Karakter',
            time: '~15 menit',
            button: 'Mulai Menengah'
          },
          advanced: {
            title: 'Lanjutan',
            description: 'Set karakter lengkap dengan kombinasi',
            characters: '208 Karakter',
            time: '~20 menit',
            button: 'Mulai Lanjutan'
          }
        }
      }
    },
    hiragana: {
      title: 'Karakter Hiragana',
      description: 'Hiragana (ひらがな) adalah suku kata Jepang, salah satu komponen dari sistem penulisan Jepang. Ini mewakili setiap suara dalam bahasa Jepang.',
      learnMore: 'Hiragana digunakan untuk kata-kata asli Jepang dan elemen tata bahasa. Setiap karakter mewakili suara (suku kata) dan bersifat fonetik.',
      basicInfo: 'Tabel hiragana dasar berisi 46 karakter, mewakili semua suara dalam bahasa Jepang.',
      dakutenInfo: 'Tanda Dakuten (゛) mengubah pelafalan karakter hiragana tertentu.',
      handakutenInfo: 'Tanda Handakuten (゜) hanya digunakan dengan karakter baris \'h\' untuk membuat suara \'p\'.',
      combinationInfo: 'Karakter kombinasi (Yōon) menggabungkan kana standar dengan ya, yu, atau yo kecil (ゃ, ゅ, ょ) untuk menghasilkan suku kata gabungan.'
    },
    katakana: {
      title: 'Karakter Katakana',
      description: 'Katakana (カタカナ) adalah suku kata Jepang, digunakan terutama untuk kata-kata asing, onomatope, dan penekanan.',
      learnMore: 'Karakter katakana mewakili suara yang sama dengan hiragana tetapi digunakan untuk tujuan yang berbeda dalam penulisan Jepang.',
      basicInfo: 'Tabel katakana dasar berisi 46 karakter, masing-masing sesuai dengan karakter hiragana.',
      dakutenInfo: 'Tanda Dakuten (゛) mengubah pelafalan katakana dengan cara yang sama seperti hiragana.',
      handakutenInfo: 'Tanda Handakuten (゜) membuat suara \'p\' dengan karakter baris \'h\' katakana.',
      combinationInfo: 'Katakana kombinasi (Yōon) menggabungkan karakter dengan ya, yu, atau yo kecil (ャ, ュ, ョ) untuk mewakili suara gabungan.'
    },
    kanji: {
      title: 'Karakter Kanji',
      description: 'Kanji (漢字) adalah karakter Tionghoa yang digunakan dalam sistem penulisan Jepang. Pelajari kanji yang disusun berdasarkan level JLPT dari N5 hingga N1.',
      onyomi: 'On\'yomi',
      kunyomi: 'Kun\'yomi',
      meaning: 'Arti',
      strokes: 'Goresan',
      examples: 'Contoh Kosakata',
      searchPlaceholder: 'Cari kanji, cara baca, atau arti...',
      allLevels: 'Semua Level',
      levelN5: 'JLPT N5',
      levelN4: 'JLPT N4',
      levelN3: 'JLPT N3',
      levelN2: 'JLPT N2',
      levelN1: 'JLPT N1',
      totalKanji: 'Total Kanji',
      noResults: 'Tidak ada kanji yang sesuai dengan pencarian Anda.'
    },
    quiz: {
      title: 'Kuis',
      kanaQuiz: 'Kuis Kana',
      kanjiQuiz: 'Kuis Kanji',
      selectLevel: 'Pilih Level Kuis',
      selectKanaLevel: 'Pilih Level Kuis Kana',
      selectKanjiLevel: 'Pilih Level Kanji JLPT',
      question: 'Pertanyaan',
      of: 'dari',
      whatIs: 'Apa',
      character: 'karakter ini?',
      romaji: 'romaji untuk',
      whatIsMeaningOf: 'Apa arti dari Kanji ini?',
      whichKanjiMeans: 'Manakah Kanji yang berarti:',
      whatIsReadingOf: 'Bagaimana cara membaca Kanji ini?',
      chooseAnswer: 'Pilih jawaban Anda:',
      correct: 'Benar!',
      incorrect: 'Salah!',
      correctAnswer: 'Jawaban yang benar adalah:',
      nextQuestion: 'Pertanyaan Selanjutnya',
      finalScore: 'Skor Akhir',
      excellent: 'Luar biasa!',
      good: 'Kerja bagus!',
      needPractice: 'Terus berlatih!',
      restartQuiz: 'Mulai Ulang Kuis',
      backToHome: 'Kembali ke Beranda',
      changeLevel: 'Ganti Level / Mode',
      timeUp: 'Waktu habis!',
      timeRemaining: 'Waktu tersisa',
      seconds: 'detik',
      progress: 'Kemajuan',
      level: {
        basic: 'Dasar',
        intermediate: 'Menengah',
        advanced: 'Lanjutan'
      },
      types: {
        kanaToRomaji: 'Kana ke Romaji',
        romajiToKana: 'Romaji ke Kana',
        kanjiToMeaning: 'Kanji ke Arti',
        meaningToKanji: 'Arti ke Kanji',
        kanjiToReading: 'Kanji ke Cara Baca'
      }
    },
    about: {
      title: 'Tentang Belajar Kana',
      description: 'Pelajari sistem penulisan Jepang dengan alat modern dan interaktif.',
      mission: 'Misi kami adalah membuat pembelajaran karakter Jepang dapat diakses dan menyenangkan untuk semua orang.',
      features: 'Fitur termasuk tabel karakter interaktif, kuis progresif, dan dukungan multibahasa.'
    }
  }
};

const currentLanguage = ref<Language>(
  (localStorage.getItem('kana-study-language') as Language) || 'en'
);

export function useI18n() {
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang;
    localStorage.setItem('kana-study-language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations[currentLanguage.value];
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${currentLanguage.value}"`);
        return key;
      }
    }
    
    return typeof current === 'string' ? current : key;
  };

  const language = computed(() => currentLanguage.value);

  return {
    t,
    language,
    setLanguage,
    currentLanguage: computed(() => currentLanguage.value)
  };
}
