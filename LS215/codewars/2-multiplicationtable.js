/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/


/*
Process the Problem
Input - an positive, non-zero Integer
Output - an Array consisting of the NxN Multiplication Table

Data Types - does not accept any non-Integer Input

console.log(multiplicationTable(2));
  [[1, 2]
   [2, 4]]
   
Step 1. Main - Create an Array
Step 2. Subarray - Create an Array of n Elements [elem1, elem2]
Step 3. Populate - the Subarray created in Step 2 with Elements starting at 1, ending with n
        [1, 2]. --> Distilled Need to Iterate n Times to create the Rows**
Step 4. Transform --> For Each Element for the Subarray created in Step 3, return a new SubArray that     
        consists of: (the element * (index + 1))

console.log(multiplicationTable(3));
  [1, 2, 3]
  
  [1, 2, 3]  -> elem = 1; index = 0 
  [2, 4, 6]
  [3, 6, 9]

*/

function multiplicationTable(size) {
  let firstRow = new Array(size).fill(0);
  
  for (let number = 1; number <= size; number++) {
    firstRow[number - 1] = number;
  }
  
  let main = new Array(size).fill(firstRow);
  
  let newArray = main.map((subArray, index) => {
    return subArray.map((value) => value * (index + 1));
  });
  
  return newArray;
  
}


console.log(multiplicationTable(2));
console.log(multiplicationTable(3));
console.log(multiplicationTable(4));
console.log(multiplicationTable(5));
