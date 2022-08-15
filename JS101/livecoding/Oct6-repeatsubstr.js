/* Minimum Repeated Substring 
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t 
repeated k times. The input string consists of lowercase letters. Your function should return an array (in Ruby and JavaScript) [t, k]

Examples
console.log(minimumSub('ababab'));      // ["ab", 3]
console.log(minimumSub('ooooooo'));     // ["o", 7]
console.log(minimumSub('abcde'));       // ["abcde", 1]
console.log(minimumSub('mississippi')); // ["mississippi", 1]
console.log(minimumSub(''));            // ['', 0]
*/
/*
Process the Problem
Input  - non-empty String => s
Output - [t, k]
  1) t -> minimum substring
  2) k -> maximum number of times t is repeated by k, in order to equal s


Explicit Rules
	- t repeated k times === s
  - Lowercase Letters only

Algorithm
1) Create all Substrings Starting from the Beginning of a String
  > Input: String; Output: Array of Substrings starting from the First Index 
  
  1. Create an empty substring Array to capture substrings from the beginning of a String
    2. Using a For Loop, start an Index at 1, and slice from the beginning of the            
       string up until (but not including) the Index. 
       3. Add that slice to the substring array. 
       4. Increment the index up until it is equal to the length of the string. 

2) Create all Substrings of a String
  > Input: String        Output: Array of all Substrings in a String
  
  1. Create an empty Array to capture all substrings of a string
    2. Using a For Loop, start an Index at 0, and slice from Index to the end of the string. Pass this slice as an argument to Step 1 Helper, 
			 and concatenate all the resultant arrays to the all substrings Array created in step 1.
    2a.Increment Index and repeat for as long as the Index is less than the length of the string. 
  3. Return all substrings of a String in an Array
  
3) Main Algorithm
  > Input: String         Output: Array [t, k]
  
  1. Create and store all the of a String into an Array by using the Step 2 Helper
  2. Iterate through the elements in the Array, and create an Object to capture the Substring and it's Occurrence Count
  3. Convert the Object to a nested array of its keys/value pairs, and sort the nested array based on its Occurrence Count decreasing from 
		 highest to lowest
  4. Iterate through each element in the nested array that consists of [ 'substr' : count]. Since it has been sorted from highest to lowest 
		 based on occurrence count, if the 'substr' repeated 'count' times is equal to the Original String, return the current [ substr, count]
*/

function substrIndex(string) {
  let subStr = [];
  for (let index = 1; index <= string.length; index++) {
    subStr.push(string.slice(0,index));
  }
  return subStr;
}

function allsubStr(string) {
  let allSubs = [];  
  for (let index = 0; index < string.length; index++) {
		allSubs.push(...substrIndex(string.slice(index)));
		// concat:   allSubs = allSubs.concat(substrIndex(string.slice(index)));
    // spread:   allSubs: [...allSubs, ...substrIndex(string.slice(index))] 
  }
  return allSubs; 
}

function minimumSub(string) {
	if (string.length === 0) return ['', 0]
  let allSubs = allsubStr(string);
  let occurrenceCount = {}
  allSubs.forEach((elem) => {
    occurrenceCount[elem] = occurrenceCount[elem] + 1 || 1;
  });
  
  let sortedOccCount = Object.entries(occurrenceCount).sort((a, b) => {
    let aCount = a[1];
    let bCount = b[1];
    return bCount - aCount;
  });
  
  for (let i = 0; i < sortedOccCount.length; i++) {
    let t = sortedOccCount[i][0];
    let k = sortedOccCount[i][1];
    if (t.repeat(k) === string) {
      return [ t, k ];
    }
  }
}

console.log(minimumSub('ababab'));      // ["ab", 3]
console.log(minimumSub('ooooooo'));     // ["o", 7]
console.log(minimumSub('abcde'));       // ["abcde", 1]
console.log(minimumSub('mississippi')); // ["mississippi", 1]
console.log(minimumSub(''));            // ['', 0]