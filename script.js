const todos = [];

class ToDo {
  constructor(title, status, id) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
}

const form = document.querySelector("form");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Create button function
const createButton = (label, classes) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(...classes);

  return button;
};

const onFormSubmit = (element) => {
  element.preventDefault();

  const todoValue = todoInput.value.trim();

  if (todoValue === "") {
    alert("Please enter a valid to-do item.");
    return;
  }

  const newTodo = new ToDo(todoValue, false, Date.now().valueOf());
  todos.push(newTodo);
  form.reset();

  // Generating a to-do
  const renderItem = (item) => {
    const { id, title, status } = item;

    // List item
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.setAttribute("data-id", id);

    // Label
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = title;

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.style.display = "none";
    checkbox.type = "checkbox";
    checkbox.checked = status;
    checkbox.id = id;

    // Buttons
    const deleteButton = createButton("Delete", ["button", "delete-button"]);
    const editButton = createButton("Edit", ["button", "edit-button"]);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    listItem.appendChild(label);
    listItem.appendChild(checkbox);
    listItem.appendChild(buttonContainer);

    buttonContainer.append(editButton, deleteButton);

    // listItem.append(checkbox, label, buttonContainer);

    todoList.appendChild(listItem);
  };

  renderItem(newTodo);
  // localStorage.setItem("todos", JSON.stringify(todos));
};

form.addEventListener("submit", onFormSubmit);
