💐Resource flowers gift website for someone

# Flowers for Someone 🌸 - Interactive Birthday Experience

Welcome to an interactive Birthday Experience website! � This is a special gift website that takes you through a heartfelt journey with animations, music, and personalized messages.

## 🎬 Flow Aplikasi (Scene-by-Scene)

### Scene 1: Opening Greeting (liakss.html)
- **Start Point**: Halaman pembuka dengan gradient background
- **Interactions**: 
  - Teks fade-in: "Haii Liaa 👋"
  - Pertanyaan: "Bolehh mencuuri waktuu muu sebentarr?"
  - Tombol "Ya" → transisi ke Cake scene
  - Tombol "Tidak" → alert lucu (acak dari 5 pesan)
- **Sound**: Pop sound effect lembut pada klik tombol
- **Animations**: Floating particles, text fade-in, button pop animation

### Scene 2: Bikin Kue (cake.html)
- **Objective**: Klik kue untuk menambahkan lilin
- **Features**:
  - Text: "Klik kuenyaa untuk nambahin lilin! 🎂✨"
  - Setiap klik pada kue menambah 1 lilin baru
  - Sound: Ding sound effect saat lilin bertambah
  - Lilin nyala dengan animasi api yang bergoyang
  - Blow out candles menggunakan microphone (deteksi suara)
  - Counter lilin yang aktif
- **Success Trigger**: Semua lilin ditiup
  - Muncul teks: "Perfect! 🎂 Sekarang waktunya buka hadiahnyaa~ 🎁"
  - Confetti animation
  - Button "Lanjut ➜" untuk ke scene berikutnya

### Scene 3: Gift Box (gift.html)
- **Visual**: Gift box berwarna pink dengan ribbon dan bow
- **Interaction**: Klik gift box
  - Animasi bobbing (naik turun imut)
  - Sound: Chime sound effect
  - Confetti animation
  - Spark effects
- **Transition**: Setelah animasi selesai → ke Flower scene

### Scene 4: Bunga yang Tumbuh (flower.html)
- **Visual**: 
  - Animated flowers tumbuh dengan smooth animation
  - Dark night background dengan cahaya bintang
  - Semua animasi bunga original tetap dipertahankan
- **Text Animation** (muncul setelah bunga terbentuk):
  - "Wah bunga nyaa cantik yaa~ 🌸✨"
  - "Engga kalah cantik sama yang lagi ultah 💝"
- **Button**: "Lanjut ➜" untuk ke scene terakhir

### Scene 5: Pesan Khusus (teks.html)
- **Background**: Dark background dengan twinkling particles
- **Music**: "If - Bread" (music/If.mp3) fade-in otomatis
- **Sequence**:
  1. Typewriter effect: "Haii Liaa, ada sedikit pesan dari akuu… minta waktunya sedikit lagi yaa~ 🌙"
  2. Musik fade-in lembut
  3. Long text fade-in per paragraph (7 paragraf total):
     - Paragraf 1: Tentang pikiran setiap hari
     - Paragraf 2: Cara membuat orang merasa special
     - Paragraf 3: Hal-hal yang disukai
     - Paragraf 4: Harapan di hari spesial
     - Paragraf 5: Terus berkembang
     - Paragraf 6: Persahabatan berkelanjutan
     - Paragraf 7: Terima kasih
  4. Closing message: "Terima kasih udah jadi kamu, Lia. 🎂✨"
  5. Button: "Tutup halaman dengan senyum 😊"
- **Closing**: Alert sweet, musik fade-out, close window

## 📋 Technologies Used

- **HTML5**: Struktur markup
- **CSS3 & SCSS**: Styling dan animasi kompleks (flower.css tetap original)
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (Vanilla)**: Interaktivitas dan event handling
  - Web Audio API: Sound effects dan music control
  - Canvas Confetti: Particle effects
  - MediaDevices API: Microphone access untuk blow detection

## 📁 Project Structure

```
liaksss/
├── liakss.html          # Scene 1: Opening Greeting
├── cake.html            # Scene 2: Birthday Cake
├── gift.html            # Scene 3: Gift Box
├── flower.html          # Scene 4: Growing Flowers
├── teks.html            # Scene 5: Long Text dengan Music
├── css/
│   ├── cake.css         # Cake styling
│   ├── flower.css       # Flower styling (original, complex)
│   └── index.css        # General styles
├── js/
│   ├── cake.js          # Cake interactivity
│   ├── flower.js        # Flower typewriter effect
│   └── index.js         # General JS
├── music/
│   └── If.mp3           # "If - Bread" background music
├── images/
│   └── gift.png         # Favicon
└── README.md            # Documentation
```

## 🎯 Key Features

✨ **Smooth Transitions**: Setiap scene transisi dengan swipe/fade animations
🎵 **Audio Integration**: Sound effects dan background music dengan fade in/out
🎨 **Beautiful Animations**: Custom CSS animations dan Web Animations API
🎪 **Particle Effects**: Floating particles, confetti, sparks
📱 **Responsive Design**: Bekerja di berbagai ukuran layar
🎙️ **Voice Detection**: Microphone input untuk blow out candles
💝 **Personalized Experience**: Teks dan pesan yang warm dan meaningful

## 🎮 How to Use

1. Buka `liakss.html` di browser
2. Ikuti flow yang sudah dirancang:
   - Klik "Ya" untuk lanjut
   - Klik kue untuk tambahin lilin
   - Tiup candles
   - Klik gift box
   - Baca pesan panjang dengan musik

## 📝 Customization

Untuk mengubah teks:
- **Scene 1**: Edit teks dalam elemen `<h1>` dan `<p>`
- **Scene 5**: Edit array `longTexts` di script

Untuk mengubah musik:
- Ganti file di `music/If.mp3` dengan musik pilihan (harus format mp3)

## ⚙️ Browser Requirements

- Chrome, Firefox, Safari, Edge (modern versions)
- Microphone access (untuk Scene 2 - blow out candles)
- JavaScript enabled
- Audio playback support

## 💡 Notes

- Semua file CSS original (cake.css, flower.css, style.scss) dijaga dan tidak diubah
- Animations kompatibel dengan semua browser modern
- Sound effects dibuat dengan Web Audio API (tidak perlu file external)
- Music fade-in/out dihandle dengan JavaScript

---

**Made with 💝 for Liaa Marsyaa's Birthday**

🎂 Happy Birthday! Semoga hari mu penuh dengan kebahagiaan dan orang-orang yang sayang! 🎉✨
