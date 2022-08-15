let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function threeCheck(array) {
  return array.includes(3)
}

console.log(threeCheck(numbers1));
console.log(threeCheck(numbers2));
console.log(threeCheck(numbers2));

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606
console.log(arr[1][3])