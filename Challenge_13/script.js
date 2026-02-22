class Expense {
  constructor(description, amount, date, category) {
    this.description = description;
    this.amount = parseFloat(amount);
    this.date = date;
    this.category = category;
  }
}

class ExpenseTracker {
  constructor() {
    this.expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  }

  saveToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

  addExpense(expense) {
    this.expenses.push(expense);
    this.saveToLocalStorage();
  }

  updateExpense(index, updatedExpense) {
    this.expenses[index] = updatedExpense;
    this.saveToLocalStorage();
  }

  deleteExpense(index) {
    this.expenses.splice(index, 1);
    this.saveToLocalStorage();
  }

  sortExpenses(field, order) {
    this.expenses.sort((a, b) => {
      if (field === "amount") {
        return order === "asc" ? a.amount - b.amount : b.amount - a.amount;
      }

      if (field === "date") {
        return order === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
    });
  }

  filterExpenses(category) {
    if (category === "All") return this.expenses;
    return this.expenses.filter((exp) => exp.category === category);
  }
}

const tracker = new ExpenseTracker();
const expensesList = document.getElementById("expensesList");

function renderExpenses(expenses = tracker.expenses) {
  expensesList.innerHTML = "";

  expenses.forEach((expense, index) => {
    const row = `
      <tr>
        <td>${expense.description}</td>
        <td>${expense.amount}</td>
        <td>${expense.date}</td>
        <td>${expense.category}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editExpense(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})">Delete</button>
        </td>
      </tr>
    `;

    expensesList.innerHTML += row;
  });
}

function addOrUpdateExpense() {
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const editIndex = document.getElementById("editIndex").value;

  if (!description || !amount || !date) {
    alert("Please fill all fields");
    return;
  }

  const expense = new Expense(description, amount, date, category);

  if (editIndex === "") {
    tracker.addExpense(expense);
  } else {
    tracker.updateExpense(editIndex, expense);
    document.getElementById("editIndex").value = "";
  }

  clearForm();
  renderExpenses();
}

function editExpense(index) {
  const expense = tracker.expenses[index];

  document.getElementById("description").value = expense.description;
  document.getElementById("amount").value = expense.amount;
  document.getElementById("date").value = expense.date;
  document.getElementById("category").value = expense.category;
  document.getElementById("editIndex").value = index;
}

function deleteExpense(index) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this expense?",
  );
  if (confirmDelete) {
    tracker.deleteExpense(index);
    renderExpenses();
  }
}

function sortExpenses(field, order) {
  tracker.sortExpenses(field, order);
  renderExpenses();
}

function clearForm() {
  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("date").value = "";
  document.getElementById("category").value = "Food";
}

renderExpenses();
