function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const btn = document.querySelector("#colorChangeBtn");
let intervalId = null;

const backgroundColor = () => {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, 3000);
};

const stopBtn = document.querySelector("#stopBtn");

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

btn.addEventListener("click", backgroundColor);
