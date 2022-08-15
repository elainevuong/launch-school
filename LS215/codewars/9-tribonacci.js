/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically 
shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same 
sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a 
signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an 
empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

Process the problem
Input: a 3-Integer Array (signature) and a Positive Number
Output: the Tribonacci Sequence of a given length, n

[1, 1, 1, 3, 5, 9, 17, 31, 57, 105]

Index 0 -> value 1 - Given
Index 1 -> value 1 - Given
Index 2 -> value 1 - Given
Index 3 -> value 3 - sum (Index 0 - 2)
Index 4 -> value 5 - sum (Index 1 - 3)
Index 5 -> value 9 - sum (Index 2 - 4)
Index 6 -> value 17 - sum (Index 3 - 5)
Index 7 -> value 31 - sum (Index 4 - 6)
Index 8 -> value 57 - sum (Index 5 - 7)
Index 9 -> value 105 - sum (Index 6 - 8)

1. Copy the Input Array to the Output (Generates Index 0 - 2)
2. Slice from Index 0 to Index + 3;
3. Reduce the Slice from Step 2 to get a Total Sum -> add this Value to the Array
4. Stop Adding to the Array once the Array.length === n
5. Return the Array

*/

function tribonacci(array, n) {
  if (n === 0) return [];
  if (array.length !== 3) return [];
  if (n === 3) return array;
  
  let answerArray = array.slice();
  let start = 0;
  
  do {
    let end = start + 3;
    let currentSlice = answerArray.slice(start, end);
    let currentTribonacci = currentSlice.reduce((total, value) => total + value);
    
    answerArray.push(currentTribonacci);
    
    start += 1;
    
  } while (answerArray.length !== n);
  
  return answerArray;
  
}

console.log(tribonacci([1,1,1], 10));    // returns [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
console.log(tribonacci([0, 0, 1], 10)); // returns  [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
console.log(tribonacci([0, 0, 1], 0));  // returns  []