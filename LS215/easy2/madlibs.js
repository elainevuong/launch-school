const readline = require('readline-sync');

function madLib() {
  let partsOfSpeech = ['noun', 'verb', 'adjective', 'adverb'];
  let userChoices = [];

  partsOfSpeech.forEach(part => {
    let choice = readline.question(`Enter the ${part}: `);
    userChoices.push(choice);
  });

  let [noun, verb, adjective, adverb] = userChoices;
  let sentence = `Do you ${verb} your ${adjective} ${noun} ${adverb}?` +
    " That's hilarious!";
  return sentence;
}

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);