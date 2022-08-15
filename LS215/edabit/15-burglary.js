/*
To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.
Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.
*/

function countNumberOfOccurrences(fightingObject) {
  return Object.keys(fightingObject).reduce((countObj, key) => {
    key = fightingObject[key];
    if (key in countObj) {
      countObj[key] += 1;
    } else {
      countObj[key] = 1;
    }
    return countObj;
  }, {});
}

console.log(countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
})); // returns { moron: 2, scumbag: 1, idiot: 2 }


console.log(countNumberOfOccurrences({
  a: "moron",
  b: "moron",
  c: "moron"
})); // returns { moron: 3 }


console.log(countNumberOfOccurrences({
  a: "idiot",
  b: "scumbag"
})); // returns { idiot: 1, scumbag: 1 }