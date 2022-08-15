const sumOfSquares = require('./sum_of_squares.js');
const addNumber = require('./add_number.js').addNumber;

addNumber(1);
addNumber(5);
addNumber(-3);
addNumber(4);
console.log(sumOfSquares()); // => 51