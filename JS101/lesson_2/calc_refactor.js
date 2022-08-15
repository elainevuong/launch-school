// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

/* The Number.isNaN() method takes any JavaScript value and returns 
the boolean true if the value is NaN, false if it is not. We check 
whether Number(number) is NaN since calling Number() on a non-numeric 
string evaluates to NaN. Thus, number is invalid if the conversion 
results in NaN. Note that Number() ignores leading whitespace in the 
number string, so Number(' 34') returns 34. */

/* Empty Strings are Treated as Valid Numbers - 
1) The readline.question method returns an empty string when the user doesn't 
provide any input
2) Number() returns 0 when given an empty string or a string 
that contains nothing but whitespace.
3) Therefore, if the user doesn't enter anything, Number() treats the empty string
as the number zero. 
4) Therefore, we must modify the invalidNumber to treat empty strings/spaces as invalid
5) We can use the String.prototype.trimStart method to get a copy of the number 
string with leading whitespace removed.
*/ 

prompt('Welcome to the Calculator!');

prompt('Enter the first number');

let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt('Enter the second number');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt('Enter the operation \n 1) Addition \n 2) Subtraction \n 3) Multiplication \n 4) Division');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
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

prompt(`The result is ${output}!`);

// include the line const readline = require(`readline-sync`);
// readline.question() -> this is using the readline library in order to invoke the function
// output from the readline library is read in as a string
