// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

console.log('Welcome to the Calculator!');

console.log('Enter the first number');
let number1 = readline.question();

console.log('Enter the second number');
let number2 = readline.question();

console.log('Enter the operation \n 1) Addition \n 2) Subtraction \n 3) Multiplication \n 4) Division');
let operation = readline.question();

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

// include the line const readline = require(`readline-sync`);
// readline.question() -> this is using the readline library in order to invoke the function
// output from the readline library is read in as a string
