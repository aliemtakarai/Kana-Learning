export interface KanaCharacter {
  kana: string;
  romaji: string;
  example: {
    en: string;
    id: string;
  };
}

export interface KanaGroup {
  name: {
    en: string;
    id: string;
  };
  characters: KanaCharacter[];
}

// Hiragana Basic Characters (あ-ん)
export const hiraganaBasic: KanaCharacter[] = [
  { kana: 'あ', romaji: 'a', example: { en: 'apple (りんご)', id: 'apel (りんご)' } },
  { kana: 'い', romaji: 'i', example: { en: 'stomach (い)', id: 'perut (い)' } },
  { kana: 'う', romaji: 'u', example: { en: 'house (うち)', id: 'rumah (うち)' } },
  { kana: 'え', romaji: 'e', example: { en: 'picture (え)', id: 'gambar (え)' } },
  { kana: 'お', romaji: 'o', example: { en: 'big (おおきい)', id: 'besar (おおきい)' } },
  { kana: 'か', romaji: 'ka', example: { en: 'family (かぞく)', id: 'keluarga (かぞく)' } },
  { kana: 'き', romaji: 'ki', example: { en: 'tree (き)', id: 'pohon (き)' } },
  { kana: 'く', romaji: 'ku', example: { en: 'cloud (くも)', id: 'awan (くも)' } },
  { kana: 'け', romaji: 'ke', example: { en: 'hair (け)', id: 'rambut (け)' } },
  { kana: 'こ', romaji: 'ko', example: { en: 'child (こども)', id: 'anak (こども)' } },
  { kana: 'さ', romaji: 'sa', example: { en: 'fish (さかな)', id: 'ikan (さかな)' } },
  { kana: 'し', romaji: 'shi', example: { en: 'city (し)', id: 'kota (し)' } },
  { kana: 'す', romaji: 'su', example: { en: 'vinegar (す)', id: 'cuka (す)' } },
  { kana: 'せ', romaji: 'se', example: { en: 'world (せかい)', id: 'dunia (せかい)' } },
  { kana: 'そ', romaji: 'so', example: { en: 'sky (そら)', id: 'langit (そら)' } },
  { kana: 'た', romaji: 'ta', example: { en: 'rice field (た)', id: 'sawah (た)' } },
  { kana: 'ち', romaji: 'chi', example: { en: 'blood (ち)', id: 'darah (ち)' } },
  { kana: 'つ', romaji: 'tsu', example: { en: 'moon (つき)', id: 'bulan (つき)' } },
  { kana: 'て', romaji: 'te', example: { en: 'hand (て)', id: 'tangan (て)' } },
  { kana: 'と', romaji: 'to', example: { en: 'door (と)', id: 'pintu (と)' } },
  { kana: 'な', romaji: 'na', example: { en: 'name (なまえ)', id: 'nama (なまえ)' } },
  { kana: 'に', romaji: 'ni', example: { en: 'meat (にく)', id: 'daging (にく)' } },
  { kana: 'ぬ', romaji: 'nu', example: { en: 'cloth (ぬの)', id: 'kain (ぬの)' } },
  { kana: 'ね', romaji: 'ne', example: { en: 'cat (ねこ)', id: 'kucing (ねこ)' } },
  { kana: 'の', romaji: 'no', example: { en: 'field (の)', id: 'ladang (の)' } },
  { kana: 'は', romaji: 'ha', example: { en: 'flower (はな)', id: 'bunga (はな)' } },
  { kana: 'ひ', romaji: 'hi', example: { en: 'fire (ひ)', id: 'api (ひ)' } },
  { kana: 'ふ', romaji: 'fu', example: { en: 'ship (ふね)', id: 'kapal (ふね)' } },
  { kana: 'へ', romaji: 'he', example: { en: 'room (へや)', id: 'kamar (へや)' } },
  { kana: 'ほ', romaji: 'ho', example: { en: 'book (ほん)', id: 'buku (ほん)' } },
  { kana: 'ま', romaji: 'ma', example: { en: 'window (まど)', id: 'jendela (まど)' } },
  { kana: 'み', romaji: 'mi', example: { en: 'ear (みみ)', id: 'telinga (みみ)' } },
  { kana: 'む', romaji: 'mu', example: { en: 'village (むら)', id: 'desa (むら)' } },
  { kana: 'め', romaji: 'me', example: { en: 'eye (め)', id: 'mata (め)' } },
  { kana: 'も', romaji: 'mo', example: { en: 'peach (もも)', id: 'persik (もも)' } },
  { kana: 'や', romaji: 'ya', example: { en: 'house (や)', id: 'rumah (や)' } },
  { kana: 'ゆ', romaji: 'yu', example: { en: 'hot water (ゆ)', id: 'air panas (ゆ)' } },
  { kana: 'よ', romaji: 'yo', example: { en: 'night (よる)', id: 'malam (よる)' } },
  { kana: 'ら', romaji: 'ra', example: { en: 'next (らいねん)', id: 'tahun depan (らいねん)' } },
  { kana: 'り', romaji: 'ri', example: { en: 'apple (りんご)', id: 'apel (りんご)' } },
  { kana: 'る', romaji: 'ru', example: { en: 'to be (る)', id: 'menjadi (る)' } },
  { kana: 'れ', romaji: 're', example: { en: 'example (れい)', id: 'contoh (れい)' } },
  { kana: 'ろ', romaji: 'ro', example: { en: 'six (ろく)', id: 'enam (ろく)' } },
  { kana: 'わ', romaji: 'wa', example: { en: 'circle (わ)', id: 'lingkaran (わ)' } },
  { kana: 'を', romaji: 'wo', example: { en: 'object marker (を)', id: 'penanda objek (を)' } },
  { kana: 'ん', romaji: 'n', example: { en: 'final n (ん)', id: 'n akhir (ん)' } }
];

// Hiragana Dakuten (゛) Characters
export const hiraganaDakuten: KanaCharacter[] = [
  { kana: 'が', romaji: 'ga', example: { en: 'school (がっこう)', id: 'sekolah (がっこう)' } },
  { kana: 'ぎ', romaji: 'gi', example: { en: 'silver (ぎん)', id: 'perak (ぎん)' } },
  { kana: 'ぐ', romaji: 'gu', example: { en: 'tool (ぐ)', id: 'alat (ぐ)' } },
  { kana: 'げ', romaji: 'ge', example: { en: 'game (げーむ)', id: 'permainan (げーむ)' } },
  { kana: 'ご', romaji: 'go', example: { en: 'language (ご)', id: 'bahasa (ご)' } },
  { kana: 'ざ', romaji: 'za', example: { en: 'magazine (ざっし)', id: 'majalah (ざっし)' } },
  { kana: 'じ', romaji: 'ji', example: { en: 'time (じかん)', id: 'waktu (じかん)' } },
  { kana: 'ず', romaji: 'zu', example: { en: 'map (ちず)', id: 'peta (ちず)' } },
  { kana: 'ぜ', romaji: 'ze', example: { en: 'all (ぜんぶ)', id: 'semua (ぜんぶ)' } },
  { kana: 'ぞ', romaji: 'zo', example: { en: 'elephant (ぞう)', id: 'gajah (ぞう)' } },
  { kana: 'だ', romaji: 'da', example: { en: 'who (だれ)', id: 'siapa (だれ)' } },
  { kana: 'ぢ', romaji: 'di', example: { en: 'ground (だいち)', id: 'tanah (だいち)' } },
  { kana: 'づ', romaji: 'du', example: { en: 'continue (つづく)', id: 'lanjut (つづく)' } },
  { kana: 'で', romaji: 'de', example: { en: 'exit (でぐち)', id: 'keluar (でぐち)' } },
  { kana: 'ど', romaji: 'do', example: { en: 'where (どこ)', id: 'dimana (どこ)' } },
  { kana: 'ば', romaji: 'ba', example: { en: 'place (ばしょ)', id: 'tempat (ばしょ)' } },
  { kana: 'び', romaji: 'bi', example: { en: 'beauty (び)', id: 'keindahan (び)' } },
  { kana: 'ぶ', romaji: 'bu', example: { en: 'part (ぶぶん)', id: 'bagian (ぶぶん)' } },
  { kana: 'べ', romaji: 'be', example: { en: 'study (べんきょう)', id: 'belajar (べんきょう)' } },
  { kana: 'ぼ', romaji: 'bo', example: { en: 'mother (ぼ)', id: 'ibu (ぼ)' } }
];

// Hiragana Handakuten (゜) Characters
export const hiraganaHandakuten: KanaCharacter[] = [
  { kana: 'ぱ', romaji: 'pa', example: { en: 'bread (ぱん)', id: 'roti (ぱん)' } },
  { kana: 'ぴ', romaji: 'pi', example: { en: 'pizza (ぴざ)', id: 'pizza (ぴざ)' } },
  { kana: 'ぷ', romaji: 'pu', example: { en: 'pool (ぷーる)', id: 'kolam (ぷーる)' } },
  { kana: 'ぺ', romaji: 'pe', example: { en: 'page (ぺーじ)', id: 'halaman (ぺーじ)' } },
  { kana: 'ぽ', romaji: 'po', example: { en: 'post (ぽすと)', id: 'pos (ぽすと)' } }
];

// Katakana Basic Characters (ア-ン)
export const katakanaBasic: KanaCharacter[] = [
  { kana: 'ア', romaji: 'a', example: { en: 'America (アメリカ)', id: 'Amerika (アメリカ)' } },
  { kana: 'イ', romaji: 'i', example: { en: 'Italy (イタリア)', id: 'Italia (イタリア)' } },
  { kana: 'ウ', romaji: 'u', example: { en: 'wolf (ウルフ)', id: 'serigala (ウルフ)' } },
  { kana: 'エ', romaji: 'e', example: { en: 'engine (エンジン)', id: 'mesin (エンジン)' } },
  { kana: 'オ', romaji: 'o', example: { en: 'orange (オレンジ)', id: 'jeruk (オレンジ)' } },
  { kana: 'カ', romaji: 'ka', example: { en: 'camera (カメラ)', id: 'kamera (カメラ)' } },
  { kana: 'キ', romaji: 'ki', example: { en: 'keyboard (キーボード)', id: 'papan ketik (キーボード)' } },
  { kana: 'ク', romaji: 'ku', example: { en: 'cookie (クッキー)', id: 'kue (クッキー)' } },
  { kana: 'ケ', romaji: 'ke', example: { en: 'cake (ケーキ)', id: 'kue (ケーキ)' } },
  { kana: 'コ', romaji: 'ko', example: { en: 'coffee (コーヒー)', id: 'kopi (コーヒー)' } },
  { kana: 'サ', romaji: 'sa', example: { en: 'salad (サラダ)', id: 'salad (サラダ)' } },
  { kana: 'シ', romaji: 'shi', example: { en: 'shirt (シャツ)', id: 'kemeja (シャツ)' } },
  { kana: 'ス', romaji: 'su', example: { en: 'sport (スポーツ)', id: 'olahraga (スポーツ)' } },
  { kana: 'セ', romaji: 'se', example: { en: 'center (センター)', id: 'pusat (センター)' } },
  { kana: 'ソ', romaji: 'so', example: { en: 'sofa (ソファ)', id: 'sofa (ソファ)' } },
  { kana: 'タ', romaji: 'ta', example: { en: 'taxi (タクシー)', id: 'taksi (タクシー)' } },
  { kana: 'チ', romaji: 'chi', example: { en: 'team (チーム)', id: 'tim (チーム)' } },
  { kana: 'ツ', romaji: 'tsu', example: { en: 'tour (ツアー)', id: 'tur (ツアー)' } },
  { kana: 'テ', romaji: 'te', example: { en: 'television (テレビ)', id: 'televisi (テレビ)' } },
  { kana: 'ト', romaji: 'to', example: { en: 'tomato (トマト)', id: 'tomat (トマト)' } },
  { kana: 'ナ', romaji: 'na', example: { en: 'navigation (ナビ)', id: 'navigasi (ナビ)' } },
  { kana: 'ニ', romaji: 'ni', example: { en: 'news (ニュース)', id: 'berita (ニュース)' } },
  { kana: 'ヌ', romaji: 'nu', example: { en: 'noodle (ヌードル)', id: 'mie (ヌードル)' } },
  { kana: 'ネ', romaji: 'ne', example: { en: 'network (ネットワーク)', id: 'jaringan (ネットワーク)' } },
  { kana: 'ノ', romaji: 'no', example: { en: 'note (ノート)', id: 'catatan (ノート)' } },
  { kana: 'ハ', romaji: 'ha', example: { en: 'hamburger (ハンバーガー)', id: 'hamburger (ハンバーガー)' } },
  { kana: 'ヒ', romaji: 'hi', example: { en: 'hero (ヒーロー)', id: 'pahlawan (ヒーロー)' } },
  { kana: 'フ', romaji: 'fu', example: { en: 'film (フィルム)', id: 'film (フィルム)' } },
  { kana: 'ヘ', romaji: 'he', example: { en: 'helicopter (ヘリコプター)', id: 'helikopter (ヘリコプター)' } },
  { kana: 'ホ', romaji: 'ho', example: { en: 'hotel (ホテル)', id: 'hotel (ホテル)' } },
  { kana: 'マ', romaji: 'ma', example: { en: 'market (マーケット)', id: 'pasar (マーケット)' } },
  { kana: 'ミ', romaji: 'mi', example: { en: 'milk (ミルク)', id: 'susu (ミルク)' } },
  { kana: 'ム', romaji: 'mu', example: { en: 'music (ミュージック)', id: 'musik (ミュージック)' } },
  { kana: 'メ', romaji: 'me', example: { en: 'menu (メニュー)', id: 'menu (メニュー)' } },
  { kana: 'モ', romaji: 'mo', example: { en: 'model (モデル)', id: 'model (モデル)' } },
  { kana: 'ヤ', romaji: 'ya', example: { en: 'yacht (ヨット)', id: 'kapal pesiar (ヨット)' } },
  { kana: 'ユ', romaji: 'yu', example: { en: 'user (ユーザー)', id: 'pengguna (ユーザー)' } },
  { kana: 'ヨ', romaji: 'yo', example: { en: 'yoga (ヨガ)', id: 'yoga (ヨガ)' } },
  { kana: 'ラ', romaji: 'ra', example: { en: 'radio (ラジオ)', id: 'radio (ラジオ)' } },
  { kana: 'リ', romaji: 'ri', example: { en: 'rhythm (リズム)', id: 'ritme (リズム)' } },
  { kana: 'ル', romaji: 'ru', example: { en: 'rule (ルール)', id: 'aturan (ルール)' } },
  { kana: 'レ', romaji: 're', example: { en: 'restaurant (レストラン)', id: 'restoran (レストラン)' } },
  { kana: 'ロ', romaji: 'ro', example: { en: 'robot (ロボット)', id: 'robot (ロボット)' } },
  { kana: 'ワ', romaji: 'wa', example: { en: 'wine (ワイン)', id: 'anggur (ワイン)' } },
  { kana: 'ヲ', romaji: 'wo', example: { en: 'object marker (ヲ)', id: 'penanda objek (ヲ)' } },
  { kana: 'ン', romaji: 'n', example: { en: 'final n (ン)', id: 'n akhir (ン)' } }
];

// Katakana Dakuten (゛) Characters
export const katakanaDakuten: KanaCharacter[] = [
  { kana: 'ガ', romaji: 'ga', example: { en: 'gas (ガス)', id: 'gas (ガス)' } },
  { kana: 'ギ', romaji: 'gi', example: { en: 'guitar (ギター)', id: 'gitar (ギター)' } },
  { kana: 'グ', romaji: 'gu', example: { en: 'group (グループ)', id: 'grup (グループ)' } },
  { kana: 'ゲ', romaji: 'ge', example: { en: 'game (ゲーム)', id: 'permainan (ゲーム)' } },
  { kana: 'ゴ', romaji: 'go', example: { en: 'golf (ゴルフ)', id: 'golf (ゴルフ)' } },
  { kana: 'ザ', romaji: 'za', example: { en: 'design (デザイン)', id: 'desain (デザイン)' } },
  { kana: 'ジ', romaji: 'ji', example: { en: 'juice (ジュース)', id: 'jus (ジュース)' } },
  { kana: 'ズ', romaji: 'zu', example: { en: 'shoes (シューズ)', id: 'sepatu (シューズ)' } },
  { kana: 'ゼ', romaji: 'ze', example: { en: 'zero (ゼロ)', id: 'nol (ゼロ)' } },
  { kana: 'ゾ', romaji: 'zo', example: { en: 'zone (ゾーン)', id: 'zona (ゾーン)' } },
  { kana: 'ダ', romaji: 'da', example: { en: 'dance (ダンス)', id: 'tari (ダンス)' } },
  { kana: 'ヂ', romaji: 'di', example: { en: 'disk (ディスク)', id: 'disk (ディスク)' } },
  { kana: 'ヅ', romaji: 'du', example: { en: 'duo (デュオ)', id: 'duo (デュオ)' } },
  { kana: 'デ', romaji: 'de', example: { en: 'data (データ)', id: 'data (データ)' } },
  { kana: 'ド', romaji: 'do', example: { en: 'door (ドア)', id: 'pintu (ドア)' } },
  { kana: 'バ', romaji: 'ba', example: { en: 'bus (バス)', id: 'bus (バス)' } },
  { kana: 'ビ', romaji: 'bi', example: { en: 'beer (ビール)', id: 'bir (ビール)' } },
  { kana: 'ブ', romaji: 'bu', example: { en: 'blue (ブルー)', id: 'biru (ブルー)' } },
  { kana: 'ベ', romaji: 'be', example: { en: 'bed (ベッド)', id: 'tempat tidur (ベッド)' } },
  { kana: 'ボ', romaji: 'bo', example: { en: 'ball (ボール)', id: 'bola (ボール)' } }
];

// Hiragana Combination (拗音) Characters
export const hiraganaCombination: KanaCharacter[] = [
  { kana: 'きゃ', romaji: 'kya', example: { en: 'guest / customer (きゃく)', id: 'tamu (きゃく)' } },
  { kana: 'きゅ', romaji: 'kyu', example: { en: 'nine (きゅう)', id: 'sembilan (きゅう)' } },
  { kana: 'きょ', romaji: 'kyo', example: { en: 'today (きょう)', id: 'hari ini (きょう)' } },
  { kana: 'しゃ', romaji: 'sha', example: { en: 'photo (しゃしん)', id: 'foto (しゃしん)' } },
  { kana: 'しゅ', romaji: 'shu', example: { en: 'hobby (しゅみ)', id: 'hobi (しゅみ)' } },
  { kana: 'しょ', romaji: 'sho', example: { en: 'meal (しょくじ)', id: 'makan (しょくじ)' } },
  { kana: 'ちゃ', romaji: 'cha', example: { en: 'tea (おちゃ)', id: 'teh (おちゃ)' } },
  { kana: 'ちゅ', romaji: 'chu', example: { en: 'middle school (ちゅうがっこう)', id: 'SMP (ちゅうがっこう)' } },
  { kana: 'ちょ', romaji: 'cho', example: { en: 'a little (ちょっと)', id: 'sebentar (ちょっと)' } },
  { kana: 'にゃ', romaji: 'nya', example: { en: 'cat (にゃんこ)', id: 'kucing (にゃんこ)' } },
  { kana: 'にゅ', romaji: 'nyu', example: { en: 'milk (ぎゅうにゅう)', id: 'susu (ぎゅうにゅう)' } },
  { kana: 'にょ', romaji: 'nyo', example: { en: 'woman (にょうぼう)', id: 'wanita (にょうぼう)' } },
  { kana: 'ひゃ', romaji: 'hya', example: { en: 'hundred (ひゃく)', id: 'seratus (ひゃく)' } },
  { kana: 'ひゅ', romaji: 'hyu', example: { en: 'wind sound (ひゅう)', id: 'suara angin (ひゅう)' } },
  { kana: 'ひょ', romaji: 'hyo', example: { en: 'table / chart (ひょう)', id: 'tabel (ひょう)' } },
  { kana: 'みゃ', romaji: 'mya', example: { en: 'pulse (みゃく)', id: 'denyut nadi (みゃく)' } },
  { kana: 'みゅ', romaji: 'myu', example: { en: 'music (みゅーじっく)', id: 'musik (みゅーじっく)' } },
  { kana: 'みょ', romaji: 'myo', example: { en: 'tomorrow (みょうにち)', id: 'besok (みょうにち)' } },
  { kana: 'りゃ', romaji: 'rya', example: { en: 'abbreviation (りゃく)', id: 'singkatan (りゃく)' } },
  { kana: 'りゅ', romaji: 'ryu', example: { en: 'dragon (りゅう)', id: 'naga (りゅう)' } },
  { kana: 'りょ', romaji: 'ryo', example: { en: 'travel (りょこう)', id: 'wisata (りょこう)' } },
  { kana: 'ぎゃ', romaji: 'gya', example: { en: 'reverse (ぎゃく)', id: 'kebalikan (ぎゃく)' } },
  { kana: 'ぎゅ', romaji: 'gyu', example: { en: 'beef (ぎゅうにく)', id: 'daging sapi (ぎゅうにく)' } },
  { kana: 'ぎょ', romaji: 'gyo', example: { en: 'goldfish (きんぎょ)', id: 'ikan mas (きんぎょ)' } },
  { kana: 'じゃ', romaji: 'ja', example: { en: 'obstacle (じゃま)', id: 'gangguan (じゃま)' } },
  { kana: 'じゅ', romaji: 'ju', example: { en: 'lesson (じゅぎょう)', id: 'pelajaran (じゅぎょう)' } },
  { kana: 'じょ', romaji: 'jo', example: { en: 'woman (じょせい)', id: 'wanita (じょせい)' } },
  { kana: 'びゃ', romaji: 'bya', example: { en: 'white night (びゃくや)', id: 'malam putih (びゃくや)' } },
  { kana: 'びゅ', romaji: 'byu', example: { en: 'wind sound (びゅう)', id: 'deru angin (びゅう)' } },
  { kana: 'びょ', romaji: 'byo', example: { en: 'hospital (びょういん)', id: 'rumah sakit (びょういん)' } },
  { kana: 'ぴゃ', romaji: 'pya', example: { en: 'six hundred (ろっぴゃく)', id: 'enam ratus (ろっぴゃく)' } },
  { kana: 'ぴゅ', romaji: 'pyu', example: { en: 'pure (ぴゅあ)', id: 'murni (ぴゅあ)' } },
  { kana: 'ぴょ', romaji: 'pyo', example: { en: 'hopping (ぴょんぴょん)', id: 'melompat (ぴょんぴょん)' } }
];

// Katakana Handakuten (゜) Characters
export const katakanaHandakuten: KanaCharacter[] = [
  { kana: 'パ', romaji: 'pa', example: { en: 'party (パーティー)', id: 'pesta (パーティー)' } },
  { kana: 'ピ', romaji: 'pi', example: { en: 'piano (ピアノ)', id: 'piano (ピアノ)' } },
  { kana: 'プ', romaji: 'pu', example: { en: 'pool (プール)', id: 'kolam (プール)' } },
  { kana: 'ペ', romaji: 'pe', example: { en: 'pen (ペン)', id: 'pena (ペン)' } },
  { kana: 'ポ', romaji: 'po', example: { en: 'poster (ポスター)', id: 'poster (ポスター)' } }
];

// Katakana Combination (拗音) Characters
export const katakanaCombination: KanaCharacter[] = [
  { kana: 'キャ', romaji: 'kya', example: { en: 'camp (キャンプ)', id: 'kemah (キャンプ)' } },
  { kana: 'キュ', romaji: 'kyu', example: { en: 'cute (キュート)', id: 'lucu (キュート)' } },
  { kana: 'キョ', romaji: 'kyo', example: { en: 'giant (キョジン)', id: 'raksasa (キョジン)' } },
  { kana: 'シャ', romaji: 'sha', example: { en: 'shower (シャワー)', id: 'pancuran (シャワー)' } },
  { kana: 'シュ', romaji: 'shu', example: { en: 'cream puff (シュークリーム)', id: 'kue sus (シュークリーム)' } },
  { kana: 'ショ', romaji: 'sho', example: { en: 'shop (ショップ)', id: 'toko (ショップ)' } },
  { kana: 'チャ', romaji: 'cha', example: { en: 'chance (チャンス)', id: 'kesempatan (チャンス)' } },
  { kana: 'チュ', romaji: 'chu', example: { en: 'tulip (チューリップ)', id: 'tulip (チューリップ)' } },
  { kana: 'チョ', romaji: 'cho', example: { en: 'chocolate (チョコレート)', id: 'cokelat (チョコレート)' } },
  { kana: 'ニャ', romaji: 'nya', example: { en: 'cat sound (ニャー)', id: 'suara kucing (ニャー)' } },
  { kana: 'ニュ', romaji: 'nyu', example: { en: 'news (ニュース)', id: 'berita (ニュース)' } },
  { kana: 'ニョ', romaji: 'nyo', example: { en: 'gnocchi (ニョッキ)', id: 'gnocchi (ニョッキ)' } },
  { kana: 'ヒャ', romaji: 'hya', example: { en: 'hundred (ヒャク)', id: 'seratus (ヒャク)' } },
  { kana: 'ヒュ', romaji: 'hyu', example: { en: 'human (ヒューマン)', id: 'manusia (ヒューマン)' } },
  { kana: 'ヒョ', romaji: 'hyo', example: { en: 'leopard (ヒョウ)', id: 'macan tutul (ヒョウ)' } },
  { kana: 'ミャ', romaji: 'mya', example: { en: 'Myanmar (ミャンマー)', id: 'Myanmar (ミャンマー)' } },
  { kana: 'ミュ', romaji: 'myu', example: { en: 'music (ミュージック)', id: 'musik (ミュージック)' } },
  { kana: 'ミョ', romaji: 'myo', example: { en: 'strange (ミョウ)', id: 'aneh (ミョウ)' } },
  { kana: 'リャ', romaji: 'rya', example: { en: 'llama (リャマ)', id: 'lama (リャマ)' } },
  { kana: 'リュ', romaji: 'ryu', example: { en: 'backpack (リュック)', id: 'ransel (リュック)' } },
  { kana: 'リョ', romaji: 'ryo', example: { en: 'ryokan (リョカン)', id: 'penginapan (リョカン)' } },
  { kana: 'ギャ', romaji: 'gya', example: { en: 'gallery (ギャラリー)', id: 'galeri (ギャラリー)' } },
  { kana: 'ギュ', romaji: 'gyu', example: { en: 'beef bowl (ギュウドン)', id: 'mangkuk daging (ギュウドン)' } },
  { kana: 'ギョ', romaji: 'gyo', example: { en: 'gyoza (ギョーザ)', id: 'pangsit (ギョーザ)' } },
  { kana: 'ジャ', romaji: 'ja', example: { en: 'jacket (ジャケット)', id: 'jaket (ジャケット)' } },
  { kana: 'ジュ', romaji: 'ju', example: { en: 'juice (ジュース)', id: 'jus (ジュース)' } },
  { kana: 'ジョ', romaji: 'jo', example: { en: 'jogging (ジョギング)', id: 'joging (ジョギング)' } },
  { kana: 'ビャ', romaji: 'bya', example: { en: 'white night (ビャクヤ)', id: 'malam putih (ビャクヤ)' } },
  { kana: 'ビュ', romaji: 'byu', example: { en: 'buffet (ビュッフェ)', id: 'prasmanan (ビュッフェ)' } },
  { kana: 'ビョ', romaji: 'byo', example: { en: 'hospital (ビョウイン)', id: 'rumah sakit (ビョウイン)' } },
  { kana: 'ピャ', romaji: 'pya', example: { en: 'chirp (ピャー)', id: 'cicit (ピャー)' } },
  { kana: 'ピュ', romaji: 'pyu', example: { en: 'puree (ピューレ)', id: 'pure (ピューレ)' } },
  { kana: 'ピョ', romaji: 'pyo', example: { en: 'hop (ピョン)', id: 'lompat (ピョン)' } }
];

// Combined arrays for quiz functionality
export const allHiragana = [...hiraganaBasic, ...hiraganaDakuten, ...hiraganaHandakuten, ...hiraganaCombination];
export const allKatakana = [...katakanaBasic, ...katakanaDakuten, ...katakanaHandakuten, ...katakanaCombination];
export const allKana = [...allHiragana, ...allKatakana];

// Group definitions for navigation
export const hiraganaGroups: KanaGroup[] = [
  { 
    name: { en: 'Basic Hiragana', id: 'Hiragana Dasar' }, 
    characters: hiraganaBasic 
  },
  { 
    name: { en: 'Dakuten (゛)', id: 'Dakuten (゛)' }, 
    characters: hiraganaDakuten 
  },
  { 
    name: { en: 'Handakuten (゜)', id: 'Handakuten (゜)' }, 
    characters: hiraganaHandakuten 
  },
  { 
    name: { en: 'Combination (拗音)', id: 'Kombinasi (拗音)' }, 
    characters: hiraganaCombination 
  }
];

export const katakanaGroups: KanaGroup[] = [
  { 
    name: { en: 'Basic Katakana', id: 'Katakana Dasar' }, 
    characters: katakanaBasic 
  },
  { 
    name: { en: 'Dakuten (゛)', id: 'Dakuten (゛)' }, 
    characters: katakanaDakuten 
  },
  { 
    name: { en: 'Handakuten (゜)', id: 'Handakuten (゜)' }, 
    characters: katakanaHandakuten 
  },
  { 
    name: { en: 'Combination (拗音)', id: 'Kombinasi (拗音)' }, 
    characters: katakanaCombination 
  }
];