/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

// `find` - the find() method returns the value of the first element in the provided array that satisfies the provided testing function. 

function order(words){
  if (words === '') return '';
  
  let wordArray = words.split(' ');
  let final = wordArray.map((word, index, array) => {
    return findWord(index + 1, array);
  });
  
  return final.join(' ');
}
                       
function findWord(index, wordArray) {
  return wordArray.find(word => word.includes(String(index)));
}

console.log(order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2") === "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order("") ===  "");
