console.log([1, 2, 3] + [4, 5]);

/* In JavaScript, the Binary + Operator - when using when one of the operands is an object, it results in 
both operands being converted to strings and concatenated together.

This results in: '1 2 3' + '4 5' => result of coercion to string
	               '1 2 34 5' => is the result of concatenation of the strings

In some languages you can use + to concatenate two arrays, but not in JavaScript. In JavaScript, 
the + operator used on objects first converts the arrays to strings, and then concatenates the strings, 
so the output is the string 1,2,34,5. */