/*
Process the Problem
In this exercise you will define your own set type. 
How it works internally doesn't matter, as long as it 
behaves like a set of unique elements that can be 
manipulated in several well defined ways.

In some languages, including Ruby and JavaScript, 
there is a built-in Set type. For this problem, 
you're expected to implement your own custom set 
type. Once you've reached a solution, feel free to 
play around with using the built-in implementation of Set.

Explicit Requirements: all elements of a set must be numbers.

Examples and Test Cases
Methods
  empty - returns true if the set contains no elements
  contains: sets can report if they contain an element"



Data Structures
Algorithm
*/
function isUnique(array) {
  return array.reduce((uniqueElems, value) => {
    if (!uniqueElems.includes(value)) {
      uniqueElems.push(value);
    }

    return uniqueElems;
  }, []);
}

class CustomSet {
  constructor(elements = []) {
    this.elements = isUnique(elements);
  }

  isEmpty() {
    return this.elements.length === 0 ? true : false;
  }

  contains(element) {
    if (this.isEmpty()) return false;
    return this.elements.includes(element) ? true : false;
  }

  isSubset(otherSet) {
    if (this.isEmpty()) return true;
    return this.elements.every(elem => otherSet.contains(elem)) ? true : false;
  }

  isDisjoint(otherSet) {
    return this.elements.every(elem => !otherSet.contains(elem));
  }

  isSame(otherSet) {
    if (this.elements.length !== otherSet.elements.length) return false;
    return this.isSubset(otherSet);
  }

  // Why Do We Need to Return `this`?
  add(element) {
    if (!this.contains(element)) {
      this.elements.push(element);
    }

    return this;
  }

  intersection(otherSet) {
    let sameElements = this.elements.filter(elem => otherSet.contains(elem));
    return new CustomSet(sameElements);
  }

  difference(otherSet) {
    let differentElements =
      this.elements.filter(elem => !otherSet.contains(elem));
    return new CustomSet(differentElements);
  }

  union(otherSet) {
    let unionSet = new CustomSet(this.elements);
    otherSet.elements.forEach(elem => unionSet.add(elem));
    return unionSet;
  }
}

module.exports = CustomSet;