/* let arr = [1, 2, 3, 4, 5]
console.log(arr.fill(1, 1, 5));
console.log(arr.fill(2, 3, 4));
console.log(arr); 

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintObj = {}

flintstones.forEach(function (val, index) {
  flintObj[val] = index;
});

console.log(flintObj);

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintObj = {}

flintstones.forEach((value, index) => {
  flintObj[value] = index;
});

console.log(flintObj);


let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageValues = Object.values(ages);
let final = ageValues.reduce((age, total) => { 
  return total + age;
}, 0);

console.log(final);

Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// Long Form Function
let ageValues = Object.values(ages);
let final = ageValues.reduce((age, total) => {
  return total + age;
}, 0);

console.log(final);

// Arrow Function
let number = ageValues.reduce((age, sum) => age + sum, 0);
console.log(number);

// Function Chaining
console.log(Object.values(ages).reduce((age, total) => age + total, 0));

//Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).sort((a, b) => a - b).shift());

let agesArr = Object.values(ages);
console.log(Math.min(...agesArr)); // => 10

let statement = "The Flintstones Rock";

let wordCount = {}

let charArray = statement.split('');
console.log(charArray)

counter = 0
charArray.forEach((letter) => {
  if (letter === ' ') {
    counter += 1; 
  } else if (letter in wordCount) {
    wordCount[letter] += 1;
  } else {
    wordCount[letter] = 1;
  }
});

console.log(wordCount);
*/

let statement = "The Flintstones Rock";

let charsInStatement = statement.split('').filter(char => char !== ' ');
console.log(charsInStatement);
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);

let charsStatement = statement.split('').filter(char => char !== ' '); // selects only characters
let result = {}

charsInStatement.forEach(char => {
  result[char] = result[char] || 0; // if it does NOT exist, it returned undefined
                                    // undefined is falsey, so 0 is evaluated and returns zero
  result[char] += 1
})

let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}