/*
Write a simple linked list implementation. The linked list is a fundamental 
data structure in computer science, often used in the implementation of 
other data structures.

The simplest kind of linked list is a singly linked list. Each element 
in the list contains data and a "next" field pointing to the next 
element in the list of elements. This variant of linked lists is 
often used to represent sequences or push-down stacks (also called a 
  LIFO stack; Last In, First Out).

Let's create a singly linked list whose elements may contain a 
range of data such as the numbers 1-10. Provide functions to reverse 
the linked list and convert a linked list to and from an array.

Process the Problem
We'll be making a singly linked list. 
This means that each element in the list does not need to 
have information about any other element in the list except 
for the next element.
Each element in the list contains data (a value) and a next 
field that points to the next element in the list of elements.
The elements of our linked list may contain any data values.
We'll need a method that reverses a linked list, as well as 
methods that convert a linked list to and from an array.
We may need to also write several helper methods.

*/
class Element {
  constructor(datumVal, nextElement) {
    this.datumVal = datumVal;
    this.nextEl = nextElement;
  }

  datum() {
    return this.datumVal;
  }

  next() {
    return this.nextEl || null;
  }

  isTail() {
    return !this.next();
  }
}

class SimpleLinkedList {
  static fromArray(array) {
    array = array || [];

    let list = new SimpleLinkedList();
    [...array].reverse().forEach(elem => list.push(elem));
    return list;
  }

  head() {
    return this.headEl || null;
  }

  size() {
    let size = 0;
    let currElement = this.head();

    while (currElement) {
      size += 1;
      currElement = currElement.next();
    }

    return size;
  }

  isEmpty() {
    return !this.head();
  }

  push(datum) {
    let element = new Element(datum, this.head());
    this.headEl = element;
  }

  peek() {
    let head = this.head();
    return head ? head.datum() : null;
  }

  pop() {
    let datum = this.peek();
    let newHead = this.head().next();

    this.headEl = newHead;
    return datum;
  }

  toArray() {
    let array = [];

    let currentElem = this.head();
    while (currentElem !== null) {
      array.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return array;
  }

  reverse() {
    let list = new SimpleLinkedList();

    let currentElem = this.head();
    while (currentElem !== null) {
      list.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return list;
  }


}

module.exports = { 
  Element,
  SimpleLinkedList
}