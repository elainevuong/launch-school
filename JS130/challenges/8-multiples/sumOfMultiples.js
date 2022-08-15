class SumOfMultiples {
  constructor(...divisors) {
    this.divisors = (divisors.length > 0) ? divisors : [3, 5];
  }

  to(stopNumber) {
    let multiples = [];

    for (let start = 1; start < stopNumber; start++) {
      if (this.divisors.some(divisor => this.isMultiple(start, divisor))) {
        multiples.push(start);
      }
    }

    return multiples.reduce((total, num) => total + num, 0);
  }

  isMultiple(start, divisor) {
    return start % divisor === 0;
  }

  static to(stopNumber) {
    let num = new SumOfMultiples();
    return num.to(stopNumber);
  }
}

module.exports = SumOfMultiples;

/*
Our constructor needs to check for an empty argument list -- if it is empty, 
we default to [3, 5] as the list of multiples. Note that JavaScript doesn't 
let us use a default parameter with a rest parameter.

We can see from the provided test suite that we need to provide a to method 
to objects of the SumOfMultiples class as well as a static to method. Our 
static to method first instantiates a new SumOfMultiples object, then 
leverages the instance method to.

Our helper method, anyMultiple iterates through our multiples to determine 
whether the Number argument is evenly divisible by any multiple. We use 
the built-in array.prototype.some() method, which returns a boolean
*/