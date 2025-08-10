// Solution 1
// const prevButton = document.querySelector("#prevButton");
// const nextButton = document.querySelector("#nextButton");
// const pausePlayButton = document.querySelector("#pausePlayButton");

// const image = document.querySelector("img");

// let currentIndex = 1;
// const totalImages = 4;
// let imageInterval = null;
// let isPlaying = true;

// function showImage(index) {
//   image.src = `img/image${index}.jpg`;
// }

// function nextImage() {
//   currentIndex++;
//   if (currentIndex > totalImages) {
//     currentIndex = 1;
//   }
//   showImage(currentIndex);
// }

// function prevImage() {
//   currentIndex--;
//   if (currentIndex < 1) {
//     currentIndex = totalImages;
//   }
//   showImage(currentIndex);
// }

// function startAutoPlay() {
//   if (imageInterval) return;
//   imageInterval = setInterval(nextImage, 3000);
// }

// function pauseAutoPlay() {
//   clearInterval(imageInterval);
//   imageInterval = null;
// }

// function togglePlayPause() {
//   if (isPlaying) {
//     pauseAutoPlay();
//     pausePlayButton.textContent = "Play";
//   } else {
//     startAutoPlay();
//     pausePlayButton.textContent = "Pause";
//   }
//   isPlaying = !isPlaying;
// }

// nextButton.addEventListener("click", nextImage);
// prevButton.addEventListener("click", prevImage);
// pausePlayButton.addEventListener("click", togglePlayPause);

// startAutoPlay();

//
//

// Solution 2

const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const pausePlayButton = document.querySelector("#pausePlayButton");

const carouselImage = document.querySelector("#carouselImage");

let images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
];

let currentIndex = 0;
let isPlaying = true;
let intervalId = null;

function showImage(index) {
  carouselImage.src = images[index];
}

function startCarousel() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 2000);
}

function stopCarousel() {
  clearInterval(intervalId);
  intervalId = null;
}

startCarousel();

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

pausePlayButton.addEventListener("click", () => {
  if (isPlaying) {
    stopCarousel();
    pausePlayButton.textContent = "Play";
  } else {
    startCarousel();
    pausePlayButton.textContent = "Pause";
  }
  isPlaying = !isPlaying;
});
