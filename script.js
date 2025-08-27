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
