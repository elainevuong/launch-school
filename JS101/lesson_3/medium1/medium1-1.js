/* For this practice problem, write a program that outputs The Flintstones Rock! 10 
times, with each line indented 1 space to the right of the line above it. 
The output should start out like this: 

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock! */

function repeatLine(phrase, count) {
  for (let counter = 0; counter < count; counter++) {
    console.log(`${' '.repeat(counter)}${phrase}`);
  }
}

let phrase = 'The Flintstones Rock!';
let count = 10

repeatLine(phrase, count);

