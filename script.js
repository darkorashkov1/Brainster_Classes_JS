// Objects 1

// Exercise 1 & 2
// const cat = {
//   name: "Garfield",
//   color: "Orange",
// };

// cat.name = "Tom";
// cat.color = "blue";

// cat

// console.log(cat);

// const user = {
//   name: "John",
//   hobbies: ["Snowboarding", "football"],

//   function() {
//     console.log(this.name);
//   },
// };
// user.function();

// // Exercise 3
// 1. Add a “meow” method to the Cat object. It should simply alert “meow” on the screen when invoked.
// 2. Invoke the “meow” method from the Cat object.

// const cat = {
//   name: "Tom",
//   color: "blueS",

//   meow: function () {
//     alert("Meow !");
//   },
// };
// console.log(cat);

// cat.meow();

// const user = {
//   name: "John",
//   surname: "Doe",
//   address: {
//     streetName: "Vancho Prkje",
//     number: "63/3",
//     postCode: "2000",
//     city: "Shtip",
//     country: "Macedonia",
//   },
// };

// // Exercise 4
// 1. Define a “cat1” object.
// 2. Define a method called setName, which receives a string as an input argument and sets that string
// as the cat’s name. (hint: use the “this” keyword)
// 3. Define a method called setColor, which receives a string as an input argument and sets that string as
// the cat’s color (hint: use the “this” keyword)
// 4. Define a method called sayNameAndColor which alerts on screen the name and color of the cat.
// 7 5. Invoke all methods: setName, then setColor, then sayNameAndColor with data of your choice.

// const cat1 = {
//   setName: function (newName) {
//     this.name = newName;
//   },

//   setColor: function (newColor) {
//     this.color = newColor;
//   },

//   setNameAndColor: function () {
//     alert(`${this.name}, ${this.color}`);
//   },
// };

// const nameEl = document.querySelector("#name");
// const colorEl = document.querySelector("#color");
// const btn = document.querySelector("#btn");

// nameEl.addEventListener("input", (e) => {
//   cat1.setName(e.target.value);
// });
// colorEl.addEventListener("input", (e) => {
//   cat1.setColor(e.target.value);
// });

// btn.addEventListener("click", () => {
//   cat1.setNameAndColor();
// });

// Object methods - keys, values, entries

// const animal = {
//   color: "red",
//   type: "mammal",
//   gender: "female",
// };

// console.log(Object.keys(animal));
// console.log(Object.values(animal));
// console.log(Object.entries(animal));

// Exercise 5
// 1. In HTML, create a table with two columns: City and Population.
// 2. Using the cities object from our example (you can add your city as well), fill the table with as many
// rows as there are objects in the object.
// a. Try it first with Object.keys and Object.values
// b. Try it again with Object.entries

// const cities = {
//   city1: { name: "Skopje", population: 400000 },
//   city2: { name: "Bitola", population: 200000 },
//   city3: { name: "Veles", population: 100000 },
//   city4: { name: "Shtip", population: 45000 },
// };

// const createTable = function () {
//   const table = document.createElement("table");
//   table.style.border = "2px solid black";
//   table.style.borderCollapse = "collapse";
//   const thead = document.createElement("thead");
//   const tableRow = document.createElement("tr");
//   const th1 = document.createElement("th");
//   th1.style.padding = "10px";
//   th1.textContent = "City";
//   const th2 = document.createElement("th");
//   th2.style.padding = "10px";
//   th2.textContent = "Population";
//   tableRow.appendChild(th1);
//   tableRow.appendChild(th2);
//   thead.appendChild(tableRow);
//   table.appendChild(thead);

//   const tBody = document.createElement("tbody");

//   Object.entries(cities).forEach(([_, cityData]) => {
//     const dataRow = document.createElement("tr");

//     const td1 = document.createElement("td");
//     td1.textContent = cityData.name;
//     td1.style.border = "1px solid black";
//     td1.style.padding = "10px";

//     const td2 = document.createElement("td");
//     td2.textContent = cityData.population;
//     td2.style.border = "1px solid black";
//     td2.style.padding = "10px";

//     dataRow.appendChild(td1);
//     dataRow.appendChild(td2);

//     tBody.appendChild(dataRow);
//     table.appendChild(tBody);
//   });

//   document.body.appendChild(table);
// };
// createTable();

// Exercise 6 & 7
// 1. Create an empty array called “dogs”.
// 2. (In html) create two input fields (with different ids) and a button that says “Add dog”.
// 3. Create a function which:
// a. Gets the values from the two input fields
// b. Creates a new “dog” object using the first value as name and the second as color.
// c. Adds the newly created dog object to the array.
// d. Logs in the console the whole “dogs” array
// 4. Invoke the function when the button gets clicked (using “click” with addEventListener)
// a. Add an html table to the document with columns for “name” and “color”.
// b. Any time a new dog gets added to the array, create a new row in the table (using JavaScript)
// and show its name and color in the appropriate columns.

// const dogs = [];

// const btn = document.querySelector("#btn");

// const table = document.createElement("table");
// table.style.border = "2px solid black";
// table.style.borderCollapse = "collapse";

// const tHead = document.createElement("thead");
// const headRow = document.createElement("tr");

// const th1 = document.createElement("th");
// th1.style.padding = "10px";
// th1.textContent = "Name";

// const th2 = document.createElement("th");
// th2.style.padding = "10px";
// th2.textContent = "Color";

// headRow.appendChild(th1);
// headRow.appendChild(th2);
// tHead.appendChild(headRow);
// table.appendChild(tHead);

// const tBody = document.createElement("tbody");

// const addDogFunction = (e) => {
//   e.preventDefault();

//   const input1El = document.querySelector("#input1");
//   const input2El = document.querySelector("#input2");

//   const input1 = input1El.value.trim();
//   const input2 = input2El.value.trim();

//   if (input1 === "" || input2 === "") {
//     alert("Please fill in both fields.");
//     return;
//   }

//   const newDog = {
//     name: input1,
//     color: input2,
//   };

//   dogs.push(newDog);

//   const bodyRow = document.createElement("tr");
//   const td1 = document.createElement("td");
//   td1.textContent = newDog.name;

//   const td2 = document.createElement("td");
//   td2.textContent = newDog.color;

//   bodyRow.appendChild(td1);
//   bodyRow.appendChild(td2);

//   tBody.appendChild(bodyRow);
//   table.appendChild(tBody);
//   document.body.appendChild(table);

//   // Clear the inputs
//   input1El.value = "";
//   input2El.value = "";
// };

// btn.addEventListener("click", addDogFunction);

// Objects 2

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   setFirstName: function (setName) {
//     this.firstName = setName;
//   },
// };
// const person2 = {
//   firstName: "Jane",
//   lastName: "Doe",
//   setFirstName: function (setName) {
//     this.firstName = setName;
//   },
// };

// arr = [person1, person2];

// console.log(arr);

// // Object template = Function that allows us to create objects
// // (constructor function)
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   // this.setFirstName = function (name) {
//   //   this.firstName = name;
//   // };
// }

// Person.prototype.setFirstName = function (name) {
//   this.firstName = name;
// };

// // Instance
// const person = new Person("Joe", "Stevens");
// console.log(person);

// Exercise 1

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Exercise 2

// Cat.prototype.setName = function (name) {
//   this.name = name;
// };
// Cat.prototype.setColor = function (color) {
//   this.color = color;
// };

// Cat.prototype.sayNameAndColor = function () {
//   alert(`The cat name is ${this.name} and the color is ${this.color}`);
// };

// const cat1 = new Cat();
// const cat2 = new Cat();
// // const cat1 = new Cat("Tom", "Blue");
// cat1.setName("Tom");
// cat1.setColor("Blue");
// // const cat2 = new Cat("Brenda", "Black");
// cat2.setName("Brenda");
// cat2.setColor("Black");

// cat1.sayNameAndColor();
// cat2.sayNameAndColor();

// console.log(cat1, cat2);

// Exercise 3

// function Cake(flavor, price, occasion) {
//   this.flavor = flavor;
//   this.price = price;
//   this.occasion = occasion;
// }

// Cake.prototype.describe = function () {
//   console.log(
//     `The ${this.occasion} cake has a ${this.flavor} and costs ${this.price}`
//   );
// };

// const cake = new Cake("cherry", "$30", "Birthday");
// cake.describe();
// cake.occasion = "New Year";
// cake.describe();

// Exercise 4

// const array = [
//   {
//     title: "Lord Of The Rings",
//     uploader: "L J. R. R. Tolkien",
//     pages: 1077,
//   },
//   {
//     title: "Pride and Prejudice",
//     uploader: "Jane Austen",
//     pages: 480,
//   },
//   {
//     title: "The Great Gatsby",
//     uploader: "F. Scott Fitzgerald",
//     pages: 3408,
//   },
// ];

// const newArray = [];

// function OnlineBook(title, uploader, pages) {
//   this.title = title;
//   this.uploader = uploader;
//   this.pages = pages;
// }

// OnlineBook.prototype.read = function () {
//   console.log(
//     `You read all ${this.pages} of ${this.title} which is uploaded by ${this.uploader}`
//   );
// };

// const book1 = new OnlineBook("Otters Holding Hands", "Cynthia Holmes", 60);
// book1.read();

// array.forEach((book) => {
//   const onlineBook = new OnlineBook(book.title, book.uploader, book.pages);
//   onlineBook.read();
// });

// Destructing
// array.forEach(({ title, uploader, pages }) => {
//   const onlineBook = new OnlineBook(title, uploader, pages);
//   newArray.push(onlineBook);
// });

// console.log(newArray);

//
//

// Objects 3 - Classes

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;

//   this.getArea = function () {
//     console.log(this.width * this.height);
//   };
// }

// Rectangle.prototype.getArea = function () {
//   console.log(this.width * this.height);
// };

// const rec1 = new Rectangle(10, 5);

// rec1.getArea();

// With Classes

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }

// const rec1 = new Rectangle(100, 200);

// console.log(rec1);

// Exercise 1

// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   sayNameAndColor() {
//     alert(`The cat is called ${this.name} and it is ${this.color}`);
//   }

//   setName(newName) {
//     this.name = newName;
//   }
// }

// const cat1 = new Cat("Tom", "Blue");

// cat1.sayNameAndColor();
// cat1.setName("Thomas");
// cat1.sayNameAndColor();

// Exercise 2 - Editing fields / text

// let dogs = [];
// let nextId = 1;
// let editingIndex = -1;

// class Dog {
//   constructor(name, color, id) {
//     this.name = name;
//     this.color = color;
//     this.id = id;
//   }
// }

// const nameInput = document.querySelector("#nameInput");
// const colorInput = document.querySelector("#colorInput");
// const addDogBtn = document.querySelector("#addDogBtn");
// const dogList = document.querySelector("#dogList");

// function renderList() {
//   dogList.innerHTML = "";
//   dogs.forEach((dog, index) => {
//     const li = document.createElement("li");
//     li.textContent = `${dog.name} - ${dog.color}`;

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.style.marginLeft = "8px";

//     editBtn.addEventListener("click", () => {
//       nameInput.value = dog.name;
//       colorInput.value = dog.color;
//       editingIndex = index;
//       addDogBtn.textContent = "Save";
//     });

//     li.appendChild(editBtn);
//     dogList.appendChild(li);
//   });
// }

// function addOrSaveDog() {
//   const name = nameInput.value.trim();
//   const color = colorInput.value.trim();
//   if (!name || !color) {
//     console.log("Please enter both name and color!");
//     return;
//   }

//   if (editingIndex === -1) {
//     // ADD
//     dogs.push(new Dog(name, color, nextId));
//     nextId++;
//   } else {
//     // EDIT
//     dogs[editingIndex].name = name;
//     dogs[editingIndex].color = color;
//     editingIndex = -1;
//     addDogBtn.textContent = "Add dog";
//   }

//   nameInput.value = "";
//   colorInput.value = "";
//   renderList();
//   console.log(dogs);
// }

// addDogBtn.addEventListener("click", addOrSaveDog);

// Exercise 2 - Editing fields / text (second attempt)

// let dogs = [];
// let nextId = 1;
// let editingIndex = -1;

// class Dog {
//   constructor(name, color, id) {
//     this.name = name;
//     this.color = color;
//     this.id = id;
//   }
// }

// const nameInput = document.querySelector("#nameInput");
// const colorInput = document.querySelector("#colorInput");
// const addDogBtn = document.querySelector("#addDogBtn");
// const dogTable = document.querySelector("#dogTable");

// const renderDogs = function () {
//   dogTable.innerHTML = "";

//   dogs.forEach((dog, index) => {
//     let tableRow = document.createElement("tr");
//     let tdName = document.createElement("td");
//     tdName.textContent = dog.name;
//     tableRow.appendChild(tdName);
//     let tdColor = document.createElement("td");
//     tdColor.textContent = dog.color;
//     tableRow.appendChild(tdColor);

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";

//     editBtn.addEventListener("click", () => {
//       nameInput.value = dog.name;
//       colorInput.value = dog.color;
//       editingIndex = index;
//     });

//     tableRow.appendChild(editBtn);
//     dogTable.append(tableRow);
//   });

//   nameInput.value = "";
//   colorInput.value = "";
// };

// const addDog = () => {
//   const name = nameInput.value.trim();
//   const color = colorInput.value.trim();

//   if (!name && !color) {
//     alert("Input valid name & color");
//     return;
//   }

//   if (editingIndex === -1) {
//     dogs.push(new Dog(name, color, nextId));
//     nextId++;
//   } else {
//     // EDIT
//     dogs[editingIndex].name = name;
//     dogs[editingIndex].color = color;
//     editingIndex = -1;
//     addDogBtn.textContent = "Save";
//   }

//   renderDogs();
// };

// addDogBtn.addEventListener("click", addDog);

// Chat example 1
// Understanding Prototype
// Create an object, then add a new property to its prototype. Try accessing the property from the object.

// function Person(firstName, secondName) {
//   this.firstName = firstName;
//   this.secondName = secondName;
// }

// Person.prototype.addNames = function (firstName, secondName) {
//   console.log(firstName, secondName);
// };

// const person1 = new Person("Darko", "Rashkov");

// person1.addNames();

// console.log(person1);

// Rewrite with class

// class Person {
//   constructor(firstName, secondName) {
//     this.firstName = firstName;
//     this.secondName = secondName;
//   }

//   getArea() {
//     console.log(this.firstName, this.secondName);
//   }
// }

// const person2 = new Person("Monika", "Cenova");
// person2.getArea();

// console.log(person2);

// Chat example 2
// Prototype Chain
// Make a simple prototype chain: Create three constructor functions (e.g., Grandparent, Parent, Child).
// Set up inheritance so Child inherits from Parent, which inherits from Grandparent.
// Check which properties are accessible from an instance of Child.

// Chat example 3
// Overriding Prototype Properties
// Make a constructor with a property defined on the prototype.
// Then, create an instance and override that property directly on the object.
// What happens when you access the property?

// Chat example 4
// Prototype Method
// Add a method to a constructor’s prototype. Call it from an instance.

// Chat example 5
// Constructor Property
// Examine what constructor an object's constructor property refers to.

// Chat example 6
// Instanceof Check
// Use the instanceof operator to check if an object is an instance of a specific constructor.

// Chat example 7
// Extending Built-in Objects
// Add a new method to a built-in object prototype (like Array or String). Use it from an instance.

// Chat example 8
// Prototype Inheritance
// Create two constructor functions. Set up the second to inherit from the first one's prototype. Check if inherited methods work.

// Chat example 9
// Adding to Prototype inside Constructor
// (Advanced) Add a method to an object’s prototype inside its constructor function.
// Is this good practice? Why or why not?

// Chat example 10
// Determine Prototype Chain Length
// Write a function that counts how many steps it takes from an instance to reach
// Object.prototype in the prototype chain.

//
//

// Objects 4

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayName = function () {
//   alert(this.name);
// };

// function Doctor(name, experience) {
//   Person.call(this, name);

//   this.experience = experience;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.constructor = Doctor;

// function Parent(name, noOfKids) {
//   Person.call(this, name);

//   this.noOfKids = noOfKids;
// }

// Parent.prototype = Object.create(Person.prototype);
// Parent.prototype.constructor = Parent;

// const per1 = new Doctor("James", 30);
// const per2 = new Parent("John", 2);

// console.log(per1.sayName());
// console.log(per2.sayName());

// Super class

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     console.log(this.name);
//   }
// }

// class Doctor extends Person {
//   constructor(name, experience) {
//     // Super calls the Person's constructor (inherited class)
//     super(name);
//     this.experience = experience;
//   }
// }

// class Parent extends Person {
//   constructor(name, noOfKids) {
//     // Super calls the Person's constructor (inherited class)
//     super(name);
//     this.noOfKids = noOfKids;
//   }
// }

// const newDoctor = new Doctor("Harry", 35);
// const newParent = new Parent("John", 2);

// console.log(newDoctor);
// console.log(newParent);

// Exercise 1

// Class

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// const newPerson = new Person("Harry", "Dresden");

// console.log(newPerson);

// Function

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const newPerson = new Person("Harry", "Dresden");

// console.log(newPerson);

// Exercise 2
// 1. After instantiating a person, add a new method to the Person object prototype: sayFullName, which
// simply alert the first and last name of a person instance.
// 2. Invoke the new method on the existing instance.

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.sayFullName = function () {
//   alert(`${this.firstName} ${this.lastName}`);
// };

// const person = new Person("Darko", "Rashkov");
// person.sayFullName();

// console.log(person);

// Exercise 3
// 1. Create a new object prototype called Programmer. In addition to receiving firstName and lastName
// as input arguments, it should also receive a favoriteLanguage argument.
// 2. It also should inherit the prototype from the Person object prototype - that means, it should have a
// sayFullName method without it explicitly being defined in the Programmer object prototype (see
// slide 12 for a hint).
// 3. Add a new method to the Programmer object prototype: sayFavoriteLanguage, which should alert
// their favoriteLanguage.
// 4. Create a new Programmer, and call the sayFullName and sayFavoriteLanguage methods.

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.sayFullName = function () {
//   alert(`${this.firstName} ${this.lastName}`);
// };

// const person = new Person("John", "Doe");
// person.sayFullName();

// console.log(person);

// function Programmer(firstName, lastName, favoriteLanguage) {
//   Person.call(this, firstName, lastName);

//   this.favoriteLanguage = favoriteLanguage;
// }

// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.constructor = Programmer;

// Programmer.prototype.sayFavoriteLanguage = function () {
//   console.log(`Favorite language is:`, this.favoriteLanguage);
// };

// const programmer = new Programmer("Darko", "Rashkov", "JavaScript");
// programmer.sayFullName();
// programmer.sayFavoriteLanguage();

// Exercise 4
// Rewrite exercise III using classes. Same rules, same inheritance, but use classes instead of object prototypes.

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   sayFullName() {
//     console.log(`Programmer's name is:`, this.firstName, this.lastName);
//   }
// }

// class Programmer extends Person {
//   constructor(firstName, lastName, favoriteLanguage) {
//     super(firstName, lastName);
//     this.favoriteLanguage = favoriteLanguage;
//   }
//   sayFavoriteLanguage() {
//     console.log(
//       `${this.firstName} ${this.lastName}'s favorite language is ${this.favoriteLanguage}`
//     );
//   }
// }

// const programmer = new Programmer("Darko", "Rashkov", "JavaScript");
// programmer.sayFullName();
// programmer.sayFavoriteLanguage();

// console.log(programmer);

// Exercise 5
// Let’s rewrite the code from the previous lecture and homework (the dog and cat one):
// 1. Create an empty array called “dogs”.
// 2. Define an Animal class (or object prototype), which has a name and color property.
// 3. Make a Dog class (or object prototype) that extends the Animal class.
// 4. (In html) create two input fields (with different ids) and a button that says “Add dog”.
// 5. Create a function which:
// a. Gets the values from the two input fields
// b. Creates a new “dog” instance using the first value as name and the second as color.
// c. Adds the newly created dog object to the array.
// d. Adds the newly created dog in an HTML table.
// e. Logs in the console the whole “dogs” array
// 6. Invoke the function when the button gets clicked (using “click” with addEventListener)
// 7. The dog class should also have an extra property called animalType, which equals to 'dog'.
// 8. Whenever a new animal is entered, clear the value from the inputs.

// let dogs = [];
// let nextId = 1;
// let editingIndex = -1;

// class Animal {
//   constructor(name, color, id) {
//     this.name = name;
//     this.color = color;
//     this.id = id;
//   }
// }

// class Dog extends Animal {
//   constructor(name, color, id) {
//     super(name, color, id);
//     this.animalType = "dog";
//   }
// }

// const nameInput = document.querySelector("#nameInput");
// const colorInput = document.querySelector("#colorInput");
// const addDogBtn = document.querySelector("#addDogBtn");
// const dogList = document.querySelector("#dogList");

// function renderList() {
//   dogList.innerHTML = "";
//   dogs.forEach((dog, index) => {
//     const li = document.createElement("li");
//     li.textContent = `${dog.name} - ${dog.color}`;

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.style.marginLeft = "8px";

//     editBtn.addEventListener("click", () => {
//       nameInput.value = dog.name;
//       colorInput.value = dog.color;
//       editingIndex = index;
//       addDogBtn.textContent = "Save";
//     });

//     li.appendChild(editBtn);
//     dogList.appendChild(li);
//   });
// }

// function addOrSaveDog() {
//   const name = nameInput.value.trim();
//   const color = colorInput.value.trim();
//   if (!name || !color) {
//     console.log("Please enter both name and color!");
//     return;
//   }

//   if (editingIndex === -1) {
//     // ADD
//     dogs.push(new Dog(name, color, nextId));
//     nextId++;
//   } else {
//     // EDIT
//     dogs[editingIndex].name = name;
//     dogs[editingIndex].color = color;
//     editingIndex = -1;
//     addDogBtn.textContent = "Add dog";
//   }

//   nameInput.value = "";
//   colorInput.value = "";
//   renderList();
//   console.log(dogs);
// }

// addDogBtn.addEventListener("click", addOrSaveDog);

// Exercise 6
// Extend the previous exercise:
// 1. Define an extra animal type (Cat, Bird...) which extends Animal. Just like Dog, it should also have an
// animalType property which has the value of 'cat' or 'bird', as appropriate.
// 2. Add a dropdown next to the text inputs which contains all of the possible animal types. (also in the
// homework, so if you did it, use that)
// 7 3. When a new animal is created (Dog, Bird, Cat...) create an instance of the appropriate type.

let animals = [];
let nextId = 1;
let editingIndex = -1;

class Animal {
  constructor(name, color, id) {
    this.name = name;
    this.color = color;
    this.id = id;
  }
}

class Dog extends Animal {
  constructor(name, color, id) {
    super(name, color, id);
    this.animalType = "dog";
  }
}
class Cat extends Animal {
  constructor(name, color, id) {
    super(name, color, id);
    this.animalType = "cat";
  }
}
class Bird extends Animal {
  constructor(name, color, id) {
    super(name, color, id);
    this.animalType = "bird";
  }
}

const nameInput = document.querySelector("#nameInput");
const colorInput = document.querySelector("#colorInput");
const typeSelect = document.querySelector("#typeSelect");
const addAnimalBtn = document.querySelector("#addAnimalBtn"); // FIXED ID
const animalList = document.querySelector("#animalList");

function renderList() {
  animalList.innerHTML = "";
  animals.forEach((animal, index) => {
    const li = document.createElement("li");
    li.textContent = `${animal.name} - ${animal.color} (${animal.animalType})`;

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "8px";

    editBtn.addEventListener("click", () => {
      nameInput.value = animal.name;
      colorInput.value = animal.color;
      typeSelect.value = animal.animalType;
      editingIndex = index;
      addAnimalBtn.textContent = "Save";
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "8px";
    deleteBtn.addEventListener("click", () => {
      animals.splice(index, 1);
      renderList();
    });

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    animalList.appendChild(li);
  });
}

function addOrSaveAnimal() {
  const name = nameInput.value.trim();
  const color = colorInput.value.trim();
  const type = typeSelect.value;

  if (!name || !color || !type) {
    console.log("Please fill all fields!");
    return;
  }

  if (editingIndex === -1) {
    // ADD new animal
    let newAnimal;
    if (type === "dog") newAnimal = new Dog(name, color, nextId);
    else if (type === "cat") newAnimal = new Cat(name, color, nextId);
    else if (type === "bird") newAnimal = new Bird(name, color, nextId);

    animals.push(newAnimal);
    nextId++;
  } else {
    // EDIT existing animal
    animals[editingIndex].name = name;
    animals[editingIndex].color = color;
    animals[editingIndex].animalType = type;
    editingIndex = -1;
    addAnimalBtn.textContent = "Add animal"; // restore default text
  }

  // Reset form
  nameInput.value = "";
  colorInput.value = "";
  typeSelect.value = "";
  renderList();
  console.log(animals);
}

addAnimalBtn.addEventListener("click", addOrSaveAnimal);
