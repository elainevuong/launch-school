// Squaring an Argument

// Arrow Notation
const multiply = (num1, num2) => num1 * num2
const square = (num1) => multiply(num1, num1)

// Function Notation
function square1(number) {
  return multiply(number, number);
}

/* What if we wanted generalize this function to a "power to the n" type 
function: cubed, to the 4th power, to the 5th, etc. How would we go about 
doing so while still using the multiply() function? */ 

function powerOfN(number, exponent) {
  let currNumber = number

  while (exponent !== 1) {
    currNumber = multiply(currNumber, number)
    exponent -= 1
  }

  return currNumber;
}

// Recursion
const multiply = (num1, num2) => num1 * num2;

function power(num, exp) {
  if (exp === 1) {
    return multiply(num, 1);
  }
  return num * power(num, exp - 1);
}

console.log(square1(5) === 25); // logs true
console.log(square1(-8) === 64); // logs true

console.log(powerOfN(5, 3) === 125); // logs true
console.log(powerOfN(7, 3) === 343); // logs true