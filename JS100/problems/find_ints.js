

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

function findIntegers1(array) {
  return array.filter(elem => Number.isInteger(elem));
}



let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers1(things);
console.log(integers); // => [1, 3, -4]

/* Write a findIntegers function that takes an array argument and returns 
an array that contains only the integers from the input array. Use 
the filter method in your function. 

Number.isInteger(value) returns true if the value is an Integer */


