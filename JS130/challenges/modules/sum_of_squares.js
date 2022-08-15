const getNumbers = require('./add_number.js').getNumbers;

function sumOfSquares() {
  return getNumbers().reduce((sum, number) => {
    return square(number) + sum;
  });
}

function square(value) {
  return value * value;
}

module.exports = sumOfSquares;