/* Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23. */

/* Process the Problem
   - Input: number (from the user), occurring 6 times
   - Output: a string, that states if the 6th number appears in the previous 5 numbers
   - Explicit Rules 
      - only numbers will be entered by the user
   - Edge Cases / Clarification - ensure that ONLY numbers will be entered by the user, 
   
   Examples/Test Cases
   - See Above
   
   Data Structure
   - Collect the first five numbers into an array
   
   Algorithm
   - a Prompt the user for input, to enter a number. 
   - b For each number obtained, add the number to an array.
   - Repeat steps a and b, five times.
   - Prompt the user for input to enter the last number.
   - If the last number is in the array, state a message that says it appears.
      Else, state a message that says it does not appear.
*/ 
const readlineSync = require('readline-sync')

function numSuffix(number) {
  let numObj = { 1: 'st',
                 2: 'nd', 
                 3: 'rd', 
                 4: 'th',
                 5: 'th',
               }
  return numObj[number];
}

function getNumbers(number, numArr) {
  let numEnd = numSuffix(number);
  let numInput = readlineSync.question(`Enter the ${number}${numEnd} number: `);
  numArr.push(numInput);
}

let numArr = []
for (let num = 1; num <= 5; num++) {
  getNumbers(num, numArr);
}

let lastNum = readlineSync.question(`Enter the last number: `);

if (numArr.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${String(numArr)}.`)
} else {
  console.log(`The number ${lastNum} does not appear in ${String(numArr)}.`);
}