// EVENTS 1

// const btn = document.querySelector("button");

// const handleClick = () => {
//   console.log("Hello World!");
// };

// btn.addEventListener("click", handleClick);

// const div = document.querySelector("div");

// const handleDiv = () => {
//   div.innerHTML = "Buenas!";
// };
// const handleDivOut = () => {
//   div.innerHTML = "Hello!";
// };

// div.addEventListener("mouseover", handleDiv);
// div.addEventListener("mouseout", handleDivOut);

// const onSubmit = () => {
//   alert("Thank you!");
// };

// click events

// const btn = document.querySelector("button");
// btn.addEventListener("click", onSubmit);

// const div = document.querySelector(".form");

// mouse events

// btn.addEventListener("mouseover", () => {
//   btn.classList.toggle("hover");
// });
// btn.addEventListener("mouseout", () => {
//   btn.classList.toggle("hover");
// });

// keyboard events

// const input = document.querySelector("input");

// input.addEventListener("keydown", () => {
//   console.log("Key down!");
// });
// input.addEventListener("keyup", () => {
//   console.log("Key released!");
// });
// input.addEventListener("keypress", () => {
//   console.log("Key pressed!");
// });

// const input = document.querySelector("input");
// const errorMsg = document.querySelector(".errorMsg");

// input.addEventListener("keyup", () => {
//   // console.log(`KEY UP`, input.value);
//   const inputValue = input.value;

//   if (inputValue.length > 4) {
//     errorMsg.style.display = !inputValue.includes("@") ? "block" : "none";
//     // if (!inputValue.includes("@")) {
//     //   errorMsg.style.display = "block";
//     // } else {
//     //   errorMsg.style.display = "none";
//     // }
//   }
// });

// Exercise
// 1. Add two more divs with a class of “row” to the document.
// 2. In the first one, add a label with the text “Name” and an input tag next to the label.
// 3. In the second one, add a label with the text “About me” and a textarea next to the label.
// 4. Define two empty variables: name and aboutMe.
// 5. Define a function called onNameChange which should simply rewrite the name variable with the
// value from the input field.
// 6. Define a function called onAboutChange which should rewrite the aboutMe variable with the
// value from the textarea.
// 7. Add a “keyup” event listener to both the input and the textarea, triggering onNameChange for
// the input and onAboutChange for the textarea.

// let name = "";
// let aboutMe = "";

// const nameInput = document.querySelector("#name");
// const aboutMeInput = document.querySelector("#about");

// const onNameChange = () => {
//   name = nameInput.value;
//   console.log(name);
// };
// const onAboutChange = () => {
//   aboutMe = aboutMeInput.value;
//   console.log(aboutMe);
// };

// nameInput.addEventListener("keyup", onNameChange);
// aboutMeInput.addEventListener("keyup", onAboutChange);

// EVENTS 2

// Window events

// Load
// const onLoad = () => {
//   console.log("Script loaded");
// };
// const onUnload = () => {
//   console.log("Script unloaded");
// };

// window.addEventListener("load", onLoad);

// const inputName = document.querySelector("name");
// console.log(inputName);

// Unload

// window.addEventListener("unload", onUnload);

// Before unload

// const beforeUnload = (event) => {
//   return (event.returnValue = "Are you sure you want to leave this page?");
// };

// window.addEventListener("beforeunload", beforeUnload);

// Resize

// window.addEventListener("resize", () => {
//   console.log("width", window.innerWidth);
//   console.log("height", window.innerHeight);
// });

// Scroll

// const onScroll = () => {
//   console.log("height", window.scrollY);

//   if (window.scrollY > 1000) {
//     document.body.style.backgroundColor = "pink";
//   } else {
//     document.body.style.backgroundColor = "lightGreen";
//   }
// };

// window.addEventListener("scroll", onScroll);

// console.log(window);

// console.log(window.scrollY);

// Hashchange

// window.addEventListener("hashchange", () => {
//   console.log("Hash changed", location.hash);
// });

// Local storage

// const firstName = localStorage.getItem("name");
// const lastName = localStorage.setItem("lastName", "Malkovich");

// localStorage.removeItem("name", "John");

// console.log(firstName);

// Exercise

// let name = "";
// let aboutMe = "";

// const nameInput = document.querySelector("#name");
// const aboutMeInput = document.querySelector("#about");
// const btn = document.querySelector("button");

// const onNameChange = () => {
//   name = nameInput.value;
//   console.log(name);
// };
// const onAboutChange = () => {
//   aboutMe = aboutMeInput.value;
//   console.log(aboutMe);
// };

// const onSubmit = () => {
//   if (nameInput.value) {
//     localStorage.setItem("name", nameInput.value);
//   }
//   if (aboutMeInput.value) {
//     localStorage.setItem("about", aboutMeInput.value);
//   }
//   alert("Thank you!");
// };

// btn.addEventListener("click", onSubmit);

// const onLoad = () => {
//   const name = localStorage.getItem("name");
//   // const about = localStorage.aboutMe("about");
//   if (name) {
//     console.log(name);
//   }

//   if (about) {
//     console.log(about);
//   }
// };

// window.addEventListener("load", onLoad);

// Exercise 3

// const beforeUnload = (event) => {
//   return (event.returnValue = "Are you sure you want to leave?");
// };

// window.addEventListener("beforeunload", beforeUnload);

// const arr = [1, 2, 3];

// JSON converts array to string
// cannot add a real array to local storage
// localStorage.setItem("arr", JSON.stringify(arr));

// get array

// const stringArray = localStorage.getItem("arr");

// const realArr = JSON.parse(stringArray);

// console.log(realArr);

// checkbox - change

// const btn = document.querySelector("button");

// const checkbox = document.querySelector("#agree-terms");

// checkbox.addEventListener("change", () => {
//   // console.log("checkbox changed");
// });

// Select

// const select = document.querySelector("#select-color");

// const handleChange = () => {
//   console.log(select.value);
// };

// select.addEventListener("change", handleChange);

// Exercise 4

// let profession = "";
// const selectBox = document.querySelector("#select-box");

// const onProfessionChange = () => {
//   profession = selectBox.value;
//   console.log(profession);
// };

// selectBox.addEventListener("change", onProfessionChange);

// OnBlur & onFocus
// Exercise 5
// 1. Define two new function onBlur & onFocus and attach the two functions on ‘blur’ and ‘focus’
// events on the input.
// 2. Inside the onFocus function:
// a) Add a background-color of lightgrey on the element.
// 3. Inside the onBlur function:
// a) Remove the background-color of the element (make it white).
// b) Check if the element is empty, and if it is, give it a red border color to signal that it misses some data.
// c) Check if the element has some value, and if it has, give it a green border color to signal that it is
// complete.

const email = document.querySelector("#email");
const span = document.querySelector("span");

window.addEventListener("load", () => {
  span.style.display = "none";
});

const onBlur = () => {
  email.classList.remove("emailColor");
  const emailValue = email.value;

  if (emailValue && emailValue.includes("@")) {
    email.style.border = "2px, solid, green";
  } else {
    email.style.border = "2px, solid, red";
    span.style.display = "block";
  }
};

const onFocus = () => {
  email.classList.add("emailColor");
  email.style.border = "";
  span.style.display = "none";
};

email.addEventListener("focus", onFocus);
email.addEventListener("blur", onBlur);
