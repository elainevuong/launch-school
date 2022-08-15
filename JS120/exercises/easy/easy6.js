// Refactor these classes so they all use a common superclass, and inherit behavior as needed.

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getWheels() {
    return 4;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

class Motorcycle extends Car {
  getWheels() {
    return 2;
  }
}

class Truck extends Car {
  constructor(make, model, payload) {
    super(make, model)
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}