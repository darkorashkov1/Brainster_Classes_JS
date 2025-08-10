const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const bioInput = document.querySelector("#bio");

const profileDisplay = document.querySelector("#profileDisplay");
const submitBtn = document.querySelector("#submit");

const showCardFunction = () => {
  const profile = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    bio: bioInput.value.trim(),
  };

  profileDisplay.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">${profile.name}</h3>
        <p class="card-text">Email: ${profile.email}</p>
        <p class="card-text">Bio: ${profile.bio}</p>
      </div>
    </div>
  `;

  nameInput.value = "";
  emailInput.value = "";
  bioInput.value = "";
};

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // stops page reload
  showCardFunction();
});
