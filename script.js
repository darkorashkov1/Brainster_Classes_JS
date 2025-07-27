// QA 1

// Exercise 1
// 1. Write a JavaScript function that takes a text argument and alerts:
// "Hello, [name]!".
// 2. Ask the user to enter a name from the prompt
// 3. Rewrite the function by using a fat arrow function

//1
// const promptName = prompt("Enter name");

// function alertName(name) {
//   alert(`Hello ${name}`);
// }
// alertName(promptName);

// 2
// const inputName = document.querySelector("#inputName");
// const btn = document.querySelector("#nameBtn");

// const alertName = () => {
//   alert(`Hello ${inputName.value}`);
// };

// btn.addEventListener("click", alertName);

// Exercise 2
// 1. Create an HTML page with a button.
// 2. Write a JavaScript function that changes the background color of the page
// to a random color when the button is clicked.
// (Hint: Use event listeners to handle the button click.)
// (Hint: Use Math.random to generate random color)
// (Tip: All the colors can be represented by the values in this array:
// [‘1’,’2,’3,’,’4’,’5’,’6’,’7’,’8’,’9’,’0’,’A’,’B’,’C’,’D’,’E’,’F’])

// const btn = document.querySelector("#btn");

// function getRandomHexColor() {
//   let hexChars = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hexChars[Math.floor(Math.random() * 16)];
//   }
//   document.body.style.backgroundColor = color;
// }

// btn.addEventListener("click", getRandomHexColor);

// Exercise 3
// 1. Create an HTML page with a list of numbers (e.g., <ul> with <li> elements)
// and a button.
// 2. Write a JavaScript function that finds the largest number in the list and
// displays an alert with that number when the button is clicked.

// let btn = document.querySelector("#btn");
// let listItems = document.querySelectorAll("#numbers li");

// function findMax() {
//   let arrayOfNumbers = [...listItems].map((element) =>
//     Number(element.textContent)
//   );
//   return Math.max(...arrayOfNumbers);
// }
// let maxValue = findMax();

// const alertNumber = () => {
//   alert(`The largest number is ${maxValue}`);
// };

// btn.addEventListener("click", alertNumber);

// Exercise 4
// 1. Create an HTML page with a list of numbers (e.g., <ul> with <li> elements)
// and a button.
// 2. Write a JavaScript function that removes duplicate elements from the array
// and console logs the new array with unique numbers.

// document.getElementById("btn").addEventListener("click", function () {
//   const listItems = document.querySelectorAll("#numbers li");
//   const numbers = Array.from(listItems).map((item) => Number(item.textContent));

//   const uniqueNumbers = [...new Set(numbers)];

//   console.log(uniqueNumbers);
// });

// Exercise 5

// const movies = [
//   "The Shawshank Redemption",
//   "The Godfather",
//   "The Dark Knight",
//   "THe Godfather: Part II",
//   "The Angry Man",
//   "The Lord of the Rings: The Return of the King",
//   "Pulp Fiction",
//   "The good, the Bad and the Ugly",
//   "The Lord of the Rings: The Fellowship of the Ring",
// ];

// const btn = document.querySelector("#btn");

// const displayMovies = (movies) => {
//   const movieList = document.getElementById("movieList");
//   movieList.innerHTML = "";

//   movies.forEach((movie) => {
//     const movieElement = document.createElement("div");
//     movieElement.textContent = movie;
//     movieList.appendChild(movieElement);
//   });
// };

// displayMovies(movies);

// const filterMovies = () => {
//   const searchInput = document.querySelector("#movieInput").value;

//   const filteredMovies = movies.filter((movie) =>
//     movie.toLowerCase().includes(searchInput)
//   );

//   movieList.innerHTML = "";
//   displayMovies(filteredMovies);
// };

// btn.addEventListener("click", filterMovies);

// QA 2

// Exercise 1

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   const taskInput = document.querySelector("#taskInput");
//   const task = taskInput.value.trim();

//   if (task !== "") {
//     let li = document.createElement("li");
//     li.innerHTML = `${task} <button class="deleteBtn">X</button>`;

//     document.querySelector("#taskList").appendChild(li);

//     taskInput.value = ""; // Clear input field

//     const deleteBtn = li.querySelector(".deleteBtn");
//     deleteBtn.addEventListener("click", () => {
//       li.remove();
//     });
//   }
// });

// Exercise 2

// let input1 = document.querySelector("#input1");
// let input2 = document.querySelector("#input2");
// let result = document.querySelector("#result");

// const addition = () => {
//   result.textContent = +input1.value + +input2.value;

//   input1.value = "";
//   input2.value = "";
// };
// const subtraction = () => {
//   result.textContent = +input1.value - +input2.value;
//   input1.value = "";
//   input2.value = "";
// };
// const multiplication = () => {
//   result.textContent = +input1.value * +input2.value;
//   input1.value = "";
//   input2.value = "";
// };
// const division = () => {
//   result.textContent = +input1.value / +input2.value;
//   input1.value = "";
//   input2.value = "";
// };

// document.querySelector("#addition").addEventListener("click", addition);
// document.querySelector("#subtraction").addEventListener("click", subtraction);
// document
//   .querySelector("#multiplication")
//   .addEventListener("click", multiplication);
// document.querySelector("#division").addEventListener("click", division);

// Exercise 3 (rock, paper, scissors)

// const rockStr = "rock";
// const paperStr = "paper";
// const scissorsStr = "scissors";

// const gameValues = [rockStr, paperStr, scissorsStr];

// const rockBtn = document.getElementById("rock");
// const paperBtn = document.getElementById("paper");
// const scissorsBtn = document.getElementById("scissors");

// const startGame = (userChoice) => {
//   // computer choice

//   const randomIndex = Math.floor(Math.random() * 3);
//   const computerChoice = gameValues[randomIndex];
//   console.log("user choice", userChoice);
//   console.log("computer choice", gameValues[randomIndex]);

//   if (userChoice === computerChoice) {
//     console.log("Draw!");
//   } else if (
//     (userChoice === rockStr && computerChoice === paperStr) ||
//     (userChoice === paperStr && computerChoice === scissorsStr) ||
//     (userChoice === scissorsStr && computerChoice === rockStr)
//   ) {
//     console.log("Computer wins!");
//   } else {
//     console.log("User wins!");
//   }
// };

// const generateResult = () => {
//   startGame(rockStr);
// };

// rockBtn.addEventListener("click", generateResult);
// paperBtn.addEventListener("click", generateResult);
// scissorsBtn.addEventListener("click", generateResult);

// Exercise 4

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("button");

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const submitForm = (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email !== "" && password !== "") {
    if (emailRegex.test(email) && password.length >= 6) {
      alert("Logged in successfully!");
      emailInput.value = "";
      passwordInput.value = "";
    } else {
      alert("Input valid credentials! (Valid email & password min 6 chars)");
    }
  } else {
    alert("Please fill in all fields.");
  }
};

submitBtn.addEventListener("click", submitForm);
