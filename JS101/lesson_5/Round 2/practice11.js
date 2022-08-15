// Return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

// EV Solution - values are incremeneted with forEach()
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let increasedArr = arr.map((object) => {
  let objCopy = Object.assign({}, object)
  Object.keys(objCopy).forEach((key) => objCopy[key] += 1);
  return objCopy
});

console.log(arr);          // logs [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]
console.log(increasedArr); // logs [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]



// LS Solution - values are incremented with for/in
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
}); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]