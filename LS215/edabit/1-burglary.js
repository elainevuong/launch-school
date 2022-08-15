/*
You just returned home to find your mansion has 
been robbed! Given an object of the stolen items, 
return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
*/

function lostValue(stolenItems) {
  if (Object.keys(stolenItems).length === 0) return 'Lucky you!'

  return Object.keys(stolenItems).reduce((total, key) => {
    total += stolenItems[key];
    return total;
  }, 0);
}

const stolenItems1 = {
  tv: 30,
  skate: 20,
  stereo: 50,
} 

const stolenItems2 = {
  painting: 20000,
} // 20000

const stolenItems3 = {} // "Lucky you!"

console.log(lostValue(stolenItems1)); // logs 100
console.log(lostValue(stolenItems2)); // logs 20000
console.log(lostValue(stolenItems3)); // logs 'Lucky you!'