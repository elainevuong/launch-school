function transpose(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  });
}

let nonTransposedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
 ]

let transposedArray = transpose(nonTransposedArray);

console.log(transposedArray); // logs [[1,4,7], [2,5,8], [3,6,9]]