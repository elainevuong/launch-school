// Tip Calculator
let readlineSync = require("readline-sync");

console.log(`What is the bill?`)
let bill = readlineSync.prompt();
bill = parseFloat(bill, 10)

console.log(`What is the tip percentage?`)
let tip = readlineSync.prompt();
tip = parseFloat(tip, 10) / 100

let tipDollar = tip * bill;
let total = bill + tipDollar;

console.log(`The tip is $${tipDollar.toFixed(2)}`)
console.log(`The total is $${total.toFixed(2)}`)


// LS Solution
let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill?\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage?\n")
);

let tip = bill * (percentage / 100);
let total = bill + tip

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);