let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/* What is the Answer to the Following Code?
On line 1, the variable answer is initialized and assigned the value of 42
On line 7, we invoke the function messWithIt, and we pass a copy of the value
assigned to answer (i.e. a copy of the number 42) as an argument to the messWithIt function. Execution within the messWithIt function occurs, and it returns the number value 50, which is assigned to the variable newAnswer
After execution ends on line 7, newAnswer contains the value 50, and answer contains the value 42

Since numbers are primitive values and they are immutable, when the variable answer is used to pass an argument to a function, the function CANNOT DO ANYTHING that sets the original variable to a different value. No matter what happens in the function, the variable will contain the same value that was passed to the function.

When line 9 executes, the console logs 34 to the terminal (because 42 - 8 is 34). */