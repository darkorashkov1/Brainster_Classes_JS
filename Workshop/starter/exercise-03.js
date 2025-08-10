// Solution 1
// const itemInput = document.querySelector("#itemInput");
// const itemList = document.querySelector("#itemList");

// const addBtn = document.querySelector("#addItemButton");
// const clearBtn = document.querySelector("#clearListButton");

// const addText = (e) => {
//   e.preventDefault();
//   const itemInputValue = itemInput.value.trim();

//   if (itemInputValue === "") return;

//   const liElement = document.createElement("li");
//   liElement.textContent = `${itemInputValue}`;
//   itemList.appendChild(liElement);

//   itemInput.value = "";
// };

// const clearText = () => {
//   itemList.innerHTML = "";
// };

// addBtn.addEventListener("click", addText);
// clearBtn.addEventListener("click", clearText);

//
//

// Solution 2

const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");

const addItemButton = document.querySelector("#addItemButton");
const clearListButton = document.querySelector("#clearListButton");

addItemButton.addEventListener("click", () => {
  const inputValue = itemInput.value.trim();

  const li = document.createElement("li");
  li.textContent = inputValue;
  itemList.appendChild(li);

  itemInput.value = "";
});

clearListButton.addEventListener("click", () => {
  itemList.innerHTML = "";
});
