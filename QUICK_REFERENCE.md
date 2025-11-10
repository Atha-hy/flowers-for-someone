# 🎬 Birthday Experience - Quick Reference Card

## 🚀 Mulai Cepat

| Tujuan | Buka File |
|--------|-----------|
| Mulai dari awal (Scene 1) | `liakss.html` |
| Navigation hub | `index.html` |
| Test Scene 2 (Cake) | `cake.html` |
| Test Scene 3 (Gift) | `gift.html` |
| Test Scene 4 (Flower) | `flower.html` |
| Test Scene 5 (Text) | `teks.html` |

## 🎯 Flow Chart

```
START
  ↓
index.html (Navigation Hub)
  ↓
liakss.html (Scene 1: Opening)
  │ Ya (pop sound) →
  ↓
cake.html (Scene 2: Cake)
  │ All candles blown out →
  ↓
gift.html (Scene 3: Gift Box)
  │ Click gift (chime sound) →
  ↓
flower.html (Scene 4: Flowers)
  │ Click Lanjut →
  ↓
teks.html (Scene 5: Long Text)
  │ Click Close →
  ↓
Alert + Window Close
  ↓
END 🎂✨
```

## 🎮 Interactions Cheat Sheet

### Scene 1 (liakss.html)
- **Klik "Ya"** → Pop sound + Swipe animation → Scene 2
- **Klik "Tidak"** → Alert lucu → Stay

### Scene 2 (cake.html)
- **Klik di atas kue** → Tambah lilin + Ding sound
- **Tiup ke microphone** → Lilin mati (harus tiup semua)
- **Semua lilin mati** → Text + Button appear → Click Lanjut → Scene 3

### Scene 3 (gift.html)
- **Klik gift box** → Chime sound + Confetti + Sparks → Swipe down → Scene 4

### Scene 4 (flower.html)
- **Wait untuk animasi selesai** → Text appear
- **Klik "Lanjut ➜"** → Swipe up → Scene 5

### Scene 5 (teks.html)
- **Scroll baca pesan** → Music plays (fade-in)
- **Klik "Tutup halaman"** → Music fade-out → Alert → Close

## 🎵 Audio Guide

| Scene | Tipe | Sumber | Trigger |
|-------|------|--------|---------|
| 1 | Pop sound | Web Audio API | Klik Ya/Tidak |
| 2 | Ding sound | Web Audio API | Lilin ditambah |
| 2 | Happy Birthday | File hbd.mp3 | Semua lilin mati |
| 3 | Chime sound | Web Audio API | Klik gift |
| 5 | Background music | If.mp3 | Auto fade-in |
| 5 | Musik fade-out | If.mp3 | Saat close |

## 🛠️ Edit Points

### Edit Pesan Scene 1
**File**: `liakss.html`
**Lokasi**: Search `funnyMessages`
```javascript
const funnyMessages = [
    "Ayy sabar dulu! 😝",       ← Edit ini
    "Jangan nakal...",
    // ...
];
```

### Edit Long Text Scene 5
**File**: `teks.html`
**Lokasi**: Search `const longTexts`
```javascript
const longTexts = [
    "Liaa, aku mau ngomong...",   ← Edit ini
    "Liaa, aku mau ngomong...",   ← Edit ini
    // Total 7 paragraf
];
```

### Edit Timing Animasi
**File**: Masing-masing HTML
**Lokasi**: CSS `@keyframes` dan JavaScript `setTimeout`
```css
animation-delay: 4.5s;  ← Ubah delay
animation-duration: 1s; ← Ubah durasi
```

### Edit Music Volume
**File**: `teks.html`
**Lokasi**: Search `musicAudioElement.volume`
```javascript
musicAudioElement.volume = 0.4 * progress; ← Change 0.4 to your preference
```

## 📊 File Dependencies

```
index.html
├── Tailwind CSS (CDN)
├── Font: Poppins (CDN)
└── No dependencies

liakss.html
├── Tailwind CSS (CDN)
├── Font: Poppins (local @import)
└── Web Audio API (browser)

cake.html
├── Tailwind CSS (CDN)
├── Prefixfree (CDN)
├── js/cake.js
├── Canvas Confetti (CDN)
└── Web Audio API (browser)

gift.html
├── Tailwind CSS (CDN)
├── Font: Poppins (local @import)
└── Web Audio API (browser)

flower.html
├── css/flower.css
├── js/flower.js
└── (No external CDN needed)

teks.html
├── Tailwind CSS (CDN)
├── Font: Poppins (local @import)
├── music/If.mp3
└── Web Audio API (browser)
```

## ✅ Checklist Launching

- [ ] Folder structure OK
- [ ] All HTML files ada
- [ ] CSS files ada (cake.css, flower.css, index.css)
- [ ] JS files ada (cake.js, flower.js)
- [ ] Music file ada (If.mp3)
- [ ] Images folder ada (gift.png)
- [ ] Open index.html di browser
- [ ] Click "Mulai dari Awal"
- [ ] Go through all 5 scenes
- [ ] Test sounds (mungkin need permission)
- [ ] Test microphone (Scene 2)
- [ ] Verify animations smooth
- [ ] ✅ Ready!

## 🔊 Browser Permissions

Ketika pertama kali buka:

1. **Microphone Permission** (Scene 2)
   - Click "Allow" untuk enable microphone
   - Needed untuk blow detection

2. **Audio Permission** (Scene 5)
   - Usually auto, tapi bisa perlu allow
   - Needed untuk background music

## 📱 Responsive Breakpoints

| Device | Tested |
|--------|--------|
| Mobile (< 640px) | ✅ Yes |
| Tablet (640-1024px) | ✅ Yes |
| Desktop (> 1024px) | ✅ Yes |

Semua page responsive dengan Tailwind CSS!

## 🎨 Color Palette

| Warna | Hex | Usage |
|-------|-----|-------|
| Pink Main | #ff8fab | Cake, buttons |
| Pink Light | #ffc2d1 | Cake highlight |
| Pink Dark | #fb6f92 | Shadow, text |
| Cyan | #a7ffee | Flower, text |
| Cyan Dark | #54b8aa | Flower detail |
| Gold | #ffd700 | Closing text |
| Purple | #667eea/#764ba2 | Scene 1, 3 background |
| Dark | #0a0e27 | Scene 5 background |

## 🚨 Common Issues & Quick Fixes

| Issue | Fix |
|-------|-----|
| Sound tidak dengar | Allow audio permission, check volume |
| Microphone error Scene 2 | Allow mic permission, try blow harder |
| Animasi freeze | Update browser, disable browser extensions |
| Music tidak play | Check If.mp3 file exists, check path |
| Text tidak muncul | Check browser zoom level (reset to 100%) |
| Page layout broken | Clear cache (Ctrl+Shift+Del), refresh |

## 📞 Debug Mode

Open browser console: **F12** atau **Ctrl+Shift+J**

Lihat apakah ada error messages. Common messages:

```javascript
// Ini OK (permission)
Unable to access microphone: NotAllowedError

// Ini ERROR (need fix)
404: music/If.mp3 not found
404: js/cake.js not found
```

## 🎓 Learning Resources

File ini menggunakan:
- **CSS Animations**: Untuk smooth transitions
- **Web Audio API**: Untuk sound effects
- **MediaDevices API**: Untuk microphone
- **Canvas Confetti**: Untuk particle effects
- **Tailwind CSS**: Untuk responsive design
- **Vanilla JavaScript**: Untuk interaktivity

Perfect untuk belajar modern web development! 🚀

---

## 🎉 Selesai!

Semua siap digunakan. Cukup open `index.html` atau `liakss.html` dan enjoy!

**Happy Birthday, Liaa! 🎂✨💝**
