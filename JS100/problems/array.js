let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

// array1.length = 4
// array2.length = 5
// array3.length = 0
// array4.length = 3
// array5.length = 101

// Answers from Second Time Around!!

// Log all of the even values from myArray to the console.
/* 
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
})

myArray.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

myArray.filter((num) => num % 2 === 0)
       .forEach((val) => console.log(val));



// Log all of the even values from myArray to the console.
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.map((subArr) => {
  subArr.filter((num) => num % 2 === 0)
        .forEach((val) => console.log(val));
})

myArray.forEach((subArr) => {
  subArr.forEach((elem) => {
    if (elem % 2 === 0) {
      console.log(elem);
    }
  });
});
*/

/* If the element is an even value, then the corresponding 
element in the new array should contain the string 'even'; 
otherwise, the element in the new array should contain 'odd' 

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArr = myArray.reduce((accumArray, value) => {
  if (value % 2 === 0) {
    value = value * value
  } 
  accumArray.push(value);
  return accumArray;
}, [])

console.log(newArr);

let newArr1 = myArray.map((elem) => {
  if (elem % 2 === 0) {
    return elem * elem;
  }
  return elem;
})

console.log(newArr1);



Sanyi Cake with Danielle -> small one

const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]

function findIntegers(array) {
  return array.filter((elem) => Number.isInteger(elem));
}


let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 */

/* Use map and filter to first determine the lengths of 
all the elements in an array of string values, then 
discard the even values (keep the odd values). 
function oddLengths(array) {
  let lengthArr = array.map((elem) => elem.length);
  return lengthArr.filter((length) => length % 2 === 1);
}



let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]


function sumOfSquares(numArray) {
  return numArray.reduce((total, number) => total + (number * number), 0);
}

function sumOfSquares1(numArray) {
  return numArray.reduce((total, currNumber) => {
    return total + (currNumber * currNumber);
  });
}

let array = [3, 5, 7];
console.log(sumOfSquares1(array)); // => 83
*/

/* Use map and filter to first determine the lengths of all the elements 
in an array of string values, then discard the even values (keep the 
odd values).

function oddLengths(array) {
  return array.reduce((accum, elem) => {
    let strLength = elem.length
    if (strLength % 2 === 1) {
      accum.push(strLength)
    }
    return accum;
  }, [])
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]*/

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

console.log(arr[1][3] = 606);
