let array = [3, 5, 7];
console.log(sumOfSquares1(array)); // => 83

function sumOfSquares(arr) {
  return arr.reduce((accum, elem) => accum + (elem ** 2), 0);
}

function sumOfSquares1(numbers) {
  return numbers.reduce((accum, num) => {
    return accum + num * num;
  }, 0);
}

