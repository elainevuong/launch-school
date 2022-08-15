/* How Many?
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Example:

Copy Code
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

/*
Process the Problem
- Input - an array of elements
- Output - console output that logs each element and the number of occurrences
- Explicit Rules - words are CASE SENSITIVE ('suv' !== 'SUV')

Examples

Data Structures
- Array Iteration
- Object - keep track of the count of an element

Algorithm
- Initialize a new Object counter that will track the count of occurrences of an element
- Iterate through each of the elements in the array
  - If the element exists as a key in the Object, increment the count by 1
  - Else, if the element does NOT exist as a key in the Object counter, set the value to be 1
- Iterate through the entries in the Object, and for each entry
  - log the {key} => {count}
*/

// Case Sensitive
function countOccurrences(arr) {
  let counter = {}
  
  arr.forEach((elem) => {
    counter[elem] = counter[elem] + 1 || 1;
  });
              
  let objectEntries = Object.entries(counter)
  
  objectEntries.forEach((item) => {
    console.log(`${item[0]} => ${item[1]}`);
  });
    
}

// Case Insensitive
function countOccurrences1(arr) {
  let counter = {}
  
  arr.forEach((elem) => {
    elem = elem.toLowerCase()
    counter[elem] = counter[elem] + 1 || 1;
  });
              
  for (let key in counter) {
    console.log(`${key} => ${counter[key]}`);
  }
  
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'Truck'];

countOccurrences(vehicles);
countOccurrences1(vehicles);

// use for / in -> iterates through the KEYS of an object
// use for / in -> iterates through the INDICES of an array
// use for / of -> iterates through the VALUES of an array