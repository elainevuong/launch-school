/*
Process the Problem
- Input: a String of Integers
- Output: an Integer that represents the number of substrings that are odd

Data Structure / Algorithm
1) All Substrings Starting from Index Position 0
  - Create a New Array Substrings starting from Index Position 0 
  - Set Index = 1, while Index <= the String.length
    - Slice from Index 0 to Index, and add this slice to the new array
    - Increment Index by 1
  - Return the New Array

2) All Subtrings & Count Odd Numbers
  - Create a Counter to reflect the number of Odd Numbers
  - Create a New Array to capture all Substrings
    - For each character in the Number string, concatenate the substring results for each index to the new 
      Array that will capture all the Substrings
  
  - Iterate Through the Substrings
    - If it is an Odd Number, increase the Odd Number counter
  
  - Return the Odd Number counter
    
*/

function substring(string) {
  let substrArr = []
  for (let index = 1; index <= string.length; index += 1) {
    substrArr.push(string.slice(0, index));
  }
  return substrArr;
}

function oddSubs(numString) {
  let allsubs = []
  
  for (let index = 0; index < numString; index++) {
    allsubs = [...allsubs, ...substring(numString.slice(index))];
  }
  
  return allsubs.reduce((total, elem) => {
    if (Number(elem) % 2 === 1) {
      total += 1;
    }
    return total;
  }, 0);
                   
}


console.log(oddSubs("1341"));     // 7
console.log(oddSubs("1357"));     // 10
console.log(oddSubs("13471"));    // 12
console.log(oddSubs("134721"));   // 13
console.log(oddSubs("1347231"));  // 20
console.log(oddSubs("13472315")); // 28