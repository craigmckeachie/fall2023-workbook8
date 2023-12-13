// Function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Cannot divide by zero";
  }
}

// Function to calculate based on user input
function calculate() {
  // Get user input
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;

  // Perform calculation based on the selected operation
  let result;
  switch (operation) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operation";
  }

  // Display the result on the webpage
  document.getElementById("result").textContent = result;
}
