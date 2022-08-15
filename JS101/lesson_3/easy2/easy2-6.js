// Create a new array that contains all of the above values, 
// but in an un-nested format:
/*
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

let newFlintstones = flintstones.reduce((accumArray, value) => {
  if (typeof value === 'string') {
    accumArray.push(value);
  } else {
    value.map((subElem) => {
      accumArray.push(subElem);
    })
  }
  return accumArray;
}, []);

console.log(newFlintstones);

// Solution with .concat and the Spread Syntax
let flintstones1 = [].concat(...flintstones);
console.log(flintstones1);
*/
let flint = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10]]]]]
let newFlint = [].concat(...flint)
let newFlint1 = [].concat(...newFlint);
let newFlint2 = [].concat(...newFlint1);
let newFlint3 = [].concat(...newFlint2);
console.log(flint);
console.log(newFlint);
console.log(newFlint1);
console.log(newFlint2);
console.log(newFlint3);

