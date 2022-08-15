/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more 
than one digit, continue reducing in this way until a single-digit 
number is produced. The input will be a non-negative integer.

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// Non Recursive
function digitalRoot(number) {
  while (String(number).length != 1) {
    number = computeDigitalRoot(number);
  }
  
  return number;
}

function computeDigitalRoot(number) {
  return String(number).split('').reduce((total, number) => total + Number(number), 0);
}

// Recursive Solution
function digitalRoot(num) {
  let digits = String(num).length;
  if (digits === 1) return num;
  num = String(num).split('').reduce((total, number) => total + Number(number), 0);
  return digitalRoot(num);
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));