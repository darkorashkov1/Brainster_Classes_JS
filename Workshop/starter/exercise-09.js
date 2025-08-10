// Store all tasks here
let todos = [];

// DOM references
const taskForm = document.querySelector("#taskForm");
const taskDescription = document.querySelector("#taskDescription");
const taskPriority = document.querySelector("#taskPriority");
const taskList = document.querySelector("#taskList");

// Function to add a new task
function addTodo(description, priority) {
  const newTask = { description, priority };

  // Push new task into array
  todos.push(newTask);

  // Sort tasks so that high priority comes first
  const priorityOrder = { high: 1, medium: 2, low: 3 };
  todos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  // Display the updated list
  displayTodos();
}

// Function to display tasks
function displayTodos() {
  // Clear list before re-rendering
  taskList.innerHTML = "";

  todos.forEach((task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${task.description}
      <span class="badge badge-${
        task.priority === "high"
          ? "danger"
          : task.priority === "medium"
          ? "warning"
          : "secondary"
      }">${task.priority}</span>
    `;
    taskList.appendChild(li);
  });
}

// Handle form submit
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = taskDescription.value.trim();
  const priority = taskPriority.value;

  if (description) {
    addTodo(description, priority);

    // Reset form
    taskForm.reset();
  }
});
