// Exclusive Or

/* The || operator returns a truthy value if either or both of its operands are 
truthy, a falsey value if both operands are falsey. The && operator returns 
a truthy value if both of its operands are truthy, and a falsey value if 
either operand is falsey. This works great until you need only one, but not 
both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise. 
Note that we are looking for a boolean result instead of a truthy/falsy value 
as returned by || and &&. 

// Ternary Operator
function xor(val1, val2) {
  let truth = 0
  let cond1 = (!!val1) ? truth += 1 : null;
  let cond2 = (!!val2) ? truth += 1 : null;
  return truth === 1;
}

// LS Solution
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
*/ 

// Exclusive Or

/* The || operator returns a truthy value if either or both of its operands are 
truthy, a falsey value if both operands are falsey. The && operator returns 
a truthy value if both of its operands are truthy, and a falsey value if 
either operand is falsey. This works great until you need only one, but not 
both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise. 
Note that we are looking for a boolean result instead of a truthy/falsy value 
as returned by || and &&.  */

function xor(val1, val2) {
  return (!!val1 !== !!val2) && (!!val1 || !!val2)
  // the boolean of val1 is not the same as the boolean of val2
  // either val1 is true, or val2 is true
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);