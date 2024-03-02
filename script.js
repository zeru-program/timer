console.log('copyright © 2024 gsja, indonesia jawa barat')



const splashSc = document.querySelector(".splash-screen");
setTimeout(function () {
  splashSc.classList.add('d-none');
  splashSc.classList.remove('d-flex');
}, 5300);

const tutorial = document.querySelector('.tutor-time');
setTimeout(function () {
  tutorial.classList.add('d-flex');
  tutorial.classList.remove('d-none');
}, 5500);
function closeTutor() {
  tutorial.classList.add('d-none');
  tutorial.classList.remove('d-flex');
}
function openTutor() {
  tutorial.classList.add('d-flex');
  tutorial.classList.remove('d-none');
}
function displayText() {
    // Ambil nilai dari elemen input
    const userInput = document.getElementById("userInput").value;

    // Tampilkan nilai di elemen output
    document.getElementById("output").innerText = `${userInput}`;
    document.getElementById("output").style.color = "white";
}

function animationText() {
    document.getElementById("output").classList.add("output");
}
function removeAniText() {
    document.getElementById("output").classList.remove("output");
}

function clearText() {
    // Kosongkan nilai pada elemen input dan output
    document.getElementById("userInput").value = "";
    document.getElementById("output").innerText = "";
}

let timer;
let isTimerRunning = false;
let isTimerPaused = false;
let totalTime;

function startTimer() {
    if (isTimerRunning) {
        return;
    }

    const hours = document.getElementById("hours").value || 0;
    const minutes = document.getElementById("minutes").value || 0;
    const seconds = document.getElementById("seconds").value || 0;

    totalTime =
        parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    if (totalTime <= 0) {
        alert("Harap masukkan waktu yang valid.");
        return;
    }

    isTimerRunning = true;
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";

    timer = setInterval(function () {
        if (!isTimerPaused) {
            displayTime(totalTime);

            if (totalTime <= 0) {
                stopTimer();
            } else {
                totalTime--;
            }
        }
    }, 1000);
}

function pauseTimer() {
    isTimerPaused = !isTimerPaused;

    if (isTimerPaused) {
        clearInterval(timer);
    } else {
        startTimer();
    }
}

function pauseTimer() {
    alert("Pause. klik ok untuk melanjutkan");
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    isTimerPaused = false;

    document.getElementById("timer").innerHTML = "00:00:00";
    document.getElementById("timer").style.color = "white";
    document.getElementById("timer").classList.remove("blinking"); // Memulai kembali timer setelah
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    // Mereset tampilan timer
}

function timesUp(params) {
    document.getElementById("timer").innerHTML = "WAKTU HABIS !";
    document.getElementById("timer").style.color = "red";
}

function displayTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    document.getElementById("timer").innerHTML = formattedTime;

    // function warna merah setelah 2 menit ...
    if (totalSeconds <= 360) {
        document.getElementById("timer").style.color = "red";
    } else {
        document.getElementById("timer").style.color = "white";
        document.getElementById("timer").classList.remove("blinking");
    }

    if (totalSeconds <= 180) {
        document.getElementById("timer").classList.add("blinking");
    }

    if (totalSeconds <= 0) {
        document.getElementById("timer").innerHTML = "WAKTU HABIS !";
    }
}

// kode toggleFullscreen ...

function toggleFullscreen() {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen;
    const cancelFullScreen =
        doc.exitFullscreen ||
        doc.mozCancelFullScreen ||
        doc.webkitExitFullscreen ||
        doc.msExitFullscreen;

    if (
        !doc.fullscreenElement &&
        !doc.mozFullScreenElement &&
        !doc.webkitFullscreenElement &&
        !doc.msFullscreenElement
    ) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}
/* ngatur font */
function updateFontSizeNote() {
    const fontSize = document.getElementById("fontSizeSliderNote").value;
    document.getElementById("output").style.fontSize = fontSize + "em";
    document.getElementById("fontSizeLabelNote").textContent =
        "Font Size: " + fontSize + "em";
}

function changeFontSizeNote() {
    updateFontSizeNote();
}
function updateFontSize() {
    const fontSize = document.getElementById("fontSizeSlider").value;
    document.getElementById("timer").style.fontSize = fontSize + "em";
    document.getElementById("fontSizeLabel").textContent =
        "Font Size: " + fontSize + "em";
}

function changeFontSize() {
    updateFontSize();
}
