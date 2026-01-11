// DOM elements
const studyInput = document.getElementById("studyDuration");
const breakInput = document.getElementById("breakDuration");
const startButton = document.getElementById("startButton");
const progressBar = document.getElementById("progressBar");

let timerInterval;

// ---------- TASK 1: Load & Save durations ----------
window.onload = () => {
  const savedStudy = localStorage.getItem("studyDuration");
  const savedBreak = localStorage.getItem("breakDuration");

  if (savedStudy) studyInput.value = savedStudy;
  if (savedBreak) breakInput.value = savedBreak;
};

function saveDurations(study, breakTime) {
  localStorage.setItem("studyDuration", study);
  localStorage.setItem("breakDuration", breakTime);
}

// ---------- TASK 2: Timer & Progress Bar ----------
function startSession() {
  const studyMinutes = parseInt(studyInput.value);
  const breakMinutes = parseInt(breakInput.value);

  if (!studyMinutes || !breakMinutes) {
    alert("Please enter both study and break durations.");
    return;
  }

  saveDurations(studyMinutes, breakMinutes);
  startTimer(studyMinutes * 60, "Study", breakMinutes);
}

function startTimer(duration, mode, breakMinutes) {
  clearInterval(timerInterval);

  let totalTime = duration;
  let timeLeft = duration;

  progressBar.style.width = "0%";
  progressBar.setAttribute("aria-valuenow", 0);
  progressBar.className = "progress-bar bg-success";

  timerInterval = setInterval(() => {
    timeLeft--;

    const progress = ((totalTime - timeLeft) / totalTime) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute("aria-valuenow", progress);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      logSession(mode, totalTime / 60);

      if (mode === "Study") {
        alert("Time to take a break! ☕");
        startTimer(breakMinutes * 60, "Break");
      } else {
        alert("Break over! Back to studying 📚");
        progressBar.className = "progress-bar bg-info";
      }
    }
  }, 1000);
}

// ---------- TASK 4 (BONUS): Session Log ----------
function logSession(type, duration) {
  const log = JSON.parse(localStorage.getItem("sessionLog")) || [];
  log.push({
    type: type,
    duration: duration,
    time: new Date().toLocaleString(),
  });
  localStorage.setItem("sessionLog", JSON.stringify(log));
}

// ---------- Button Listener ----------
startButton.addEventListener("click", startSession);
