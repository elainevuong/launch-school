// What does the following code output? 

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

/* The following code logs 'hello there' to the console
In JavaScript, strings are primitive values and are 
immutable - they cannot be changed.
When we execute line 2 (let str2 = str1); what this does is
that it initializes str2 and assigns it a copy of str1's value
which happens to be 'hello there'. 
Note that the execution of line 2 does NOT have any 
impact on str1.
Then, on line 3, we reassign str2 to the string value 'goodbye!'
Therefore, on line 4, when we log str1; str1 is still assigned
to the same value it was originally initialized to - and it logs
'hello there' to the console. */