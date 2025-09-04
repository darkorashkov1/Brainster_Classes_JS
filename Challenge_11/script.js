const images = [
  "https://picsum.photos/id/11/1000/500",
  "https://picsum.photos/id/22/1000/500",
  "https://picsum.photos/id/33/1000/500",
  "https://picsum.photos/id/44/1000/500",
];

let index = 0;

const currentImage = document.querySelector("#image");
const previousBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

const previousImage = () => {
  if (index < 0) {
    index--;
    displayImage();
  }
};

const nextImage = () => {
  if (index < images.length - 1) {
    index++;
    displayImage();
  }
};

previousBtn.addEventListener("click", previousImage);
nextBtn.addEventListener("click", nextImage);

const displayImage = () => {
  currentImage.src = images[index];
  previousBtn.disabled = index === 0;
  nextBtn.disabled = index === images.length - 1;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    previousImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  }
});

displayImage();
