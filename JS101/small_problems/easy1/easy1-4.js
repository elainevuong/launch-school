// How Big is the Room?
let readlineSync = require("readline-sync");
const SQMETERS_TO_SQFEET = 10.7639;

console.log(`Enter the length of the room in meters: `)
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log(`Enter the width of the room in meters: `)
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaMeters = length * width
let areaFeet = areaMeters * SQMETERS_TO_SQFEET

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`)

// The parseInt() function parses a string argument and returns an integer 
// of the specified radix (the base in mathematical numeral systems).