/* 
1. Use a factory function to create pet objects. The factory should let us 
create and use pets like this: 


function createPet(animal, name) {
  return {
    animal,
    name,

    sleep() {
      console.log("I am sleeping")
    },

    wake() {
      console.log("I am awake");
    },
  }
}


let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake
*/

/* 
2. Use the OLOO pattern to create an object prototype that we can 
use to create pet objects. The prototype should let us create and use pets like this: 


let PetPrototype = {
  sleep: function() {
    console.log("I am sleeping");
  },

  wake: function() {
    console.log("I am awake");
  },

  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  }
}


let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake
*/

/* 3. Consider the objects created by the programs in problems 1 and 2. 
How do objects for the same animal differ from each other? */

/*
Objects created using the Factory Function Objection Creation Pattern 
contain a full copy of all the methods, whereas Objects created using the OLOO Pattern
do NOT contain own properties of the methods - they inherit their methods
from the PetPrototype Object.

The significant advantage of the OLOO pattern is memory efficiency - the methods
are only defined once on the PetPrototype Object, and can be accessed through
inheritance. This differs from the factory function object creation pattern,
where each instance object created has a full own copy of the methods.

The significant advantage of the factory pattern is that it lets us create
Objects with a private state.
*/