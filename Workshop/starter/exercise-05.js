const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const pausePlayButton = document.querySelector("#pausePlayButton");

const image = document.querySelector("img");

let currentIndex = 1;
const totalImages = 4;
let imageInterval = null;
let isPlaying = true;

function showImage(index) {
  image.src = `img/image${index}.jpg`;
}

function nextImage() {
  currentIndex++;
  if (currentIndex > totalImages) {
    currentIndex = 1;
  }
  showImage(currentIndex);
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = totalImages;
  }
  showImage(currentIndex);
}

function startAutoPlay() {
  if (imageInterval) return; // prevent multiple intervals
  imageInterval = setInterval(nextImage, 3000);
}

function pauseAutoPlay() {
  clearInterval(imageInterval);
  imageInterval = null;
}

function togglePlayPause() {
  if (isPlaying) {
    pauseAutoPlay();
    pausePlayButton.textContent = "Play";
  } else {
    startAutoPlay();
    pausePlayButton.textContent = "Pause";
  }
  isPlaying = !isPlaying;
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);
pausePlayButton.addEventListener("click", togglePlayPause);

startAutoPlay();
