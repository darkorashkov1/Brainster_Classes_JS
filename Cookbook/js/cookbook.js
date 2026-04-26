// ELEMENTS

const cardContainer = document.querySelector("#card-container");
const fullRecipeContainer = document.querySelector("#full-recipe-container");
const tagContainer = document.querySelector("#tag-container");
const filtersContainer = document.querySelector("#filters");
const headerElement = document.querySelector("header");

// UTILS
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// SEARCH FORM
function renderSearchForm() {
  const input = document.createElement("input");
  input.placeholder = "Search recipes...";

  const btn = document.createElement("button");
  btn.textContent = "Search";
  btn.type = "button";
  btn.classList.add("btn", "green");
  btn.style.width = "100%";

  filtersContainer.append(input, btn);

  btn.addEventListener("click", (e) => {
    const value = input.value.trim();
    if (!value) return;

    location.hash = `search/${value}`;
  });
}

// CREATE CARD
function createCard(recipe) {
  const card = document.createElement("div");
  card.classList.add("card");

  // IMAGE
  const cimage = document.createElement("div");
  cimage.classList.add("card-image");

  const img = document.createElement("img");
  img.src = `./Cookbook/images/${getRandomInt(1, 29)}.jpg`;
  cimage.appendChild(img);

  // CONTENT
  const content = document.createElement("div");
  content.classList.add("card-content");

  const title = document.createElement("h5");
  title.textContent = recipe.name;
  content.appendChild(title);

  // TAGS
  recipe.tags.forEach((tag) => {
    const tagLink = document.createElement("a");
    tagLink.textContent = `#${tag}`;
    tagLink.style.marginRight = "8px";

    tagLink.addEventListener("click", (e) => {
      location.hash = `tags/${tag}`;
    });

    content.appendChild(tagLink);
  });

  // ACTION
  const actions = document.createElement("div");
  actions.classList.add("card-action");

  const btn = document.createElement("a");
  btn.textContent = "Open Recipe";
  btn.classList.add("btn", "orange");
  btn.href = `#recipe/${recipe.id}`;

  actions.appendChild(btn);

  card.appendChild(cimage);
  card.appendChild(content);
  card.appendChild(actions);

  return card;
}

// RENDER LIST
function renderList(container, recipes) {
  container.innerHTML = "";
  recipes.forEach((r) => container.appendChild(createCard(r)));
}

// TIME CONVERSION

function convertSecondsToHHMM(seconds = 0) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const hoursStr = hours > 0 ? `${hours}h ` : "";
  const minutesStr = minutes > 0 ? `${minutes}m` : "";

  return `${hoursStr}${minutesStr}`.trim();
}

// NUTRITION TABLE

function createNutritionTable({
  calories,
  fat,
  saltfat,
  carbs,
  fiber,
  sugar,
  protein,
}) {
  const table = document.createElement("table");
  table.classList.add("nutrition-table");
  const headerRow = document.createElement("tr");
  ["Calories", "Fat", "Salt Fat", "Carbs", "Fiber", "Sugar", "Protein"].forEach(
    (header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    },
  );
  table.appendChild(headerRow);

  const dataRow = document.createElement("tr");
  [calories, fat, saltfat, carbs, fiber, sugar, protein].forEach((value) => {
    const td = document.createElement("td");
    td.textContent = value !== undefined ? value : "N/A";
    dataRow.appendChild(td);
  });
  table.appendChild(dataRow);

  return table;
}

// RENDER RECIPE

function renderRecipe(id) {
  const recipe = recipeData.find((r) => r.id === id);
  if (!recipe) return;

  fullRecipeContainer.innerHTML = "";

  const wrapper = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = recipe.name;

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = `./Cookbook/images/${getRandomInt(1, 29)}.jpg`;

  const content = document.createElement("div");
  content.classList.add("card-content");

  // PREP TIME

  if (typeof recipe.preptime === "number") {
    const prepTimeContainer = document.createElement("p");
    prepTimeContainer.textContent = `Prep Time: ${convertSecondsToHHMM(recipe.preptime)}`;
    content.appendChild(prepTimeContainer);
  }

  // INGREDIENTS
  const h4Ing = document.createElement("h4");
  h4Ing.textContent = "Ingredients";

  const ul = document.createElement("ul");
  recipe.ingredients?.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  });

  // INSTRUCTIONS
  const h4Inst = document.createElement("h4");
  h4Inst.textContent = "Instructions";

  const p = document.createElement("p");
  p.textContent = recipe.instructions;

  content.append(h4Ing, ul, h4Inst, p);
  card.append(img, content);

  // NUTRITION TABLE
  if (recipe.nutrition) {
    const table = createNutritionTable(recipe.nutrition);
    content.appendChild(table);
  }

  // BACK
  const back = document.createElement("a");
  back.textContent = "Back";
  back.href = "#";
  back.classList.add("btn", "orange");

  wrapper.append(back, title, card);
  fullRecipeContainer.appendChild(wrapper);
}

// ROUTER

function handleRoute() {
  const hash = location.hash.replace("#", "");

  // DEFAULT
  if (!hash) {
    renderList(cardContainer, recipeData);

    cardContainer.style.display = "flex";
    tagContainer.style.display = "none";
    fullRecipeContainer.style.display = "none";
    return;
  }

  const [route, param] = hash.split("/");

  // TAGS
  if (route === "tags") {
    const filtered = recipeData.filter((r) =>
      r.tags.some((t) => t.toLowerCase() === param.toLowerCase()),
    );

    renderList(tagContainer, filtered);

    tagContainer.style.display = "flex";
    cardContainer.style.display = "none";
    fullRecipeContainer.style.display = "none";
  }

  // SEARCH
  else if (route === "search") {
    const query = param.toLowerCase();

    const filtered = recipeData.filter(
      (r) =>
        r.name.toLowerCase().includes(query) ||
        r.instructions.toLowerCase().includes(query) ||
        r.tags.some((t) => t.toLowerCase().includes(query)),
    );

    renderList(cardContainer, filtered);

    cardContainer.style.display = "flex";
    tagContainer.style.display = "none";
    fullRecipeContainer.style.display = "none";
  }

  // RECIPE
  else if (route === "recipe") {
    renderRecipe(param);

    fullRecipeContainer.style.display = "block";
    cardContainer.style.display = "none";
    tagContainer.style.display = "none";
  }
}

// INIT

renderSearchForm();
renderList(cardContainer, recipeData);

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);

headerElement.addEventListener("click", () => {
  location.hash = "";
});
