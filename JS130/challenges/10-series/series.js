class Series {
  constructor(stringDigits) {
    this.numArray = this._makeNumbers(stringDigits);
  }

  _makeNumbers(stringDigits) {
    let numArray = [];
    [].forEach.call(stringDigits, digit => numArray.push(Number(digit)));
    return numArray;
  }

  slices(sliceLength) {
    if (sliceLength > this.numArray.length) {
      throw new Error("Invalid Series Slice Length!");
    }

    let sliceArray = [];

    for (let start = 0; sliceLength <= this.numArray.length; start++) {
      sliceArray.push(this.numArray.slice(start, sliceLength));
      sliceLength++;
    }

    return sliceArray;
  }
}

module.exports = Series;