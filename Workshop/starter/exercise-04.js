document.addEventListener("keydown", function (event) {
  const keyLog = `Key Pressed: ${event.key} (Keycode: ${event.keyCode})`;
  document.getElementById("log").textContent = keyLog;
});
