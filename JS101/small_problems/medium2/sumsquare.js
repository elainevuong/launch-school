/* Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers. */

function sumSquareDifference(num) {
  let numArr = [];
  for (let i = 1; i <= num; i++) {
    numArr.push(i);
  }
  let squareSum = numArr.reduce((total, num) => total + num, 0) ** 2;
  let sumSquares = numArr.reduce((total, num) => total + num ** 2, 0)
  return squareSum - sumSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150