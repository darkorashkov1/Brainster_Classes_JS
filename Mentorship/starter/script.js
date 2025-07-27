const articles = [
  [
    1,
    "Oceanic Trench Mysteries",
    "Unveiling new findings from the deepest parts of our oceans.",
    203,
    "./img/ocean.jpg",
  ],
  [
    2,
    "Urban Gardening Evolution",
    "The transformation of city spaces into green, productive gardens.",
    124,
    "./img/garden.jpg",
  ],
  [
    3,
    "Quantum Computing 101",
    "Simplifying the complex world of quantum computing and its potential.",
    65,
    "./img/quantum.jpg",
  ],
  [
    4,
    "AI Ethics Debate",
    "Balance between tech advancements and ethical issues in AI.",
    95,
    "./img/ai.jpg",
  ],
  [
    5,
    "Eco-Tourism Rise",
    "Exploring sustainable travel practices and their global impact.",
    213,
    "./img/eco.jpg",
  ],
  [
    6,
    "Commercial Space Race",
    "The impact and advancements of private companies in space exploration.",
    15,
    "./img/space.jpg",
  ],
];

// Render cards (with optional filter)
function createArticleBox(filteredArticles = articles) {
  const wrapper = document.querySelector(".article-wrapper");
  wrapper.innerHTML = ""; // Clear previous content

  filteredArticles.forEach((article) => {
    const card = document.createElement("div");
    card.classList.add("col-12", "col-sm-6", "col-lg-3", "mb-4");

    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add(
      "border",
      "p-3",
      "text-center",
      "d-flex",
      "flex-column",
      "h-100"
    );

    const cardImg = document.createElement("img");
    cardImg.src = article[4];
    cardImg.alt = article[1];
    cardImg.classList.add("img-fluid", "mb-3", "zoomed");

    const cardHeadline = document.createElement("h3");
    cardHeadline.textContent = article[1];

    const cardParagraph = document.createElement("p");
    cardParagraph.textContent = article[2];

    const cardSpan = document.createElement("p");
    cardSpan.innerHTML = `<strong>Likes - ${article[3]}</strong>`;

    const cardButton = document.createElement("button");
    cardButton.classList.add("btn", "btn-danger", "mt-auto");
    cardButton.textContent = "Hide";
    cardButton.addEventListener("click", () => {
      card.remove(); // ✅ Exercise 4
    });

    cardWrapper.appendChild(cardImg);
    cardWrapper.appendChild(cardHeadline);
    cardWrapper.appendChild(cardParagraph);
    cardWrapper.appendChild(cardSpan);
    cardWrapper.appendChild(cardButton);

    card.appendChild(cardWrapper);
    wrapper.appendChild(card);
  });
}

// ✅ Exercise 3: Filter logic
function filterArticlesByLikes(minLikes, maxLikes) {
  const filtered = articles.filter((article) => {
    const likes = article[3];
    return likes >= minLikes && (maxLikes === null || likes <= maxLikes);
  });
  createArticleBox(filtered);
}

// ✅ Button listeners
document
  .querySelector("#showAll")
  .addEventListener("click", () => createArticleBox());
document
  .querySelector("#lessThan50")
  .addEventListener("click", () => filterArticlesByLikes(0, 49));
document
  .querySelector("#between50And150")
  .addEventListener("click", () => filterArticlesByLikes(50, 150));
document
  .querySelector("#moreThan150")
  .addEventListener("click", () => filterArticlesByLikes(151, null));

// Initialize
createArticleBox();
