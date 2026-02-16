//Exercise I:
// - There аrе starter files with a setup created for you.
// - All the cards info can be found in the products.js file and you have to work in the main.js file.
// - The card skeleton is shown in the html starter file (be sure to comment or remove it when you start with the javascript logic).
// - The steps you need to follow are:
// - Loop over the products array and for each iteration show a card in the div with an id='list'.
// - Clicking on the '+' button opens the bootstrap modal which will be used for adding a new card to the list. Make sure all the inputs are filled with text, and only then clicking on the 'add-btn' you should add a new card to the div with an id='list' in html. For the new card ids, use the products array length.
// - Clear the input values after adding a new card.
// - Now that you’ve added a new card in html, create an object similar to the ones in the products.js file and add it (push it) to the products array as well.
// - Clicking on the 'del-btn' in html, remove the correspondent card from the html file and from the products array also.
// - Now that you’ve removed the card, the id’s of the elements are shuffled, meaning: when you attempt to add a new card, two or more cards can have the same ids. In order to fix that, loop over the cards again and update their ids after clicking on the 'del-btn'.
// - Clicking on the 'search-btn' you should filter/search through all the cards based on their titles.
// - Optimize your code: use one function called renderCard to render the same html you are rendering in 3 places.

const list = document.querySelector("#list");

const renderItem = (item) => {
  // Outer container
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col-4", "mb-5");

  // Link wrapper
  const linkElement = document.createElement("a");
  linkElement.classList.add("link", "d-flex", "flex-column");
  linkElement.addEventListener("click", (e) => e.preventDefault());

  // Image
  const imgElement = document.createElement("img");
  imgElement.src = item.img;
  imgElement.classList.add("img-fluid");
  imgElement.alt = item.title;

  // Content div
  const contentDiv = document.createElement("div");
  contentDiv.classList.add(
    "item-content",
    "p-3",
    "d-flex",
    "flex-column",
    "flex-grow-1",
  );

  // Title
  const titleElement = document.createElement("h2");
  titleElement.classList.add("title");
  titleElement.textContent = item.title;

  // Paragraph
  const paragraphElement = document.createElement("p");
  paragraphElement.classList.add("paragraph");
  paragraphElement.textContent = item.desc;

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "btn",
    "btn-danger",
    "del-btn",
    "mt-auto",
    "align-self-end",
  );
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", (e) => {
    e.preventDefault(); // prevents link click
    cardContainer.remove();
  });

  // Build structure
  contentDiv.append(titleElement, paragraphElement, deleteButton);
  linkElement.append(imgElement, contentDiv);
  cardContainer.appendChild(linkElement);

  return cardContainer;
};

products.forEach((product) => {
  const card = renderItem(product);
  list.appendChild(card);
});

const imgInput = document.querySelector("#img");
const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#desc");
const addButton = document.querySelector("#add-product");

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!imgInput.value || !titleInput.value || !descInput.value) {
    alert("Fill all fields!");
    return;
  }

  const newItem = {
    id: products.length.toString(),
    img: imgInput.value,
    title: titleInput.value,
    desc: descInput.value,
  };
  products.push(newItem);

  const card = renderItem(newItem);
  list.appendChild(card);

  imgInput.value = "";
  titleInput.value = "";
  descInput.value = "";
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
});

const searchButton = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();

  const filteredArray = products.filter((product) =>
    product.title.toLowerCase().includes(query),
  );

  list.innerHTML = "";

  filteredArray.forEach((product) => {
    const card = renderItem(product);
    list.appendChild(card);
  });
});
