// Function to change the background color based on the value in the text input
function changeBackgroundColor() {
  const color = document.getElementById('textInput').value; // grab value from input
  document.body.style.backgroundColor = color;
}

// Function to reset the background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''; // Reset to default color
}

// Function to log the key pressed by the user
function displayKeyPress(event) {
  console.log(`Key pressed: ${event.key}`); // Display the pressed key
}

// Function to display user input in real-time
function displayUserInput(event) {
  console.log(`User input: ${event.target.value}`); // Log the user input
}

// Attach event listeners
function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  document.addEventListener('keydown', displayKeyPress);

  document.getElementById('textInput').addEventListener('input', displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}