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
