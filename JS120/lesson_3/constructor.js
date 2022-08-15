/* 
What does the following code log to the console? 
Try to answer without running the code. 
Can you explain why the code produces the output it does?

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);


Line 7 - 14 constitutes the object literal that the variable 
RECTANGLE references. 
The object contains two methods - an `area` method 
and a `perimeter` method

Lines 16 - 21 constitute a function Rectangle, which is a 
function declaration. 

On Line 23 - we create a new object, rect1 which is an instance of
the Rectangle constructor function

Within a function invocation for a creation of a new object, the
`this` keyword has an implicit execution context of the new object - 
in other words, `this` refers to the new object

Therefore, lines 19 - 
  `this.area` = creates a new property called `area` on the new object
  RECTANGLE.area() - invokes the area method on the RECTANGLE object
    - in this context, since RECTANGLE.area() is invoked using Method Call Syntax
    - the execution context is the calling object, which is RECTANGLE
    - since RECTANGLE does not have a property `width` or `height`, both of these
    - returned undefined
    - Mathematical Operations where undefined is an operand return NaN

Therefore, since we have assigned rect1.area and rect1.perimeter to NaN
Logging string representations of these properties should output NaN

LS
The value of this within the RECTANGLE.area and RECTANGLE.perimeter 
methods gets set to the RECTANGLE object when they are called. 
Since RECTANGLE doesn't define width and height properties, 
the property accesses both return undefined. Since mathematical 
operations on undefined produce a value of NaN, the return value 
of the methods is NaN.

*/

// 2. How would you fix the problem in the code from problem 1?

/* Elaine's First Option - 1
let RECTANGLE = {
  area: function(width, height) {
    return width * height;
  },
  perimeter: function(width, height) {
    return 2 * (width + height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area(width, height);
  this.perimeter = RECTANGLE.perimeter(width, height);
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);
*/

// Since we assign the width and height of the new object FIRST
// We can pass the new object as the explicit context by 
// using call or apply

// Solution with Call
/*
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);


// Solution with Apply
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.apply(this);
  this.perimeter = RECTANGLE.perimeter.apply(this);
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

3.
Write a constructor function called Circle that takes a radius as an 
argument. You should be able to call an area method on any objects 
created by the constructor to get the circle's area. 
Test your implementation with the following code:


function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2)
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false

What will the following code log to the console and why?

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());


On `line 169` we create a new object, which is an instance of the
Constructor `Ninja` and assign the variable `ninja` a reference to that
new object. `ninja` has a property `swung` that is set to a value `true`

At this point, since we have created the `ninja` object using
the Constructor function, `ninja` has an object prototype that references
the Constructor prototype object - specifically it references `Ninja.prototype`
Put another way, the `ninja` object inherits from `Ninja.prototype`

On lines 171-173 - we define a method `swingSword` on `Ninja.prototype`

Since `ninja` inherits from `Ninja.prototype` - any changes we make to `Ninja.prototype` 
affect the methods that `ninja` will inherit

As such, line 175 logs the value `true` to the console.

This code logs the value `true` to the console.

Although we define the `swingSword` method on the `Ninja.prototype` AFTER we have created `ninja`, 
this does not cause an error - this is because the `ninja` object **inherits** from `Ninja.prototype`. 

This is because we created the `ninja` object using the `Ninja` constructor. Objects created by 
constructor functions (i.e. by the `Ninja` constructor) set the **object prototype for the objects 
they create to refer to the constructor's prototype object.** This means that the created object 
`ninja` has an internal `[[Prototype]]` property (also referred to as its object prototype) which 
contains a **REFERENCE** to `Ninja.prototype` - therefore any changes made on `Ninja.prototype` 
affect the properties and methods that the inheriting objects (i.e. the instances) have the ability 
to access. 

Thus, when we define `swingSword` on `Ninja.prototype`, since the `ninja` object inherits from 
`Ninja.prototype` - this method becomes immediately available to the `ninja` object.


function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());


This code throws an error - specifically a `TypeError: ninja.swingSword is not a function`

On `line 5` - we create a new Object using the `Ninja` constructor, and a reference to that new object 
is what the variable `ninja` is initialized to.

Since the `ninja` object was created using constructor invocation, it inherits from the Constructor 
Prototype of `Ninja` 

On `lines 7-11` - we re-assign `Ninja.prototype` to an **entirely new object, instead of mutating the 
original prototype object. The object prototype for `ninja` object has NOT CHANGED - it still contains 
a reference to the *original prototype* *that was defined during the constructor's invocation. Since 
JavaScript cannot find the `swingSword` method in the prototype chain of `ninja`, it throws a 
`TypeError` and execution halts



// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function() {
  this.swung = true
  return this;
}

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`


// In this problem, we'll ask you to create a new instance of an object, without having 
// direct access to the constructor function:

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else

let ninjaB = new ninjaA.constructor();

ninjaA.constructor === ninjaB.constructor // => true
*/

/* 
Since a constructor is just a function, you can call it without the new operator. However, 
that can lead to unexpected results and errors, especially for inexperienced programmers. 
Write a constructor function that you can use with or without the new operator. 
The function should return the same result with either form. Use the code below to 
check your solution:
*/


function User(first, last){
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe