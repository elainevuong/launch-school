// Double Doubles

/* A double number is an even-length number whose left-side digits 
are exactly the same as its right-side digits. For example, 44, 3333, 
103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not. */

function twice(number) {
  // Ternary Operator
  return double(number) ? number : number * 2 
}

function double(number) {
  // Checks to make sure the input is even length
  if (String(number).length % 2 !== 0 ) return false

  // Determines Midpoint and Performs Substring Comparison for 1st/2nd Half
  let midpoint = String(number).length / 2
  let firstHalf = String(number).substring(0, midpoint)
  let secondHalf = String(number).substring(midpoint)

  return firstHalf === secondHalf 
}

function twice(num) {
  let midPoint = String(num).length / 2;
  let leftSide = String(num).slice(0, midPoint);
  let rightSide = String(num).slice(midPoint);
  return leftSide === rightSide ? num : num * 2;
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

