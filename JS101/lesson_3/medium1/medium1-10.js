function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?
  
console.log(bar(foo()));


/* 
the foo function always returns the value 'yes'
when we pass the foo function as an argument to the bar function, 
we pass the argument which is the value 'yes' to the bar function
this assigns the parameter param to the value of 'yes'

Looking to line 6 now - since param = 'yes', and 'yes' !== 'no' => the ternary operator
evaluates to false, and boo returns 'no'

*/