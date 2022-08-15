const readline = require('readline-sync');
const MOVES = ['rock', 'paper', 'scissors'];

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  playAgain() {
    while (true) {
      console.log('Would you like to play again? (y/n)');
      let answer = readline.question();
      if (answer.toLowerCase()[0] === 'y') {
        return true;
      } else if (answer.toLowerCase()[0] === 'n') {
        return false;
      } else {
        console.log("That is not valid input. Please answer (y/n).")
      }
    }
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing! Goodbye.");
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
  
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
  
    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

};

/*
How do we make use of this factory function together with the createComputer and 
createHuman factory functions? It's not as straightforward as you might like, 
but here's how to do it with the createHuman factory:
*/

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer(); // All Players have Moves

  let computerObject = {
    choose() {
      let randomIndex = Math.floor(Math.random() * MOVES.length);
      this.move = MOVES[randomIndex];
    }
  }

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer(); // All Players have Moves

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question().toLowerCase();
        if (MOVES.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };
  return Object.assign(playerObject, humanObject);
}

RPSGame.play();

// Refactoring the `choose()` method
/* 
You'll notice that we have an if/else conditional in our choose method 
that does different things based on whether the player is a computer or 
a human. It's easy to see that we'll always have to deal with these two 
choices, even if we later extend the application in some manner.

The more significant problem, in this case, is that our factory function 
creates an object whose behavior depends on a property of that object. 
That doesn't seem troublesome when we create just two objects, 
but suppose we have tens, hundreds, or even thousands of objects. 
This approach rapidly becomes unfeasible and unmanageable.

Instead of a single factory function for all players, we can use two separate factory 
functions, one for humans and one for computers. Let's create the createComputer 
factory function first.

That's much better: it's cleaner, simpler, easier to understand, and easier to 
use since we don't need to provide arguments. 
It also reduces the likelihood of errors since we don't need to worry about 
invalid arguments. 
The choose method doesn't have to check whether the object it belongs to is a 
human or a computer: it is always a computer object, so it only has to handle 
the logic for computer moves. 

Though we now have an additional factory function, the logic of each function is 
more straightforward and more specific to its type.
*/

// Refactoring the move duplication for Computer & Human Objects
/*
There is some duplication between the two factory functions since both objects have a 
move property. Duplicating a single property in two objects isn't too concerning, but, 
suppose other properties require duplication. In OOP, sub-types often share multiple 
properties and methods. JavaScript provides some constructs that help extract such 
duplications to one place; we'll discuss them later when we talk about 
constructors, prototypes, and classes.

*/
