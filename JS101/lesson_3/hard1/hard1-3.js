function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/* 
This function logs one is one, two is two, and three is three.

When we pass the arguments ['one'], ['two'] and ['three'] to the function, 
the re-assignment of one = ['two'] has NO impact on the one variable that exists
in the global scope. As such, reassignment of the global variables fails. 
*/

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/* 
This differs with the function above, because we use the 'splice' method within the
messWithVars function, and since splice is a destructive method, it mutates the caller
and modifies the original array objects directly.
*/