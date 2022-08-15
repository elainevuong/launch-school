// What will the final values of a and b be? 

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

/*
The variable `a` is declared and initialized to a number value of 2, and 
the variable `b` is declared and initialized to the array object `[5, 8]`.
On Line 3, we declare and initialize a variable `arr` and `arr` is an 
array. Upon initial assignment, `arr` is composed of a copy of the the 
value stored in variable `a` (i.e. 2) and a **reference** to the array 
object `[5, 8]`. On Line 4, we use array element reference to access 
the element at index 0 of the `arr` array, which is the value 2. Note 
that **since a copy of the value stored in variable `a`** is what was 
provided to `arr`, any reassignment to `arr[0]` has **no impact** on the 
variable `a`. This is because the value in variable `a` is a Number, 
which is a primitive value. Reassignment of a primitive value always 
results in a new value being returned, as primitive values are 
**immutable**.Therefore, on Line 4, the addition assignment operator 
changes the value stored in `arr[0]` to the value 4. At this point, 
the variable `a` still contains the value 2. On Line 5, we use a chained 
element reference to access the element `5`. Note that since `arr` is 
composed of a **REFERENCE** to the array object `[5, 8]` both `arr[1]` 
AND the variable `b` point to the same location in memory. Therefore, 
any modifications made by mutating the variable `b` or by mutating 
`arr[1]` will appear when we inspect either `arr[1]` or `b`. 
Therefore, Line 6 uses the subtraction assignment operator to mutate 
the value stored at element `arr[1][0]` from 5, and re-assigns it the 
value of 3 (because the variable `a` has NOT been modified, and still 
contains the value 2). When we inspect the variable `arr`, it will 
return: `[4, [3, 8]]`
*/