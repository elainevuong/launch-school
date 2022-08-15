class Triangle {
  constructor(side1, side2, side3) {
    let sides = [side1, side2, side3].sort((a, b) => b - a);
    if ((sides.every(side => side > 0)) && (sides[0] < sides[1] + sides[2])) {
      this.largest = sides[0];
      this.middle = sides[1];
      this.smallest = sides[2];
    } else {
      throw new Error("Invalid Triangle!");
    }
  }

  kind() {
    if (this.largest === this.middle && this.largest === this.smallest) {
      return 'equilateral';
    } else if (this.largest === this.middle || this.middle === this.smallest) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;