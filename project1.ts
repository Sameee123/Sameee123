var promptSync =require('prompt-sync');
var myPrompt =promptSync();

// Function to perform addition
function add(a: number, b: number): number {
  return a + b;
}

// Function to perform subtraction
function subtract(a: number, b: number): number {
  return a - b;
}

// Function to perform multiplication
function multiply(a: number, b: number): number {
  return a * b;
}

// Function to perform division
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

// Main function to execute the calculator
function main() {
  console.log("Simple Calculator");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");

  const choice = parseInt(myPrompt("Enter your choice (1-4): "), 10);

  if (isNaN(choice) || choice < 1 || choice > 4) {
    console.log("Invalid choice. Please select a valid option (1-4).");
    return;
  }

  const num1 = parseFloat(myPrompt("Enter the first number: "));
  const num2 = parseFloat(myPrompt("Enter the second number: "));

  let resultValue: number;

  switch (choice) {
    case 1:
      resultValue = add(num1, num2);
      break;
    case 2:
      resultValue = subtract(num1, num2);
      break;
    case 3:
      resultValue = multiply(num1, num2);
      break;
    case 4:
      resultValue = divide(num1, num2);
      break;
    default:
      console.log("Invalid choice. Please select a valid option (1-4).");
      return;
  }

  console.log(`Result: ${resultValue}`);
}

// Call the main function to start the calculator
main();