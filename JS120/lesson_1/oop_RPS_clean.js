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
        console.log("That is not valid input. Please answer (y/n).");
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
  };

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