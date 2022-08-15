class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let minLength = Math.min(otherStrand.length, this.strand.length)

    let difference = 0;
    for (let index = 0; index < minLength; index ++) {
      if (otherStrand[index] !== this.strand[index]) {
        difference += 1;
      }
    }

    return difference;
  }
}

module.exports = DNA;