/* 
When Will I Retire?
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

/* Process the Problem
  - Input - current age
  - Input - when they want to retire
  - Output - the current year
  - Output - the retirement year
  - Output - remaining years of work to go!

  Examples/Test Cases
  - Assume that all input provided will be zero, and skip validity checks on number         data types
  
  Data Structure
  - None needed - storage of input as variables to compute output information
  
  Algorithm:
  1) Age - prompt user for their current age and store it in a variable
  2) Retirement Age - prompt user for their ideal retirement age
  3) Remaining Years of Work - compute the remaining work years by computing the difference between retirement age and age
  4) Compute the current year
  5) Compute the Retirement Year by adding the Remaining Years of Work to the Current year
*/

const readlineSync = require('readline-sync')

let currAge = readlineSync.question('What is your age? ');
let retireAge = readlineSync.question('At what age would you like to retire? ');

let workYears = retireAge - currAge;

let today = new Date;
let currYear = today.getFullYear();
let retireYear = currYear + workYears;

console.log(`It's ${currYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${workYears} to go!`);