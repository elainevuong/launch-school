// 4 Methods to remove all Elements from an Array
let numbers1 = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let numbers3 = [1, 2, 3, 4];
let numbers4 = [1, 2, 3, 4];

// while loop and using shift() - removing from the front
while (numbers1.length > 0) {
  numbers1.shift();
}
console.log(numbers1);

// while loop and using pop() - removing from the back
while (numbers2.length > 0) {
  numbers2.pop();
}
console.log(numbers2);

// modifying the array length to be 0
numbers3.length = 0
console.log(numbers3);

// using the .splice() method
numbers4.splice(0,numbers4.length);
console.log(numbers4);