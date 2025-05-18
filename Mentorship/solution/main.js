// Exercise I - create the table dinamicly

let activities = [
  ["Work", 8],
  ["Eat", 3],
  ["Commute", 2],
  ["Play Game", 1],
  ["Workout", 2],
  ["Sleep", 8],
];

let table = document.createElement("table");
table.setAttribute("class", "table table-bordered table-dark table-striped");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

let headingsRow = document.createElement('tr');

let indexHeadingCol = document.createElement('th');
let activityHeadingCol = document.createElement('th');
let hoursHeadingCol = document.createElement('th');

indexHeadingCol.innerText = 'Index';
activityHeadingCol.innerText = 'Activity';
hoursHeadingCol.innerText = 'Hours';

headingsRow.appendChild(indexHeadingCol);
headingsRow.appendChild(activityHeadingCol);
headingsRow.appendChild(hoursHeadingCol);

// //Exercise II
// let headingsPercentageCol = document.createElement('th');
// headingsPercentageCol.innerText = 'Percentage';
// headingsRow.appendChild(headingsPercentageCol);

// Exercise IV
// let headingsRow = createRow("Index", "Activity", "Hours", "% of the day"); // <tr>
// console.log(headingsRow);

thead.appendChild(headingsRow);

table.appendChild(thead);
table.appendChild(tbody);

// Exercise V
// populateBody();
// console.log(activities);

// [['Work', 8], [...]]
for (let i = 0; i < activities.length; i++) {
    let tr = document.createElement('tr');
    let indexCol = document.createElement('td');
    let activityCol = document.createElement('td');
    let hoursCol = document.createElement('td');

    indexCol.innerText = i;
    activityCol.innerText = activities[i][0]; // "Work"
    hoursCol.innerText = activities[i][1]; // 8

    tr.appendChild(indexCol);
    tr.appendChild(activityCol);
    tr.appendChild(hoursCol);
    tbody.appendChild(tr);

    // // Exercise II - calculate the percentage of hours you've spend on activities in one day
    let percentageHours = document.createElement('td');
    // ['Work', 8]
    let percentage = Math.floor((activities[i][1] / 24) * 100) + '%'; // 33%

    percentageHours.innerText = percentage;
    tr.appendChild(percentageHours); // add to the html

    // ['Work', 8, 33%]
    activities[i].push(percentage);
    console.log(activities);

    // Exercise IV
    // let percentage = Math.floor((activities[i][1] / 24) * 100) + '%';
    // activities[i].push(percentage);

    // let bodyRow = createRow(i, activities[i][0], activities[i][1], percentage); // <tr>
    // tbody.appendChild(bodyRow);
}

document.querySelector(".table-container").appendChild(table);

// __________________________________________________________________________

//Exercise III - removed the activity which has index 2 from the array (using array method) and also update the table (not showing that activity)
activities.splice(2, 1);
// console.log(activities)

tbody.innerHTML = "";

// Exercise V
// populateBody();
// console.log(activities);

for (let i = 0; i < activities.length; i++) {
    let tr = document.createElement('tr');
    let indexCol = document.createElement('td');
    let activityCol = document.createElement('td');
    let hoursCol = document.createElement('td');

    indexCol.innerText = i;
    activityCol.innerText = activities[i][0];
    hoursCol.innerText = activities[i][1];

    tr.appendChild(indexCol);
    tr.appendChild(activityCol);
    tr.appendChild(hoursCol);
    tbody.appendChild(tr);

    // Exercise II - calculate the percentage of hours you've spend on activities in one day
    // let percentageHours = document.createElement('td');
    // let percentage = Math.floor((activities[i][1] / 24) * 100) + '%';
    // percentageHours.innerText = percentage;
    // activities[i].push(percentage);
    // tr.appendChild(percentageHours);

    // Exercise IV
    // let percentage = Math.floor((activities[i][1] / 24) * 100) + '%';
    // // activities[i].push(percentage);
    // let bodyRow = createRow(i, activities[i][0], activities[i][1], percentage);
    // tbody.appendChild(bodyRow);
}

// Exercise IV
function createRow(firstColText, secondColText, thirdColText, fourthColText) {
  let row = document.createElement("tr");
  let firstCol = document.createElement("td");
  let secondCol = document.createElement("td");
  let thirdCol = document.createElement("td");
  let forthCol = document.createElement("td");

  firstCol.innerText = firstColText; // "Index"
  secondCol.innerText = secondColText; // "Activity"
  thirdCol.innerText = thirdColText;
  forthCol.innerText = fourthColText;

  row.appendChild(firstCol);
  row.appendChild(secondCol);
  row.appendChild(thirdCol);
  row.appendChild(forthCol);

  return row;
}

// Exercise V
function populateBody() {
  for (let i = 0; i < activities.length; i++) {
    let percentage = Math.floor((activities[i][1] / 24) * 100) + "%";

    // if (activities[i][2] === undefined) {
    //   activities[i].push(percentage);
    // }

    if (activities[i].length < 3) {
      activities[i].push(percentage);
    }

    // activities[i].push(percentage);

    let bodyRow = createRow(i, activities[i][0], activities[i][1], percentage);
    tbody.appendChild(bodyRow);
  }
}
