/*
You call your spouse in anger and a "little" argument takes place. Count the total 
amount of insults used. Given an object of insults, return the total amount of insults used.

The list will never be empty (no empty object).

*/

function totalAmountAdjectives(object) {
  return Object.keys(object).length;
}

console.log(totalAmountAdjectives({ a: "moron" })); // ➞ 1
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })); // ➞ 3
console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })); // ➞ 4