class PerfectNumber {
  static classify(number) {
    if (number < 1) {
      throw new Error("Invalid Negative Number!");
    }

    let aliquot = this.getAliquot(number);

    if (aliquot > number) {
      return 'abundant';
    } else if (aliquot < number) {
      return 'deficient';
    } else {
      return 'perfect';
    }
  }

  static getAliquot(number) {
    let aliquot = 0;
    for (let divisor = 1; divisor < number; divisor++) {
      if (number % divisor === 0) {
        aliquot += divisor;
      }
    }
    return aliquot;
  }
}

module.exports = PerfectNumber;

/*
By looking at the test cases, we could see that we needed to define a 
static method, classify(). In the classify() method we first 
handle invalid arguments, raising an error if the number argument 
is less than 1.

We chose to also define a helper method, sumOfFactors() to 
handle the logic of selecting and summing all factors of the 
number we are classifying. Within the helper method sumOfFactors(), 
we iterate from 1 up to one less than the given number. We select 
the numbers from this range by which number could be evenly divided 
and add them to sum, which is returned from the method.

Within the classify() method, we compare the value of sum to the 
value of the number that we are classifying. We use an if statement 
to return the appropriate string based on the result of comparing 
sum to number
*/