// Multiples of 3 and 5

/* Write a function that computes the sum of all numbers between 1 and some 
other number, inclusive, that are multiples of 3 or 5. For instance, if 
the supplied number is 20, the result should be 98 
(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20). */

function multisum(upper) {
  let sumArr = []
  for (let num = 1; num <= upper; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sumArr.push(num);
    }
  }

  return sumArr.reduce((total, val) => total + val, 0);

}

// LS Solution
// function isMultiple -> can be a useful abstraction of another function
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168