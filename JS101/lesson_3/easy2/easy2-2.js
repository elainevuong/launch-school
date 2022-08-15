/* The Array.prototype.reverse method reverses the order of elements 
in an array, and Array.prototype.sort can rearrange the elements 
in a variety of ways, including descending. Both of these methods 
mutate the original array as shown below. Write two distinct ways 
of reversing the array without mutating the original array. Use 
reverse for the first solution, and sort for the second. */

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Reverse the Array without Mutating the Original
numbers = [1, 2, 3, 4, 5]
let num_copy = numbers.slice()
num_copy.reverse();
console.log(num_copy);

let num_copy1 = numbers.slice()
num_copy1.sort((num1, num2) => num2 - num1);
console.log(num_copy1);