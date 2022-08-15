/*
Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.
*/

/* Object Assign
function makeCopy(object) {
  return Object.assign({}, object);
}
*/

function makeCopy(object) {
  return {...object};
}


console.log(makeCopy({ piano: 100, tv: 50 })); // returns { piano: 100, tv: 50 }