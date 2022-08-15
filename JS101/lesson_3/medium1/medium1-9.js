function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

/*
(rps (rps  (rps("rock", "paper"), rps("rock", "scissors")),   "rock"));
(rps (rps  ('paper', 'rock')), 'rock'));
(rps ('paper', 'rock'));
returns 'paper'

The outermost call determines the result of comparing rps(rps("rock", "paper"), rps("rock", "scissors")) against rock. That means that we must evaluate the two separate calls, rps("rock", "paper") and rps("rock", "scissors"), and combine them by calling rps on their results. Those innermost expressions return "paper" and "rock", respectively. Calling rps on those two values returns "paper", which, when evaluated against "rock", returns "paper".
*/