// //Task 1

// function transformArray(inputArray) {
//   return inputArray.map((num) => (num >= 10 ? num * 4 : num * 2));
// }

// let array1 = [1, 5, 10, 11, 20, 34];
// console.log(transformArray(array1));

// //Task 2

//  function removeDuplicates(array) {
//         return array.filter((item, index) => array.indexOf(item) === index);
//       }

// let array2 = [1, 1, 2, 3, 4, 1, 2, 5, 7, 8, 0];
// console.log(removeDuplicates(array2));

// //Task 3

//   function generateTable(nrRows, nrColumns) {
//     const body = document.body;
//     const table = document.createElement("table");

//     for (let i = 0; i < nrRows; i++) {
//       const row = table.insertRow();
//       for (let j = 0; j < nrColumns; j++) {
//         const cell = row.insertCell();
//         cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
//       }
//     }

//     body.appendChild(table);
//   }

//   let rows = prompt("Enter the number of rows:");
//   let columns = prompt("Enter the number of columns:");
//   generateTable(parseInt(rows), parseInt(columns));
