/*
Based on your perception of how the fight went, determine who won.

Given an object with three rounds, with nested objects as your points per round, 
determine the winner by counting who won the most rounds. The winner of the round 
is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.

If you won more rounds than your spouse, return "ME!"
If your spouse won more rounds, return "SPOUSE!"
If you are tied, return "NOBODY!"
*/

function determineWinnerOfFight(roundObject) {
  let score = 0;
  Object.keys(roundObject).forEach(round => {
    let currentRound = roundObject[round];
    if (currentRound.me > currentRound.spouse) {
      score += 1;
    } else if (currentRound.me < currentRound.spouse) {
      score -= 1;
    }
  });

  console.log(score);

  if (score > 0) {
    return 'ME!';
  } else if (score < 0) {
    return 'SPOUSE!';
  } else {
    return 'NOBODY!';
  }
}

console.log(determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
})); // logs "NOBODY!"


console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
})); // logs "SPOUSE!"