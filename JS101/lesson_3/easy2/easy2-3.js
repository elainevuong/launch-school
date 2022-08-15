let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

function numInSet(num, set) {
  return set.includes(num);
}

let number1 = 8;  // false
let number2 = 95; // true

console.log(numInSet(number1, numbers));
console.log(numInSet(number2, numbers));

console.log(numbers.some((num) => num === number1));
console.log(numbers.some((num) => num === number2));
