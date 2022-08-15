/*
Write a program that solicits six numbers from the user and 
logs a message that describes whether the sixth number appears 
among the first five numbers.

Examples:

Copy Code
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
*/

const rlSync = require('readline-sync');

let numbers = [];
numbers.push(rlSync.question("First Number: "));
numbers.push(rlSync.question("Second Number: "));
numbers.push(rlSync.question("Third Number: "));
numbers.push(rlSync.question("Fourth Number: "));
numbers.push(rlSync.question("Fifth Number: "));

let lastNum = rlSync.question("Last Number: ");

if (numbers.includes(lastNum)) {
  console.log(`${lastNum} appears in ${numbers.join(', ')}`)
} else {
  console.log(`${lastNum} does not appear in ${numbers.join(', ')}`);
}