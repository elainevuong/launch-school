// class
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  
  getWidth() { return this.width };
  getLength() { return this.length };
  getArea() { return this.width * this.length };
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side)
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25


// Constructor & Prototype
function Rectangle(width, length) {
  this.width = width;
  this.length = length;
}

Rectangle.prototype.getWidth = function() {
  return this.width;
}

Rectangle.prototype.getLength = function() {
  return this.length;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
}

function Square(side) {
  Rectangle.call(this, side, side);
}

Square.prototype = Object.create(Rectangle.prototype);

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

// OLOO (Prototypal Inheritance)
let rectanglePrototype = {
  getWidth() {
    return this.width;
  },
  
  getLength() {
    return this.length;
  },
  
  getArea() {
    return this.width * this.length;
  },
  
  init(width, length) {
    this.width = width;
    this.length = length;
    return this;
  }
}

let squarePrototype = Object.create(rectanglePrototype);

squarePrototype.init = function(side) {
  this.width = side;
  this.length = side;
  return this;
}

let square = Object.create(squarePrototype).init(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

// Factory Function
function rectangleFact(width, length) {
  return {
    width,
    length,
    getWidth() {
      return this.width;
    },
  
    getLength() {
      return this.length;
    },
  
    getArea() {
      return this.width * this.length;
    },
  }
}

function squareFact(side) {
  return rectangleFact(side, side);
}

let square = squareFact(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25