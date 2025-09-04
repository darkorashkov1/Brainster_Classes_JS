// Scope
// function hello() {
//   var a = 5;
//   let b = 10;

//   if (true) {
//     var c = "var inside if";
//     let d = "let inside if";
//   }
// }

// hello();

// context - this
// console.log(this);

// obj1 = {
//   age: 30,

//   method: function () {
//     return this;
//   },
// };

// obj2 = {
//   age: 20,

//   method: () => {
//     return this;
//   },
// };

// console.log(obj1.method()); // points to obj1
// console.log(obj2.method()); // points to Window

// const myFnc = function () {
//   console.log(this);
// };

// obj3 = {
//   firstName: "John",
//   method() {
//     setTimeout(
//       //   function () {
//       //   console.log(this);
//       // },
//       myFnc,
//       1000
//     );
//   },
// };
// obj3.method();

// Date

// const currentDate = new Date();
// console.log(currentDate.getDate());
// console.log(currentDate.getMonth() + 1);
// console.log(currentDate.getFullYear());

// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());

// Exercise 1
// 1. Write a JavaScript function to get the month name from a given date.
// 2. Show the month name in console.
// example:
// given date: ‘2020 03 28’
// console: March
// *hint: use an array with all the month names.

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const getMonth = function () {
//   const currentDate = new Date();
//   const monthIndex = currentDate.getMonth();

//   console.log(months[monthIndex]);
// };

// getMonth();

// Exercise 2
// 1. Write a JavaScript function to test whether a date is a weekend.
// 2. Show the result in console.
// example:
// given date: ‘2023 08 19’
// console: it’s the weekend.
// given date: ‘2020 08 24’
// console: it’s not the weekend.

// function isWeekend(dateString) {
//   const date = new Date(dateString);
//   const day = date.getDay(); // 0 = Sunday, 6 = Saturday

//   if (day === 0 || day === 6) {
//     console.log("It's the weekend.");
//   } else {
//     console.log("It's not the weekend.");
//   }
// }

// isWeekend("2023 08 19"); // Output: It's the weekend.
// isWeekend("2020 08 24"); // Output: It's not the weekend.

// Exercise 3
// 1. Use the same functions from exercise I and exercise II to check from the current date what is the
// name of the current month and is it the weekend?
// 2. Show the result in console.

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // Function to get the month name from a given date
// function getMonth(dateString) {
//   const date = new Date(dateString);
//   const monthIndex = date.getMonth();
//   return months[monthIndex];
// }

// // Function to check if it's a weekend
// function isWeekend(dateString) {
//   const date = new Date(dateString);
//   const day = date.getDay(); // 0 = Sunday, 6 = Saturday
//   return day === 0 || day === 6;
// }

// // Exercise 3: Check for current date
// const today = new Date();
// const todayString = today.toISOString().split("T")[0]; // format YYYY-MM-DD

// console.log(`Current month is: ${getMonth(todayString)}`);

// if (isWeekend(todayString)) {
//   console.log("It's the weekend.");
// } else {
//   console.log("It's not the weekend.");
// }

// Homework
// Refactor the functions from Exercise I and Exercise II to be methods to the Date object.
// Add method to Date prototype for getting month name

Date.prototype.getMonthName = function () {
  return months[this.getMonth()];
};

// Add method to Date prototype for checking if it's weekend
Date.prototype.isWeekend = function () {
  const day = this.getDay(); // 0 = Sunday, 6 = Saturday
  return day === 0 || day === 6;
};

// Usage:
const date1 = new Date("2020 03 28");
console.log(date1.getMonthName()); // March
console.log(date1.isWeekend() ? "It's the weekend." : "It's not the weekend.");

const date2 = new Date("2020 08 24");
console.log(date2.getMonthName()); // August
console.log(date2.isWeekend() ? "It's the weekend." : "It's not the weekend.");
