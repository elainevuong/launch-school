/*
// Sum or Product of Consecutive Integers
let readlineSync = require("readline-sync");

let number
while (true) {
  number = parseInt(
    readlineSync.question(`Please enter an integer greater than 0: `));
  if (number > 0) break
}

let operation
while (true) {
  operation = readlineSync.question(
    `Enter "s" to compute the sum, or "p" to compute the product. `);
  if (operation === 'p' || operation === 's') break
} 

let opWord
let answer

if (operation === 's') {
  opWord = 'sum'
  answer = 0;
  for (let counter = 1; counter <= number; counter++) {
    answer += counter;
  }
} else {
  opWord = 'product'
  answer = 1;
  for (let counter = 1; counter <= number; counter++) {
    answer *= counter;
  }
}

console.log()
console.log(`The ${opWord} of the integers between 1 and ${number} is ${answer}`);
*/

/* Expected Output
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

What if the input was an array of integers instead of just a single integer? How 
would your computeSum and computeProduct functions change? Given that the input 
is an array, how might you make use of the Array.prototype.reduce() method? */

let arr = [1, 2, 3, 4, 5]

let sum = arr.reduce((accum, val) => accum + val, 0);
let product = arr.reduce((accum, val) => accum * val, 1);

console.log(sum);
console.log(product);