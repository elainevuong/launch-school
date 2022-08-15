/*
It's the police again. They need more signatures. You should also sign each room list separately. 
However, the document they sent is incomplete as there is only one room present. 
As a good citizen that you are, you sign it nevertheless.

This challenge is a bit different as the function you are given already contains some code that you 
should not change or remove. Also, don't use a return statement, it is already included.

The function receives an object with one nested object as an argument. Your task is:

on the root object: prevent any kind of changes.
on the nested object: prevent new properties from being added BUT allow for existing properties to be changed.

Notes
For simplicity sake, there's only one nested object.

*/

const obj = {
  kitchen: {
    knives: 500,
    stereo: 200,
    signature: ""
  },
signature: "Rocky Balboa"
}

function signAgain(obj) {
  Object.keys(obj).forEach(key => {
    Object.seal(obj[key]);
  })
  Object.freeze(obj);

  obj.signature = "Terminator"
  obj.extraProperty = "not possible"
  obj.kitchen.piano = 1000
  obj.kitchen.signature = "Rocky Balboa"
  return obj
} 

console.log(signAgain(obj));

/* returns {
  kitchen: {
    knives: 500,
    stereo: 200,
    signature: "Rocky Balboa", //only this field was changed
  },
  signature: "Rocky Balboa"
}
*/
