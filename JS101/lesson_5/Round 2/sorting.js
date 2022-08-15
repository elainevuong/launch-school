// Sort the words by the length of each word
/*
let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a, b) => {
  a = a.length;
  b = b.length;
  return a - b;
});

console.log(words);
sort ascending - 
if (a < b) -> true -> returns -1, place a before b
if (a > b) -> true -> returns +1, place b before a
else leave positions unchanged

sort descending - 
if (a < b) -> return  
*/

// We want to sort the players in ascending order of their total score.
let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
console.log(scores);

scores.sort((a, b) => {
  a = a.reduce((total, currNum) => {
    total += currNum;
    return total;
  }, 0);

  b = b.reduce((total, currNum) => {
    total += currNum;
    return total;
  }, 0);

  return a - b;
})

console.log(scores);