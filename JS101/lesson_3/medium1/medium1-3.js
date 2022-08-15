// Return all of the factors of number:

/* Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.*/

function factors(number) {
  let divisor = number;
  let factors = [];
  
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

// LS Solution
function factors1(number) {
  let divisor = number;
  let factors = [];
  
  while (divisor > 0) {
    
    if (number % divisor === 0) {
    factors.push(number / divisor); 
    
    }
  
    divisor -= 1;
  
  }
  return factors;
}


console.log(factors1(36));
console.log(factors1(16));
console.log(factors1(0));
console.log(factors1(-5));
console.log(factors1(35));

// using .push(divisor) returns the factors in descending order
// using .push(number/divisor) returns the factors in ascending order
/* the purpose of the line (number % divider === 0): It determines whether the result of the division is an integer -- if the number has no remainder, the result is an integer, 
so the number divided by the divisor is a factor. */