// Solution 1
// const timerDisplay = document.querySelector("#timer");
// const startButton = document.querySelector("#startButton");
// const pauseButton = document.querySelector("#pauseButton");
// const resetButton = document.querySelector("#resetButton");

// let timeLeft = 60;
// let intervalId = null;

// const updateDisplay = () => {
//   timerDisplay.textContent = timeLeft;
// };

// const startTimer = () => {
//   if (intervalId !== null) return;

//   intervalId = setInterval(() => {
//     if (timeLeft > 0) {
//       timeLeft--;
//       updateDisplay();
//     } else {
//       clearInterval(intervalId);
//       intervalId = null;
//     }
//   }, 1000);
// };

// const pauseTimer = () => {
//   clearInterval(intervalId);
//   intervalId = null;
// };

// const resetTimer = () => {
//   clearInterval(intervalId);
//   intervalId = null;
//   timeLeft = 60;
//   updateDisplay();
// };

// updateDisplay();

// startButton.addEventListener("click", startTimer);
// pauseButton.addEventListener("click", pauseTimer);
// resetButton.addEventListener("click", resetTimer);

//
//

// Solution 2

const timer = document.querySelector("#timer");

const startBtn = document.querySelector("#startButton");
const pauseBtn = document.querySelector("#pauseButton");
const resetBtn = document.querySelector("#resetButton");

let seconds = 60;
let intervalId = null;

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    seconds--;
    timer.textContent = seconds;

    if (seconds === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

resetBtn.addEventListener("click", () => {
  seconds = 60;
  timer.textContent = seconds;
  clearInterval(intervalId);
});
