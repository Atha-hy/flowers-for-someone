document.addEventListener("DOMContentLoaded", function () {
  const cake = document.querySelector(".cake");
  const candleCountDisplay = document.getElementById("candleCount");
  let candles = [];
  let audioContext;
  let analyser;
  let microphone;
  let audio = new Audio('music/hbd.mp3');
  let hasShownSuccess = false;
  
  // New variables for candle limit feature
  const MAX_CANDLES = 5;
  let userAllowedExtraCandle = false;
  let limitReachedOnce = false;

  // Sound effect functions
  function playDingSound() {
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.frequency.setValueAtTime(1000, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    osc.start(now);
    osc.stop(now + 0.15);
  }

  function updateCandleCount() {
    const activeCandles = candles.filter(
      (candle) => !candle.classList.contains("out")
    ).length;
    candleCountDisplay.textContent = activeCandles;
  }

  function addCandle(left, top) {
    const candle = document.createElement("div");
    candle.className = "candle";
    candle.style.left = left + "px";
    candle.style.top = top + "px";

    const flame = document.createElement("div");
    flame.className = "flame";
    candle.appendChild(flame);

    cake.appendChild(candle);
    candles.push(candle);
    playDingSound(); // Play ding sound when candle is added
    updateCandleCount();
  }

  // Function to show limit reached alert
  function showLimitReachedAlert() {
    Swal.fire({
      title: 'Ehh udahh banyakk itu lilinnyaa 😭',
      icon: 'warning',
      confirmButtonText: 'Okedehh',
      confirmButtonColor: '#ff8fab',
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then((result) => {
      if (result.isConfirmed) {
        showAllowExtraAlert();
      }
    });
  }

  // Function to show allow extra candle dialog
  function showAllowExtraAlert() {
    Swal.fire({
      title: 'Ehh karena ini hari spesial mu, aku bolehin dehh tambah lilinnyaa 💝',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Tambahin',
      cancelButtonText: 'Tengga deh',
      confirmButtonColor: '#ff8fab',
      cancelButtonColor: '#999',
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then((result) => {
      if (result.isConfirmed) {
        // User chose to allow extra candle
        userAllowedExtraCandle = true;
        
        // Show next button
        document.getElementById('next-button-container').classList.remove('hidden');
        document.getElementById('next-button-container').classList.add('next-button-show');
        
        Swal.fire({
          title: 'Yayy! 🎉',
          text: 'Sekarang kamu bisa tambahin lilin lagi! liaa',
          icon: 'success',
          confirmButtonText: 'Baiklah!',
          confirmButtonColor: '#ff8fab',
          allowOutsideClick: false,
          allowEscapeKey: false
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User chose not to allow - show next button anyway
        document.getElementById('next-button-container').classList.remove('hidden');
        document.getElementById('next-button-container').classList.add('next-button-show');
      }
    });
  }

  // Function to show already rejected alert
  function showAlreadyRejectedAlert() {
    Swal.fire({
      title: 'Ehh tadii kan udah pilih engga deh 😭',
      text: 'Gaboleh gaboleh, lilinnya udah cukup banget!',
      icon: 'error',
      confirmButtonText: 'Okedehh',
      confirmButtonColor: '#ff8fab',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  cake.addEventListener("click", function (event) {
    // If limit reached and user hasn't chosen yet, show alert
    if (candles.length >= MAX_CANDLES && !limitReachedOnce) {
      limitReachedOnce = true;
      showLimitReachedAlert();
    } 
    // If user rejected extra candle, show rejection alert
    else if (!userAllowedExtraCandle && candles.length >= MAX_CANDLES) {
      showAlreadyRejectedAlert();
    } 
    // If user allowed extra candle, let them add freely
    else if (userAllowedExtraCandle) {
      const rect = cake.getBoundingClientRect();
      const left = event.clientX - rect.left;
      const top = event.clientY - rect.top;
      addCandle(left, top);
    }
    // Normal case - under limit
    else {
      const rect = cake.getBoundingClientRect();
      const left = event.clientX - rect.left;
      const top = event.clientY - rect.top;
      addCandle(left, top);
    }
  });

  function isBlowing() {
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += dataArray[i];
    }
    let average = sum / bufferLength;

    return average > 50; //ETO CHANGEEEEEE
  }

  function blowOutCandles() {
    let blownOut = 0;

    // Only check for blowing if there are candles and at least one is not blown out
    if (candles.length > 0 && candles.some((candle) => !candle.classList.contains("out"))) {
      if (isBlowing()) {
        candles.forEach((candle) => {
          if (!candle.classList.contains("out") && Math.random() > 0.5) {
            candle.classList.add("out");
            blownOut++;
          }
        });
      }

      if (blownOut > 0) {
        updateCandleCount();
      }

      // If all candles are blown out, trigger confetti after a small delay
      if (candles.every((candle) => candle.classList.contains("out")) && !hasShownSuccess) {
        hasShownSuccess = true;
        setTimeout(function() {
          triggerConfetti();
          endlessConfetti(); // Start the endless confetti
          // Show success message and next button
          if (window.showSuccessMessage) {
            window.showSuccessMessage();
          }
        }, 200);
        audio.play();
      }
    }
  }

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 256;
        setInterval(blowOutCandles, 200);
      })
      .catch(function (err) {
        console.log("Unable to access microphone: " + err);
      });
  } else {
    console.log("getUserMedia not supported on your browser!");
  }
});

function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function endlessConfetti() {
  setInterval(function() {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0 }
    });
  }, 1000);
}
