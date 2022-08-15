/*
Process the Problem
- Input - a string of integers
- Output - the number of Boomerangs
- Explicit Rules
  - What is a Boomerang? A boomerang is a consecutive sequence of three numbers, where the first and third 
    number are the same number, and the second number is a different number
  - Different Parts of a Boomerang can Overlap - for example the String '9638383896'
    1) 383
    2) 838
    3) 383
    4) 838
- Implicit Rules
  - Empty String - return 0

Data Structure/Algorithm
1) Identifying a Boomerang
  - Given a String of Integers that are a length of 3
    - If 1st and 3rd Integers are the same AND the 2nd Integer is different, return true, otherwise false

2) Main Algorithm
  - Given a String of Integers
  - Create a counter variable to keep track of the count of Boomerangs
  - Start at the beginning up to the String.length - 3
    - Create a slice of 3 Integers
    - Determine if it is a Boomerang
      - If it is a Boomerang, increment the Boomerang Counter
    - Continue to the next character of the string
  - Return the Boomerang Counter


*/
function isBoomerang(num) {
  return (num[0] === num[2]) && (num[0] !== num[1])
}

function boomerangs(num) {
  let boomerCount = 0
  for (let index = 0; index <= num.length - 3; index++) {
    if (isBoomerang(num.slice(index, index + 3))) {
        boomerCount += 1;
    }
  }
  return boomerCount;
}


console.log(boomerangs('121151171'));  // returns 3
console.log(boomerangs('9638383896')); // returns 4
console.log(boomerangs('0000000'));    // returns 0
console.log(boomerangs('0001000'));    // returns 1
console.log(boomerangs(''));           // returns 0