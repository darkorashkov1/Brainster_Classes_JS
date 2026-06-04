import multiply, {
  add,
  divide,
  user,
  Person,
  subtract,
} from "./mathFunctions.js";

import * as math from "./mathFunctions.js";

// console.log(add(5, 6));

// console.log(subtract(10, 5));
// console.log(divide(10, 5));
// console.log(multiply(10, 5));

// console.log(user);

const person = new Person("Jane");
// console.log(person);

// math.forOfLoop();
// math.forInLoop();
// math.forInLoopPerson();

const mySet = new Set();

mySet.add(1);
mySet.add(true);

console.log(mySet);

// Spread operator
const arr = [1, 2, 3, 4, 5];
const arr1 = [...arr, 4];

console.log(arr1);

// Rest operator
const sum1 = (...args) => {
  let total = 0;
  for (const element of args) {
    total += element;
  }
  console.log(total);
};

sum1(1, 2, 3, 4, 5);
sum1(6, 7, 8, 9);
