const readline = require('readline-sync');

// Functions

// Creates an Arrow Prompt before each Message Display
function prompt(message) {
  console.log(`=> ${message}`);
}

// Valid Number Error Checking
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
  // number.trimStart() -> removes any leading spaces
  // when we check number.trimStart() for exact equality with ''
  // we check to see if the string is empty or not
}

// Operation Checking
function invalidOperation(operation) {
  valid = ['1', '2', '3', '4'];
  // Array.prototype.includes returns true when the given element exists 
  // in the array, false otherwise.
  return !valid.includes(operation);
}

prompt('Welcome to the Calculator!');

prompt('Enter the first number');
let number1 = readline.question();

// number1 error checking loop for validity
while (invalidNumber(number1)) {
  prompt('C\'mon! Enter a Number!'); // back slash is used to escape the single quotes
  number1 = readline.question();
}

prompt('Enter the second number');
let number2 = readline.question();

// number2 error checking loop for validity
while (invalidNumber(number2)) {
  prompt('C\'mon! Enter a Number!'); // back slash is used to escape the single quotes
  number2 = readline.question();
}

prompt('Enter the operation \n 1) Addition \n 2) Subtraction \n 3) Multiplication \n 4) Division');
let operation = readline.question();

while (invalidOperation(operation)) {
  prompt('You can only select 1, 2, 3, 4!');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
} 

console.log(`The result is ${output}!`);