/*
The insurance guy calls. They were about to pay you all that fortune you've been 
anxiously waiting for, but they detected further irregularities; the list of stolen 
items is misformatted and appears to contain other entries that don't belong there. Find and remove them.

You receive an object with nested objects with strings as values. 
Convert their values to number and return an object without the entries that evaluate to NaN.

The type of NaN is actually number.
*/
function findAndRemove(object) {
  Object.keys(object).forEach(key => {
    room = object[key];

    Object.keys(room).forEach(innerkey => {
      let converted = Number(room[innerkey]);
      if (Number.isNaN(converted)) {
        delete room[innerkey];
      } else {
        room[innerkey] = converted;
      }
    })
  })

  return object;
}


console.log(findAndRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "vet",
      travel: "world",
    },
  })); 
  
  /* 
  returns {
    bedroom: {
      slippers: 10000,
      piano: 5500,
    },
  }
  */


console.log(findAndRemove({
    kitchen: {
      ["gold spoons"]: "900",
      piano: "550",
      notes: "ga0r76ba22g4e",
    },
    cellar: {
      reminder: "dog",
      bottle: "750",
    },
}));
  
/* returns 
  {
    kitchen: {
      ["gold spoons"]: 900,
      piano: 550,
    },
    cellar: {
      bottle: 750,
    },
  }
*/