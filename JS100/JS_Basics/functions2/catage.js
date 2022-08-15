/* The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years. */

function catAge(number) {
  catConversion = [0, 15, 9, 4, 4, 4, 4, 4, 4]
  age = 0
  let counter
  for (counter = 0; counter <= number; counter += 1) {
    age += catConversion[counter]
  }

  return age;
}

function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32