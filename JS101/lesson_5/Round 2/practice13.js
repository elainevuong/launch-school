// Sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  a = oddNumberTotal(a);
  b = oddNumberTotal(b);
  return a - b
});

function oddNumberTotal(subArr) {
  return subArr.filter((elem) => elem % 2 === 1)
               .reduce((total, elem) => total += elem, 0);
}

console.log(arr); // [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]