class Octal {
  constructor(stringNum) {
    this.base = stringNum;
  }

  toDecimal() {
    let numArr = [...this.base].reverse();
    if (numArr.every(char => this._isValid(char))) {
      return numArr.reduce((sum, number, index) => {
        sum += number * Math.pow(8, index);
        return sum;
      }, 0);
    } else {
      return 0;
    }
  }

  _isValid(char) {
    return '01234567'.includes(char);
  }
}

module.exports = Octal;