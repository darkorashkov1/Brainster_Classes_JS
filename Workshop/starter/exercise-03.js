const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");

const addBtn = document.querySelector("#addItemButton");
const clearBtn = document.querySelector("#clearListButton");

const addText = (e) => {
  e.preventDefault();
  const itemInputValue = itemInput.value.trim();

  if (itemInputValue === "") return;

  const liElement = document.createElement("li");
  liElement.textContent = `${itemInputValue}`;
  itemList.appendChild(liElement);

  itemInput.value = ""; // clear the input field
};

const clearText = () => {
  itemList.innerHTML = ""; // clear all list items
};

addBtn.addEventListener("click", addText);
clearBtn.addEventListener("click", clearText);
