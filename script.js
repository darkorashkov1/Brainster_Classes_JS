// Callback function

// let name = "John";

// const sayName = (name) => {
//   console.log(name);
// };
// sayName(name);

// // This is the callback function.
// // Function that can be called as parameter to another function
// let sayHello = function () {
//   console.log("Hello!");
// };

// let sayBye = function (callback) {
//   callback();
// };
// sayBye(sayHello);

// Exercise 1
// 1. Define a function that takes two arguments - a number and a callback
// function.
// 2. Count down from the given number to 0, and then execute the callback
// function.
// 3. Define a second function that simply logs “done” to the console.
// 4. Prompt for a number. Parse the input to an actual number.
// 5. Invoke the function at 1 using the number from 4 and the second function
// from 3.

// setInterval

// const counter = (num, callback) => {
//   setInterval(() => {
//     if (num === 0) {
//       callback();
//     } else {
//       console.log("Num", num);
//       num--;
//     }
//   }, 1000);
// };

// let done = () => {
//   console.log("Done");
// };

// counter(5, done);

// setTimeout

// const sayHello = () => {
//   console.log("Hello");
// };

// setTimeout(() => {
//   console.log("Time out called!");
// }, 500);

// sayHello();

// forEach

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((number, index) => {
//   console.log("Number", number);
//   console.log("Index", index);
// });

// Example 2

// 1. Define a function which:
// 1.1 Takes an array of numbers as an input argument
// 1.2 Finds the arithmetic mean of the array (use forEach to iterate)
// 1.3 Writes the result in the document
// 2. Invoke the function at 1 using an array of numbers (e.g. [5,8,20,55,190])

// let arr = [5, 8, 20, 55, 190];

// const findArithmeticMean = () => {
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element;
//   });

//   let mean = sum / arr.length;

//   document.write(mean);
// };
// findArithmeticMean(arr);

// Function Array.map()
// let arr = [1, 2, 3, 4, 5];

// with for cycle
// for (let i = 0; i < arr.length; i++) {
//   arr[i] += 10;
// }
// console.log(arr);

// with map function (non mutating method)
// let newArr = arr.map((item) => (item += 10));
// console.log(newArr);

// Function Array.find()
// let arr = [1, 2, 3, 4, 5];

// let element = arr.find((item) => item === 3);
// console.log(element);

// Function Array.filter()
// let arr = [1, 2, 3, 4, 5, 3, 6, 7, 8, 9, 10, 3];

// let newFilterArray = arr.filter((item) => item > 5);
// console.log(newFilterArray);

// let newFilterNumber3 = arr.filter((item) => item === 3);
// console.log(newFilterNumber3);

// let countries = ["Macedonia", "Bulgaria", "Macao", "Serbia", "Croatia"];

// let searchCountries = prompt("Search for a country");

// let filterCountries = countries.filter((country) =>
//   country.includes(searchCountries)
// );

// console.log(filterCountries);

// Exercise 3
// 1. Given is this array: let arr = [1,2,3,4];
// 2. Iterate over the array and create a new array which has every item from the
// first one multiplied up by 10.
// 3. You should get the following in console: [10, 20, 30, 40]
// (Hint: use iterator array.map)

// let arr = [1, 2, 3, 4];

// let newArr = arr.map((element) => (element *= 10));
// console.log("Using map method:", newArr);

// Exercise 4
// 1. Given is this array: let arr = [1,2,3,4];
// 2. Iterate over the array and create a new array which has every even number
// from the first one.
// 3. You should get the following in console: [2, 4]
// (Hint: use iterator array.filter)

// let arr1 = [1, 2, 3, 4];

// let filteredArray = arr1.filter((even) => even % 2 === 0);
// console.log("Using filter method", filteredArray);

// Exercise 5
// 1. Given is this array: let arr = [1,2,3,4];
// 2. Iterate over the array and and find the first odd number from the first one.
// 3. You should get the following in console: 1
// (Hint: use iterator array.find)

// let arr2 = [1, 2, 3, 4];

// let findANumber = arr2.find((element) => element % 2 !== 0);
// console.log("Using find method", findANumber);

// Exercise 6
// 1. Define an array of numbers of your choice.
// 2. Prompt for a number
// 3. Define a function that takes 2 parameters - the array and the number
// coming from prompt.
// 4. Inside the function, iterate through the initial array and return a new array in
// which every item from the initial array is multiplied with the number that
// comes from prompt.
// 5. Filter the new array where you put only numbers that are bigger or equal
// than 20.
// 6. Return the array from the function.
// 7. Example:
// arr1 = [1,2,3,4,5,6,7]; & entered number 10 in prompt
// the result in console should be: [20, 30, 40, 50, 60, 70]

// let definedArray = [1, 2, 3, 4, 5, 6, 7];

// let promptANumber = +prompt("Enter a number");

// let multiplyNumbers = (array, prompt) => {
//   let newArr = array.map((element) => (element * prompt));
//   let filteredArray = newArr.filter((element) => element >= 20);
//   document.write(filteredArray);
// };

// multiplyNumbers(definedArray, promptANumber);

// Every & Sum methods

// .every
// let array = [1, 30, 39, 29, 10, 13, 50];

// console.log(array.every((currentValue) => currentValue <= 40));
// This will return false because one element of the array is over 40

// .some

// let array = [1, 30, 39, 29, 10, 13, 50];

// console.log(array.some((element) => element < 40));
// Will return true because at least one of the array's elements is below 40

// Events intro

// const handleClick = () => {
//   let newDiv = document.createElement("div");
//   newDiv.innerText = "Hello all";

//   document.body.appendChild(newDiv);
// };

// let btn = document.querySelector("button");
// btn.addEventListener("dblclick", handleClick);

// Exercise 7
// 1. Define a function which:
// 1.1 Takes three parameters: length, width, and a callback function.
// 1.2 The functions should check if both length and width are positive numbers.
// 1.3 If either length or width is not a positive number, call the callback function
// with an error message.
// 1.4 If both length and width are positive numbers, calculate the area (length *
// width) and call the callback function with the result.
// 2. Define a JavaScript function that displays the result and which:
// 2.1 Takes two parameters: error and result.
// 2.2 If error is not null, display the error message on the DOM.
// 2.3 If error is null, display the calculated area on the webpage.

const findArea = (length, width, callback) => {
  if (length > 0 && width > 0) {
    let area = length * width;
    callback(undefined, area);
  } else {
    callback("Error happened");
  }
};

const displayResult = (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
};

findArea(50, 50, displayResult);
