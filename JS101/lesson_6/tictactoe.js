// Import Libraries
let readlineSync = require('readline-sync');

// Prepare Functions
function displayBoard(board) {
  // Displays the tictactoe board
  // Accepts a board object, and logs a visual depication of a tictactoe board
  // displayBoard does not return anything
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square ++) {
    board[String(square)] = ' ';
  }

  return board;
}

function initializeBoard() {
  // Initializes an empty tictactoe board 
  // Accepts no arguments, and returns a blank board
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

function prompt(message) {
  console.log(`>>> ${message}`);
}

function playerTurn(board) {
  let userSquare;

  while (true) {
    prompt(`Choose a square from 1 to 9\n
    1 is the top-left
    2 is the top-middle
    3 is the top-right 
    4 is the mid-left
    5 is the center
    6 is the mid-right 
    7 is the bottom-left
    8 is the bottom-middle 
    9 is the bottom-right`);
    userSquare = readlineSync.question()

    // Check that the User Enters a Number
    if (!(Object.keys(board).includes(userSquare))) {
      console.log("You must enter a Number. Please try again!");
      continue;
    }

    // Check that the Board Position is Free
    if (board[userSquare] !== ' ') {
      console.log("That square is already taken. See the board below. Please choose a free square!");
      displayBoard(board);
      continue;
    }

    break;
  }

  board[userSquare] = 'X';
}


// Main Program Below
// Step 1 - Display and Empty tictactoe board
let board = initializeBoard(); // board is a global variable*
displayBoard(board)
playerTurn(board);
displayBoard(board)
// Step 2 - Ask the User to Mark a Square

