/* RPS is a two-player game where each player chooses one of three 
possible moves: rock, paper, or scissors. 
The winner is chosen by comparing their moves with the following rules:

Rock crushes scissors, i.e., rock wins against scissors.
Scissors cuts paper, i.e., scissors beats paper.
Paper wraps rock, i.e., paper beats rock.
If the players chose the same move, the game is a tie.

Nouns: player, move, rule
Verbs: choose, compare
*/
// Imports the `readline-sync` library
const readline = require('readline-sync');

/* 
The player objects, human and computer, are properties of the RPSGame object, 
we say that they collaborate with the RPSGame object. 
We can also say that they are collaborators of RPSGame. 

That also means that we can REFER to them with the **this** keyword in methods 
that execute in the RPSGame context.
*/
const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

  /*
  play() {
    this.displayWelcomeMessage();
    // Looking at the way we call the choose method in RPSGame.play(); the .choose() method
    // should ** adjust the state of the Player Object (either Human or the Computer) **
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    this.displayGoodbyeMessage();
  },
  */

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

// The game starts when we call the play method on the RPSGame object; 
// that method contains our procedural code.


// We probably need some state in the player object to identify the 
// type of player (human or computer).
/* 
You can use a shorthand notation when a property and a variable have the same name. 
For instance, in the above, title and author are both property names and variable names, 
so we can use the following simplified syntax of playerType
*/


function createPlayer(playerType) {
  return {
    playerType,
    move: null, // Initialize the first move to `null`

    choose() {
      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log('Please choose rock, paper, or scissors:');
          choice = readline.question();
          if (['rock', 'paper', 'scissors'].includes(choice)) break;
          console.log('Sorry, invalid choice.');
        }
        this.move = choice;
      } else { // it's the Computer, make a random choice
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },

    isHuman() {
      return this.playerType === 'human';
    }

  };
}

RPSGame.play();