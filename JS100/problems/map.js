let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let new_array = myArray.map(function(number) {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});


console.log(myArray)
console.log(new_array)
