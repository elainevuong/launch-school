// Return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.slice().map((subArr) => {
  if (typeof subArr[0] === 'number') {
    return subArr.sort((a, b) => Number(a) - Number(b));
  }
  return subArr.sort();
});