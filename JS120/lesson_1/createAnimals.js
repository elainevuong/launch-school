function createAnimal(animalType) {
  return {
    // omitted for brevity

    makeSound() {
      if (this.animalType === "lion") {
        console.log("roar!");
      } else if (this.animalType === "cat") {
        console.log("meow!");
      } else if (this.animalType === "dog") {
        console.log("bark!");
      } // additional tests omitted for brevity
    },

    // omitted
  }
}

/*
For instance, let's say we have a createAnimal factory function that creates animal 
objects of different kinds. Suppose further that, within those objects, we have a 
makeSound method that prints the name of the animal sound to the console. Obviously, 
animals make different sounds: lions roar, cats meow, and dogs bark. Are we supposed 
to handle all these sounds with if/else conditionals for each? That would make our 
code extremely ugly and difficult to read

Solution -> Class Inheritance
We can think of each animal type (dog, cat, lion) as a sub-type of the underlying 
animal object. Most object-oriented programming languages handle this scenario
with a pattern called class inheritance: child types inherit common properties and methods 
from a parent type. 

JavaScript also supports inheritance; we'll discuss that in another lesson. 
For now, we'll use separate factory functions for each sub-type.
*/