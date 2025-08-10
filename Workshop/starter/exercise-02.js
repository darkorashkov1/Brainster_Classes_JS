const timerDisplay = document.querySelector("#timer");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let timeLeft = 60;
let intervalId = null;

const updateDisplay = () => {
  timerDisplay.textContent = timeLeft;
};

const startTimer = () => {
  if (intervalId !== null) return; // Prevent multiple intervals

  intervalId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
};

const resetTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
  timeLeft = 60;
  updateDisplay();
};

// Initial display
updateDisplay();

// Event listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
