// Adding a String to the Beginning of Another String

/* Starting with the string 'seven years ago...' show two different ways 
to put the expected "Four score and " in front of it.*/

let famousWords = "seven years ago...";
let beginWords = 'Four score and'

let famousWords1 = beginWords + famousWords
let famousWords2 = beginWords.concat(famousWords)

console.log(famousWords1);
console.log(famousWords2);
