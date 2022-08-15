/*
The insurance guy tells you he needs an updated list of the stolen goods, and 
surely only to annoy you, he adds, "in reverse alphabetical order".

Given an object with the stolen items, return a new object with the list 
in reverse alphabetical order.
*/

function sortList(obj) {
  let sortedKeys = Object.keys(obj).sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });

  let newObject = {};

  sortedKeys.forEach(key => newObject[key] = obj[key]);

  return newObject;
}

console.log(sortList({ c: 100, a: 50, b: 10, d: 50 }));           // returns { d: 50, c: 100, b: 10, a: 50 }
console.log(sortList({ ab: 10, ac: 10, ad: 10 }));                // returns { ad: 10, ac: 10, ab: 10 }
console.log(sortList({ piano: 5, stereo: 10, suitcase: 1 }));     // returns { suitcase: 1, stereo: 10, piano: 5 }