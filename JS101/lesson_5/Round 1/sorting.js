/* 
//Sort the following array by the lengths of each word?
let words = ['go', 'ahead', 'and', 'jump'];
words.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 'go', 'and', 'jump', 'ahead' ]

console.log(words);

let words1 = ['go', 'ahead', 'and', 'jump'];

words1.sort((a, b) => a.length - b.length);
console.log(words1);

let words2 = ['go', 'ahead', 'and', 'jump'];
words2.sort((a, b) => b.length - a.length);
console.log(words2);


// Expected Output: [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];
let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
});

console.log(scores)
*/ 
