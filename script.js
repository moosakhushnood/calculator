// Get the input field
var input = document.getElementById("input");

// Function to add a character to the input field
function addToInput(value) {
  input.value += value;
}

// Function to clear the input field
function clearInput() {
  input.value = "";
}

// Function to calculate the result
function calculate() {
  // Evaluate the expression in the input field
  var result = eval(input.value);
  // Set the value of the input field to the result
  input.value = result;
}
