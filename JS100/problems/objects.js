/* Use object literal syntax (e.g., { key: value, ... } notation) to 
create an object that behaves as an array in a for statement. The 
object should contain at least 3 elements. You should place your 
code between the braces in the let statement: 

let myArray = {
  0: 'itema',
  1: 'itemb',
  2: 'itemc',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
} */

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keyArray = Object.keys(obj);
let upperKeys = keyArray.map((key) => key.toUpperCase());
let upperKey2 = keyArray.map(function(elem) {
  return elem.toUpperCase();
});

console.log(keyArray);
console.log(upperKeys);
console.log(upperKey2);
/*
let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }*/

let obja = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

console.log(obja.bar[3].xyz);