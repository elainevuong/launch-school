// Grade Book

/* Write a function that determines the mean (average) of the three scores 
passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for 
negative values or values greater than 100. */

function getGrade(mark1, mark2, mark3) {
  let average = (mark1 + mark2 + mark3) / 3

  if (average < 60) {
    return 'F'
  } else if (average < 70) {
    return 'D'
  } else if (average < 80) {
    return 'C'
  } else if (average < 90) {
    return 'B'
  } else {
    return 'A'
  } 
}

// Solutions allows for any number of grades to be passed in as arguments.

function getGrade(...grades){
  let average = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  return 'F';
}
/* 
function getGrade(...scores) {
  let average = Math.round([...scores].reduce((total, grade) => total + grade, 0)/
                    [...scores].length);
  
  if (average >= 90) {
    return 'A'; 
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
*/ 

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

console.log(getGrade1(95, 90, 93, 45, 9,));    // "A"
console.log(getGrade1(50, 50, 95, 100, 100, 100, 100));    // "D"