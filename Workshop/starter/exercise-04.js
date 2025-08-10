// Solution 1
// document.addEventListener("keydown", function (event) {
//   const keyLog = `Key Pressed: ${event.key} (Keycode: ${event.keyCode})`;
//   document.getElementById("log").textContent = keyLog;
// });

//
//

// Solution 2

const keyLog = document.querySelector("#key");

document.addEventListener("keydown", (event) => {
  const keyDown = `Key pressed ${event.key}, keycode ${event.code}`;
  keyLog.textContent = keyDown;
});
