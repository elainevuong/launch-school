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

let rect = new Rectangle(4, 5);
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20




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

let rect = new Rectangle(4, 5);
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20




// OLOO
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

let rect = Object.create(rectanglePrototype).init(4, 5);
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20




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

let rect = rectangleFact(4, 5);
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20