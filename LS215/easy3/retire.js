/*
Build a program that logs when the user will retire and how 
many more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const rlSync = require('readline-sync');

let age = rlSync.question("What is your age? ");
let retirement = rlSync.question("Retirement Age is? ");
let workingYears = retirement - age;

let today = new Date ()
let year = today.getFullYear();

console.log(`It's ${year}. You will retire in ${year + workingYears}.`)
console.log(`You have only ${workingYears} to go!`)