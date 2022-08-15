// Return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

/* Note that 'arr' is a multi-dimensional array, consisting of sub-arrays that contain numbers
In order to access the Number elements within the sub-arrays, two array iteration calls will be required:
  - first call  -> access the sub-arrays
  - second call -> access the elements within the sub-arrays
    - for the second array iteration call, we want to RETURN a new array, that consists of 
      numbers that are multiples of 3
      - if something is a multiple of 3, it means that (number % 3 === 0)
        [the remainder of dividing a number by 3 results in 0, which means the number divides
         cleanly into the divisor 3]
*/

let arrMultiple3 = arr.map((subArr) => {
  return subArr.filter((num) => num % 3 === 0);
});

console.log(arrMultiple3);