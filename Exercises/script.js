// Exercise 1
// const sentence = prompt("Enter a sentence:");

// const isPangram = (text) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   const normalizedText = text.toLowerCase().replace(/[^a-z]/g, "");

//   for (let letter of alphabet) {
//     if (!normalizedText.includes(letter)) {
//       return false;
//     }
//   }

//   return true;
// };

// if (isPangram(sentence)) {
//   console.log("This sentence is a pangram");
// } else {
//   console.log("This sentence is not a pangram");
// }

// Exercise 2
// let arr = [
//   30,
//   "text1",
//   10,
//   50,
//   "text2",
//   60,
//   70,
//   33,
//   45,
//   67,
//   "text3",
//   13,
//   34,
//   "text",
// ];

// // Using loop
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "number") {
//     arr[i] = "NaN";
//   }
// }

// console.log(arr);

// // Using forEach
// arr.forEach((item, index) => {
//   if (typeof item !== "number") {
//     arr[index] = "NaN";
//   }
// });

// console.log(arr);

// // Using map
// const newArr = arr.map((item) => (typeof item === "number" ? item : "NaN"));

// console.log(newArr);

// Exercise 3

// Person template
class Person {
  constructor(name, profession, age) {
    this.name = name;
    this.profession = profession;
    this.age = age;
  }

  isChild() {
    return this.age < 19;
  }
}

// Male

class Male extends Person {
  constructor(name, profession, age) {
    super(name, profession, age);
    this.gender = "male";
  }

  draw() {
    const li = document.createElement("li");
    li.textContent = this.name;
    li.style.color = "blue";
    return li;
  }
}

// Female

class Female extends Person {
  constructor(name, profession, age) {
    super(name, profession, age);
    this.gender = "female";
  }

  draw() {
    const li = document.createElement("li");
    li.textContent = this.name;
    li.style.color = "red";
    return li;
  }
}

// Given arrays
const arr1 = [
  { name: "John", profession: "Developer", gender: "male", age: 25 },
  { name: "Anna", profession: "Designer", gender: "female", age: 17 },
];

const arr2 = [
  { name: "Mark", profession: "Student", gender: "male", age: 16 },
  { name: "Sara", profession: "Doctor", gender: "female", age: 30 },
];

// Create People instances
const people = [...arr1, ...arr2].map((person) => {
  const { name, profession, gender, age } = person;

  if (gender === "male") {
    return new Male(name, profession, age);
  } else {
    return new Female(name, profession, age);
  }
});

// Sort alphabetically by name
people.sort((a, b) => a.name.localeCompare(b.name));

// Draw all people
const ul = document.getElementById("peopleList");

const renderPeople = (arr) => {
  ul.innerHTML = "";
  arr.forEach((person) => {
    ul.appendChild(person.draw());
  });
};

renderPeople(people);

// Search/filter
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = people.filter((p) => p.name.toLowerCase().includes(query));
  renderPeople(filtered);
});

// Navigation
const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutPage");
const contactPage = document.getElementById("contactPage");

const navButtons = document.querySelectorAll("nav button");

const showPage = (pageId) => {
  // Hide all pages
  homePage.style.display = "none";
  aboutPage.style.display = "none";
  contactPage.style.display = "none";

  // Remove active class from all buttons
  navButtons.forEach((btn) => btn.classList.remove("active"));

  // Show selected page
  if (pageId === "home") {
    homePage.style.display = "block";
    document.getElementById("homeBtn").classList.add("active");
  } else if (pageId === "about") {
    aboutPage.style.display = "block";
    document.getElementById("aboutBtn").classList.add("active");
  } else if (pageId === "contact") {
    contactPage.style.display = "block";
    document.getElementById("contactBtn").classList.add("active");
  }
};

document
  .getElementById("homeBtn")
  .addEventListener("click", () => showPage("home"));
document
  .getElementById("aboutBtn")
  .addEventListener("click", () => showPage("about"));
document
  .getElementById("contactBtn")
  .addEventListener("click", () => showPage("contact"));

// Count children
const childrenCount = people.filter((person) => person.isChild()).length;

console.log("Children count:", childrenCount);
