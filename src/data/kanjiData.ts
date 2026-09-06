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
  },
  {
    kanji: '一',
    onyomi: 'イチ, イツ',
    kunyomi: 'ひと, ひと.つ',
    meaning: { en: 'One', id: 'Satu' },
    strokes: 1,
    jlpt: 'N5',
    examples: [
      { word: '一つ', reading: 'ひとつ', meaning: { en: 'One (thing)', id: 'Satu buah' } },
      { word: '一日', reading: 'ついたち', meaning: { en: '1st of the month', id: 'Tanggal satu' } },
      { word: '一人', reading: 'ひとり', meaning: { en: 'One person / Alone', id: 'Satu orang / Sendirian' } }
    ]
  },
  {
    kanji: '二',
    onyomi: 'ニ',
    kunyomi: 'ふた, ふた.つ',
    meaning: { en: 'Two', id: 'Dua' },
    strokes: 2,
    jlpt: 'N5',
    examples: [
      { word: '二つ', reading: 'ふたつ', meaning: { en: 'Two (things)', id: 'Dua buah' } },
      { word: '二日', reading: 'ふつか', meaning: { en: '2nd of the month', id: 'Tanggal dua' } },
      { word: '二人', reading: 'ふたり', meaning: { en: 'Two people', id: 'Dua orang' } }
    ]
  },
  {
    kanji: '三',
    onyomi: 'サン',
    kunyomi: 'み, み.つ, みっ.つ',
    meaning: { en: 'Three', id: 'Tiga' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '三つ', reading: 'みっつ', meaning: { en: 'Three (things)', id: 'Tiga buah' } },
      { word: '三日', reading: 'みっか', meaning: { en: '3rd of the month', id: 'Tanggal tiga' } },
      { word: '三角', reading: 'さんかく', meaning: { en: 'Triangle', id: 'Segitiga' } }
    ]
  },
  {
    kanji: '四',
    onyomi: 'シ',
    kunyomi: 'よ, よ.つ, よっ.つ, よん',
    meaning: { en: 'Four', id: 'Empat' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '四つ', reading: 'よっつ', meaning: { en: 'Four (things)', id: 'Empat buah' } },
      { word: '四日', reading: 'よっか', meaning: { en: '4th of the month', id: 'Tanggal empat' } },
      { word: '四季', reading: 'しき', meaning: { en: 'Four seasons', id: 'Empat musim' } }
    ]
  },
  {
    kanji: '五',
    onyomi: 'ゴ',
    kunyomi: 'いつ, いつ.つ',
    meaning: { en: 'Five', id: 'Lima' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '五つ', reading: 'いつつ', meaning: { en: 'Five (things)', id: 'Lima buah' } },
      { word: '五日', reading: 'いつか', meaning: { en: '5th of the month', id: 'Tanggal lima' } },
      { word: '五円', reading: 'ごえん', meaning: { en: '5 yen', id: '5 yen' } }
    ]
  },
  {
    kanji: '六',
    onyomi: 'ロク',
    kunyomi: 'む, む.つ, むっ.つ',
    meaning: { en: 'Six', id: 'Enam' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '六つ', reading: 'むっつ', meaning: { en: 'Six (things)', id: 'Enam buah' } },
      { word: '六日', reading: 'むいか', meaning: { en: '6th of the month', id: 'Tanggal enam' } },
      { word: '六月', reading: 'ろくがつ', meaning: { en: 'June', id: 'Juni' } }
    ]
  },
  {
    kanji: '七',
    onyomi: 'シチ',
    kunyomi: 'なな, なな.つ, なの',
    meaning: { en: 'Seven', id: 'Tujuh' },
    strokes: 2,
    jlpt: 'N5',
    examples: [
      { word: '七つ', reading: 'ななつ', meaning: { en: 'Seven (things)', id: 'Tujuh buah' } },
      { word: '七日', reading: 'なのか', meaning: { en: '7th of the month', id: 'Tanggal tujuh' } },
      { word: '七月', reading: 'しちがつ', meaning: { en: 'July', id: 'Juli' } }
    ]
  },
  {
    kanji: '八',
    onyomi: 'ハチ',
    kunyomi: 'や, や.つ, やっ.つ',
    meaning: { en: 'Eight', id: 'Delapan' },
    strokes: 2,
    jlpt: 'N5',
    examples: [
      { word: '八つ', reading: 'やっつ', meaning: { en: 'Eight (things)', id: 'Delapan buah' } },
      { word: '八日', reading: 'ようか', meaning: { en: '8th of the month', id: 'Tanggal delapan' } },
      { word: '八百屋', reading: 'やおや', meaning: { en: 'Greengrocer', id: 'Toko sayur' } }
    ]
  },
  {
    kanji: '九',
    onyomi: 'キュウ, ク',
    kunyomi: 'ここの, ここの.つ',
    meaning: { en: 'Nine', id: 'Sembilan' },
    strokes: 2,
    jlpt: 'N5',
    examples: [
      { word: '九つ', reading: 'ここのつ', meaning: { en: 'Nine (things)', id: 'Sembilan buah' } },
      { word: '九日', reading: 'ここのか', meaning: { en: '9th of the month', id: 'Tanggal sembilan' } },
      { word: '九州', reading: 'きゅうしゅう', meaning: { en: 'Kyushu', id: 'Pulau Kyushu' } }
    ]
  },
  {
    kanji: '十',
    onyomi: 'ジュウ, ジッ',
    kunyomi: 'とお, と',
    meaning: { en: 'Ten', id: 'Sepuluh' },
    strokes: 2,
    jlpt: 'N5',
    examples: [
      { word: '十', reading: 'とお', meaning: { en: 'Ten (things)', id: 'Sepuluh buah' } },
      { word: '十日', reading: 'とおか', meaning: { en: '10th of the month', id: 'Tanggal sepuluh' } },
      { word: '十分', reading: 'じゅうぶん', meaning: { en: 'Enough / Sufficient', id: 'Cukup' } }
    ]
  },
  {
    kanji: '百',
    onyomi: 'ヒャク',
    kunyomi: 'もも',
    meaning: { en: 'Hundred', id: 'Ratus' },
    strokes: 6,
    jlpt: 'N5',
    examples: [
      { word: '百', reading: 'ひゃく', meaning: { en: 'One hundred', id: 'Seratus' } },
      { word: '三百', reading: 'さんびゃく', meaning: { en: 'Three hundred', id: 'Tiga ratus' } },
      { word: '百貨店', reading: 'ひゃっかてん', meaning: { en: 'Department store', id: 'Toserba' } }
    ]
  },
  {
    kanji: '千',
    onyomi: 'セン',
    kunyomi: 'ち',
    meaning: { en: 'Thousand', id: 'Ribu' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '千', reading: 'せん', meaning: { en: 'One thousand', id: 'Seribu' } },
      { word: '三千', reading: 'さんぜん', meaning: { en: 'Three thousand', id: 'Tiga ribu' } },
      { word: '千葉', reading: 'ちば', meaning: { en: 'Chiba (prefecture)', id: 'Chiba' } }
    ]
  },
  {
    kanji: '万',
    onyomi: 'マン, バン',
    kunyomi: 'よろず',
    meaning: { en: 'Ten Thousand', id: 'Sepuluh Ribu' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '一万', reading: 'いちまん', meaning: { en: 'Ten thousand', id: 'Sepuluh ribu' } },
      { word: '万一', reading: 'まんいち', meaning: { en: 'Just in case / By chance', id: 'Jika terjadi sesuatu' } },
      { word: '万歳', reading: 'ばんざい', meaning: { en: 'Hurrah / Long live', id: 'Banzai / Hidup' } }
    ]
  },
  {
    kanji: '円',
    onyomi: 'エン',
    kunyomi: 'まる.い',
    meaning: { en: 'Yen, Circle, Round', id: 'Yen, Lingkaran' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '百円', reading: 'ひゃくえん', meaning: { en: '100 yen', id: '100 yen' } },
      { word: '円高', reading: 'えんだか', meaning: { en: 'Strong yen', id: 'Apresiasi yen' } },
      { word: '円い', reading: 'まるい', meaning: { en: 'Round', id: 'Bulat' } }
    ]
  },
  {
    kanji: '上',
    onyomi: 'ジョウ, ショウ',
    kunyomi: 'うえ, あ.がる, のぼ.る',
    meaning: { en: 'Above, Up, Top', id: 'Atas, Naik' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '上', reading: 'うえ', meaning: { en: 'Above / On', id: 'Atas' } },
      { word: '上手', reading: 'じょうず', meaning: { en: 'Skillful / Good at', id: 'Pandai / Mahir' } },
      { word: '上がる', reading: 'あがる', meaning: { en: 'To go up / rise', id: 'Naik' } }
    ]
  },
  {
    kanji: '下',
    onyomi: 'カ, ゲ',
    kunyomi: 'した, さ.がる, くだ.る',
    meaning: { en: 'Below, Down, Under', id: 'Bawah, Turun' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '下', reading: 'した', meaning: { en: 'Under / Below', id: 'Bawah' } },
      { word: '下手', reading: 'へた', meaning: { en: 'Poor at / Unskillful', id: 'Tidak pandai' } },
      { word: '地下鉄', reading: 'ちかてつ', meaning: { en: 'Subway', id: 'Kereta bawah tanah' } }
    ]
  },
  {
    kanji: '中',
    onyomi: 'チュウ',
    kunyomi: 'なか',
    meaning: { en: 'Middle, Inside, Center', id: 'Tengah, Dalam' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '中', reading: 'なか', meaning: { en: 'Inside / Middle', id: 'Dalam / Tengah' } },
      { word: '中国', reading: 'ちゅうごく', meaning: { en: 'China', id: 'Tiongkok' } },
      { word: '一日中', reading: 'いちにちじゅう', meaning: { en: 'All day long', id: 'Sepanjang hari' } }
    ]
  },
  {
    kanji: '左',
    onyomi: 'サ',
    kunyomi: 'ひだり',
    meaning: { en: 'Left', id: 'Kiri' },
    strokes: 5,
    jlpt: 'N5',
    examples: [
      { word: '左', reading: 'ひだり', meaning: { en: 'Left', id: 'Kiri' } },
      { word: '左手', reading: 'ひだりて', meaning: { en: 'Left hand', id: 'Tangan kiri' } },
      { word: '左右', reading: 'さゆう', meaning: { en: 'Left and right', id: 'Kiri dan kanan' } }
    ]
  },
  {
    kanji: '右',
    onyomi: 'ウ, ユウ',
    kunyomi: 'みぎ',
    meaning: { en: 'Right', id: 'Kanan' },
    strokes: 5,
    jlpt: 'N5',
    examples: [
      { word: '右', reading: 'みぎ', meaning: { en: 'Right', id: 'Kanan' } },
      { word: '右手', reading: 'みぎて', meaning: { en: 'Right hand', id: 'Tangan kanan' } },
      { word: '右側', reading: 'みぎがわ', meaning: { en: 'Right side', id: 'Sisi kanan' } }
    ]
  },
  {
    kanji: '男',
    onyomi: 'ダン, ナン',
    kunyomi: 'おとこ',
    meaning: { en: 'Man, Male', id: 'Laki-laki, Pria' },
    strokes: 7,
    jlpt: 'N5',
    examples: [
      { word: '男の人', reading: 'おとこのひと', meaning: { en: 'Man', id: 'Pria' } },
      { word: '男の子', reading: 'おとこのこ', meaning: { en: 'Boy', id: 'Anak laki-laki' } },
      { word: '男性', reading: 'だんせい', meaning: { en: 'Male / Man', id: 'Pria / Laki-laki' } }
    ]
  },
  {
    kanji: '女',
    onyomi: 'ジョ, ニョ',
    kunyomi: 'おんな, め',
    meaning: { en: 'Woman, Female', id: 'Perempuan, Wanita' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '女の人', reading: 'おんなのひと', meaning: { en: 'Woman', id: 'Wanita' } },
      { word: '女の子', reading: 'おんなのこ', meaning: { en: 'Girl', id: 'Anak perempuan' } },
      { word: '女性', reading: 'じょせい', meaning: { en: 'Female / Woman', id: 'Wanita' } }
    ]
  },
  {
    kanji: '子',
    onyomi: 'シ, ス',
    kunyomi: 'こ',
    meaning: { en: 'Child', id: 'Anak' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '子供', reading: 'こども', meaning: { en: 'Child / Children', id: 'Anak-anak' } },
      { word: '帽子', reading: 'ぼうし', meaning: { en: 'Hat / Cap', id: 'Topi' } },
      { word: '菓子', reading: 'かし', meaning: { en: 'Sweets / Confectionery', id: 'Kue / Makanan manis' } }
    ]
  },
  {
    kanji: '口',
    onyomi: 'コウ, ク',
    kunyomi: 'くち',
    meaning: { en: 'Mouth, Opening', id: 'Mulut, Pintu masuk/keluar' },
    strokes: 3,
    jlpt: 'N5',
    examples: [
      { word: '口', reading: 'くち', meaning: { en: 'Mouth', id: 'Mulut' } },
      { word: '入口', reading: 'いりぐち', meaning: { en: 'Entrance', id: 'Pintu masuk' } },
      { word: '出口', reading: 'でぐち', meaning: { en: 'Exit', id: 'Pintu keluar' } }
    ]
  },
  {
    kanji: '目',
    onyomi: 'モク, ボク',
    kunyomi: 'め, -め',
    meaning: { en: 'Eye, Look', id: 'Mata' },
    strokes: 5,
    jlpt: 'N5',
    examples: [
      { word: '目', reading: 'め', meaning: { en: 'Eye', id: 'Mata' } },
      { word: '目的', reading: 'もくてき', meaning: { en: 'Purpose / Goal', id: 'Tujuan' } },
      { word: '一日目', reading: 'いちにちめ', meaning: { en: 'First day', id: 'Hari pertama' } }
    ]
  },
  {
    kanji: '手',
    onyomi: 'シュ',
    kunyomi: 'て, た-',
    meaning: { en: 'Hand', id: 'Tangan' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '手', reading: 'て', meaning: { en: 'Hand', id: 'Tangan' } },
      { word: '手紙', reading: 'てがみ', meaning: { en: 'Letter', id: 'Surat' } },
      { word: '歌手', reading: 'かしゅ', meaning: { en: 'Singer', id: 'Penyanyi' } }
    ]
  },
  {
    kanji: '今',
    onyomi: 'コン, キン',
    kunyomi: 'いま',
    meaning: { en: 'Now, Present', id: 'Sekarang' },
    strokes: 4,
    jlpt: 'N5',
    examples: [
      { word: '今', reading: 'いま', meaning: { en: 'Now', id: 'Sekarang' } },
      { word: '今日', reading: 'きょう', meaning: { en: 'Today', id: 'Hari ini' } },
      { word: '今年', reading: 'ことし', meaning: { en: 'This year', id: 'Tahun ini' } }
    ]
  },
  {
    kanji: '前',
    onyomi: 'ゼン',
    kunyomi: 'まえ',
    meaning: { en: 'Front, Before', id: 'Depan, Sebelum' },
    strokes: 9,
    jlpt: 'N5',
    examples: [
      { word: '前', reading: 'まえ', meaning: { en: 'Front / Before', id: 'Depan / Sebelum' } },
      { word: '午前', reading: 'ごぜん', meaning: { en: 'Morning / AM', id: 'Pagi / AM' } },
      { word: '名前', reading: 'なまえ', meaning: { en: 'Name', id: 'Nama' } }
    ]
  },
  {
    kanji: '後',
    onyomi: 'ゴ, コウ',
    kunyomi: 'のち, うし.ろ, あと',
    meaning: { en: 'Behind, After, Later', id: 'Belakang, Setelah' },
    strokes: 9,
    jlpt: 'N5',
    examples: [
      { word: '後ろ', reading: 'うしろ', meaning: { en: 'Behind', id: 'Belakang' } },
      { word: '午後', reading: 'ごご', meaning: { en: 'Afternoon / PM', id: 'Sore / PM' } },
      { word: '後で', reading: 'あとで', meaning: { en: 'Later', id: 'Nanti' } }
    ]
  },
  {
    kanji: '国',
    onyomi: 'コク',
    kunyomi: 'くに',
    meaning: { en: 'Country, Nation', id: 'Negara' },
    strokes: 8,
    jlpt: 'N5',
    examples: [
      { word: '国', reading: 'くに', meaning: { en: 'Country', id: 'Negara' } },
      { word: '外国', reading: 'がいこく', meaning: { en: 'Foreign country', id: 'Luar negeri' } },
      { word: '国際', reading: 'こくさい', meaning: { en: 'International', id: 'Internasional' } }
    ]
  },
  {
    kanji: '間',
    onyomi: 'カン, ケン',
    kunyomi: 'あいだ, ま',
    meaning: { en: 'Interval, Between, Space', id: 'Antara, Waktu, Jeda' },
    strokes: 12,
    jlpt: 'N5',
    examples: [
      { word: '間', reading: 'あいだ', meaning: { en: 'Between', id: 'Di antara' } },
      { word: '時間', reading: 'じかん', meaning: { en: 'Time / Hours', id: 'Waktu / Jam' } },
      { word: '人間', reading: 'にんげん', meaning: { en: 'Human being', id: 'Manusia' } }
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
  },
  {
    kanji: '言',
    onyomi: 'ゲン, ゴン',
    kunyomi: 'い.う, こと',
    meaning: { en: 'Say, Word', id: 'Berkata, Ucapan' },
    strokes: 7,
    jlpt: 'N4',
    examples: [
      { word: '言う', reading: 'いう', meaning: { en: 'To say', id: 'Berkata / Mengatakan' } },
      { word: '言葉', reading: 'ことば', meaning: { en: 'Word / Language', id: 'Kata / Bahasa' } },
      { word: '方言', reading: 'ほうげん', meaning: { en: 'Dialect', id: 'Dialek' } }
    ]
  },
  {
    kanji: '話',
    onyomi: 'ワ',
    kunyomi: 'はな.す, はなし',
    meaning: { en: 'Speak, Talk, Story', id: 'Bicara, Cerita' },
    strokes: 13,
    jlpt: 'N4',
    examples: [
      { word: '話す', reading: 'はなす', meaning: { en: 'To speak', id: 'Berbicara' } },
      { word: '電話', reading: 'でんわ', meaning: { en: 'Telephone', id: 'Telepon' } },
      { word: '会話', reading: 'かいわ', meaning: { en: 'Conversation', id: 'Percakapan' } }
    ]
  },
  {
    kanji: '読',
    onyomi: 'ドク, トク',
    kunyomi: 'よ.む',
    meaning: { en: 'Read', id: 'Membaca' },
    strokes: 14,
    jlpt: 'N4',
    examples: [
      { word: '読む', reading: 'よむ', meaning: { en: 'To read', id: 'Membaca' } },
      { word: '読書', reading: 'どくしょ', meaning: { en: 'Reading books', id: 'Membaca buku' } },
      { word: '読み方', reading: 'よみかた', meaning: { en: 'Way of reading', id: 'Cara membaca' } }
    ]
  },
  {
    kanji: '書',
    onyomi: 'ショ',
    kunyomi: 'か.く',
    meaning: { en: 'Write, Book', id: 'Menulis, Buku' },
    strokes: 10,
    jlpt: 'N4',
    examples: [
      { word: '書く', reading: 'かく', meaning: { en: 'To write', id: 'Menulis' } },
      { word: '辞書', reading: 'じしょ', meaning: { en: 'Dictionary', id: 'Kamus' } },
      { word: '書類', reading: 'しょるい', meaning: { en: 'Document', id: 'Dokumen / Berkas' } }
    ]
  },
  {
    kanji: '聞',
    onyomi: 'ブン, モン',
    kunyomi: 'き.く, き.こえる',
    meaning: { en: 'Hear, Listen, Ask', id: 'Mendengar, Bertanya' },
    strokes: 14,
    jlpt: 'N4',
    examples: [
      { word: '聞く', reading: 'きく', meaning: { en: 'To listen / hear / ask', id: 'Mendengar / Bertanya' } },
      { word: '新聞', reading: 'しんぶん', meaning: { en: 'Newspaper', id: 'Koran' } },
      { word: '聞こえる', reading: 'きこえる', meaning: { en: 'To be heard', id: 'Terdengar' } }
    ]
  },
  {
    kanji: '買',
    onyomi: 'バイ',
    kunyomi: 'か.う',
    meaning: { en: 'Buy', id: 'Membeli' },
    strokes: 12,
    jlpt: 'N4',
    examples: [
      { word: '買う', reading: 'かう', meaning: { en: 'To buy', id: 'Membeli' } },
      { word: '買い物', reading: 'かいもの', meaning: { en: 'Shopping', id: 'Belanja' } },
      { word: '売買', reading: 'ばいばい', meaning: { en: 'Buying and selling / Trade', id: 'Jual beli' } }
    ]
  },
  {
    kanji: '立',
    onyomi: 'リツ, リュウ',
    kunyomi: 'た.つ, た.てる',
    meaning: { en: 'Stand, Establish', id: 'Berdiri, Mendirikan' },
    strokes: 5,
    jlpt: 'N4',
    examples: [
      { word: '立つ', reading: 'たつ', meaning: { en: 'To stand', id: 'Berdiri' } },
      { word: '役に立つ', reading: 'やくにたつ', meaning: { en: 'Useful / Helpful', id: 'Bermanfaat / Berguna' } },
      { word: '国立', reading: 'こくりつ', meaning: { en: 'National', id: 'Nasional / Negeri' } }
    ]
  },
  {
    kanji: '待',
    onyomi: 'タイ',
    kunyomi: 'ま.つ',
    meaning: { en: 'Wait, Depend on', id: 'Menunggu' },
    strokes: 9,
    jlpt: 'N4',
    examples: [
      { word: '待つ', reading: 'まつ', meaning: { en: 'To wait', id: 'Menunggu' } },
      { word: '期待', reading: 'きたい', meaning: { en: 'Expectation / Hope', id: 'Harapan' } },
      { word: '招待', reading: 'しょうたい', meaning: { en: 'Invitation', id: 'Undangan' } }
    ]
  },
  {
    kanji: '止',
    onyomi: 'シ',
    kunyomi: 'と.まる, と.める',
    meaning: { en: 'Stop, Halt', id: 'Berhenti' },
    strokes: 4,
    jlpt: 'N4',
    examples: [
      { word: '止まる', reading: 'とまる', meaning: { en: 'To stop', id: 'Berhenti' } },
      { word: '中止', reading: 'ちゅうし', meaning: { en: 'Cancellation / Suspension', id: 'Pembatalan' } },
      { word: '通行止め', reading: 'つうこうどめ', meaning: { en: 'Road closed', id: 'Jalan ditutup' } }
    ]
  },
  {
    kanji: '思',
    onyomi: 'シ',
    kunyomi: 'おも.う',
    meaning: { en: 'Think, Feel, Wish', id: 'Berpikir, Merasa' },
    strokes: 9,
    jlpt: 'N4',
    examples: [
      { word: '思う', reading: 'おもう', meaning: { en: 'To think', id: 'Berpikir / Mengira' } },
      { word: '思い出す', reading: 'おもいだす', meaning: { en: 'To recall / remember', id: 'Mengingat' } },
      { word: '意思', reading: 'いし', meaning: { en: 'Intention / Will', id: 'Kehendak / Kemauan' } }
    ]
  },
  {
    kanji: '作',
    onyomi: 'サク, サ',
    kunyomi: 'つく.る',
    meaning: { en: 'Make, Produce, Create', id: 'Membuat' },
    strokes: 7,
    jlpt: 'N4',
    examples: [
      { word: '作る', reading: 'つくる', meaning: { en: 'To make / build', id: 'Membuat' } },
      { word: '作品', reading: 'さくひん', meaning: { en: 'Work of art / Creation', id: 'Karya seni / Ciptaan' } },
      { word: '作文', reading: 'さくぶん', meaning: { en: 'Essay / Composition', id: 'Karangan' } }
    ]
  },
  {
    kanji: '使',
    onyomi: 'シ',
    kunyomi: 'つか.う',
    meaning: { en: 'Use, Messenger', id: 'Menggunakan' },
    strokes: 8,
    jlpt: 'N4',
    examples: [
      { word: '使う', reading: 'つかう', meaning: { en: 'To use', id: 'Menggunakan' } },
      { word: '大使館', reading: 'たいしかん', meaning: { en: 'Embassy', id: 'Kedutaan besar' } },
      { word: '使用', reading: 'しよう', meaning: { en: 'Use / Application', id: 'Penggunaan' } }
    ]
  },
  {
    kanji: '知',
    onyomi: 'チ',
    kunyomi: 'し.る',
    meaning: { en: 'Know, Wisdom', id: 'Tahu, Mengetahui' },
    strokes: 8,
    jlpt: 'N4',
    examples: [
      { word: '知る', reading: 'しる', meaning: { en: 'To know', id: 'Mengetahui / Kenal' } },
      { word: '知らせる', reading: 'しらせる', meaning: { en: 'To inform / notify', id: 'Memberitahu' } },
      { word: '知識', reading: 'ちしき', meaning: { en: 'Knowledge', id: 'Pengetahuan' } }
    ]
  },
  {
    kanji: '持',
    onyomi: 'ジ',
    kunyomi: 'も.つ',
    meaning: { en: 'Hold, Have, Possess', id: 'Memegang, Memiliki' },
    strokes: 9,
    jlpt: 'N4',
    examples: [
      { word: '持つ', reading: 'もつ', meaning: { en: 'To hold / have', id: 'Memegang / Memiliki' } },
      { word: '気持ち', reading: 'きもち', meaning: { en: 'Feeling / Mood', id: 'Perasaan' } },
      { word: '金持ち', reading: 'かねもち', meaning: { en: 'Rich person', id: 'Orang kaya' } }
    ]
  },
  {
    kanji: '歩',
    onyomi: 'ホ, ブ',
    kunyomi: 'ある.く, あゆ.む',
    meaning: { en: 'Walk, Step', id: 'Berjalan, Langkah' },
    strokes: 8,
    jlpt: 'N4',
    examples: [
      { word: '歩く', reading: 'あるく', meaning: { en: 'To walk', id: 'Berjalan' } },
      { word: '散歩', reading: 'さんぽ', meaning: { en: 'A walk / Stroll', id: 'Jalan-jalan santai' } },
      { word: '歩道', reading: 'ほどう', meaning: { en: 'Sidewalk / Footpath', id: 'Trotoar' } }
    ]
  },
  {
    kanji: '店',
    onyomi: 'テン',
    kunyomi: 'みせ',
    meaning: { en: 'Shop, Store', id: 'Toko, Warung' },
    strokes: 8,
    jlpt: 'N4',
    examples: [
      { word: '店', reading: 'みせ', meaning: { en: 'Shop / Store', id: 'Toko' } },
      { word: '店員', reading: 'てんいん', meaning: { en: 'Store clerk', id: 'Pegawai toko' } },
      { word: '書店', reading: 'しょてん', meaning: { en: 'Bookstore', id: 'Toko buku' } }
    ]
  },
  {
    kanji: '病',
    onyomi: 'ビョウ',
    kunyomi: 'や.む',
    meaning: { en: 'Ill, Sick, Disease', id: 'Sakit, Penyakit' },
    strokes: 10,
    jlpt: 'N4',
    examples: [
      { word: '病院', reading: 'びょういん', meaning: { en: 'Hospital', id: 'Rumah sakit' } },
      { word: '病気', reading: 'びょうき', meaning: { en: 'Illness / Sickness', id: 'Penyakit / Sakit' } },
      { word: '急病', reading: 'きゅうびょう', meaning: { en: 'Sudden illness', id: 'Sakit mendadak' } }
    ]
  },
  {
    kanji: '院',
    onyomi: 'イン',
    kunyomi: '-',
    meaning: { en: 'Institution, Temple, Mansion', id: 'Institusi, Gedung lembaga' },
    strokes: 10,
    jlpt: 'N4',
    examples: [
      { word: '病院', reading: 'びょういん', meaning: { en: 'Hospital', id: 'Rumah sakit' } },
      { word: '大学院', reading: 'だいがくいん', meaning: { en: 'Graduate school', id: 'Program pascasarjana' } },
      { word: '入院', reading: 'にゅういん', meaning: { en: 'Hospitalization', id: 'Rawat inap' } }
    ]
  },
  {
    kanji: '家',
    onyomi: 'カ, ケ',
    kunyomi: 'いえ, や',
    meaning: { en: 'House, Home, Family', id: 'Rumah, Keluarga' },
    strokes: 10,
    jlpt: 'N4',
    examples: [
      { word: '家', reading: 'いえ', meaning: { en: 'House / Home', id: 'Rumah' } },
      { word: '家族', reading: 'かぞく', meaning: { en: 'Family', id: 'Keluarga' } },
      { word: '専門家', reading: 'せんもんか', meaning: { en: 'Specialist / Expert', id: 'Ahli / Pakar' } }
    ]
  },
  {
    kanji: '族',
    onyomi: 'ゾク',
    kunyomi: '-',
    meaning: { en: 'Tribe, Family, Clan', id: 'Suku, Keluarga, Klan' },
    strokes: 11,
    jlpt: 'N4',
    examples: [
      { word: '家族', reading: 'かぞく', meaning: { en: 'Family', id: 'Keluarga' } },
      { word: '民族', reading: 'みんぞく', meaning: { en: 'Ethnic group / Race', id: 'Suku bangsa' } },
      { word: '親族', reading: 'しんぞく', meaning: { en: 'Relatives', id: 'Kerabat / Sanak saudara' } }
    ]
  },
  {
    kanji: '友',
    onyomi: 'ユウ',
    kunyomi: 'とも',
    meaning: { en: 'Friend', id: 'Teman, Sahabat' },
    strokes: 4,
    jlpt: 'N4',
    examples: [
      { word: '友達', reading: 'ともだち', meaning: { en: 'Friend', id: 'Teman' } },
      { word: '親友', reading: 'しんゆう', meaning: { en: 'Best friend', id: 'Sahabat karib' } },
      { word: '友人', reading: 'ゆうじん', meaning: { en: 'Friend (formal)', id: 'Kawan / Sahabat' } }
    ]
  },
  {
    kanji: '親',
    onyomi: 'シン',
    kunyomi: 'おや, した.しい',
    meaning: { en: 'Parent, Intimate, Familiar', id: 'Orang tua, Akrab' },
    strokes: 16,
    jlpt: 'N4',
    examples: [
      { word: '両親', reading: 'りょうしん', meaning: { en: 'Parents', id: 'Orang tua' } },
      { word: '親切', reading: 'しんせつ', meaning: { en: 'Kind / Helpful', id: 'Ramah / Baik hati' } },
      { word: '父親', reading: 'ちちおや', meaning: { en: 'Father', id: 'Ayah' } }
    ]
  },
  {
    kanji: '切',
    onyomi: 'セツ, サイ',
    kunyomi: 'き.る, き.れる',
    meaning: { en: 'Cut, Severe, Urgent', id: 'Memotong, Sangat' },
    strokes: 4,
    jlpt: 'N4',
    examples: [
      { word: '切る', reading: 'きる', meaning: { en: 'To cut', id: 'Memotong' } },
      { word: '切符', reading: 'きっぷ', meaning: { en: 'Ticket', id: 'Tiket / Karcis' } },
      { word: '大切', reading: 'たいせつ', meaning: { en: 'Important / Precious', id: 'Penting / Berharga' } }
    ]
  },
  {
    kanji: '英',
    onyomi: 'エイ',
    kunyomi: 'はなぶさ',
    meaning: { en: 'English, Hero, Outstanding', id: 'Inggris, Hebat' },
    strokes: 8,
    jlpt: 'N4',
    examples: [
      { word: '英語', reading: 'えいご', meaning: { en: 'English language', id: 'Bahasa Inggris' } },
      { word: '英国', reading: 'えいこく', meaning: { en: 'United Kingdom / Britain', id: 'Inggris / Britania' } },
      { word: '英雄', reading: 'えいゆう', meaning: { en: 'Hero', id: 'Pahlawan' } }
    ]
  },
  {
    kanji: '語',
    onyomi: 'ゴ',
    kunyomi: 'かた.る, かた.らう',
    meaning: { en: 'Word, Speech, Language', id: 'Bahasa, Kata, Berkata' },
    strokes: 14,
    jlpt: 'N4',
    examples: [
      { word: '日本語', reading: 'にほんご', meaning: { en: 'Japanese language', id: 'Bahasa Jepang' } },
      { word: '単語', reading: 'たんご', meaning: { en: 'Vocabulary / Word', id: 'Kosakata' } },
      { word: '物語', reading: 'ものがたり', meaning: { en: 'Story / Tale', id: 'Cerita / Kisah' } }
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
  },
  {
    kanji: '最',
    onyomi: 'サイ',
    kunyomi: 'もっと.も',
    meaning: { en: 'Utmost, Most, Extreme', id: 'Paling, Ter-' },
    strokes: 12,
    jlpt: 'N3',
    examples: [
      { word: '最近', reading: 'さいきん', meaning: { en: 'Recently / Lately', id: 'Akhir-akhir ini' } },
      { word: '最高', reading: 'さいこう', meaning: { en: 'Highest / Best', id: 'Tertinggi / Terbaik' } },
      { word: '最も', reading: 'もっとも', meaning: { en: 'Most / Extremely', id: 'Paling' } }
    ]
  },
  {
    kanji: '初',
    onyomi: 'ショ',
    kunyomi: 'はじ.め, はつ, うい',
    meaning: { en: 'First, Beginning', id: 'Awal, Pertama' },
    strokes: 7,
    jlpt: 'N3',
    examples: [
      { word: '最初', reading: 'さいしょ', meaning: { en: 'First / Beginning', id: 'Awal / Permulaan' } },
      { word: '初めて', reading: 'はじめて', meaning: { en: 'For the first time', id: 'Untuk pertama kali' } },
      { word: '初級', reading: 'しょきゅう', meaning: { en: 'Beginner level', id: 'Tingkat dasar' } }
    ]
  },
  {
    kanji: '決',
    onyomi: 'ケツ',
    kunyomi: 'き.める, き.まる',
    meaning: { en: 'Decide, Fix, Agree', id: 'Memutuskan, Menentukan' },
    strokes: 7,
    jlpt: 'N3',
    examples: [
      { word: '決める', reading: 'きめる', meaning: { en: 'To decide', id: 'Memutuskan' } },
      { word: '決定', reading: 'けってい', meaning: { en: 'Decision', id: 'Keputusan' } },
      { word: '解決', reading: 'かいけつ', meaning: { en: 'Solution / Settlement', id: 'Penyelesaian masalah' } }
    ]
  },
  {
    kanji: '定',
    onyomi: 'テイ, ジョウ',
    kunyomi: 'さだ.める, さだ.まる',
    meaning: { en: 'Determine, Fix, Establish', id: 'Menetapkan, Pasti' },
    strokes: 8,
    jlpt: 'N3',
    examples: [
      { word: '予定', reading: 'よてい', meaning: { en: 'Plan / Schedule', id: 'Rencana / Jadwal' } },
      { word: '定食', reading: 'ていしょく', meaning: { en: 'Set meal', id: 'Menu paket makanan' } },
      { word: '安定', reading: 'あんてい', meaning: { en: 'Stability', id: 'Kestabilan' } }
    ]
  },
  {
    kanji: '表',
    onyomi: 'ヒョウ',
    kunyomi: 'おもて, あらわ.す',
    meaning: { en: 'Surface, Express, Chart', id: 'Permukaan, Mengungkapkan, Tabel' },
    strokes: 8,
    jlpt: 'N3',
    examples: [
      { word: '発表', reading: 'はっぴょう', meaning: { en: 'Announcement / Presentation', id: 'Pengumuman / Presentasi' } },
      { word: '代表', reading: 'だいひょう', meaning: { en: 'Representative', id: 'Perwakilan' } },
      { word: '表', reading: 'おもて', meaning: { en: 'Front surface', id: 'Bagian depan / Permukaan' } }
    ]
  },
  {
    kanji: '現',
    onyomi: 'ゲン',
    kunyomi: 'あらわ.れる, あらわ.す',
    meaning: { en: 'Present, Appear, Actual', id: 'Muncul, Sekarang, Nyata' },
    strokes: 11,
    jlpt: 'N3',
    examples: [
      { word: '現在', reading: 'げんざい', meaning: { en: 'Present / Current', id: 'Masa kini / Saat ini' } },
      { word: '表現', reading: 'ひょうげん', meaning: { en: 'Expression', id: 'Ungkapan / Ekspresi' } },
      { word: '現れる', reading: 'あらわれる', meaning: { en: 'To appear', id: 'Muncul' } }
    ]
  },
  {
    kanji: '受',
    onyomi: 'ジュ',
    kunyomi: 'う.ける, う.かる',
    meaning: { en: 'Receive, Undergo, Accept', id: 'Menerima, Mengikuti' },
    strokes: 8,
    jlpt: 'N3',
    examples: [
      { word: '受ける', reading: 'うける', meaning: { en: 'To receive / take (an exam)', id: 'Menerima / Mengikuti (ujian)' } },
      { word: '受付', reading: 'うけつけ', meaning: { en: 'Reception desk', id: 'Resepsionis' } },
      { word: '受験', reading: 'じゅけん', meaning: { en: 'Taking entrance exam', id: 'Ujian masuk' } }
    ]
  },
  {
    kanji: '付',
    onyomi: 'フ',
    kunyomi: 'つ.ける, つ.く',
    meaning: { en: 'Adhere, Attach, Apply', id: 'Menempelkan, Melampirkan' },
    strokes: 5,
    jlpt: 'N3',
    examples: [
      { word: '付ける', reading: 'つける', meaning: { en: 'To attach / turn on', id: 'Memasang / Menyalakan' } },
      { word: '近所付き合い', reading: 'きんじょづきあい', meaning: { en: 'Neighborhood relations', id: 'Hubungan bertetangga' } },
      { word: '日付', reading: 'ひづけ', meaning: { en: 'Date', id: 'Tanggal' } }
    ]
  },
  {
    kanji: '役',
    onyomi: 'ヤク, エキ',
    kunyomi: '-',
    meaning: { en: 'Duty, Role, Service', id: 'Peran, Tugas, Jabatan' },
    strokes: 7,
    jlpt: 'N3',
    examples: [
      { word: '役割', reading: 'やくわり', meaning: { en: 'Role / Part', id: 'Peran' } },
      { word: '市役所', reading: 'しやくしょ', meaning: { en: 'City hall', id: 'Kantor walikota' } },
      { word: '役に立つ', reading: 'やくにたつ', meaning: { en: 'To be useful', id: 'Bermanfaat' } }
    ]
  },
  {
    kanji: '割',
    onyomi: 'カツ',
    kunyomi: 'わ.る, わり, わ.れる',
    meaning: { en: 'Divide, Proportion, Rate', id: 'Membagi, Rasio, Diskon' },
    strokes: 12,
    jlpt: 'N3',
    examples: [
      { word: '割合', reading: 'わりあい', meaning: { en: 'Ratio / Percentage', id: 'Rasio / Persentase' } },
      { word: '割引', reading: 'わりびき', meaning: { en: 'Discount', id: 'Diskon / Potongan harga' } },
      { word: '割る', reading: 'わる', meaning: { en: 'To divide / break', id: 'Membagi / Memecahkan' } }
    ]
  },
  {
    kanji: '配',
    onyomi: 'ハイ',
    kunyomi: 'くば.る',
    meaning: { en: 'Distribute, Exile, Spouse', id: 'Membagikan, Mengantar' },
    strokes: 10,
    jlpt: 'N3',
    examples: [
      { word: '配る', reading: 'くばる', meaning: { en: 'To distribute', id: 'Membagikan' } },
      { word: '配達', reading: 'はいたつ', meaning: { en: 'Delivery', id: 'Pengiriman' } },
      { word: '心配', reading: 'しんぱい', meaning: { en: 'Worry / Anxiety', id: 'Khawatir' } }
    ]
  },
  {
    kanji: '達',
    onyomi: 'タツ',
    kunyomi: 'たち',
    meaning: { en: 'Accomplished, Reach, Plural suffix', id: 'Mencapai, Bentuk jamak' },
    strokes: 12,
    jlpt: 'N3',
    examples: [
      { word: '友達', reading: 'ともだち', meaning: { en: 'Friend(s)', id: 'Teman-teman' } },
      { word: '達する', reading: 'たっする', meaning: { en: 'To reach / achieve', id: 'Mencapai' } },
      { word: '上達', reading: 'じょうたつ', meaning: { en: 'Improvement / Progress', id: 'Kemajuan / Peningkatan' } }
    ]
  },
  {
    kanji: '法',
    onyomi: 'ホウ, ハッ',
    kunyomi: 'のり',
    meaning: { en: 'Method, Law, Principle', id: 'Hukum, Metode, Aturan' },
    strokes: 8,
    jlpt: 'N3',
    examples: [
      { word: '方法', reading: 'ほうほう', meaning: { en: 'Method / Way', id: 'Metode / Cara' } },
      { word: '法律', reading: 'ほうりつ', meaning: { en: 'Law', id: 'Hukum / Undang-undang' } },
      { word: '文法', reading: 'ぶんぽう', meaning: { en: 'Grammar', id: 'Tata bahasa' } }
    ]
  },
  {
    kanji: '律',
    onyomi: 'リツ, リチ',
    kunyomi: '-',
    meaning: { en: 'Rhythm, Law, Regulation', id: 'Hukum, Irama, Aturan' },
    strokes: 9,
    jlpt: 'N3',
    examples: [
      { word: '法律', reading: 'ほうりつ', meaning: { en: 'Law', id: 'Hukum' } },
      { word: '規律', reading: 'きりつ', meaning: { en: 'Discipline / Order', id: 'Disiplin / Tata tertib' } },
      { word: '律儀', reading: 'りちぎ', meaning: { en: 'Upright / Honest', id: 'Jujur / Berintegritas' } }
    ]
  },
  {
    kanji: '残',
    onyomi: 'ザン',
    kunyomi: 'のこ.る, のこ.す',
    meaning: { en: 'Remainder, Leave, Cruel', id: 'Tersisa, Meninggalkan' },
    strokes: 10,
    jlpt: 'N3',
    examples: [
      { word: '残る', reading: 'のこる', meaning: { en: 'To remain / be left', id: 'Tersisa' } },
      { word: '残念', reading: 'ざんねん', meaning: { en: 'Regrettable / Disappointing', id: 'Sayang sekali / Mengecewakan' } },
      { word: '残業', reading: 'ざんぎょう', meaning: { en: 'Overtime work', id: 'Lembur' } }
    ]
  },
  {
    kanji: '念',
    onyomi: 'ネン',
    kunyomi: '-',
    meaning: { en: 'Wish, Sense, Thought', id: 'Pikiran, Keinginan, Niat' },
    strokes: 8,
    jlpt: 'N3',
    examples: [
      { word: '念願', reading: 'ねんがん', meaning: { en: 'Heart\'s desire', id: 'Cita-cita / Keinginan kuat' } },
      { word: '記念', reading: 'きねん', meaning: { en: 'Commemoration / Memory', id: 'Peringatan / Kenang-kenangan' } },
      { word: '専念', reading: 'せんねん', meaning: { en: 'Devoting oneself to', id: 'Fokus / Berdedikasi penuh' } }
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
  },
  {
    kanji: '象',
    onyomi: 'ショウ, ゾウ',
    kunyomi: 'かたど.る',
    meaning: { en: 'Elephant, Phenomenon, Image', id: 'Gajah, Fenomena, Citra' },
    strokes: 12,
    jlpt: 'N2',
    examples: [
      { word: '対象', reading: 'たいしょう', meaning: { en: 'Target / Subject', id: 'Target / Sasaran' } },
      { word: '現象', reading: 'げんしょう', meaning: { en: 'Phenomenon', id: 'Fenomena' } },
      { word: '象徴', reading: 'しょうちょう', meaning: { en: 'Symbol', id: 'Simbol / Lambang' } }
    ]
  },
  {
    kanji: '徴',
    onyomi: 'チョウ',
    kunyomi: 'しるし',
    meaning: { en: 'Sign, Indication, Collect', id: 'Tanda, Mengumpulkan, Indikasi' },
    strokes: 14,
    jlpt: 'N2',
    examples: [
      { word: '特徴', reading: 'とくちょう', meaning: { en: 'Characteristic / Feature', id: 'Ciri khas / Karakteristik' } },
      { word: '象徴', reading: 'しょうちょう', meaning: { en: 'Symbolism', id: 'Simbol / Lambang' } },
      { word: '徴収', reading: 'ちょうしゅう', meaning: { en: 'Levy / Collection', id: 'Pemungutan / Penarikan' } }
    ]
  },
  {
    kanji: '導',
    onyomi: 'ドウ',
    kunyomi: 'みちび.く',
    meaning: { en: 'Guide, Lead, Conduct', id: 'Membimbing, Memimpin' },
    strokes: 15,
    jlpt: 'N2',
    examples: [
      { word: '指導', reading: 'しどう', meaning: { en: 'Guidance / Coaching', id: 'Bimbingan / Pembinaan' } },
      { word: '導入', reading: 'どうにゅう', meaning: { en: 'Introduction / Installation', id: 'Penerapan / Pemasangan' } },
      { word: '導く', reading: 'みちびく', meaning: { en: 'To guide / lead', id: 'Membimbing' } }
    ]
  },
  {
    kanji: '策',
    onyomi: 'サク',
    kunyomi: '-',
    meaning: { en: 'Plan, Policy, Measure', id: 'Rencana, Kebijakan, Siasat' },
    strokes: 12,
    jlpt: 'N2',
    examples: [
      { word: '対策', reading: 'たいさく', meaning: { en: 'Countermeasure / Measure', id: 'Langkah pencegahan / Antisipasi' } },
      { word: '政策', reading: 'せいさく', meaning: { en: 'Political policy', id: 'Kebijakan politik' } },
      { word: '解決策', reading: 'かいけつさく', meaning: { en: 'Solution / Solution plan', id: 'Solusi / Rencana pemecahan' } }
    ]
  },
  {
    kanji: '態',
    onyomi: 'タイ',
    kunyomi: 'わざ.と',
    meaning: { en: 'Attitude, Condition, Appearance', id: 'Sikap, Kondisi, Keadaan' },
    strokes: 14,
    jlpt: 'N2',
    examples: [
      { word: '態度', reading: 'たいど', meaning: { en: 'Attitude / Behavior', id: 'Sikap / Tingkah laku' } },
      { word: '状態', reading: 'じょうたい', meaning: { en: 'Condition / State', id: 'Kondisi / Keadaan' } },
      { word: '事態', reading: 'じたい', meaning: { en: 'Situation / State of affairs', id: 'Situasi / Keadaan kritis' } }
    ]
  },
  {
    kanji: '幅',
    onyomi: 'フク',
    kunyomi: 'はば',
    meaning: { en: 'Width, Range, Extent', id: 'Lebar, Rentang, Jangkauan' },
    strokes: 12,
    jlpt: 'N2',
    examples: [
      { word: '大幅', reading: 'おおはば', meaning: { en: 'Drastic / Substantial', id: 'Drastis / Besar-besaran' } },
      { word: '肩幅', reading: 'かたはば', meaning: { en: 'Shoulder width', id: 'Lebar bahu' } },
      { word: '振幅', reading: 'しんぷく', meaning: { en: 'Amplitude', id: 'Amplitudo' } }
    ]
  },
  {
    kanji: '規',
    onyomi: 'キ',
    kunyomi: '-',
    meaning: { en: 'Standard, Measure, Rule', id: 'Standar, Aturan, Ukuran' },
    strokes: 11,
    jlpt: 'N2',
    examples: [
      { word: '規則', reading: 'きそく', meaning: { en: 'Rule / Regulation', id: 'Aturan / Peraturan' } },
      { word: '規模', reading: 'きぼ', meaning: { en: 'Scale / Scope', id: 'Skala / Ruang lingkup' } },
      { word: '新規', reading: 'しんき', meaning: { en: 'New / Fresh', id: 'Baru' } }
    ]
  },
  {
    kanji: '模',
    onyomi: 'モ, ボ',
    kunyomi: '-',
    meaning: { en: 'Imitation, Model, Pattern', id: 'Model, Pola, Tiruan' },
    strokes: 14,
    jlpt: 'N2',
    examples: [
      { word: '模様', reading: 'もよう', meaning: { en: 'Pattern / Design', id: 'Pola / Motif' } },
      { word: '規模', reading: 'きぼ', meaning: { en: 'Scale / Dimensions', id: 'Skala' } },
      { word: '模型', reading: 'もけい', meaning: { en: 'Scale model / Mockup', id: 'Model miniatur' } }
    ]
  },
  {
    kanji: '増',
    onyomi: 'ゾウ',
    kunyomi: 'ま.す, ふ.える, ふ.やす',
    meaning: { en: 'Increase, Add, Augment', id: 'Bertambah, Menambah' },
    strokes: 14,
    jlpt: 'N2',
    examples: [
      { word: '増える', reading: 'ふえる', meaning: { en: 'To increase', id: 'Bertambah' } },
      { word: '増加', reading: 'ぞうか', meaning: { en: 'Increase / Growth', id: 'Peningkatan / Pertambahan' } },
      { word: '増税', reading: 'ぞうぜい', meaning: { en: 'Tax hike', id: 'Kenaikan pajak' } }
    ]
  },
  {
    kanji: '減',
    onyomi: 'ゲン',
    kunyomi: 'へ.る, へ.らす',
    meaning: { en: 'Decrease, Dwindle, Decline', id: 'Berkurang, Mengurangi' },
    strokes: 12,
    jlpt: 'N2',
    examples: [
      { word: '減る', reading: 'へる', meaning: { en: 'To decrease', id: 'Berkurang' } },
      { word: '減少', reading: 'げんしょう', meaning: { en: 'Decline / Reduction', id: 'Penurunan / Pengurangan' } },
      { word: '減点', reading: 'げんてん', meaning: { en: 'Point deduction', id: 'Pengurangan nilai' } }
    ]
  },
  {
    kanji: '得',
    onyomi: 'トク',
    kunyomi: 'え.る, う.る',
    meaning: { en: 'Gain, Acquire, Benefit', id: 'Mendapat, Keuntungan' },
    strokes: 11,
    jlpt: 'N2',
    examples: [
      { word: '得る', reading: 'える', meaning: { en: 'To obtain / gain', id: 'Mendapatkan / Meraih' } },
      { word: '納得', reading: 'なっとく', meaning: { en: 'Consent / Understanding', id: 'Paham / Menerima' } },
      { word: '得意', reading: 'とくい', meaning: { en: 'One\'s strong point / Proud', id: 'Keahlian / Bangga' } }
    ]
  },
  {
    kanji: '失',
    onyomi: 'シツ',
    kunyomi: 'うしな.う, う.せる',
    meaning: { en: 'Lose, Fault, Error', id: 'Kehilangan, Kegagalan' },
    strokes: 5,
    jlpt: 'N2',
    examples: [
      { word: '失う', reading: 'うしなう', meaning: { en: 'To lose', id: 'Kehilangan' } },
      { word: '失敗', reading: 'しっぱい', meaning: { en: 'Failure / Mistake', id: 'Kegagalan' } },
      { word: '失礼', reading: 'しつれい', meaning: { en: 'Rude / Excuse me', id: 'Tidak sopan / Permisi' } }
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
  },
  {
    kanji: '醒',
    onyomi: 'セイ',
    kunyomi: 'さ.める, さ.ます',
    meaning: { en: 'Awaken, Be disillusioned, Sober up', id: 'Terbangun, Sadar' },
    strokes: 16,
    jlpt: 'N1',
    examples: [
      { word: '覚醒', reading: 'かくせい', meaning: { en: 'Awakening / Realization', id: 'Kebangkitan / Kesadaran' } },
      { word: '覚醒剤', reading: 'かくせいざい', meaning: { en: 'Stimulant drug', id: 'Obat stimulan' } },
      { word: '目醒める', reading: 'めざめる', meaning: { en: 'To awaken / wake up', id: 'Terbangun / Sadar' } }
    ]
  },
  {
    kanji: '衷',
    onyomi: 'チュウ',
    kunyomi: '-',
    meaning: { en: 'Inmost heart, Center, Sincerity', id: 'Lubuk hati, Tengah, Ketulusan' },
    strokes: 10,
    jlpt: 'N1',
    examples: [
      { word: '折衷', reading: 'せっちゅう', meaning: { en: 'Compromise / Eclecticism', id: 'Kompromi / Perpaduan' } },
      { word: '苦衷', reading: 'くちゅう', meaning: { en: 'Inner distress / Anguish', id: 'Kegalauan batin' } },
      { word: '衷心', reading: 'ちゅうしん', meaning: { en: 'From the bottom of one\'s heart', id: 'Dari lubuk hati terdalam' } }
    ]
  },
  {
    kanji: '遮',
    onyomi: 'シャ',
    kunyomi: 'さえぎ.る',
    meaning: { en: 'Intercept, Interrupt, Obstruct', id: 'Menghalangi, Memotong' },
    strokes: 14,
    jlpt: 'N1',
    examples: [
      { word: '遮る', reading: 'さえぎる', meaning: { en: 'To block / intercept', id: 'Menghalangi' } },
      { word: '遮断', reading: 'しゃだん', meaning: { en: 'Cut off / Blockade', id: 'Pemutusan / Pemblokiran' } },
      { word: '遮断機', reading: 'しゃだんき', meaning: { en: 'Railway crossing gate', id: 'Palang pintu kereta api' } }
    ]
  },
  {
    kanji: '覆',
    onyomi: 'フク',
    kunyomi: 'おお.う, くつがえ.す',
    meaning: { en: 'Cover, Overturn, Capsize', id: 'Menutupi, Menjungkirbalikkan' },
    strokes: 18,
    jlpt: 'N1',
    examples: [
      { word: '覆う', reading: 'おおう', meaning: { en: 'To cover / hide', id: 'Menutupi' } },
      { word: '覆す', reading: 'くつがえす', meaning: { en: 'To overturn / overthrow', id: 'Menjungkirbalikkan / Menggulingkan' } },
      { word: '覆面', reading: 'ふくめん', meaning: { en: 'Mask / Disguise', id: 'Topeng / Penyamaran' } }
    ]
  },
  {
    kanji: '匿',
    onyomi: 'トク',
    kunyomi: 'かくま.う',
    meaning: { en: 'Hide, Conceal, Shelter', id: 'Menyembunyikan, Melindungi' },
    strokes: 10,
    jlpt: 'N1',
    examples: [
      { word: '匿名', reading: 'とくめい', meaning: { en: 'Anonymous', id: 'Anonim' } },
      { word: '隠匿', reading: 'いんとく', meaning: { en: 'Concealment / Hiding', id: 'Penyembunyian' } },
      { word: '匿う', reading: 'かくまう', meaning: { en: 'To harbor / shelter', id: 'Melindungi / Menampung buronan' } }
    ]
  },
  {
    kanji: '緻',
    onyomi: 'チ',
    kunyomi: '-',
    meaning: { en: 'Fine, Minute, Precise', id: 'Halus, Rinci, Teliti' },
    strokes: 15,
    jlpt: 'N1',
    examples: [
      { word: '緻密', reading: 'ちみつ', meaning: { en: 'Meticulous / Elaborate', id: 'Cermat / Sangat teliti' } },
      { word: '精緻', reading: 'せいち', meaning: { en: 'Precise / Minute', id: 'Presisi / Akurat' } },
      { word: '細緻', reading: 'さいち', meaning: { en: 'Fine / Subtle', id: 'Halus / Teliti' } }
    ]
  },
  {
    kanji: '弊',
    onyomi: 'ヘイ',
    kunyomi: '-',
    meaning: { en: 'Abuse, Evil, Vice, Humble our', id: 'Keburukan, Kerugian, Kami (rendah hati)' },
    strokes: 15,
    jlpt: 'N1',
    examples: [
      { word: '弊社', reading: 'へいしゃ', meaning: { en: 'Our company (humble)', id: 'Perusahaan kami' } },
      { word: '弊害', reading: 'へいがい', meaning: { en: 'Harmful effect / Evils', id: 'Dampak buruk / Kerugian' } },
      { word: '語弊', reading: 'ごへい', meaning: { en: 'Misleading expression', id: 'Ungkapan yang menyesatkan' } }
    ]
  },
  {
    kanji: '遷',
    onyomi: 'セン',
    kunyomi: 'うつ.る, うつ.す',
    meaning: { en: 'Transition, Move, Change', id: 'Perpindahan, Perubahan zaman' },
    strokes: 15,
    jlpt: 'N1',
    examples: [
      { word: '変遷', reading: 'へんせん', meaning: { en: 'Changes / Transition', id: 'Perubahan / Perkembangan zaman' } },
      { word: '遷都', reading: 'せんと', meaning: { en: 'Relocation of the capital', id: 'Pemindahan ibu kota' } },
      { word: '左遷', reading: 'させん', meaning: { en: 'Demotion / Degradation', id: 'Demosi jabatan' } }
    ]
  },
  {
    kanji: '禍',
    onyomi: 'カ',
    kunyomi: 'わざわい',
    meaning: { en: 'Calamity, Misfortune, Curse', id: 'Malapetaka, Bencana' },
    strokes: 13,
    jlpt: 'N1',
    examples: [
      { word: 'コロナ禍', reading: 'ころなか', meaning: { en: 'COVID-19 crisis', id: 'Krisis COVID-19' } },
      { word: '災禍', reading: 'さいか', meaning: { en: 'Calamity / Disaster', id: 'Bencana / Malapetaka' } },
      { word: '禍根', reading: 'かこん', meaning: { en: 'Root of evil / Source of trouble', id: 'Sumber malapetaka' } }
    ]
  },
  {
    kanji: '克',
    onyomi: 'コク',
    kunyomi: 'か.つ',
    meaning: { en: 'Overcome, Conquer', id: 'Mengatasi, Menaklukkan' },
    strokes: 7,
    jlpt: 'N1',
    examples: [
      { word: '克服', reading: 'こくふく', meaning: { en: 'Overcoming / Conquering', id: 'Mengatasi / Menaklukkan' } },
      { word: '克明', reading: 'こくめい', meaning: { en: 'Detailed / Scrupulous', id: 'Rinci / Teliti' } },
      { word: '相克', reading: 'そうこく', meaning: { en: 'Rivalry / Conflict', id: 'Persaingan / Konflik sengit' } }
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
