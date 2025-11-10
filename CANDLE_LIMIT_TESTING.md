# 🧪 Testing Guide - Candle Limit Feature

## 📋 Checklist Testing

### ✅ Pre-Test Setup
- [ ] Open cake.html di browser
- [ ] Allow microphone permission jika diminta
- [ ] Console open (F12) untuk lihat potential errors
- [ ] Volume on untuk dengar ding sound

---

## 🧪 Test Scenario 1: Normal Flow (< 5 Lilin)

**Objective**: Pastikan lilin bisa ditambah normally sampai 5

```
STEP 1: Klik kue 1x
├─ Expected: 1 lilin muncul
├─ Sound: Ding sound terdengar
└─ Status: ✅ PASS / ❌ FAIL

STEP 2: Klik kue 2x lebih
├─ Expected: Total 3 lilin
├─ Sound: 3x ding sound
└─ Status: ✅ PASS / ❌ FAIL

STEP 3: Klik kue 2x lebih
├─ Expected: Total 5 lilin
├─ Sound: 2x ding sound
└─ Status: ✅ PASS / ❌ FAIL

Result: Sekarang punya 5 lilin
Next: Lanjut ke Test Scenario 2
```

---

## 🧪 Test Scenario 2: Limit Reached Alert

**Objective**: Pastikan alert muncul ketika klik kue saat sudah 5 lilin

```
STEP 1: Klik kue (saat sudah 5 lilin)
├─ Expected: Alert muncul dengan title:
│            "Ehh udahh banyakk itu lilinnyaa 😭"
├─ Icon: ⚠️ warning
├─ Button: "Okedehh" (pink color)
└─ Status: ✅ PASS / ❌ FAIL

STEP 2: Check alert properties
├─ Can close by clicking outside? NO
├─ Can press Escape? NO
├─ Only "Okedehh" button visible? YES
└─ Status: ✅ PASS / ❌ FAIL

STEP 3: Klik "Okedehh" button
├─ Expected: Alert closes
└─ Status: ✅ PASS / ❌ FAIL
```

---

## 🧪 Test Scenario 3: Dialog Konfirmasi - TAMBAHIN Path

**Objective**: Test jika user memilih "Tambahin"

```
STEP 1: Tunggu Alert 2 (harus muncul otomatis)
├─ Expected: Dialog dengan title:
│            "Ehh karena ini hari spesial mu, 
│             aku bolehin dehh tambah lilinnyaa 💝"
├─ Icon: ✅ success
├─ Buttons: "Tambahin" (left), "Tengga deh" (right)
└─ Status: ✅ PASS / ❌ FAIL

STEP 2: Check button colors
├─ "Tambahin": Pink (#ff8fab) ✅
├─ "Tengga deh": Gray (#999) ✅
└─ Status: ✅ PASS / ❌ FAIL

STEP 3: Klik "Tambahin" button
├─ Expected: Alert 2 closes
└─ Status: ✅ PASS / ❌ FAIL

STEP 4: Tunggu Alert 3 (success message)
├─ Expected: "Yayy! 🎉
│             Sekarang kamu bisa tambahin 1 lilin lagi!
│             Tapi hanya 1 loohh"
├─ Icon: ✅ success
├─ Button: "Baiklah!"
└─ Status: ✅ PASS / ❌ FAIL

STEP 5: Klik "Baiklah!"
├─ Expected: Alert closes
└─ Status: ✅ PASS / ❌ FAIL

STEP 6: Check Next button
├─ Expected: "Lanjut ➜" button muncul di bawah
├─ Animation: Fade-in scale animation
├─ Color: Pink gradient
└─ Status: ✅ PASS / ❌ FAIL

STEP 7: Test extra lilin
├─ Klik kue lagi
├─ Expected: 6 lilin ditambahkan + ding sound
├─ Next button masih visible
└─ Status: ✅ PASS / ❌ FAIL

STEP 8: Test block setelah extra
├─ Klik kue lagi (saat total 6)
├─ Expected: Alert "Ehh tadii kan udah pilih engga deh 😭
│             Gaboleh gaboleh, lilinnya udah cukup banget!"
├─ Icon: ❌ error
├─ Button: "Okedehh"
└─ Status: ✅ PASS / ❌ FAIL

STEP 9: Klik "Okedehh"
├─ Expected: Alert closes
├─ Lilin tetap 6 (tidak bertambah)
└─ Status: ✅ PASS / ❌ FAIL

Result: ✅ "TAMBAHIN" PATH WORKS PERFECTLY
```

---

## 🧪 Test Scenario 4: Dialog Konfirmasi - ENGGA DEH Path

**Objective**: Test jika user memilih "Engga Deh"

*Note: Untuk test ini, ulangi dari Test Scenario 2 Step 1 & 2, tapi kali ini pilih "Engga Deh"*

```
STEP 1: Tunggu Alert 2 muncul (sama seperti Scenario 3)
├─ Status: ✅ PASS / ❌ FAIL

STEP 2: Klik "Tengga deh" button
├─ Expected: Alert 2 closes
└─ Status: ✅ PASS / ❌ FAIL

STEP 3: Tunggu Alert (reject message)
├─ Expected: "Ehh tadii kan udah pilih engga deh 😢
│             Gaboleh gaboleh, lilinnya udah cukup!"
├─ Icon: 😢 info
├─ Button: "Okedehh"
└─ Status: ✅ PASS / ❌ FAIL

STEP 4: Klik "Okedehh"
├─ Expected: Alert closes
├─ Lilin tetap 5 (tidak bertambah)
└─ Status: ✅ PASS / ❌ FAIL

STEP 5: Check Next button
├─ Expected: Next button TIDAK muncul ❌
├─ Page state: Normal seperti sebelumnya
└─ Status: ✅ PASS / ❌ FAIL

STEP 6: Test block penambahan lilin
├─ Klik kue lagi
├─ Expected: Alert "Ehh tadii kan udah pilih engga deh 😭
│             Gaboleh gaboleh, lilinnya udah cukup banget!"
├─ Icon: ❌ error
├─ Button: "Okedehh"
└─ Status: ✅ PASS / ❌ FAIL

STEP 7: Klik "Okedehh"
├─ Expected: Alert closes
├─ Lilin tetap 5 (tidak bertambah)
└─ Status: ✅ PASS / ❌ FAIL

STEP 8: Test repeated click
├─ Klik kue beberapa kali lagi
├─ Expected: Alert reject muncul setiap kali
├─ Lilin tetap 5
└─ Status: ✅ PASS / ❌ FAIL

Result: ✅ "ENGGA DEH" PATH WORKS PERFECTLY
```

---

## 🧪 Test Scenario 5: Microphone & Blow Detection

**Objective**: Pastikan blow detection tetap bekerja dengan limit feature

```
STEP 1: Pastikan ada lilin (2-3 lilin)
├─ Status: ✅ PASS / ❌ FAIL

STEP 2: Tiup ke microphone
├─ Expected: Lilin mati satu per satu
├─ Animation: Flame disappear
├─ Lilin count berkurang
└─ Status: ✅ PASS / ❌ FAIL

STEP 3: Test dengan banyak lilin
├─ Tambah lilin jadi 5 (normal path)
├─ Tiup microphone
├─ Expected: Lilin mati seperti normal
└─ Status: ✅ PASS / ❌ FAIL

STEP 4: Test setelah "Tambahin"
├─ Dari state 6 lilin (after allow extra)
├─ Tiup microphone
├─ Expected: Lilin mati seperti normal
└─ Status: ✅ PASS / ❌ FAIL

Result: ✅ MICROPHONE DETECTION WORKS WITH LIMIT
```

---

## 🎵 Sound Test Checklist

```
Scenario 1: Normal Klik
├─ Lilin 1-5: Ding sound setiap klik ✅
└─ Status: PASS / FAIL

Scenario 2: Alert muncul
├─ Sound tetap jelas terdengar ✅
└─ Status: PASS / FAIL

Scenario 3: Extra lilin
├─ Lilin ke-6: Ding sound terdengar ✅
└─ Status: PASS / FAIL

Scenario 4: Reject/Block
├─ Saat alert reject: Tidak ada sound ✅
└─ Status: PASS / FAIL
```

---

## 🎨 Visual Inspection Checklist

```
Alert Visual:
├─ Title readable ✅
├─ Icon visible ✅
├─ Button colors correct ✅
├─ Text formatting good ✅
└─ Emoji display correct ✅

Next Button Visual:
├─ Pink gradient color ✅
├─ Proper position ✅
├─ Readable text ✅
├─ Hover effect works ✅
└─ Fade-in animation smooth ✅

Overall Layout:
├─ No overlapping elements ✅
├─ Responsive pada mobile ✅
├─ Alert centered properly ✅
└─ Scrolling works if needed ✅
```

---

## 🐛 Potential Issues to Check

| Issue | Check | Status |
|-------|-------|--------|
| Alert tidak muncul | Check console errors | ✅/❌ |
| Button tidak clickable | Check z-index | ✅/❌ |
| Next button always shows | Check logic | ✅/❌ |
| Lilin dapat ditambah > 6 | Check logic | ✅/❌ |
| Sound tidak terdengar | Check volume | ✅/❌ |
| Alert bisa close by ESC | Check property | ✅/❌ |
| Text tidak jelas | Check visibility | ✅/❌ |

---

## 📊 Test Summary

After completing all scenarios, fill this:

```
Test Scenario 1 (Normal < 5):     ✅ PASS / ❌ FAIL
Test Scenario 2 (Limit Alert):    ✅ PASS / ❌ FAIL
Test Scenario 3 (Tambahin Path):  ✅ PASS / ❌ FAIL
Test Scenario 4 (Engga Path):     ✅ PASS / ❌ FAIL
Test Scenario 5 (Microphone):     ✅ PASS / ❌ FAIL
Sound Test:                       ✅ PASS / ❌ FAIL
Visual Inspection:                ✅ PASS / ❌ FAIL
Potential Issues:                 ✅ NONE / ❌ FOUND

OVERALL RESULT: ✅ ALL TESTS PASSED / ❌ ISSUES FOUND
```

---

## 💡 Quick Commands

**Open Console for Debugging:**
```
Press F12 → Click "Console" tab
Look for any red error messages
```

**Clear Browser Cache:**
```
Ctrl+Shift+Del (Windows)
Cmd+Shift+Del (Mac)
Select "Cached images and files"
Click "Clear"
```

**Reload Page:**
```
F5 or Ctrl+R
```

**Force Hard Refresh:**
```
Ctrl+Shift+R (Windows)
Cmd+Shift+R (Mac)
```

---

## ✅ Sign-Off

When all tests pass, you can confirm:

- ✅ Candle limit feature working correctly
- ✅ All alerts displaying properly
- ✅ User choices tracked accurately
- ✅ Next button appearing conditionally
- ✅ Microphone detection still works
- ✅ Sound effects still working
- ✅ Visual design matches request
- ✅ No console errors

**Status: READY FOR PRODUCTION! 🚀**

---

**Test Date**: _______
**Tested By**: _______
**Result**: ✅ PASS / ❌ FAIL

Made with 💝 for Liaa's Birthday Experience
