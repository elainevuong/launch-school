// How old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the console. 
// Have the age be a random number between 20 and 120 (inclusive).

/* 
Process the Problem
 - input: no inputer
 - output: a string that states how old Teddy is
 - explicit rules: the program must:
    - randomly generate Teddy's age
    - log it to the console
    - Teddy's age can be any random number starting at 20 up to and including 120
 - implicit rules: each time the program runs, there is an equal chance that any number    within the range can be Teddy's age
Examples/Test Cases
   'Teddy is 69 years old!'
Data Structure
 - String Interpolation of Teddy's age in the output
 - Assess the use of possible random functions in the Math module
Algorithm
 - 1) Generate Teddy's Age
 - Given the Upper and Lower Bounds (20 and 120) generate Teddy's age
 - Assign Teddy's age to a variable
 - 2) Log the sentence 'Teddy is x years old!' to the germinal

The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

Returns A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
*/ 

// Sample Output:

function randAge(lower, upper) {
  let range = (upper + 1)  - lower
  let age = Math.random() * range + lower
  return Math.floor(age);
}

let age = randAge(20, 120);
console.log(`Teddy is ${age} years old!`);

function randAge1(lower, upper) {
  let range = upper - lower
  let age = Math.random() * range + lower
  return Math.round(age);
}

let age1 = randAge1(20, 120);
console.log(`Teddy is ${age1} years old!`);

function howOld(min, max) {
  let age = Math.floor(Math.random() * (maxFinal - minFinal + 1) + minFinal);
  console.log(`Teddy is ${age} years old!`);
}

howOld(120, 5)
