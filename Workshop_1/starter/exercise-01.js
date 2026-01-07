// Solution 1
// function getRandomColor() {
//   let letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// const btn = document.querySelector("#colorChangeBtn");
// let intervalId = null;

// const backgroundColor = () => {
//   if (intervalId !== null) return;

//   intervalId = setInterval(() => {
//     document.body.style.backgroundColor = getRandomColor();
//   }, 3000);
// };

// const stopBtn = document.querySelector("#stopBtn");

// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   intervalId = null;
// });

// btn.addEventListener("click", backgroundColor);

//
//

// Solution 2
function gerRandomNumberInInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColorToBody() {
  const r = gerRandomNumberInInterval(0, 255);
  const g = gerRandomNumberInInterval(0, 255);
  const b = gerRandomNumberInInterval(0, 255);

  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

let intervalId = null;

const colorChangeBtn = document.querySelector("#colorChangeBtn");

colorChangeBtn.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      randomColorToBody();
    }, 3000);
  }
});

const stopBtn = document.querySelector("#stopBtn");
stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
