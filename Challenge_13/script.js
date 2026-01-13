// Task 1

class Employee {
  constructor(name, companyName, jobPosition, salary) {
    this.name = name;
    this.companyName = companyName;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }
}

const emp1 = new Employee("Alice", "TechCorp", "Employee", 55000);
const emp2 = new Employee("Bob", "TechCorp", "Director", 85000);
const emp3 = new Employee("Charlie", "TechCorp", "Boss", 120000);

const employeeList = document.createElement("ul");
[emp1, emp2, emp3].forEach((emp) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>Name:</strong> ${emp.name}, ${emp.companyName}, ${emp.jobPosition}, ${emp.salary} eur
  `;
  employeeList.appendChild(li);
});
document.body.appendChild(employeeList);

// Task 2
function Cube(side) {
  this.side = side;

  this.area = function () {
    return 6 * this.side * this.side;
  };

  this.perimeter = function () {
    return 12 * this.side;
  };
}

const sideLength = parseFloat(prompt("Enter the side length of the cube:"));
if (!isNaN(sideLength)) {
  const myCube = new Cube(sideLength);
  console.log(`Cube side: ${myCube.side}`);
  console.log(`Cube surface area: ${myCube.area()}`);
  console.log(`Cube perimeter: ${myCube.perimeter()}`);
} else {
  console.log("Invalid side length entered.");
}

// --------------------------
// Task 3: EmailMessage Class
// --------------------------
class EmailMessage {
  constructor(from, to, subject, message) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.message = message;
  }
}

// --- Get Data via Prompt ---
const from = prompt("Enter sender name:");
const to = prompt("Enter recipient name:");
const subject = prompt("Enter email subject:");
const message = prompt("Enter email message:");

const email = new EmailMessage(from, to, subject, message);

// --- Create Form ---
const container = document.getElementById("emailContainer");
const form = document.createElement("form");
form.className =
  "bg-white form-card rounded-lg p-8 flex flex-col items-center space-y-4 w-full";

form.innerHTML = `
        <label class="text-green-800 font-bold text-lg w-full text-left">From:</label>
        <input type="text" value="${email.from}" class="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"/>

        <label class="text-green-800 font-bold text-lg w-full text-left">To:</label>
        <input type="text" value="${email.to}" class="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"/>

        <label class="text-green-800 font-bold text-lg w-full text-left">Subject:</label>
        <input type="text" value="${email.subject}" class="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"/>

        <label class="text-green-800 font-bold text-lg w-full text-left">Message:</label>
        <textarea rows="4" class="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400">${email.message}</textarea>

        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md w-full transition">
          Submit
        </button>
      `;

container.appendChild(form);
