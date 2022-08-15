/* 
// Arrow Notation
[1, 2, 3].forEach(number => {
  console.log(number);
})


forEach is a method that is called on the array. The method takes a 
function as an argument -- the () => {...} component. Here, we're 
using an arrow function for its simplicity. A function expression 
provided to another function/method as an argument is often called 
a callback.

forEach also passes the index position to the callback function

[1, 2, 3].forEach((number, index) => {
  console.log(`index ${index}: number ${number}`);
})


// forEach does NOT exist for strings -> use String.prototype.splits
// forEach alway returned undefined
let val = [1, 2, 3].forEach(num => console.log(num));
console.log(val)

// Objects do not have a forEach -> use Object.keys, values, or entries
*/

let arr1 = [1, 2, 3];
let arr2 = [['a'], {b: 3, y: 5}, 5];

let arr3 = arr1 + arr2
console.log(arr3);