/* 
Write a function that takes an array of numbers and returns the 
sum of the sums of each leading subsequence in that array. Examine 
the examples to see what we mean. You may assume that the array 
always contains at least one number.
*/

function sumOfSums(numArray) {
  let allSequences = allSubsequences(numArray);
  let totalledSequences = allSequences.map(numArray => sumSequences(numArray));
  return sumSequences(totalledSequences);
}

function allSubsequences(numArray) {
  return numArray.map((_, index) => {
    return numArray.slice(0, index + 1)
  });
}

function sumSequences(numArray) {
  return numArray.reduce((total, current) => total + current);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35