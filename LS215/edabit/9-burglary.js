/*
The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't 
dignify your status you said at the time. Given an object with a list of the stolen items, 
return a copy of that list without the values below 5000.
*/

function coverage(stolen) {
  if (Object.keys(stolen).length === 0) return {};

  return Object.keys(stolen).reduce((newObj, key) => {
    if (stolen[key] >= 5000) {
      newObj[key] = stolen[key];
    }
    return newObj;
  }, {});
}

console.log(coverage({}));                                    // returns {}
console.log(coverage({ tv: 4999, guitar:5000, fork: 5001 })); // returns { guitar:5000, fork: 5001 }
console.log(coverage({ tv: 4999 }));                          // returns {}
console.log(coverage({ guitar: 5000 }));                      // returns { guitar: 5000 }   
