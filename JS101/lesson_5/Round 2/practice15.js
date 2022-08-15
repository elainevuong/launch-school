// Write some code to return an array which contains ONLY the objects where ALL the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

/* 
Input - a nested array, consisting of objects
        - each object contains various number of key-value pairs
        - each key is a letter
        - each value is an array of numbers
Output - a new array, which contains only the objects where ALL the numbers are even

Data Structure
- Return an array, which contains ONLY the objects where ALL the numbers are even
- Ideal Output:
  ->  [ { e: [8], f: [6, 10] } ] 
  
- Iterate through the elements in the array, which is an Object
  - If ALL of the values of the Object are ALL numbers, which are even; return true (select the object)
  - Otherwise, do NOT select the object
*/

let newArr = arr.filter((object) => {
  return Object.values(object).every((arr) => {
    return arr.every((elem) => elem % 2 === 0);
  });
});

console.log(newArr);

/* 
EV - the multi-dimensional nested array consisted of of objects, which contain key-value pairs, where the keys are letter and the values are an array of numbers; calls the .filter() method. the filter() method will perform selection on the elements that pass the test (i.e. it will select the elements where the callback function evaluates to a truthy value)

Each inner object is then passed as an argument to the callback function of filter(), and each inner object is assigned to the parameter object. 
Within the callback function of filter, we WANT to return true to the outer filter() method if EVERY value of the key-value pairs, are arrays of numbers, where EVERY number is an even number.

How we accomplish is that we will call the .every() method on the values of each inner object (which is an array)
  - Within that, we will then call the .every() method to verify that ALL of the elements within the ARRAY (which are the VALUES of the key-value pairs of the inner object) ARE even
  - Therefore, if ALL of the elements within the array are even, then Line 28 (which is the callback function of the every() method on Line 27 will RETURN true
  - And, if ALL of the SUB-ARRAYS which are the VALUES of the key-value pairs within the inner-object return true, then EVERY ARRAY (which are the values of the inner object) consists of EVEN numbers, for THAT ENTIRE OBJECT
  
 If any elements within the sub-arrays are odd, the every() method will return false
 */