function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
}

function multiply(first, second) {
  return first * second
}

let firstNumber = Number(getNumber('Enter the first number: '));
let secondNumber = Number(getNumber('Enter the second number: '));
//let answer = firstNumber * secondNumber;
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}!`);


/* Launch School Solution
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(${left} * ${right} = ${multiply(left, right)});
*/