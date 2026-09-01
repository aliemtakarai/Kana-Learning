export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface KanjiExample {
  word: string;
  reading: string;
  meaning: {
    en: string;
    id: string;
  };
}

export interface KanjiCharacter {
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaning: {
    en: string;
    id: string;
  };
  strokes: number;
  jlpt: JLPTLevel;
  examples: KanjiExample[];
}

export interface KanjiLevelGroup {
  level: JLPTLevel;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  characters: KanjiCharacter[];
}

// JLPT N5 Kanji (Beginner / Basic)
export const kanjiN5: KanjiCharacter[] = [
  {
    kanji: '日',
    onyomi: 'ニチ, ジツ',
    kunyomi: 'ひ, -び, -か',
    meaning: { en: 'Day, Sun, Japan', id: 'Hari, Matahari, Jepang' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '日本', reading: 'にほん', meaning: { en: 'Japan', id: 'Jepang' } },
      { word: '日曜日', reading: 'にちようび', meaning: { en: 'Sunday', id: 'Hari Minggu' } },
      { word: '毎日', reading: 'まいにち', meaning: { en: 'Every day', id: 'Setiap hari' } }
    ]
  },
  {
    kanji: '月',
    onyomi: 'ゲツ, ガツ',
    kunyomi: 'つき',
    meaning: { en: 'Month, Moon', id: 'Bulan' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '月曜日', reading: 'げつようび', meaning: { en: 'Monday', id: 'Hari Senin' } },
      { word: '一月', reading: 'いちがつ', meaning: { en: 'January', id: 'Januari' } },
      { word: '今月', reading: 'こんげつ', meaning: { en: 'This month', id: 'Bulan ini' } }
    ]
  },
  {
    kanji: '火',
    onyomi: 'カ',
    kunyomi: 'ひ, -び, ほ-',
    meaning: { en: 'Fire', id: 'Api' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '火曜日', reading: 'かようび', meaning: { en: 'Tuesday', id: 'Hari Selasa' } },
      { word: '火事', reading: 'かじ', meaning: { en: 'Fire (disaster)', id: 'Kebakaran' } },
      { word: '花火', reading: 'はなび', meaning: { en: 'Fireworks', id: 'Kembang api' } }
    ]
  },
  {
    kanji: '水',
    onyomi: 'スイ',
    kunyomi: 'みず',
    meaning: { en: 'Water', id: 'Air' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '水曜日', reading: 'すいようび', meaning: { en: 'Wednesday', id: 'Hari Rabu' } },
      { word: '水', reading: 'みず', meaning: { en: 'Water', id: 'Air' } },
      { word: '水泳', reading: 'すいえい', meaning: { en: 'Swimming', id: 'Berenang' } }
    ]
  },
  {
    kanji: '木',
    onyomi: 'ボク, モク',
    kunyomi: 'き, こ-',
    meaning: { en: 'Tree, Wood', id: 'Pohon, Kayu' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '木曜日', reading: 'もくようび', meaning: { en: 'Thursday', id: 'Hari Kamis' } },
      { word: '木', reading: 'き', meaning: { en: 'Tree', id: 'Pohon' } },
      { word: '木造', reading: 'もくぞう', meaning: { en: 'Wooden', id: 'Terbuat dari kayu' } }
    ]
  },
  {
    kanji: '金',
    onyomi: 'キン, コン',
    kunyomi: 'かね, かな-',
    meaning: { en: 'Gold, Money', id: 'Emas, Uang' },
    strokes: 8,
    jlpt: 'N5',
    examples: [
      { word: '金曜日', reading: 'きんようび', meaning: { en: 'Friday', id: 'Hari Jumat' } },
      { word: 'お金', reading: 'おかね', meaning: { en: 'Money', id: 'Uang' } },
      { word: '料金', reading: 'りょうきん', meaning: { en: 'Fee / Fare', id: 'Biaya / Tarif' } }
    ]
  },
  {
    kanji: '土',
    onyomi: 'ド, ト',
    kunyomi: 'つち',
    meaning: { en: 'Soil, Earth, Ground', id: 'Tanah, Bumi' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '土曜日', reading: 'どようび', meaning: { en: 'Saturday', id: 'Hari Sabtu' } },
      { word: '土地', reading: 'とち', meaning: { en: 'Plot of land', id: 'Lahan / Tanah' } },
      { word: 'お土産', reading: 'おみやげ', meaning: { en: 'Souvenir', id: 'Oleh-oleh' } }
    ]
  },
  {
    kanji: '人',
    onyomi: 'ジン, ニン',
    kunyomi: 'ひと',
    meaning: { en: 'Person, Human', id: 'Orang, Manusia' },
    strokes: 2,
    jlpt: 'N5',
    examples: [
      { word: '日本人', reading: 'にほんじん', meaning: { en: 'Japanese person', id: 'Orang Jepang' } },
      { word: '三人', reading: 'さんにん', meaning: { en: 'Three people', id: 'Tiga orang' } },
      { word: '一人', reading: 'ひとり', meaning: { en: 'One person / Alone', id: 'Satu orang / Sendiri' } }
    ]
  },
  {
    kanji: '山',
    onyomi: 'サン, セン',
    kunyomi: 'やま',
    meaning: { en: 'Mountain', id: 'Gunung' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '富士山', reading: 'ふじさん', meaning: { en: 'Mt. Fuji', id: 'Gunung Fuji' } },
      { word: '山登り', reading: 'やまのぼり', meaning: { en: 'Mountain climbing', id: 'Mendaki gunung' } },
      { word: '火山', reading: 'かざん', meaning: { en: 'Volcano', id: 'Gunung berapi' } }
    ]
  },
  {
    kanji: '川',
    onyomi: 'セン',
    kunyomi: 'かわ',
    meaning: { en: 'River', id: 'Sungai' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '川', reading: 'かわ', meaning: { en: 'River', id: 'Sungai' } },
      { word: '小川', reading: 'おがわ', meaning: { en: 'Stream / Creek', id: 'Sungai kecil' } },
      { word: '河川', reading: 'かせん', meaning: { en: 'Rivers and streams', id: 'Sungai-sungai' } }
    ]
  },
  {
    kanji: '田',
    onyomi: 'デン',
    kunyomi: 'た',
    meaning: { en: 'Rice field', id: 'Sawah' },
    strokes: 5,
    jlpt: 'N5',
    examples: [
      { word: '田中', reading: 'たなか', meaning: { en: 'Tanaka (surname)', id: 'Tanaka (nama keluarga)' } },
      { word: '水田', reading: 'すいでん', meaning: { en: 'Rice paddy', id: 'Sawah berair' } },
      { word: '油田', reading: 'ゆでん', meaning: { en: 'Oil field', id: 'Ladang minyak' } }
    ]
  },
  {
    kanji: '大',
    onyomi: 'ダイ, タイ',
    kunyomi: 'おお-, おお.きい',
    meaning: { en: 'Big, Large', id: 'Besar' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '大きい', reading: 'おおきい', meaning: { en: 'Big', id: 'Besar' } },
      { word: '大学', reading: 'だいがく', meaning: { en: 'University', id: 'Universitas' } },
      { word: '大変', reading: 'たいへん', meaning: { en: 'Tough / Great', id: 'Sangat sulit / Hebat' } }
    ]
  },
  {
    kanji: '小',
    onyomi: 'ショウ',
    kunyomi: 'ちい.さい, こ-, お-',
    meaning: { en: 'Small, Little', id: 'Kecil' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '小さい', reading: 'ちいさい', meaning: { en: 'Small', id: 'Kecil' } },
      { word: '小学校', reading: 'しょうがっこう', meaning: { en: 'Elementary school', id: 'Sekolah Dasar' } },
      { word: '小説', reading: 'しょうせつ', meaning: { en: 'Novel', id: 'Novel' } }
    ]
  },
  {
    kanji: '学',
    onyomi: 'ガク',
    kunyomi: 'まな.ぶ',
    meaning: { en: 'Study, Learning, Science', id: 'Belajar, Ilmu' },
    strokes: 8,
    jlpt: 'N5',
    examples: [
      { word: '学生', reading: 'がくせい', meaning: { en: 'Student', id: 'Siswa / Mahasiswa' } },
      { word: '学校', reading: 'がっこう', meaning: { en: 'School', id: 'Sekolah' } },
      { word: '学ぶ', reading: 'まなぶ', meaning: { en: 'To learn', id: 'Belajar' } }
    ]
  },
  {
    kanji: '校',
    onyomi: 'コウ',
    kunyomi: '-',
    meaning: { en: 'School, Exam', id: 'Sekolah' },
    strokes: 10,
    jlpt: 'N5',
    examples: [
      { word: '学校', reading: 'がっこう', meaning: { en: 'School', id: 'Sekolah' } },
      { word: '高校', reading: 'こうこう', meaning: { en: 'High school', id: 'SMA' } },
      { word: '校長', reading: 'こうちょう', meaning: { en: 'Principal', id: 'Kepala sekolah' } }
    ]
  },
  {
    kanji: '先',
    onyomi: 'セン',
    kunyomi: 'さき, ま.ず',
    meaning: { en: 'Before, Ahead, Previous', id: 'Sebelumnya, Di depan' },
    strokes: 6,
    jlpt: 'N5',
    examples: [
      { word: '先生', reading: 'せんせい', meaning: { en: 'Teacher', id: 'Guru / Dokter' } },
      { word: '先週', reading: 'せんしゅう', meaning: { en: 'Last week', id: 'Minggu lalu' } },
      { word: 'お先に', reading: 'おさきに', meaning: { en: 'Before you / Ahead', id: 'Duluan' } }
    ]
  },
  {
    kanji: '生',
    onyomi: 'セイ, ショウ',
    kunyomi: 'い.きる, う.まれる, なま',
    meaning: { en: 'Life, Birth, Genuine', id: 'Hidup, Lahir, Mentah' },
    strokes: 5,
    jlpt: 'N5',
    examples: [
      { word: '生活', reading: 'せいかつ', meaning: { en: 'Life / Living', id: 'Kehidupan' } },
      { word: '生まれる', reading: 'うまれる', meaning: { en: 'To be born', id: 'Dilahirkan' } },
      { word: '誕生日', reading: 'たんじょうび', meaning: { en: 'Birthday', id: 'Ulang tahun' } }
    ]
  },
  {
    kanji: '年',
    onyomi: 'ネン',
    kunyomi: 'とし',
    meaning: { en: 'Year, Age', id: 'Tahun, Usia' },
    strokes: 6,
    jlpt: 'N5',
    examples: [
      { word: '今年', reading: 'ことし', meaning: { en: 'This year', id: 'Tahun ini' } },
      { word: '来年', reading: 'らいねん', meaning: { en: 'Next year', id: 'Tahun depan' } },
      { word: '年齢', reading: 'ねんれい', meaning: { en: 'Age', id: 'Usia' } }
    ]
  },
  {
    kanji: '時',
    onyomi: 'ジ',
    kunyomi: 'とき, -どき',
    meaning: { en: 'Time, Hour', id: 'Waktu, Jam' },
    strokes: 10,
    jlpt: 'N5',
    examples: [
      { word: '時間', reading: 'じかん', meaning: { en: 'Time / Hour', id: 'Waktu / Jam' } },
      { word: '時計', reading: 'とけい', meaning: { en: 'Watch / Clock', id: 'Jam (alat)' } },
      { word: '時々', reading: 'ときどき', meaning: { en: 'Sometimes', id: 'Kadang-kadang' } }
    ]
  },
  {
    kanji: '分',
    onyomi: 'ブン, フン, ブ',
    kunyomi: 'わ.ける, わ.かる',
    meaning: { en: 'Minute, Part, Understand', id: 'Menit, Bagian, Mengerti' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '五分', reading: 'ごふん', meaning: { en: 'Five minutes', id: 'Lima menit' } },
      { word: '分かる', reading: 'わかる', meaning: { en: 'To understand', id: 'Mengerti' } },
      { word: '自分', reading: 'じぶん', meaning: { en: 'Oneself', id: 'Diri sendiri' } }
    ]
  },
  {
    kanji: '行',
    onyomi: 'コウ, ギョウ, アン',
    kunyomi: 'い.く, ゆ.く, おこな.う',
    meaning: { en: 'Go, Conduct, Line', id: 'Pergi, Melakukan' },
    strokes: 6,
    jlpt: 'N5',
    examples: [
      { word: '行く', reading: 'いく', meaning: { en: 'To go', id: 'Pergi' } },
      { word: '銀行', reading: 'ぎんこう', meaning: { en: 'Bank', id: 'Bank' } },
      { word: '行う', reading: 'おこなう', meaning: { en: 'To carry out', id: 'Melaksanakan' } }
    ]
  },
  {
    kanji: '来',
    onyomi: 'ライ, タイ',
    kunyomi: 'く.る, きた.る',
    meaning: { en: 'Come, Next', id: 'Datang, Berikutnya' },
    strokes: 7,
    jlpt: 'N5',
    examples: [
      { word: '来る', reading: 'くる', meaning: { en: 'To come', id: 'Datang' } },
      { word: '未来', reading: 'みらい', meaning: { en: 'Future', id: 'Masa depan' } },
      { word: '来月', reading: 'らいげつ', meaning: { en: 'Next month', id: 'Bulan depan' } }
    ]
  },
  {
    kanji: '見',
    onyomi: 'ケン',
    kunyomi: 'み.る, み.える, み.せる',
    meaning: { en: 'See, Look, View', id: 'Melihat, Menunjukkan' },
    strokes: 7,
    jlpt: 'N5',
    examples: [
      { word: '見る', reading: 'みる', meaning: { en: 'To see', id: 'Melihat' } },
      { word: '意見', reading: 'いけん', meaning: { en: 'Opinion', id: 'Pendapat' } },
      { word: '見学', reading: 'けんがく', meaning: { en: 'Field trip / Tour', id: 'Kunjungan studi' } }
    ]
  },
  {
    kanji: '食',
    onyomi: 'ショク, ジキ',
    kunyomi: 'た.べる, く.らう',
    meaning: { en: 'Eat, Food', id: 'Makan, Makanan' },
    strokes: 9,
    jlpt: 'N5',
    examples: [
      { word: '食べる', reading: 'たべる', meaning: { en: 'To eat', id: 'Makan' } },
      { word: '食事', reading: 'しょくじ', meaning: { en: 'Meal', id: 'Makan / Hidangan' } },
      { word: '食堂', reading: 'しょくどう', meaning: { en: 'Cafeteria', id: 'Kantin' } }
    ]
  },
  {
    kanji: '本',
    onyomi: 'ホン',
    kunyomi: 'もと',
    meaning: { en: 'Book, Origin, Main', id: 'Buku, Asal, Utama' },
    strokes: 5,
    jlpt: 'N5',
    examples: [
      { word: '本', reading: 'ほん', meaning: { en: 'Book', id: 'Buku' } },
      { word: '本当', reading: 'ほんとう', meaning: { en: 'Truth / Really', id: 'Sungguh / Benar' } },
      { word: '基本', reading: 'きほん', meaning: { en: 'Basics / Fundamentals', id: 'Dasar' } }
    ]
  }
];

// JLPT N4 Kanji (Elementary)
export const kanjiN4: KanjiCharacter[] = [
  {
    kanji: '会',
    onyomi: 'カイ, エ',
    kunyomi: 'あ.う',
    meaning: { en: 'Meet, Society, Association', id: 'Bertemu, Perkumpulan' },
    strokes: 6,
    jlpt: 'N4',
    examples: [
      { word: '会う', reading: 'あう', meaning: { en: 'To meet', id: 'Bertemu' } },
      { word: '会社', reading: 'かいしゃ', meaning: { en: 'Company', id: 'Perusahaan' } },
      { word: '会議', reading: 'かいぎ', meaning: { en: 'Meeting / Conference', id: 'Rapat' } }
    ]
  },
  {
    kanji: '同',
    onyomi: 'ドウ',
    kunyomi: 'おな.じ',
    meaning: { en: 'Same, Agree, Equal', id: 'Sama, Setuju' },
    strokes: 6,
    jlpt: 'N4',
    examples: [
      { word: '同じ', reading: 'おなじ', meaning: { en: 'Same', id: 'Sama' } },
      { word: '同時に', reading: 'どうじに', meaning: { en: 'Simultaneously', id: 'Bersamaan' } },
      { word: '同意', reading: 'どうい', meaning: { en: 'Agreement', id: 'Persetujuan' } }
    ]
  },
  {
    kanji: '事',
    onyomi: 'ジ, ズ',
    kunyomi: 'こと, つか.う',
    meaning: { en: 'Matter, Thing, Fact', id: 'Hal, Urusan, Peristiwa' },
    strokes: 8,
    jlpt: 'N4',
    examples: [
      { word: '仕事', reading: 'しごと', meaning: { en: 'Job / Work', id: 'Pekerjaan' } },
      { word: '事故', reading: 'じこ', meaning: { en: 'Accident', id: 'Kecelakaan' } },
      { word: '大切', reading: 'たいせつ', meaning: { en: 'Important', id: 'Penting' } }
    ]
  },
  {
    kanji: '自',
    onyomi: 'ジ, シ',
    kunyomi: 'みずか.ら',
    meaning: { en: 'Self, Auto', id: 'Diri sendiri, Otomatis' },
    strokes: 6,
    jlpt: 'N4',
    examples: [
      { word: '自分', reading: 'じぶん', meaning: { en: 'Oneself', id: 'Diri sendiri' } },
      { word: '自動車', reading: 'じどうしゃ', meaning: { en: 'Automobile', id: 'Mobil' } },
      { word: '自由', reading: 'じゆう', meaning: { en: 'Freedom', id: 'Kebebasan' } }
    ]
  },
  {
    kanji: '社',
    onyomi: 'シャ',
    kunyomi: 'やしろ',
    meaning: { en: 'Company, Shrine, Society', id: 'Perusahaan, Masyarakat' },
    strokes: 7,
    jlpt: 'N4',
    examples: [
      { word: '社会', reading: 'しゃかい', meaning: { en: 'Society', id: 'Masyarakat' } },
      { word: '社長', reading: 'しゃちょう', meaning: { en: 'Company President', id: 'Direktur' } },
      { word: '神社', reading: 'じんじゃ', meaning: { en: 'Shinto Shrine', id: 'Kuil Shinto' } }
    ]
  },
  {
    kanji: '発',
    onyomi: 'ハツ, ホツ',
    kunyomi: 'た.つ, あば.く',
    meaning: { en: 'Departure, Emit, Start', id: 'Keberangkatan, Meluncurkan' },
    strokes: 9,
    jlpt: 'N4',
    examples: [
      { word: '出発', reading: 'しゅっぱつ', meaning: { en: 'Departure', id: 'Keberangkatan' } },
      { word: '発表', reading: 'はっぴょう', meaning: { en: 'Announcement', id: 'Pengumuman / Presentasi' } },
      { word: '発見', reading: 'はっけん', meaning: { en: 'Discovery', id: 'Penemuan' } }
    ]
  },
  {
    kanji: '者',
    onyomi: 'シャ',
    kunyomi: 'もの',
    meaning: { en: 'Person, Someone', id: 'Orang, Pihak' },
    strokes: 8,
    jlpt: 'N4',
    examples: [
      { word: '医者', reading: 'いしゃ', meaning: { en: 'Doctor', id: 'Dokter' } },
      { word: '学者', reading: 'がくしゃ', meaning: { en: 'Scholar', id: 'Cendekiawan' } },
      { word: '若者', reading: 'わかもの', meaning: { en: 'Young people', id: 'Pemuda' } }
    ]
  },
  {
    kanji: '地',
    onyomi: 'チ, ジ',
    kunyomi: '-',
    meaning: { en: 'Earth, Ground, Land', id: 'Bumi, Tanah, Wilayah' },
    strokes: 6,
    jlpt: 'N4',
    examples: [
      { word: '地下鉄', reading: 'ちかてつ', meaning: { en: 'Subway', id: 'Kereta bawah tanah' } },
      { word: '地震', reading: 'じしん', meaning: { en: 'Earthquake', id: 'Gempa bumi' } },
      { word: '地図', reading: 'ちず', meaning: { en: 'Map', id: 'Peta' } }
    ]
  },
  {
    kanji: '業',
    onyomi: 'ギョウ, ゴウ',
    kunyomi: 'わざ',
    meaning: { en: 'Business, Vocations, Arts', id: 'Bisnis, Industri, Tugas' },
    strokes: 13,
    jlpt: 'N4',
    examples: [
      { word: '授業', reading: 'じゅぎょう', meaning: { en: 'Class / Lesson', id: 'Pelajaran' } },
      { word: '工業', reading: 'こうぎょう', meaning: { en: 'Industry', id: 'Industri' } },
      { word: '卒業', reading: 'そつぎょう', meaning: { en: 'Graduation', id: 'Kelulusan' } }
    ]
  },
  {
    kanji: '方',
    onyomi: 'ホウ',
    kunyomi: 'かた, -がた',
    meaning: { en: 'Direction, Person, Way', id: 'Arah, Cara, Orang' },
    strokes: 4,
    jlpt: 'N4',
    examples: [
      { word: '方法', reading: 'ほうほう', meaning: { en: 'Method', id: 'Metode / Cara' } },
      { word: '夕方', reading: 'ゆうがた', meaning: { en: 'Evening', id: 'Sore hari' } },
      { word: '読み方', reading: 'よみかた', meaning: { en: 'Way of reading', id: 'Cara membaca' } }
    ]
  },
  {
    kanji: '新',
    onyomi: 'シン',
    kunyomi: 'あたら.しい, あら.た',
    meaning: { en: 'New', id: 'Baru' },
    strokes: 13,
    jlpt: 'N4',
    examples: [
      { word: '新しい', reading: 'あたらしい', meaning: { en: 'New', id: 'Baru' } },
      { word: '新聞', reading: 'しんぶん', meaning: { en: 'Newspaper', id: 'Koran' } },
      { word: '新年', reading: 'しんねん', meaning: { en: 'New Year', id: 'Tahun Baru' } }
    ]
  },
  {
    kanji: '場',
    onyomi: 'ジョウ, チョウ',
    kunyomi: 'ば',
    meaning: { en: 'Location, Place', id: 'Tempat, Lokasi' },
    strokes: 12,
    jlpt: 'N4',
    examples: [
      { word: '場所', reading: 'ばしょ', meaning: { en: 'Place', id: 'Tempat' } },
      { word: '工場', reading: 'こうじょう', meaning: { en: 'Factory', id: 'Pabrik' } },
      { word: '場合', reading: 'ばあい', meaning: { en: 'Case / Situation', id: 'Situasi / Keadaan' } }
    ]
  }
];

// JLPT N3 Kanji (Intermediate)
export const kanjiN3: KanjiCharacter[] = [
  {
    kanji: '政',
    onyomi: 'セイ, ショウ',
    kunyomi: 'まつりごと',
    meaning: { en: 'Politics, Government', id: 'Politik, Pemerintahan' },
    strokes: 9,
    jlpt: 'N3',
    examples: [
      { word: '政治', reading: 'せいじ', meaning: { en: 'Politics', id: 'Politik' } },
      { word: '政府', reading: 'せいふ', meaning: { en: 'Government', id: 'Pemerintah' } },
      { word: '政策', reading: 'せいさく', meaning: { en: 'Policy', id: 'Kebijakan' } }
    ]
  },
  {
    kanji: '経',
    onyomi: 'ケイ, キョウ',
    kunyomi: 'へ.る, た.つ',
    meaning: { en: 'Pass through, Economy, Manage', id: 'Melalui, Ekonomi' },
    strokes: 11,
    jlpt: 'N3',
    examples: [
      { word: '経済', reading: 'けいざい', meaning: { en: 'Economy', id: 'Ekonomi' } },
      { word: '経験', reading: 'けいけん', meaning: { en: 'Experience', id: 'Pengalaman' } },
      { word: '経営', reading: 'けいえい', meaning: { en: 'Management', id: 'Manajemen' } }
    ]
  },
  {
    kanji: '済',
    onyomi: 'サイ, セイ',
    kunyomi: 'す.む, す.ます',
    meaning: { en: 'Finish, Settle, Relieve', id: 'Selesai, Menyelesaikan' },
    strokes: 11,
    jlpt: 'N3',
    examples: [
      { word: '経済学', reading: 'けいざいがく', meaning: { en: 'Economics', id: 'Ilmu ekonomi' } },
      { word: '済む', reading: 'すむ', meaning: { en: 'To finish / settle', id: 'Selesai' } },
      { word: '救済', reading: 'きゅうさい', meaning: { en: 'Relief / Aid', id: 'Bantuan' } }
    ]
  },
  {
    kanji: '際',
    onyomi: 'サイ',
    kunyomi: 'きわ',
    meaning: { en: 'Occasion, Edge, International', id: 'Saat, Batas, Internasional' },
    strokes: 14,
    jlpt: 'N3',
    examples: [
      { word: '国際', reading: 'こくさい', meaning: { en: 'International', id: 'Internasional' } },
      { word: '実際', reading: 'じっさい', meaning: { en: 'Actual / In reality', id: 'Sebenarnya' } },
      { word: '交際', reading: 'こうさい', meaning: { en: 'Association / Dating', id: 'Pergaulan / Pacaran' } }
    ]
  },
  {
    kanji: '関',
    onyomi: 'カン',
    kunyomi: 'せき, かか.わる',
    meaning: { en: 'Connection, Barrier, Involve', id: 'Hubungan, Terkait' },
    strokes: 14,
    jlpt: 'N3',
    examples: [
      { word: '関係', reading: 'かんけい', meaning: { en: 'Relationship', id: 'Hubungan' } },
      { word: '関心', reading: 'かんしん', meaning: { en: 'Interest / Concern', id: 'Minat / Kepedulian' } },
      { word: '玄関', reading: 'げんかん', meaning: { en: 'Entrance hall', id: 'Pintu masuk' } }
    ]
  },
  {
    kanji: '係',
    onyomi: 'ケイ',
    kunyomi: 'かか.る, かかり',
    meaning: { en: 'Person in charge, Connection', id: 'Penanggung jawab, Hubungan' },
    strokes: 9,
    jlpt: 'N3',
    examples: [
      { word: '係員', reading: 'かかりいん', meaning: { en: 'Attendant / Clerk', id: 'Petugas' } },
      { word: '関係者', reading: 'かんけいしゃ', meaning: { en: 'Person involved', id: 'Pihak terkait' } },
      { word: '連係', reading: 'れんけい', meaning: { en: 'Coordination', id: 'Koordinasi' } }
    ]
  },
  {
    kanji: '結',
    onyomi: 'ケツ, ケチ',
    kunyomi: 'むす.ぶ, ゆ.う',
    meaning: { en: 'Tie, Bind, Conclude', id: 'Mengikat, Menyimpulkan' },
    strokes: 12,
    jlpt: 'N3',
    examples: [
      { word: '結婚', reading: 'けっこん', meaning: { en: 'Marriage', id: 'Pernikahan' } },
      { word: '結果', reading: 'けっか', meaning: { en: 'Result', id: 'Hasil' } },
      { word: '結論', reading: 'けつろん', meaning: { en: 'Conclusion', id: 'Kesimpulan' } }
    ]
  },
  {
    kanji: '婚',
    onyomi: 'コン',
    kunyomi: '-',
    meaning: { en: 'Marriage', id: 'Pernikahan' },
    strokes: 11,
    jlpt: 'N3',
    examples: [
      { word: '離婚', reading: 'りこん', meaning: { en: 'Divorce', id: 'Perceraian' } },
      { word: '未婚', reading: 'みこん', meaning: { en: 'Unmarried', id: 'Belum menikah' } },
      { word: '婚約', reading: 'こんやく', meaning: { en: 'Engagement', id: 'Pertunangan' } }
    ]
  },
  {
    kanji: '調',
    onyomi: 'チョウ',
    kunyomi: 'しら.べる, ととの.う',
    meaning: { en: 'Investigate, Tone, Harmonize', id: 'Menyelidiki, Nada, Menyesuaikan' },
    strokes: 15,
    jlpt: 'N3',
    examples: [
      { word: '調べる', reading: 'しらべる', meaning: { en: 'To investigate / check', id: 'Memeriksa / Menyelidiki' } },
      { word: '調査', reading: 'ちょうさ', meaning: { en: 'Investigation / Survey', id: 'Survei / Penelitian' } },
      { word: '強調', reading: 'きょうちょう', meaning: { en: 'Emphasis', id: 'Penekanan' } }
    ]
  },
  {
    kanji: '査',
    onyomi: 'サ',
    kunyomi: '-',
    meaning: { en: 'Investigate, Inspect', id: 'Memeriksa, Menginspeksi' },
    strokes: 9,
    jlpt: 'N3',
    examples: [
      { word: '検査', reading: 'けんさ', meaning: { en: 'Inspection / Test', id: 'Pemeriksaan' } },
      { word: '審査', reading: 'しんさ', meaning: { en: 'Judging / Screening', id: 'Penilaian / Seleksi' } },
      { word: '捜査', reading: 'そうさ', meaning: { en: 'Criminal investigation', id: 'Penyelidikan kriminal' } }
    ]
  }
];

// JLPT N2 Kanji (Upper Intermediate)
export const kanjiN2: KanjiCharacter[] = [
  {
    kanji: '識',
    onyomi: 'シキ',
    kunyomi: 'し.る',
    meaning: { en: 'Knowledge, Discriminate, Know', id: 'Pengetahuan, Mengenal' },
    strokes: 19,
    jlpt: 'N2',
    examples: [
      { word: '意識', reading: 'いしき', meaning: { en: 'Consciousness / Awareness', id: 'Kesadaran' } },
      { word: '知識', reading: 'ちしき', meaning: { en: 'Knowledge', id: 'Pengetahuan' } },
      { word: '認識', reading: 'にんしき', meaning: { en: 'Recognition / Perception', id: 'Pengenalan / Persepsi' } }
    ]
  },
  {
    kanji: '設',
    onyomi: 'セツ',
    kunyomi: 'もう.ける',
    meaning: { en: 'Establish, Set up, Prepare', id: 'Mendirikan, Menyiapkan' },
    strokes: 11,
    jlpt: 'N2',
    examples: [
      { word: '設計', reading: 'せっけい', meaning: { en: 'Design / Plan', id: 'Desain / Perancangan' } },
      { word: '施設', reading: 'しせつ', meaning: { en: 'Facility / Institution', id: 'Fasilitas' } },
      { word: '建設', reading: 'けんせつ', meaning: { en: 'Construction', id: 'Konstruksi' } }
    ]
  },
  {
    kanji: '評',
    onyomi: 'ヒョウ',
    kunyomi: '-',
    meaning: { en: 'Evaluate, Criticize, Comment', id: 'Menilai, Mengkritik' },
    strokes: 12,
    jlpt: 'N2',
    examples: [
      { word: '評価', reading: 'ひょうか', meaning: { en: 'Evaluation / Valuation', id: 'Evaluasi / Penilaian' } },
      { word: '評判', reading: 'ひょうばん', meaning: { en: 'Reputation / Fame', id: 'Reputasi' } },
      { word: '批評', reading: 'ひひょう', meaning: { en: 'Critique / Review', id: 'Kritik' } }
    ]
  },
  {
    kanji: '価',
    onyomi: 'カ, ケ',
    kunyomi: 'あたい',
    meaning: { en: 'Value, Price', id: 'Nilai, Harga' },
    strokes: 8,
    jlpt: 'N2',
    examples: [
      { word: '価格', reading: 'かかく', meaning: { en: 'Price / Value', id: 'Harga' } },
      { word: '価値', reading: 'かち', meaning: { en: 'Value / Worth', id: 'Nilai' } },
      { word: '物価', reading: 'ぶっか', meaning: { en: 'Cost of living / Prices', id: 'Harga barang' } }
    ]
  },
  {
    kanji: '環',
    onyomi: 'カン',
    kunyomi: 'わ',
    meaning: { en: 'Ring, Circle, Surround', id: 'Lingkaran, Sekeliling' },
    strokes: 17,
    jlpt: 'N2',
    examples: [
      { word: '環境', reading: 'かんきょう', meaning: { en: 'Environment', id: 'Lingkungan' } },
      { word: '循環', reading: 'じゅんかん', meaning: { en: 'Circulation / Cycle', id: 'Sirkulasi / Siklus' } },
      { word: '環状線', reading: 'かんじょうせん', meaning: { en: 'Loop line (train)', id: 'Jalur lingkar' } }
    ]
  },
  {
    kanji: '境',
    onyomi: 'キョウ, ケイ',
    kunyomi: 'さかい',
    meaning: { en: 'Boundary, Border, Region', id: 'Batas, Wilayah' },
    strokes: 14,
    jlpt: 'N2',
    examples: [
      { word: '国境', reading: 'こっきょう', meaning: { en: 'National border', id: 'Perbatasan negara' } },
      { word: '境目', reading: 'さかいめ', meaning: { en: 'Borderline / Dividing line', id: 'Garis batas' } },
      { word: '心境', reading: 'しんきょう', meaning: { en: 'State of mind', id: 'Kondisi batin' } }
    ]
  },
  {
    kanji: '貿',
    onyomi: 'ボウ',
    kunyomi: '-',
    meaning: { en: 'Trade, Exchange', id: 'Perdagangan' },
    strokes: 12,
    jlpt: 'N2',
    examples: [
      { word: '貿易', reading: 'ぼうえき', meaning: { en: 'Foreign trade', id: 'Perdagangan luar negeri' } },
      { word: '貿易商', reading: 'ぼうえきしょう', meaning: { en: 'Trader / Merchant', id: 'Pedagang ekspor-impor' } },
      { word: '自由貿易', reading: 'じゆうぼうえき', meaning: { en: 'Free trade', id: 'Perdagangan bebas' } }
    ]
  },
  {
    kanji: '易',
    onyomi: 'エキ, イ',
    kunyomi: 'やさ.しい, やす.い',
    meaning: { en: 'Easy, Exchange, Divination', id: 'Mudah, Pertukaran' },
    strokes: 8,
    jlpt: 'N2',
    examples: [
      { word: '容易', reading: 'ようい', meaning: { en: 'Simple / Easy', id: 'Mudah' } },
      { word: '安易', reading: 'あんい', meaning: { en: 'Easy-going / Simplistic', id: 'Gampang / Sembrono' } },
      { word: '難易度', reading: 'なんいど', meaning: { en: 'Difficulty level', id: 'Tingkat kesulitan' } }
    ]
  }
];

// JLPT N1 Kanji (Advanced)
export const kanjiN1: KanjiCharacter[] = [
  {
    kanji: '鑑',
    onyomi: 'カン',
    kunyomi: 'かがみ, かんが.みる',
    meaning: { en: 'Appraise, Specimen, Model', id: 'Menilai seni, Contoh teladan' },
    strokes: 23,
    jlpt: 'N1',
    examples: [
      { word: '鑑定', reading: 'かんてい', meaning: { en: 'Appraisal / Expert opinion', id: 'Penilaian ahli' } },
      { word: '図鑑', reading: 'ずかん', meaning: { en: 'Illustrated reference book', id: 'Ensiklopedia bergambar' } },
      { word: '鑑賞', reading: 'かんしょう', meaning: { en: 'Appreciation (art/music)', id: 'Apresiasi seni' } }
    ]
  },
  {
    kanji: '覇',
    onyomi: 'ハ, ハク',
    kunyomi: 'はたく',
    meaning: { en: 'Hegemony, Supremacy, Champion', id: 'Hegemoni, Supremasi, Juara' },
    strokes: 19,
    jlpt: 'N1',
    examples: [
      { word: '制覇', reading: 'せいは', meaning: { en: 'Conquest / Domination', id: 'Penguasaan / Dominasi' } },
      { word: '覇権', reading: 'はけん', meaning: { en: 'Hegemony', id: 'Hegemoni' } },
      { word: '連覇', reading: 'れんぱ', meaning: { en: 'Successive championships', id: 'Juara berturut-turut' } }
    ]
  },
  {
    kanji: '醸',
    onyomi: 'ジョウ',
    kunyomi: 'かも.す',
    meaning: { en: 'Brew, Cause, Engender', id: 'Menyeduh, Memicu, Memunculkan' },
    strokes: 20,
    jlpt: 'N1',
    examples: [
      { word: '醸造', reading: 'じょうぞう', meaning: { en: 'Brewing / Distillation', id: 'Fermentasi / Penyulingan' } },
      { word: '醸し出す', reading: 'かもしだす', meaning: { en: 'To create (atmosphere)', id: 'Menciptakan (suasana)' } },
      { word: '物議を醸す', reading: 'ぶつぎをかもす', meaning: { en: 'To cause controversy', id: 'Memicu kontroversi' } }
    ]
  },
  {
    kanji: '憂',
    onyomi: 'ユウ',
    kunyomi: 'うれ.える, うれ.い, う.い',
    meaning: { en: 'Grief, Anxiety, Melancholy', id: 'Kekhawatiran, Duka, Cemas' },
    strokes: 15,
    jlpt: 'N1',
    examples: [
      { word: '憂慮', reading: 'ゆうりょ', meaning: { en: 'Anxiety / Deep concern', id: 'Kekhawatiran mendalam' } },
      { word: '憂鬱', reading: 'ゆううつ', meaning: { en: 'Melancholy / Depression', id: 'Murung / Depresi' } },
      { word: '杞憂', reading: 'きゆう', meaning: { en: 'Needless anxiety', id: 'Kekhawatiran berlebihan' } }
    ]
  },
  {
    kanji: '慮',
    onyomi: 'リョ',
    kunyomi: 'おもんぱく.る, おもんみ.る',
    meaning: { en: 'Consider, Deliberate, Think', id: 'Mempertimbangkan, Merenungkan' },
    strokes: 15,
    jlpt: 'N1',
    examples: [
      { word: '配慮', reading: 'はいりょ', meaning: { en: 'Consideration / Care', id: 'Perhatian / Pertimbangan' } },
      { word: '遠慮', reading: 'えんりょ', meaning: { en: 'Restraint / Reserve', id: 'Sungkan / Menahan diri' } },
      { word: '思慮', reading: 'しりょ', meaning: { en: 'Prudence / Thoughtfulness', id: 'Kebijaksanaan berfikir' } }
    ]
  },
  {
    kanji: '崇',
    onyomi: 'スウ',
    kunyomi: 'あが.める',
    meaning: { en: 'Adore, Reverence, Worship', id: 'Memuja, Menghormati tinggi' },
    strokes: 11,
    jlpt: 'N1',
    examples: [
      { word: '崇高', reading: 'すうこう', meaning: { en: 'Sublime / Noble', id: 'Mulia / Luhur' } },
      { word: '崇拝', reading: 'すうはい', meaning: { en: 'Worship / Adoration', id: 'Pemujaan' } },
      { word: '崇める', reading: 'あがめる', meaning: { en: 'To revere / worship', id: 'Menghormati / Memuja' } }
    ]
  }
];

export const allKanji: KanjiCharacter[] = [
  ...kanjiN5,
  ...kanjiN4,
  ...kanjiN3,
  ...kanjiN2,
  ...kanjiN1
];

export const kanjiGroups: KanjiLevelGroup[] = [
  {
    level: 'N5',
    title: { en: 'JLPT N5 (Beginner)', id: 'JLPT N5 (Dasar)' },
    description: {
      en: 'Essential everyday kanji including numbers, time, basic nature, and core verbs.',
      id: 'Kanji dasar sehari-hari mencakup angka, waktu, alam dasar, dan kata kerja utama.'
    },
    characters: kanjiN5
  },
  {
    level: 'N4',
    title: { en: 'JLPT N4 (Elementary)', id: 'JLPT N4 (Pemula Lanjutan)' },
    description: {
      en: 'Foundational kanji for daily social life, workplaces, movement, and general objects.',
      id: 'Kanji pondasi untuk kehidupan sosial sehari-hari, kantor, aktivitas, dan objek umum.'
    },
    characters: kanjiN4
  },
  {
    level: 'N3',
    title: { en: 'JLPT N3 (Intermediate)', id: 'JLPT N3 (Menengah)' },
    description: {
      en: 'Bridge level kanji covering economics, relationships, surveys, and abstract concepts.',
      id: 'Kanji tingkat penghubung mencakup ekonomi, relasi, penyelidikan, dan konsep abstrak.'
    },
    characters: kanjiN3
  },
  {
    level: 'N2',
    title: { en: 'JLPT N2 (Upper Intermediate)', id: 'JLPT N2 (Menengah Atas)' },
    description: {
      en: 'Advanced professional kanji for business, media, environment, and specialized reviews.',
      id: 'Kanji tingkat lanjut untuk bisnis, media berita, lingkungan, dan evaluasi profesional.'
    },
    characters: kanjiN2
  },
  {
    level: 'N1',
    title: { en: 'JLPT N1 (Advanced)', id: 'JLPT N1 (Lanjutan)' },
    description: {
      en: 'Mastery level kanji encompassing literature, deep concepts, formal expressions, and nuanced vocabulary.',
      id: 'Kanji tingkat mahir yang mencakup sastra, konsep filosofis, ungkapan formal, dan nuansa mendalam.'
    },
    characters: kanjiN1
  }
];
