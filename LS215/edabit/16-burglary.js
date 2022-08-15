/*
And who cursed the most in the fight between you and your spouse?

Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most:

If you, return "ME!"
If your spouse, return "SPOUSE!"
If a draw, return "DRAW!"
*/

function determineWhoCursedTheMost(argumentObject) {
  let myTotal = 0;
  let spouseTotal = 0;

  Object.keys(argumentObject).forEach(round => {
    let roundResults = argumentObject[round];
    myTotal += roundResults['me'];
    spouseTotal += roundResults['spouse'];
  })

  if (myTotal > spouseTotal) {
    return "ME!";
  } else if (spouseTotal > myTotal) {
    return "SPOUSE!";
  } else {
    return "DRAW!";
  }
}

determineWhoCursedTheMost({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 10,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}) // logs "DRAW!"


determineWhoCursedTheMost({
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
}) // logs "ME!"


determineWhoCursedTheMost({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 44,
  },
  round3: {
    me: 10,
    spouse: 55,
  },
}) // logs "SPOUSE!"