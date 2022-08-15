// Write two one-liners to count the number of t's in the string

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter((char) => char === 't'));
console.log(statement1.split('').filter((char) => char === 't').length);
console.log(statement2.split('').filter((char) => char === 't').length);