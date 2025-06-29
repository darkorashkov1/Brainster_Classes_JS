// Exercise 1
// const userInput = document.querySelector("#user");
// const passwordInput = document.querySelector("#password");

// const userHelp = document.querySelector("#userP");
// const passwordHelp = document.querySelector("#passwordP");

// userValue = userInput.value;
// passwordValue = passwordInput.value;

// const onFocusUser = () => {
//   userInput.style.backgroundColor = "lightGray";
//   userHelp.style.display = "block";
// };
// const onFocusPassword = () => {
//   passwordInput.style.backgroundColor = "lightGray";
//   passwordHelp.style.display = "block";
// };

// const onBlurUser = () => {
//   userInput.style.backgroundColor = "";
//   userHelp.style.display = "none";
// };
// const onBlurPassword = () => {
//   passwordInput.style.backgroundColor = "";
//   passwordHelp.style.display = "none";
// };

// userInput.addEventListener("focus", onFocusUser);
// userInput.addEventListener("blur", onBlurUser);

// passwordInput.addEventListener("focus", onFocusPassword);
// passwordInput.addEventListener("blur", onBlurPassword);

// Exercise 2

// const divCoords = document.querySelector("#coords");
// console.log(window);

// window.addEventListener("scroll", () => {
//   divCoords.innerHTML = `${window.scrollY}; ${window.scrollX}`;
// });

// Exercise 3

// const boxOne = document.querySelector("#boxOne");
// const boxTwo = document.querySelector("#boxTwo");

// boxOne.addEventListener("mouseover", () => {
//   // Make both boxes opaque
//   boxOne.style.opacity = "1";
//   boxTwo.style.opacity = "1";

//   // Grow boxOne
//   boxOne.style.width = "100px";
//   boxOne.style.height = "100px";

//   // Shrink boxTwo
//   boxTwo.style.width = "30px";
//   boxTwo.style.height = "30px";
// });

// boxOne.addEventListener("mouseout", () => {
//   // Reset opacity
//   boxOne.style.opacity = "0.6";
//   boxTwo.style.opacity = "0.6";

//   // Reset sizes
//   boxOne.style.width = "50px";
//   boxOne.style.height = "50px";

//   boxTwo.style.width = "50px";
//   boxTwo.style.height = "50px";
// });

// Exercise 4
const btn = document.querySelector("#btn");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

const changeColor = () => {
  div1.style.backgroundColor = "red";
};

btn.addEventListener("click", changeColor);

const rotateMouseOver = () => {
  div2.innerHTML = "Move out the mouse to send me back";
  div2.style.transform = "rotate(-180deg)";
};
const rotateMouseOut = () => {
  div2.style.transform = "rotate(180deg)";
};

div2.addEventListener("mouseover", rotateMouseOver);
div2.addEventListener("mouseout", rotateMouseOut);
