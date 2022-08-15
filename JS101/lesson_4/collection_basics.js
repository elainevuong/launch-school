/* 
let str = 'The grass is green';

// Start > End (substring swap, slice returns empty)

console.log(str.substring(9,4)); // start > end -> swaps => 'grass'
console.log(str.slice(9,4)); // start > end -> empty string => ''

// Negative Arguments (substring treats at 0, slice treats at length + index);
console.log(str.substring(9, -1)); // => (9, 0) => (0, 9) => 'The grass'
console.log(str.slice(9, -1)); // => (9, 16) => ' is gree'

'apple,orange,mango'.split(','); // => ['apple', 'orange', 'mango']

function selectFruit(obj) {
  let objEntries = Object.entries(obj);
  let fruits = {}

  for (let counter = 0; counter < objEntries.length; counter++) {
    if (objEntries[counter][1] === 'Fruit') {
      fruits[(objEntries[counter][0])] = (objEntries[counter][1]);
    };
  };

  console.log(fruits);

  return fruits
}

function selectFruit(produce) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {}

  for (let counter = 0; counter < productKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produce[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;

}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function doubleNumMutate(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    let currentNum = numbers[index]
    numbers[index] = currentNum * 2
  }

  return numbers

}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumMutate(myNumbers); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                

function doubleOddIndex(numbers) {
  let doubledOdd = []

  for (let index = 0; index < numbers.length; index++) {
    let currentNum = numbers[index];
    if (index % 2 === 1) {
      doubledOdd.push(currentNum * 2);
    } else {
      doubledOdd.push(currentNum);
    }
  }

  return doubledOdd
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndex(myNumbers));  // => [2, 4, 6, 14, 2, 6]
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]
*/

function multiply(numbers, multiplier) {
  let multiplied = [];
  
  for (let index = 0; index < numbers.length; index++) {
    let currentNum = numbers[index];
    multiplied.push(currentNum * multiplier);
  }

  return multiplied;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
