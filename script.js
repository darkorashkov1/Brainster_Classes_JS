class ToDo {
  constructor(title, status, id) {
    this.title = title;
    this.status = status;
    this.id = id;
  }
}

const STORAGE_KEY = "todos";

// Load todos from localStorage
const loadTodos = () => {
  const storedTodos = localStorage.getItem(STORAGE_KEY);
  return storedTodos ? JSON.parse(storedTodos) : [];
};

// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const todos = loadTodos();

const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Generate button
const createButton = (label, classes) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(...classes);
  return button;
};

// Render ONE todo
const renderItem = (item) => {
  const { id, title, status } = item;

  const listItem = document.createElement("li");
  listItem.className = "todo-item";
  listItem.dataset.id = id;

  const label = document.createElement("label");
  label.textContent = title;

  if (status) label.classList.add("done");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = status;
  checkbox.style.display = "none";

  checkbox.addEventListener("change", () => {
    item.status = !item.status;
    label.classList.toggle("done");
    saveTodos();
  });

  // Delete
  const deleteButton = createButton("Delete", ["button", "delete-button"]);
  deleteButton.addEventListener("click", () => {
    if (!confirm("Are you sure you want to delete?")) return;

    todoList.removeChild(listItem);
    const index = todos.findIndex((t) => t.id === id);
    todos.splice(index, 1);
    saveTodos();
  });

  // Edit
  const editButton = createButton("Edit", ["button", "edit-button"]);
  const editingInput = document.createElement("input");
  let isEditing = false;

  editButton.addEventListener("click", () => {
    if (isEditing) {
      item.title = editingInput.value;
      label.textContent = editingInput.value;
      editingInput.remove();
      label.style.display = "block";
      editButton.textContent = "Edit";
      saveTodos();
    } else {
      editingInput.value = item.title;
      listItem.prepend(editingInput);
      label.style.display = "none";
      editingInput.focus();
      editButton.textContent = "Update";
    }
    isEditing = !isEditing;
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttons");

  buttonContainer.append(editButton, deleteButton);
  listItem.append(label, checkbox, buttonContainer);
  todoList.appendChild(listItem);
};

// Handle form submit
const onFormSubmit = (e) => {
  e.preventDefault();

  const todoValue = todoInput.value.trim();
  if (!todoValue) return;

  const newTodo = new ToDo(todoValue, false, Date.now());
  todos.push(newTodo);
  saveTodos();
  renderItem(newTodo);
  todoForm.reset();
};

// Initial render (IMPORTANT)
todos.forEach(renderItem);

todoForm.addEventListener("submit", onFormSubmit);
