/*
The diamond exercise takes as its input a letter, and outputs it in a diamond shape. 
Given a letter, it prints a diamond starting with 'A', with the supplied letter 
at the widest point.

The first row contains one 'A'.
The last row contains one 'A'.
All rows, except the first and last, have exactly two identical letters.
The diamond is horizontally symmetric.
The diamond is vertically symmetric.
The diamond has a square shape (width equals height).
The letters form a diamond shape.
The top half has the letters in ascending order.
The bottom half has the letters in descending order.
The four corners (containing the spaces) are triangles.
*/

/*
Process the Problem
- Create a Diamond of Letters based on the Input Letter Received
  - first row - contains one 'A'
  - last row - contains one 'A'
  - All Rows, except the first/last, have exactly two identical letters
  - Diamond is Horizontally and Vertically Symmetric
  - Diamond has a Square Shape (width equals heigth)
  - Letters form a Diamond Shape
  - Top Half has the Letters in Ascending order
  - Bottom Half has the Letters in Descending Order
  - Four Corners (containing the spaces) are Triangles

Examples/Test Cases + Required:
  - Create a Diamond Class
    - Static Method - makeDiamond(letter) - accepts a letter
    Rules of the makeDiamond Method:
        - Input - accepts one argument, a letter
        - Output - return a Diamond based on the Input Letter
      Other Rules:
        - Diamond always begins and ends with the letter A
        - Second Row - B - has One Space between the Letters
        - Following Rows - All subsequent rows have an additional 2 spaces between 
          letters compared to the previous row.
        - Width Preservation - We need to preserve the width of the longest row in the 
        shorter rows. That is, if "E" is the longest row and is 9 characters long, 
        the A row needs to be 9 characters long also.
*/

class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static maxLineLength(letter) {
    let indexPosition = this.alphabet.indexOf(letter.toUpperCase()) + 1;
    return indexPosition * 2 - 1
  }

  static generateLetters(letter) {
    let indexPosition = this.alphabet.indexOf(letter.toUpperCase()) + 1;
    return this.alphabet.slice(0, indexPosition).split('');
  }

  static makeDiamond(letter) {
    let lineLength = this.maxLineLength(letter);
    let letters = this.generateLetters(letter);
    let answer = '';
    let midPoint = Math.floor(lineLength / 2);

    let blankString = ' '.repeat(lineLength)
    let string;
    for (let index = 0; index < lineLength; index += 1) {
      let string = blankString;
      string = blankString.slice(0, midPoint) + letters[index] + blankString.slice(midPoint, lineLength);
      console.log(string);
    }
    
    return string;
  }
}

console.log(Diamond.makeDiamond('c'));