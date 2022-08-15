// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

/* the Array.prototype.sort((a, b) => ...) method accepts a callback function
   If the callback function returns a value less    than 0, sort a BEFORE b
   If the callback function returns a value greater than 0, sort b BEFORE a

Therefore, to sort something in DESCENDING numeric value
  if a < b 
    => we WANT b to come BEFORE a 
    => the callback function MUST return a positive value
    => return b - a
*/

let sortedArr = arr.sort((a, b) => {
  a = Number(a);
  b = Number(b);
  return b - a;
});

console.log(sortedArr);

// LS Solution
let arr1 = ['10', '11', '9', '7', '8'];
let sortedArr1 = arr1.sort((a, b) => Number(b) - Number(a));
console.log(sortedArr1);

// LS Solution - removes Number
let arr2 = ['10', '11', '9', '7', '8'];
let sortedArr2 = arr2.sort((a, b) => b - a);
console.log(sortedArr2);

// In this case, the explicit type coercion to `Number` is NOT required
// because using the subtraction operator on strings coerces them to 
// Numbers