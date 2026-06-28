// Literal type
// const number: `+389${number}` | `00389${number}` = '+389713194567'
// Exercise
// interface User {
//     "id": number,
//     "name": string,
//     "username": string,
//     "email": string,
//     "address": {
//       "street": string,
//       "suite": string,
//       "city": string,
//       "zipcode": string,
//       "geo": {
//         "lat": string,
//         "lng": string
//       }
//     },
//     "phone": string,
//     "website": string,
//     "company": {
//       "name": string,
//       "bs": string
//     }
//   }
//   const tBody = document.querySelector('tbody')
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => res.json())
//   .then((data: Array<User>) => {
// data.forEach(user => {
//   const tr = document.createElement('tr')
//     const nameTd = document.createElement('td')
//     const emailTd = document.createElement('td')
//     const phoneTd = document.createElement('td')
//     nameTd.innerText = user.name
//     emailTd.innerText = user.email
//     phoneTd.innerText = user.phone
//     tr.append(nameTd, emailTd, phoneTd)
//   tBody?.append(tr)
// })
//   })
// Generic type
// function findElementInArray<T>(array: T[], element: T){
//   return array.find((el) => el === element)
// }
// const res = findElementInArray([1,2,3,4], 4)
// const res1 = findElementInArray(['Bitola', 'Shtip'], 'Skopje')
// console.log(res);
// Function return type
// function add(a: number, b: number) {
//   return a + b
// }
// void
// function log() {
//   console.log('Something');
// }
// log()

// Unknown
// var input;
// var firstName;
// var age;
// input = "brainster";
// input === 100;
// if (typeof input === "string") {
//   firstName = input;
// } else if (typeof input === "number") {
//   age = input;
// }
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("You cannot divide by 0");
//   }
//   return a / b;
// }
// const one = divide(4, 2);
// console.log(one);
