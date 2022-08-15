/*
Complete the function that takes an array of words.
You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the 
position of the word in the list.

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

console.log(nthChar([]) === '');
console.log(nthChar(['yoda', 'best', 'has']) === 'yes');
*/
// map solution
function nthChar(wordArr) {
  return wordArr.map((elem, index) => elem[index]).join('');  
}

// reduce solution
function nthChar(wordArr){
  return wordArr.reduce((string, elem, index) => (string += elem[index], string),'');
}

console.log(nthChar([]) === '');
console.log(nthChar(['yoda', 'best', 'has']) === 'yes');