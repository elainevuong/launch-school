class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;

  }

  static numSides = 4;                         // Static Property on a Class Constructor Function (defined on the Constructor Function - Rectangle)

  static getDescription() {                      // Static Methods require a static keyword (defined on the Constructor Function - Rectangle)
    return 'A rectangle is a shape with 4 sides';
  }

  getArea() {                                    // instance methods do NOT require a keyword (defined on the Constructor's Object Prototype - Rectangle.prototype)
    return this.length * this.width;
  }
}

console.log(Rectangle.getDescription());        // logs: A rectangle is a shape with 4 sides
console.log(Rectangle.numSides);                // logs: 4