/*
function objectsEqual(objA, objB) {
  if (typeof objA !== 'object' && typeof objB !== 'object') return false;

  let aKeys = Object.keys(objA).sort();
  let bKeys = Object.keys(objB).sort();

  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every(key => objA[key] === objB[key]) && 
         bKeys.every(key => objA[key] === objB[key]);

}
console.log(objectsEqual(['a', 'b'], ['b']));                           // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, 'string'));              // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

*/

/*
Write a function objectsEqual that accepts two object 
arguments and returns true or false depending on whether 
the objects have the same key/value pairs.
*/

/*
Write a function objectsEqual that accepts two object 
arguments and returns true or false depending on whether 
the objects have the same key/value pairs.
*/

function objectsEqual(obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  
  return (Object.keys(obj1).every(key => obj1[key] === obj2[key]) && 
          Object.keys(obj2).every(key => obj1[key] === obj2[key])) 
}

// Alternative
let objectsEqual = (obj1, obj2) => {
  let stringObj1 = Object.entries(obj1).sort().join("");
  let stringObj2 = Object.entries(obj2).sort().join("");
  return stringObj1 === stringObj2;
};

console.log(objectsEqual(['a', 'b'], ['b']));                           // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, 'string'));              // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false