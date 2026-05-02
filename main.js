//Exercise I:
// - There аrе starter files with a setup created for you.
// - All the cards info can be found in the products.js file and you have to work in the main.js file.
// - The card skeleton is shown in the html starter file (be sure to comment or remove it when you start with the javascript logic).
// - The steps you need to follow are:
// - Loop over the products array and for each iteration show a card in the div with an id='list'.

const list = document.querySelector("#list");

products.forEach((product) => {
  renderCard(product);
});

// - Clicking on the '+' button opens the bootstrap modal which will be used for adding a new card to the list. Make sure all the inputs are filled with text, and only then clicking on the 'add-btn' you should add a new card to the div with an id='list' in html. For the new card ids, use the products array length.

const imgInput = document.querySelector("#img");
const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#desc");
const addProductButton = document.querySelector("#add-product");

addProductButton.addEventListener("click", (e) => {
  const newProduct = {
    id: new Date().valueOf(),
    img: imgInput.value,
    title: titleInput.value,
    desc: descInput.value,
  };

  renderCard(newProduct);

  // - Clear the input values after adding a new card.
  imgInput.value = "";
  titleInput.value = "";
  descInput.value = "";

  // - Now that you’ve added a new card in html, create an object similar to the ones in the products.js file and add it (push it) to the products array as well.

  products.push(newProduct);
});
// - Clicking on the 'del-btn' in html, remove the correspondent card from the html file and from the products array also.

document.addEventListener("click", (event) => {
  event.preventDefault();

  // only interested in element with class del-btn
  if (event.target.classList.contains("del-btn")) {
    // return;
    console.log(event.target.parentElement.parentElement.parentElement);
    const cardToDelete = event.target.parentElement.parentElement.parentElement;
    const idToDelete = cardToDelete.id;

    const filteredArray = products.filter(
      (product) => product.id.toString() !== idToDelete,
    );

    products = filteredArray;

    cardToDelete.remove();
  }
});

// - Clicking on the 'search-btn' you should filter/search through all the cards based on their titles.

console.log();
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchInput.value.toLowerCase()),
  );
  list.innerHTML = "";

  filteredProducts.forEach((product) => {
    renderCard(product);
  });

  console.log(filteredProducts);
});

// - Optimize your code: use one function called renderCard to render the same html you are rendering in 3 places.

function renderCard(product) {
  list.innerHTML += `
  <div class="col-4 mb-5" id="${product.id}">
          <a href="google.com" class="link d-flex flex-column">
            <img
              src="${product.img}"
              class="img-fluid"
            />
            <div class="item-content p-3 d-flex flex-column flex-grow-1">
              <h2 class="title">${product.title}</h2>
              <p class="paragraph">${product.desc}</p>
              <button class="btn btn-danger del-btn mt-auto align-self-end">
                Delete
              </button>
            </div>
          </a>
        </div>
  `;
}
