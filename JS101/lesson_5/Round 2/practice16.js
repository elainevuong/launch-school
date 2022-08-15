// Write some code that returns an object where the key is the first item in each subarray, and the value is the second.

let arr = [ ['a', 1] , ['b', 'two'] , ['sea', {'c': 3}] , ['D', ['a', 'b', 'c'] ]  ];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }]

/* 
Input - a multi-dimensional nested array
Output - an object, where the key is the first item in each sub-array, and the value is the second

*/

function objKeyVal(array) {
  let resultObj = {}
  
  array.forEach((subArr) => {
    resultObj[subArr[0]] = subArr[1];
  });
    
  return resultObj; 
}

console.log(objKeyVal(arr));