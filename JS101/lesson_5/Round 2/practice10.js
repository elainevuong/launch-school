// Return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map((subArr) => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => Number(b) - Number(a));
  }
  return subArr.slice().sort().reverse();
});

console.log(sortedArr); // logs [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]
console.log(arr);       // logs [ [ 'b', 'c', 'a' ], [ 2, 11, -3 ], [ 'blue', 'black', 'green' ] ]