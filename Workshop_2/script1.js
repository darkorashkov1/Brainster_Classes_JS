// const developer = {
//   fullName: "John Doe",
//   age: 35,
//   experience: 10,
//   workingPosition: "javascript developer",

//   getSeniority() {
//     if ((this.experience === 0) & (this.experience < 1)) {
//       console.log("Junior");
//     } else if (this.experience >= 1 && this.experience < 3) {
//       console.log("medior");
//     } else if (this.experience >= 3) {
//       console.log("Senior");
//     }
//   },

//   display() {
//     return console.log(
//       `I am ${this.fullName}, ${this.age} years old and I am working as a ${this.workingPosition}`
//     );
//   },
// };

// developer.getSeniority(10);
// developer.display();

// With Constructor function as follows

// function Developer(fullName, age, experience, workingPosition) {
//   this.fullName = fullName;
//   this.age = age;
//   this.experience = experience;
//   this.workingPosition = workingPosition;

//   this.getSeniority = function () {
//     if ((this.experience === 0) & (this.experience < 1)) {
//       console.log("Junior");
//     } else if (this.experience > 1 && this.experience < 3) {
//       console.log("medior");
//     } else {
//       console.log("Senior");
//     }
//   };

//   this.display = function () {
//     return console.log(
//       `I am ${this.fullName}, ${this.age} years old and I am working as a ${this.workingPosition}`
//     );
//   };
// }

// const developer = new Developer("Joe Doe", 35, 10, "Javascript Developer");
// console.log(developer);

// const seniority = developer.getSeniority();
// const display = developer.display();

// Exercise 3

// function Car(model, year, mileage, owner) {
//   this.model = model;
//   this.year = year;
//   this.mileage = mileage;
//   this.owner = owner;

//   this.getInfo = function () {
//     console.log(
//       `${this.model}, ${this.year}, ${this.mileage}km, owned by ${this.owner}`
//     );
//   };

//   this.status = function () {
//     if (this.mileage < 10000) {
//       console.log("This is a great car");
//     } else if (this.mileage >= 10000 && this.mileage < 250000) {
//       console.log("This is a good card");
//     } else if (this.mileage > 250000) {
//       console.log("This is an old car");
//     }
//   };

//   this.setOwner = function (newOwner) {
//     this.owner = newOwner;
//   };
// }

// const car = new Car("Ford", 2018, 100000, "James Gist");
// car.getInfo();
// car.status();

// car.setOwner("Jeremy Clarkson");
// car.getInfo();

// Exercise 4
// - Make an object with a class called Triangle which will take 3 parameters - for each of its sides.
// - Make a method called check - which will check which type of triangle is the one -
// equilateral/isosceles or scalene and will return a string saying: e.g. 'The triangle with sides a 10, b
// 20 and c 30 is isosceles'.
// - Make a new instance of the class and call the check method on it.
// See the result in the console.

// class Average {
//   constructor(number1, number2) {
//     this.number1 = number1;
//     this.number2 = number2;
//   }

//   callAverage() {
//     const average = (this.number1 + this.number2) / 2;
//     console.log(
//       `The average value between ${this.number1} and ${this.number2} is ${average}`
//     );
//   }
// }

// const avr1 = new Average(2, 6);
// avr1.callAverage();

// const avr2 = new Average(3, 9);
// avr2.callAverage();

// const num1 = +prompt("Enter a number");
// const num2 = +prompt("Enter another number");
// const avr3 = new Average(num1, num2);
// avr3.callAverage();

// Exercise 5
// - Make an object with a class called Triangle which will take 3 parameters - for each of its sides.
// - Make a method called check - which will check which type of triangle is the one -
// equilateral/isosceles or scalene and will return a string saying: e.g. 'The triangle with sides a 10, b
// 20 and c 30 is isosceles'.
// - Make a new instance of the class and call the check method on it.
// See the result in the console

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getType() {
    if (this.a === this.b && this.a === this.c && this.b === this.c) {
      console.log(
        `Триаголникот со страни ${this.a}, ${this.b} и ${this.c} е рамностран`
      );
    } else if (this.a === this.b || this.a === this.c || this.b === this.c) {
      console.log(
        `Триаголникот со страни ${this.a}, ${this.b} и ${this.c} е рамнокрак`
      );
    } else {
      console.log(
        `Триаголникот со страни ${this.a}, ${this.b} и ${this.c} е разностран`
      );
    }
  }
}

const triagolnik = new Triangle(3, 2, 5);
triagolnik.getType();
