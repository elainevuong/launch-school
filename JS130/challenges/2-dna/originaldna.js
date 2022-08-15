class DNA {
  constructor(DNA) {
    this.DNA = DNA;
  }

  hammingDistance(otherDNA) {
    let minLength = Math.min(otherDNA.length, this.DNA.length);
    let distance = 0;

    for (let index = 0; index < minLength; index += 1) {
      if (this.DNA[index] !== otherDNA[index]) {
        distance += 1;
      }
    }

    return distance;
  }
}

module.exports = DNA;