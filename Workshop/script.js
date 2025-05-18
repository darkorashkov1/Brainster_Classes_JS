// Exercise 1
// Prompt the user to enter a string (for example a sentence)
// - Create a JavaScript function that finds the longest word in the given string
// - Show the longest string in the console

// let sentence = prompt("Type a sentence");

// const findLongestString = function (sentence) {
//   let words = sentence.split(" ");
//   let longestWord = "";

//   words.forEach((word) => {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });
//   return longestWord;
// };
// console.log(
//   `Longest word from this sentence is: ${findLongestString(sentence)}`
// );

// Exercise 2
// - Initialize an array with two numbers (for example [1,4])
// - Create a JavaScript function that that takes an array of two numbers and returns the
// sum of those two numbers plus the sum of all the numbers between them.
// - Show the result in the console

// let arr = [10, -1];

// function sumAll(array) {
//   array.sort((a, b) => a - b);

//   let sum = 0;

//   for (let i = array[0]; i <= array[1]; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(sumAll(arr));

// Exercise 4
// - Create a JavaScript function that checks whether there are two distinct indices i and j in
// the array such that nums[i] is 2 times nums[j].

// const array = [10, 2, 5, 3];

// function checkIfDoubleExists(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === 2 * arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(checkIfDoubleExists(array));

// Exercise 5
// Create a JavaScript function to find all the duplicates in an array where the numbers are
// in the range 1 to n (inclusive), where n is the length of the array.

// const array = [4, 3, 2, 7, 8, 2, 3];

// function checkDuplicates(arr) {
//   const duplicates = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j] && i !== j && !duplicates.includes(arr[i])) {
//         duplicates.push(arr[i]);
//       }
//     }
//   }
//   return duplicates;
// }

// console.log(checkDuplicates(array));
