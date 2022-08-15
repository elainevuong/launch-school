/*
Time to call your lover to inform what he/she lost in the burglary.

Given an object of the stolen objects, return the 3rd most expensive item on the list. 
If that is not possible, because there are not enough items, return false.

All prices will be of different monetary values.
*/

function thirdMostExpensive(stolen) {
  if (Object.keys(stolen).length < 3) return false;

  return Object.keys(stolen).sort((a, b) => {
    if (stolen[a] > stolen[b]) {
      return -1;
    } else if (stolen[a] < stolen[b]) {
      return 1;
    } else {
      return 0;
    }
  })[2];
}

console.log(thirdMostExpensive({}));                                                 // returns false
console.log(thirdMostExpensive({ piano: 100, tv: 200 }));                            // returns false
console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 }));               // returns "stereo"
console.log(thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }));  // returns "mirror"

