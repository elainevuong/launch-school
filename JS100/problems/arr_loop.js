/*
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function(number) {
  if (number % 2 === 0) {
    console.log(number);
  }
});


*/

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// Looping using forEach
myArray.forEach(function(number) {
  number.forEach(function(inner) {
    if (inner % 2 === 0) {
      console.log(inner);
    }
  });
});


// Looping using i and j for loops and array indexing
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    if (myArray[i][j] % 2 === 0) {
      console.log(myArray[i][j]);
    }
  }
}


/*
// Iterating through an Array using ForEach
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});

// function(name) -> this is a function expression
// the function expression is actually an anonymous function (blocks in Ruby)

// Iterating through an Array -> ForEach and arrow
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(name => console.log(name));*/