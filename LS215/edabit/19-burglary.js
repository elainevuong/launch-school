/*
The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. 
Apparently, they sent you a protected document.

This challenge is a bit different as the function you are given already contains some code that you 
should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.
*/

const obj = { noChanges: true }

function preventChanges(obj) {
  Object.freeze(obj);

  obj.noChanges = false;
  obj.signature = "whatever"
  return obj;
}  

console.log(preventChanges(obj));
// returns { noChanges: true }