// If we have a Car class and a Truck class, how can you use the Speed object 
// as a mix-in to make them goFast? How can you check whether your Car or Truck 
// can now go fast?

/* 
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}


// Solution
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);

// Testing that we can make our cars and trucks go fast is simple; all we 
// must do is call goFast on a car or truck object:

let blueTruck = new Truck();
blueTruck.goFast(); // => logs "I'm a Truck and going super fast!"

let smallCar = new Car();
smallCar.goFast(); // => logs "I'm a Car and going super fast!"

'goFast' in smallCar;  // => true
'goFast' in blueTruck; // => true

/* Speed is a Constant Object that defines a method goFast()
The Car Class has a method goSlow() and the Truck Class has a method goVerySlow()

Line 38 - MUTATES the Object `Car.prototype` and mixes in the Speed Object, which
contains the method goFast()

Line 46 - MUTATES the Object `Truck.prototype` and mixes in the Speed Object,
which contains the method goFast()

All instances of Car and all instances of Truck can now goFast - this is because
the goFast() method is mixed in with `Car.prototype` and `Truck.prototype`

Recall - when we use a Constructor Function to create new objects,
the new objects Prototype Object (the internal `[[Prototype]]` Property)
refers to the Constructor Function's Prototype 
  - For example, the instance smallCar has its [[Prototype]] made to refer to
  - Car.prototype, and since Car.prototype was mutated with Object.assign()
  - Car.prototype contains the method goFast(), because it was copied
  - from the Speed object

  smallCar Object Prototype === Car Constructor Prototype
  smallCar Object Prototype - refers to the same object as Car Constructor Prototype
    smallCar Object Prototype has ITS OWN PROPERTY which is Speed
  smallCar INHERITS Car.prototype, then goFast in smallCar; AND goSlow in smallCar
*/

/*
console.log(Object.getPrototypeOf(smallCar) === Car.prototype);        // returns true
console.log(Car.prototype.hasOwnProperty('goSlow'));                   // returns true
console.log(Car.prototype.hasOwnProperty('goFast'));                   // returns true
console.log(Object.keys(Car.prototype));                               // returns `[ 'goFast' ]` - this is an ENUMERABLE property 
console.log(Object.getOwnPropertyNames(Car.prototype));  // returns `[ 'constructor', 'goSlow', 'goFast' ]` - all properties of `Car.prototype`
console.log(Object.getPrototypeOf(smallCar).constructor);                  // returns [class Car]
console.log(Object.getPrototypeOf(smallCar).constructor.name);             // returns Car
console.log(smallCar instanceof Car);                                      // returns true
console.log(smallCar.constructor)                                          // returns [class Car]
console.log(smallCar.constructor === Object.getPrototypeOf(smallCar).constructor); // returns true


console.log(Object.getPrototypeOf(smallCar) === Car.prototype);        // returns true
console.log(Car.prototype.hasOwnProperty('goSlow')); // returns true
console.log(Car.prototype.hasOwnProperty('goFast')); // returns true
console.log(Object.keys(Car.prototype));             // returns `[ 'goFast' ]` - this is an ENUMERABLE property 
console.log(Object.getOwnPropertyNames(Car.prototype));  // returns `[ 'constructor', 'goSlow', 'goFast' ]` - all properties of `Car.prototype`
console.log(smallCar.constructor);                  // returns [class Car]
console.log(smallCar.constructor.name);             // returns Car
console.log(smallCar instanceof Car);                                      // returns true
*/

/*
1. Ben and Alyssa are working on a vehicle management system. 
Thus far, they have created classes named `Auto` and `Motorcycle` 
to represent automobiles and motorcycles. After they noticed that the 
information and calculations performed was common to both vehicle types, 
they decided to break out the commonality into a separate class named `WheeledVehicle`.

Their boss now wants them to incorporate a new type of vehicle: a `Catamaran`. 
This new class doesn't fit well with our existing class hierarchy: Catamarans 
don't have tires, and aren't wheeled vehicles. However, we still want to share 
the code for tracking fuel efficiency and range. Modify the class definitions 
and move code into a mix-in, as needed, to share code between the `Catamaran` 
and the wheeled vehicle classes.
*/

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }

  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}


/*
const Moveable = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  }
};

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Moveable);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, Moveable);
*/

const Moveable = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  }
}

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Moveable); // Adds the `range() method to WheeledVehicle.prototype


class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, Moveable); // Adds the `range() method to Catamaran.prototype