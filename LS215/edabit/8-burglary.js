/*
Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in 
Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.

The object will contain at least two items.
Preferably, mutate the copy, not the original.
*/

function removeEntry(object, item){
  let copy = {...object};
  delete copy[item];
  return copy;
}

console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate")); // returns { piano: 300, tv: 100 }
console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"));      // returns { painting: 1 }