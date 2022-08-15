/*
You call your spouse to inform his/her most precious 
item is gone! Given an object of stolen items, 
return the most expensive item on the list.


Notes
There will only be one most valuable item (no ties).
The object will always contain at least one item (no empty objects).
*/

function mostExpensiveItem(stolen) {
  return Object.keys(stolen).sort((a, b) => {
    if (stolen[a] > stolen[b]) {
      return -1;
    } else if (stolen[a] < stolen[b]) {
      return 1;
    } else {
      return 0;
    }
  })[0]
}

console.log(mostExpensiveItem({
  piano: 2000,
})); // returns "piano"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
})); // returns "tv"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
})); // returns "stereo"

/*
a > b - return -1 (sort a before b)
a < b - return 1 (sort b before a)
*/
