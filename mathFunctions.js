export const add = (x, y) => x + y;

export function subtract(x, y) {
  return x - y;
}

export function divide(x, y) {
  return x / y;
}

export default function multiply(x, y) {
  return x * y;
}

export const user = {
  firstName: "John",
  lastName: "Doe",
};

export class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
}

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// For of loop
export const forOfLoop = () => {
  for (const element of arr) {
    // console.log(element);
  }
};

// for in loop
export const forInLoop = () => {
  for (const index in arr) {
    // console.log(index);
  }
};

// for in loop can loop through both arrays and objects

export const forInLoopPerson = () => {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
  };

  for (const value in person) {
    console.log(person[value]);
  }
};
