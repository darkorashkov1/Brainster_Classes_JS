let activities = [
  ["Work", 8],
  ["Eat", 3],
  ["Commute", 2],
  ["Play Game", 1],
  ["Workout", 2],
  ["Sleep", 8],
];

const container = document.querySelector(".table-container");

// Create table
const table = document.createElement("table");
table.classList.add("table", "table-bordered", "table-striped");

// Create header
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const indexHeader = document.createElement("th");
indexHeader.textContent = "Index";

const activityHeader = document.createElement("th");
activityHeader.textContent = "Activity";

const hoursHeader = document.createElement("th");
hoursHeader.textContent = "Hours";

const percentageHeader = document.createElement("th");
percentageHeader.textContent = "% of the day";

headerRow.appendChild(indexHeader);
headerRow.appendChild(activityHeader);
headerRow.appendChild(hoursHeader);
headerRow.appendChild(percentageHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

// Create body
const tbody = document.createElement("tbody");

activities.forEach((activity, index) => {
  const row = document.createElement("tr");

  const indexCell = document.createElement("td");
  indexCell.textContent = index;

  const activityCell = document.createElement("td");
  activityCell.textContent = activity[0];

  const hoursCell = document.createElement("td");
  hoursCell.textContent = activity[1];

  const percentageCell = document.createElement("td");
  let percent = ((activity[1] / 24) * 100).toFixed(0);
  percentageCell.textContent = `${percent}%`;

  row.appendChild(indexCell);
  row.appendChild(activityCell);
  row.appendChild(hoursCell);
  row.appendChild(percentageCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
container.appendChild(table);
