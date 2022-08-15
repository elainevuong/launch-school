/*
The police call. They need a more detailed list of the stolen goods.

You are given an array with nested arrays that represent each room in your 
mansion where the goods were stolen. Each room will have two sub-arrays, 
one for the stolen items and the other for its values. 
They always match, the stolen item at index 0 is worth the value at index 0 of the values array, 
the stolen item at index 1 is worth the value at index 1, and so forth. 
Look at the example for a clearer picture.

Return an object that represents where the goods were stolen from and which goods were stolen from each room and their value.
*/

function makeDetailedList(listArray) {
  return listArray.reduce((house, room) => {
    let key = room[0]
    let values = makeRoomItems(room[1], room[2]);
    house[key] = values;
    return house;
  }, {});
}

function makeRoomItems(items, values) {
  return items.reduce((itemValueObj, item, index) => {
    itemValueObj[item] = values[index];
    return itemValueObj;
  }, {});
}

console.log(makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]])); // returns { kitchen: { piano: 1000, tv: 50 } }
console.log(makeDetailedList([
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
]));

/* returns 
{
  basement: {
    "baseball bat": 500
  },
  garage: {
    horses : 110,
    cadillac: 2000,
    flowers: 30
  }
}
*/