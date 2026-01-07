// Solution 1
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const bioInput = document.querySelector("#bio");

// const profileDisplay = document.querySelector("#profileDisplay");
// const submitBtn = document.querySelector("#submit");

// const showCardFunction = () => {
//   const profile = {
//     name: nameInput.value.trim(),
//     email: emailInput.value.trim(),
//     bio: bioInput.value.trim(),
//   };

//   profileDisplay.innerHTML = `
//     <div class="card">
//       <div class="card-body">
//         <h3 class="card-title">${profile.name}</h3>
//         <p class="card-text">Email: ${profile.email}</p>
//         <p class="card-text">Bio: ${profile.bio}</p>
//       </div>
//     </div>
//   `;

//   nameInput.value = "";
//   emailInput.value = "";
//   bioInput.value = "";
// };

// submitBtn.addEventListener("click", (event) => {
//   event.preventDefault(); // stops page reload
//   showCardFunction();
// });

//
//

// Solution 2

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const bioInput = document.querySelector("#bio");

const profileDisplay = document.querySelector("#profileDisplay");
const form = document.querySelector("#userForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newObject = {
    name: e.target[0].value.trim(),
    email: e.target[1].value.trim(),
    bio: e.target[2].value,
  };

  profileDisplay.innerHTML += `

  <div class="card">
    <div class="card-body">
      <h3 class="card-title">${newObject.name}</h3>
      <p class="card-text">Email: ${newObject.email}</p>
      <p class="card-text">Bio: ${newObject.bio}</p>
    </div>
  </div>

  `;

  // nameInput.value = "";
  // emailInput.value = "";
  // bioInput.value = "";

  // or

  e.target.reset();

  console.log(newObject);
});
