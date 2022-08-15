/*
let string = 'launch school tech & talk'
let words = string.split(' ');
let capitalizedWords = []

for (let i = 0; i < words.length; i++) {
  let word = words[i]

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

console.log(capitalizedWords.join(' ')); // 'Launch School Tech & Talk'
*/

let string = 'launch school tech & talk'
let words = string.split(' ')
let capitalizedWords = []

for (let i = 0; i < words.length; i++) {
  let current = words[i] // specifies a word

  capitalizedWords.push(current[0].toUpperCase() + current.slice(1)); // capitalize and push
}

console.log(capitalizedWords.join(' '));