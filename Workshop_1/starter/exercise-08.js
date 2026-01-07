// Solution 1
// const images = [
//   {
//     src: "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
//     category: "Nature",
//   },
//   {
//     src: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
//     category: "Nature",
//   },
//   {
//     src: "https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI",
//     category: "City",
//   },
//   {
//     src: "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
//     category: "City",
//   },
//   {
//     src: "https://fastly.picsum.photos/id/200/1920/1280.jpg?hmac=-eKjMC8-UrbLMpy1A4OWrK0feVPB3Ka5KNOGibQzpRU",
//     category: "Animals",
//   },
//   {
//     src: "https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI",
//     category: "Animals",
//   },
// ];

// const filterButtonsContainer = document.querySelector("#filterButtons");
// const gallery = document.querySelector("#gallery");

// // Get unique categories
// const categories = ["All", ...new Set(images.map((img) => img.category))];

// // Create buttons for each category
// categories.forEach((category) => {
//   const button = document.createElement("button");
//   button.classList.add("btn", "btn-outline-primary", "m-4");
//   button.textContent = category;
//   button.addEventListener("click", () => filterImages(category));
//   filterButtonsContainer.appendChild(button);
// });

// // Function to display images
// function displayImages(filteredImages) {
//   gallery.innerHTML = ""; // Clear gallery
//   filteredImages.forEach((img) => {
//     const col = document.createElement("div");
//     col.classList.add("col-md-4", "mb-3");

//     col.innerHTML = `
//       <div class="card">
//         <img src="${img.src}" class="card-img-top" alt="${img.category}">
//         <div class="card-body">
//           <p class="card-text">${img.category}</p>
//         </div>
//       </div>
//     `;
//     gallery.appendChild(col);
//   });
// }

// // Filter function
// function filterImages(category) {
//   if (category === "All") {
//     displayImages(images);
//   } else {
//     displayImages(images.filter((img) => img.category === category));
//   }
// }

// // Display all images by default
// displayImages(images);

//
//

// Solution 2
const images = [
  { src: "./img/image1.jpg", tags: ["Rocky", "Desert"] },
  { src: "./img/image2.jpg", tags: ["Nature", "Forests"] },
  { src: "./img/image3.jpg", tags: ["Nature", "Lake"] },
  { src: "./img/image4.jpg", tags: ["Forests", "Mountains"] },
];

const tags = [];

images.forEach((img) => {
  img.tags.forEach((tag) => {
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  });
});

const filterButtons = document.querySelector("#filterButtons");
const gallery = document.querySelector("#gallery");

tags.forEach((tag) => {
  const buttons = document.createElement("button");
  buttons.classList.add("btn", "btn-outline-info", "m-2");
  buttons.textContent = tag;

  buttons.addEventListener("click", () => {
    const filteredImages = images.filter((img) => {
      if (img.tags.includes(tag)) {
        return true;
      } else {
        return false;
      }
    });
    gallery.innerHTML = "";

    filteredImages.forEach((img) => {
      const image = document.createElement("img");
      image.src = img.src;
      image.classList.add("img-thumbnail", "col-md-4", "mb-3");
      gallery.append(image);
    });
  });

  filterButtons.appendChild(buttons);
});
