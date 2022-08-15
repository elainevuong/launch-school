let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

/* What does the last line in the following code output?
On line 2, numArray points to the value, in the key/value pair 'first' that is a property of the object,
called object. Since numArray points to the reference of that value, when we perform a destructive
operation on numArray (with the push method) we alter the value itself of the key/value pair, 
directly within the object.

As such, when we log object to the console, it displays:
{ first: [1, 2]}

LS Solution: Since numArray is a reference to the original array, [1], numArray.push(2) modifies 
this array. Thus, the original object referenced by object is changed.

To modify the array but NOT the object, we have two options:

We can declare and initialize numArray with a reference to a copy of the original array:
let object = { first: [1] };
let numArray = object["first"].slice(); // .slice() creates a copy
numArray.push(2);

We can use Array.prototype.concat(), which returns a new array instead of modifying the original array:
let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);

*/