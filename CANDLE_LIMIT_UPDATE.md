# 🎂 Cake Scene Update - Candle Limit Feature

## ✨ Fitur Baru Yang Ditambahkan

Sesuai dengan rancangan mu, fitur batasan lilin dengan dialog cute telah diimplementasikan!

---

## 🎯 Alur Fitur

### 1️⃣ Normal Klik Kue (Lilin < 5)
```
Klik kue → Lilin bertambah + ding sound
(Normal, seperti sebelumnya)
```

### 2️⃣ Saat Mencapai Limit (Lilin = 5)
```
Klik kue ketika lilin sudah 5 →
Alert: "Ehh udahh banyakk itu lilinnyaa 😭"
Button: "Okedehh"
```

### 3️⃣ Setelah Klik "Okedehh"
```
Alert kedua muncul:
"Ehh karena ini hari spesial mu, 
aku bolehin dehh tambah lilinnyaa 💝"

2 Opsi:
- "Tambahin" → Izin 1 lilin extra, Next button muncul
- "Tengga deh" → Tolak, lilin tetap 5
```

### 4️⃣ Kalau Pilih "Tambahin"
```
Alert: "Yayy! 🎉 Sekarang kamu bisa tambahin 1 lilin lagi!"
Next button muncul (ready untuk ke gift.html)
Bisa klik kue 1x lagi untuk tambahin lilin ke-6
```

### 5️⃣ Kalau Pilih "Engga Deh"
```
Alert: "Ehh tadii kan udah pilih engga deh 😢
Gaboleh gaboleh, lilinnya udah cukup!"

Klik kue lagi → Alert lain:
"Ehh tadii kan udah pilih engga deh 😭
Gaboleh gaboleh, lilinnya udah cukup banget!"
(Next button TIDAK muncul)
```

### 6️⃣ Kalau User Sudah Memilih "Tambahin"
```
Setelah 1 lilin extra ditambah (total 6) →
Klik kue lagi → Alert:
"Ehh tadii kan udah pilih engga deh 😭
Gaboleh gaboleh, lilinnya udah cukup banget!"
(Lilin tidak bisa bertambah)
```

---

## 🔧 Technical Implementation

### File yang Diubah:

#### 1. **cake.html**
✅ Tambah SweetAlert2 CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

✅ Tambah styling untuk next button yang muncul dinamis

#### 2. **js/cake.js**
✅ Tambah 4 variable baru:
- `const MAX_CANDLES = 5;` - Batasan maksimal lilin
- `let userAllowedExtraCandle = false;` - Track user choice
- `let limitReachedOnce = false;` - Track if dialog sudah ditampilkan

✅ Tambah 3 function baru:
- `showLimitReachedAlert()` - Alert ketika limit tercapai
- `showAllowExtraAlert()` - Dialog konfirmasi
- `showAlreadyRejectedAlert()` - Alert ketika user sudah tolak

✅ Update event listener cake.click:
- Check apakah sudah mencapai limit
- Trigger alert sesuai dengan kondisi
- Allow/block penambahan lilin berdasarkan pilihan user

---

## 📊 Logic Flow

```
User Klik Kue
    ↓
[Lilin < 5?]
    ├─ YES → Tambah lilin (normal)
    └─ NO  → [limitReachedOnce?]
             ├─ NO  → Tampilkan limit alert
             │        ↓
             │      User pilih "Okedehh"
             │        ↓
             │      Tampilkan dialog konfirmasi
             │        ├─ "Tambahin" → userAllowedExtraCandle = true
             │        │                Next button muncul
             │        │                Alert "Yayy!"
             │        └─ "Tengga deh" → Alert reject
             │
             └─ YES → [userAllowedExtraCandle?]
                      ├─ NO  → Alert "udah pilih engga"
                      └─ YES → [Lilin > 5?]
                               ├─ YES → Alert "udah cukup banget"
                               └─ NO  → Tambah lilin (extra 1)
```

---

## 🎨 SweetAlert2 Configuration

Semua alert menggunakan:
- **Color**: `#ff8fab` (pink sesuai theme)
- **Style**: Professional tapi cute
- **Behavior**: 
  - `allowOutsideClick: false` - Harus pilih option
  - `allowEscapeKey: false` - Harus pilih option

---

## ✅ Features Summary

| Aspek | Detail |
|-------|--------|
| Max Candles | 5 |
| Extra Allowed | 1 (jika user setuju) |
| Alert Type | SweetAlert2 |
| Next Button | Muncul setelah "Tambahin" dipilih |
| Sound | Ding sound tetap ada |
| Emojis | 😭, 💝, 🎉, 😢 (sesuai request) |
| Messages | Semua sesuai dengan rancangan |

---

## 🚀 Cara Testing

### Test Case 1: Normal (< 5 lilin)
1. Klik kue 1-4 kali
2. Lilin bertambah normal dengan ding sound ✅

### Test Case 2: Limit Reached
1. Klik kue sampai 5 lilin
2. Alert 1 muncul: "Ehh udahh banyakk itu lilinnyaa 😭" ✅
3. Klik "Okedehh"
4. Alert 2 muncul: "Ehh karena ini hari spesial mu..." ✅

### Test Case 3: Choose "Tambahin"
1. Dari Alert 2, klik "Tambahin"
2. Alert 3 muncul: "Yayy! 🎉" ✅
3. Next button muncul di bawah ✅
4. Bisa klik kue 1x lagi (total 6 lilin) ✅
5. Klik ke-7 → Alert reject muncul ✅

### Test Case 4: Choose "Engga Deh"
1. Dari Alert 2, klik "Tengga deh"
2. Alert "Ehh tadii kan udah pilih engga deh" muncul ✅
3. Next button TIDAK muncul ✅
4. Klik kue lagi → Alert reject muncul ✅

---

## 💡 Code Highlights

### Alert 1 - Limit Reached
```javascript
Swal.fire({
  title: 'Ehh udahh banyakk itu lilinnyaa 😭',
  icon: 'warning',
  confirmButtonText: 'Okedehh',
  confirmButtonColor: '#ff8fab',
  allowOutsideClick: false,
  allowEscapeKey: false
})
```

### Alert 2 - Confirmation Dialog
```javascript
Swal.fire({
  title: 'Ehh karena ini hari spesial mu, aku bolehin dehh tambah lilinnyaa 💝',
  icon: 'success',
  showCancelButton: true,
  confirmButtonText: 'Tambahin',
  cancelButtonText: 'Tengga deh',
  // ...
})
```

### Click Handler Logic
```javascript
if (candles.length >= MAX_CANDLES) {
  if (!limitReachedOnce) {
    limitReachedOnce = true;
    showLimitReachedAlert();
  } 
  else if (!userAllowedExtraCandle) {
    showAlreadyRejectedAlert();
  } 
  else if (userAllowedExtraCandle && candles.length > MAX_CANDLES) {
    showAlreadyRejectedAlert();
  } 
  else if (userAllowedExtraCandle && candles.length === MAX_CANDLES) {
    addCandle(left, top); // Allow 1 extra
  }
}
```

---

## 🎁 Bonus Features

✅ **Next Button Auto-show**: Muncul otomatis setelah pilih "Tambahin"
✅ **Smooth Animation**: Button muncul dengan fade-in scale animation
✅ **Proper State Management**: Tracking semua user choices
✅ **UX Friendly**: Alert messages sesuai kondisi user
✅ **Emoji Support**: Semua emoji dari request included

---

## 📝 Notes

1. **Next button** hanya muncul jika user pilih "Tambahin"
2. **Lilin extra** hanya bisa 1 (total max 6)
3. **Alert messages** semuanya sesuai dengan request mu
4. **Sound effects** tetap berfungsi normal
5. **Original animations** tetap terjaga 100%

---

## 🎉 Selesai!

Semua rancangan mu telah diimplementasikan dengan hati-hati! ✨

**Features:**
- ✅ Max 5 lilin (standar)
- ✅ Alert cantik saat limit
- ✅ Dialog untuk allow 1 extra
- ✅ Tracking user choice
- ✅ Next button muncul conditional
- ✅ Reject messages yang cute
- ✅ Emojis sesuai request

**Ready to test!** 🚀

Made with 💝 for Liaa's Birthday Experience
