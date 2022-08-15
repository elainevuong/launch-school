/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.
*/

// Full Solution
function wordSizes(string) {
  let cleanString = string.replaceAll(/[^a-z ]/gi, '');
  
  if (string === '') return {};
  
  let wordSizeObj = {};
  
  cleanString.split(' ').forEach(word => {
    let key = word.length;
    if (key in wordSizeObj) {
      wordSizeObj[key] += 1;
    } else {
      wordSizeObj[key] = 1;
    }
  });
  
  return wordSizeObj;
}


// Reduce Solution
function wordSizes(string) {
  let cleanString = string.replaceAll(/[^a-z ]/gi, '');
  
  if (string === '') return {};
  
  return cleanString.split(' ').reduce((wordSizeObj, word) => {
    let key = word.length;
    if (key in wordSizeObj) {
      wordSizeObj[key] += 1;
    } else {
      wordSizeObj[key] = 1;
    }
    return wordSizeObj;
  }, {});
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}