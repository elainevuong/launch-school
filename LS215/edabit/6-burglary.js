/*
You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. 
Given an object with at least one key/value pair, convert all the values to numbers.
*/
 
function convertToNumber(stolen) {
  return Object.keys(stolen).reduce((newObj, key) => {
    newObj[key] = Number(stolen[key]);
    return newObj;
  }, {});
}

console.log(convertToNumber({ piano: "200" }));                           // returns  { piano: 200 }
console.log(convertToNumber({ piano: "200", tv: "300" }));                // returns  { piano: 200, tv: 300 }
console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" })); // returns  { piano: 200,