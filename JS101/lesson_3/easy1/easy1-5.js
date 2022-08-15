// What does the following code output?

console.log(false == '0'); // true
console.log(false === '0'); // false

/* When using the non-strict equality operator on two operands, 
one of which is a boolean and one of which is a string; the boolean 
gets coerced to a number, and then the string is coerced to a number, 
the values are compared, and operand order does not matter.
The boolean false is coerced to the number 0
The string '0' is coerced to the number 0
Since 0 == 0 => this returns true.

Since false !== '0', this returns false. */