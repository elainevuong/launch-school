// class
class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());  // logs ByeBye - we invoke the static method dupData defined on the Something function directly 
console.log(thing.dupData()); // logs HelloHello - we invoke the instance method of dupData on thing

// Constructor and Prototype

function Something() {
  this.data = 'Hello';
}

Something.prototype.dupData = function() {
  return this.data + this.data;
}

Something.dupData = function() {
  return 'ByeBye';
}

let thing = new Something();
console.log(Something.dupData());  // logs ByeBye - we invoke the static method dupData defined on the Something function directly 
console.log(thing.dupData()); // logs HelloHello - we invoke the instance method of dupData on thing