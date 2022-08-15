function Foo() {};
Foo.prototype.greet = function () {console.log('Hi!')};

function Bar() {};
Bar.prototype.greet = function () {console.log('Hello!')};

let objA = new Foo();

console.log(objA instanceof Foo); // returns true
console.log(objA instanceof Object); // returns true
console.log(objA.constructor);    // returns [Function: Foo]

// Changing the prototype.constructor on the Foo Function
Foo.prototype.constructor = Bar;

console.log(objA instanceof Foo); // returns true
console.log(objA.constructor);    // returns [Function: Bar]

/* Line 18 - this proves that changing the prototype.constructor property
affects the 'constructor' property on the instance */

// instanceof - instanceof looks at the Object referenced in [[Prototype]]
objA.__proto__ = Bar.prototype;

console.log(objA instanceof Foo); // returns false
console.log(objA instanceof Bar); // returns true

/* Line 26 - this proves that changing the __proto__ or the Internal [[Prototype]] Property
of instances affects the instanceof Operator */