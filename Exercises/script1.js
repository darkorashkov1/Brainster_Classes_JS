const maleArr = [
  { name: "Stefan", age: 31, profession: "Accountant" },
  { name: "Ivan", age: 10, profession: "Architect" },
  { name: "Darko", age: 36, profession: "Software Developer" },
  { name: "Martin", age: 21, profession: "Nurse" },
  { name: "David", age: 28, profession: "Graphic Designer" },
  { name: "Adrian", age: 38, profession: "Mechanical Engineer" },
  { name: "Leon", age: 35, profession: "Teacher" },
];

const femaleArr = [
  { name: "Iris", age: 31, profession: "Accountant" },
  { name: "Anja", age: 27, profession: "Architect" },
  { name: "Zorica", age: 36, profession: "Nurse" },
  { name: "Dragana", age: 21, profession: "Architect" },
];

const people = [];

const list = document.getElementById("list");
const searchInput = document.getElementById("search");
const filterProfession = document.getElementById("filterProfession");

class Person {
  constructor(name, profession, age, gender) {
    this.name = name;
    this.profession = profession;
    this.age = age;
  }

  draw() {
    const li = document.createElement("li");
    li.textContent = `${this.name} | ${this.profession}`;
    li.style.color = this.gender === "male" ? "navy" : "tomato";
    li.classList.add("list-group-item");
    return li;
  }
}

class Female extends Person {
  constructor(name, profession, age) {
    super(name, profession, age);
    this.gender = "female";
  }
}

class Male extends Person {
  constructor(name, profession, age) {
    super(name, profession, age);
    this.gender = "male";
  }
}

// const addPeople = (peopleArr, gender) => {
//   peopleArr.forEach(
//     people.push(
//       gender === "male"
//         ? new Male(person.name, person.profession, person.age)
//         : new Female(person.name, person.profession, person.age),
//     ),
//   );
// };

maleArr.forEach((person) =>
  people.push(new Male(person.name, person.profession, person.age)),
);
femaleArr.forEach((person) =>
  people.push(new Female(person.name, person.profession, person.age)),
);

// console.log(people);
let numberOfChildren = 0;

let lastProfessionQuery = "All";

const renderPerson = (person) => {
  // console.log(person);
  const li = person.draw();
  list.append(li);
};

// const populateProfessions = () => {
//   const allProfessions = Array.from(
//     new Set(people.map((person) => person.profession)),
//   );

//   allProfessions.unshift("All");

//   allProfessions.forEach((profession) => {
//     const option = document.createElement("option");
//     option.value = profession;
//     option.innerText = profession;
//     filterProfession.append(option);
//   });
// };

const updateList = () => {
  list.innerHTML = "";

  const searchQuery = searchInput.value.toLowerCase();

  const filteredArray = people.filter((person) => {
    const matchesName = person.name.toLowerCase().includes(searchQuery);

    const matchesProfession =
      lastProfessionQuery === "All" ||
      person.profession === lastProfessionQuery;

    return matchesName && matchesProfession;
  });

  filteredArray
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((person) => {
      if (person.age < 19) {
        numberOfChildren++;
      }
      renderPerson(person);
    });
};

// Map returning all, even duplicates
// const allProfessions = people.map((person) => person.profession);

// Set to return uniques only
const allProfessions = Array.from(
  new Set(people.map((person) => person.profession)),
);

allProfessions.unshift("All");

allProfessions.forEach((profession) => {
  const option = document.createElement("option");
  option.value = profession;
  option.innerText = profession;
  filterProfession.append(option);
});

const handleFilterChange = () => {
  // const query = filterProfession.value;
  lastProfessionQuery = filterProfession.value;
  updateList();

  // const filtered =
  //   query === "Every"
  //     ? people
  //     : people.filter((person) => person.profession === query);

  // list.innerHTML = "";

  // filtered.forEach((person) => renderPerson(person));
};

// people
//   .sort((a, b) => a.name.localeCompare(b.name))
//   .forEach((person) => renderPerson(person));

const handleSearch = () => {
  updateList();
};

searchInput.addEventListener("input", handleSearch);
filterProfession.addEventListener("change", handleFilterChange);

updateList();

// Routing
const homePage = document.getElementById("home");
const aboutPage = document.getElementById("about");
const contactPage = document.getElementById("contact");

function handleRouting() {
  const hash = window.location.hash;

  homePage.style.display = "none";
  aboutPage.style.display = "none";
  contactPage.style.display = "none";

  if (hash === "#home") {
    homePage.style.display = "block";
  } else if (hash === "#about") {
    aboutPage.style.display = "block";
  } else if (hash === "#contact") {
    contactPage.style.display = "block";
  }
}

window.addEventListener("hashchange", handleRouting);
handleRouting();
