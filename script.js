// ===============================
// Step 4.1: Access DOM Elements
// ===============================
const clickBtn = document.getElementById("clickBtn");
const textInput = document.getElementById("textInput");
const dropdown = document.getElementById("dropdown");
const form = document.getElementById("myForm");
const formInput = document.getElementById("formInput");
const keyDisplay = document.getElementById("keyDisplay");
const hoverBox = document.getElementById("hoverBox");
const output = document.getElementById("output");

// ===============================
// Step 4.2: Click Event
// ===============================
clickBtn.addEventListener("click", () => {
  output.textContent = "Button clicked!";
});

// ===============================
// Step 4.3: Input Event
// ===============================
textInput.addEventListener("input", (e) => {
  output.textContent = `Typing: ${e.target.value}`;
});

// Change Event
dropdown.addEventListener("change", (e) => {
  output.textContent = `Selected: ${e.target.value}`;
});

// ===============================
// Step 4.4: Submit Event
// ===============================
form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.textContent = `Form submitted: ${formInput.value}`;
});

// ===============================
// Step 4.5: Keyup Event
// ===============================
document.addEventListener("keyup", (e) => {
  keyDisplay.textContent = e.key;
});

// ===============================
// Step 4.6: Mouse Events
// ===============================
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.background = "lightgreen";
  hoverBox.textContent = "Mouse inside!";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "lightgray";
  hoverBox.textContent = "Hover over me";
});

// ===============================
// Step 4.7: Focus and Blur Events
// ===============================
formInput.addEventListener("focus", () => {
  formInput.style.border = "2px solid blue";
});

formInput.addEventListener("blur", () => {
  formInput.style.border = "1px solid #ccc";
});