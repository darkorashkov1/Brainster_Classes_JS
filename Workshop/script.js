// Ex 1
// 1. Define a function that takes two arguments - a number and a callback
// function.
// 2. Count down from the given number to 0, and then execute the callback
// function.
// 3. Define a second function that simply logs “done” to the console.
// 4. Prompt for a number. Parse the input to an actual number.
// 5. Invoke the function at 1 using the number from 4 and the second function
// from 3.

// function countdown(num, callback) {
//   let counter = setInterval(() => {
//     console.log(num);
//     num -= 1;

//     if (num <= 0) {
//       clearInterval(counter);
//       callback();
//     }
//   }, 1000);
// }

// function onDone() {
//   console.log("Done!");
// }

// let input = +prompt("Type a number");

// countdown(input, onDone);

// Ex 2
// 1. Define a function which:
// 1.1 Takes an array of numbers as an input argument
// 1.2 Finds the arithmetic mean of the array (use forEach to iterate)
// 1.3 Writes the result in the document
// 2. Invoke the function at 1 using an array of numbers (e.g. [5,8,20,55,190])
// (Tip: an arithmetic mean is simply the sum of all the array numbers divided by the
// length of the array)

// const arithmeticMean = (array) => {
//   let sum = 0;

//   array.forEach((element) => {
//     sum += element;
//   });

//   let result = sum / array.length;

//   document.write(`Arithmetic mean: ${result}`);
// };

// arithmeticMean([5, 8, 20, 55, 190]);

// Ex 3
// 1. Given is this array: let arr = [1,2,3,4];
// 2. Iterate over the array and create a new array which has every item from the
// first one added up by 10.
// 3. You should get the following in console: [11, 12, 13, 14]
// (Hint: use iterator array.map)

// let arr = [1, 2, 3, 4];

// let newArr = arr.map((element) => (element += 10));
// console.log(newArr);

// Exercise 1
// - Create a JavaScript function `operationOnSum` that takes as parameters 2
// numbers and 1 callback function
// - The `operationOnSum` function calculates the sum between the first 2 number
// parameters, and passes the result to the callback function
// - Create 2 callback functions which can be passed on the original function
// `operationOnSum`
// - The first callback function `divideByHalf` takes the sum calculated and divides it by
// half
// - The second callback function `multiplyByTwo` takes the sum calculates and
// multiplies it by two
// - Show in console the results when we pass the first callback and then the second
// callback

// const operationOnSum = (num1, num2, callback) => {
//   let result = num1 + num2;

//   return callback(result);
// };

// const divideByHalf = (sum) => {
//   return sum / 2;
// };

// const multiplyByTwo = (sum) => {
//   return sum * 2;
// };

// console.log("Divide by Half:", operationOnSum(10, 6, divideByHalf)); // (10+6)/2 = 8
// console.log("Multiply by Two:", operationOnSum(10, 6, multiplyByTwo)); // (10+6)*2 = 32

// Exercise 2
// - Create a JavaScript function that uses map and reduce to create a function that returns the
// sum of the squares of each number in an array

// let array = [2, 3, 4, 5, 6];

// const sumOfSquares = (arr) => {
//   let newArray = arr.map((element) => element * element);

//   let sum = 0;

//   newArray.forEach((item) => (sum += item));

//   return sum;
// };

// console.log(sumOfSquares(array));

// Exercise 3
// - Create a JavaScript function that takes as parameter an array of words (strings) and
// uses map to return a new array with each word capitalized.

// let array = ["john", "jaAk", "sTephEn", "mArk"];

// const capitalize = (words) => {
//   return words.map(
//     (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
//   );
// };
// console.log(capitalize(array));

// Exercise 4
// - Create a JavaScript function that takes an array of numbers, modifies each number
// using a callback (e.g., multiplies by 3), and then uses another callback to log the items in console.

// const array = [1, 2, 3, 4, 5];

// function modifyAndAggregate(array, modifierCb, aggregateCB) {
//   array.map(modifierCb).forEach(aggregateCB);
// }

// function multiplyByThree(item) {
//   return item * 3;
// }

// function aggregateCB(item) {
//   let sum = 0;
//   sum += item;
//   console.log(sum);
// }
// modifyAndAggregate(array, multiplyByThree, aggregateCB);

// With Reduce
// const array = [1, 2, 3, 4];

// let newArr = array.reduce((accumulator, current) => {
//   const square = current * current;

//   accumulator = accumulator + square;

//   return accumulator;
// }, 0);

// console.log(newArr);

// Exercise 5
// - Create a JavaScript function that tries to perform an operation (a callback function) and if
// it fails, retries the operation up to a specified number of times before giving up.
// TIPS:
// 1. Create a custom function that generates a random number which indicates the retries.
// 2. Use try and catch block for the retryOperation function

// function unstableOperation() {
//   if (Math.random() < 0.7) {
//     throw new Error("Random failure");
//   }
//   return "Success!";
// }

// function retryOperation(callback, maxRetries) {
//   for (let attempt = 1; attempt <= maxRetries; attempt++) {
//     try {
//       let result = callback(); // Try the operation
//       console.log(`Attempt ${attempt}: Success`);
//       return result; // If successful, return the result
//     } catch (error) {
//       console.log(`Attempt ${attempt}: Failed - ${error.message}`);
//     }
//   }

//   console.log("All retry attempts failed.");
//   return null;
// }

// let output = retryOperation(unstableOperation, 5);
// console.log("Final Output:", output);
