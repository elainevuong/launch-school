/*
Write a function that takes an array of integers between 0 and 19 and 
returns an array of those integers sorted based on the English word 
for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, 
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, 
eighteen, nineteen

Do not mutate the argument.
*/

const NUM_TO_WORDS = `zero, one, two, three, four, five, six, seven, 
                      eight, nine, ten, eleven, twelve, thirteen, 
                      fourteen, fifteen, sixteen, seventeen, eighteen, 
                      nineteen`.replace(/\s/g, '').split(',');

function alphabeticNumberSort(numArray) {
  let sortedArray = numArray.slice();

  return sortedArray.sort((num1, num2) => {
    if (NUM_TO_WORDS[num1] < NUM_TO_WORDS[num2]) {
      return -1;
    } else if (NUM_TO_WORDS[num1] > NUM_TO_WORDS[num2]) {
      return 1;
    } else {
      return 0;
    }
  });

}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


/*
if a < b - return < 0 - sort a before b (sorts ascending)
if a > b - return > 0 - sort b before a (sorts ascending)

if a < b - return > 0 - sort b before a (sorts descending)
if a > b - return < 0 - sort a before b (sorts descending)

*/