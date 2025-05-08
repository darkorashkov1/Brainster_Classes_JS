// Arrow functions
// let sumNumbers = (a, b) => {
//   return a + b;
// };
// console.log(sumNumbers(2, 5));

// Exercise 1
// 1. Write a function that:
// 1.1. Add two numbers and return the result
// 1.2. Subtract two numbers and return the result
// 1.3. Multiply two numbers and return the result
// 1.4. Divide two numbers and return the result
// 2. Define two number variables
// 3. Invoke each of the four function on those two numbers
// 4. Log the results in the console

// let number1 = +prompt("Enter first number");
// let symbol = prompt("Enter an operator (+, -, *, /)");
// let number2 = +prompt("Enter second number");

// let calculator = (num1, operator, num2) => {
//   if (operator === "+") {
//     return num1 + num2;
//   }
//   if (operator === "-") {
//     return num1 - num2;
//   }
//   if (operator === "*") {
//     return num1 * num2;
//   }
//   if (operator === "/") {
//     return num1 / num2;
//   }

//   return "Invalid operator!";
// };

// let result = calculator(number1, symbol, number2);
// console.log("Result:", result);
// document.write("Result: " + result);

// Exercise 2
// 1. Rewrite each of the functions from exercise one using arrow functions.
// Try to use the minimum amount of lines / characters possible to achieve the result.
// 2. Add a function that finds the square of a given number (also using an arrow function).
// 3. Add a function that finds the cube of a given number (also using an arrow function).
// 4. Define two number variables
// 5. Invoke each of the function on those two numbers

// let squareNumber = +prompt("Enter first number");

// let squareFn = (number) => document.write(number * number);
// let cubeFn = (number) => document.write(number * number * number);
// cubeFn(squareNumber);

// Exercise 3
// 1. Create a function that takes an array as input and returns that arrays length as output.
// 2. Try the function on different arrays
// 3. Rewrite the exercise with arrow function in one line.

// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = [1, 2, 3];
// let arrayLength = (arr) => console.log(arr.length);
// arrayLength(arr2);

// Exercise 4
// 1. Prompt for a word.
// 2. Create an arrow function that will take a word as in input and return a reversed version of
// that same word.
// (Hint: make an array from the given word & then use array methods on it.)

// let anyWord = prompt("Type any word to see reversed result");

// let reverseWord = (word) =>
//   document.write(word.toLowerCase().split("").reverse().join(""));
// reverseWord(anyWord);

// // Exercise 5
// 1. Create a function that will take an array as an input
// 2. Calculate and return the sum of all the elements of the given array.
// 3. Try if the same function works on this array [5, '5', 3] which has an element as a string.

// let array = [1, 2, 3, 4, "5", 6, 7, 8, "9", 10];

// const sumAllNumbers = (number) => {
//   let sum = 0;
//   for (i = 0; i < number.length; i++) {
//     sum += Number(number[i]);
//   }
//   return sum;
// };
// console.log(sumAllNumbers(array));
