/* 
Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).
*/
function isEnd(word) {
  let punctuation = ['.', '!', '?']
  for (let ending of punctuation) {
    if (word.endsWith(ending)) return true;
  }
  return false;
}

function longestSentence(sentence) {
  let wordArr = sentence.split(' ');
  
  let endingArr = [0]
  
  wordArr.forEach((word, index) => {
    if (isEnd(word)) {
      endingArr.push(index + 1);
    }
  });
  
  let sentenceLength = 0;
  let stop;
  for (let ind = 0; ind < endingArr.length - 1; ind++) {
    let difference = endingArr[ind + 1] - endingArr[ind]
    if (difference > sentenceLength) {
      sentenceLength = difference;
      stop = endingArr[ind + 1];
    }
  }
  
  let start = endingArr[endingArr.indexOf(stop) - 1]

  console.log(wordArr.slice(start, stop).join(' '));
  console.log(`The longest sentence has ${sentenceLength} words.`);

}

// Other Solution
function longestSentence(str) {
  let sentences = [];
  let startSlice = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    if ('!?.'.includes(str[idx])) {
      sentences.push(str.slice(startSlice, idx + 1).split(' '));
      startSlice = idx + 2;
    }
  }

  sentences.sort((a, b) => b.length - a.length);
  console.log(sentences[0].join(' '))
  console.log('\n' + `The longest sentence has ${sentences[0].length} words.`);
}


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = 
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.' +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';


console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.


console.log(longestSentence(longerText));
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.


console.log(longestSentence("Where do you think you're going? What's up, Doc?"));
// Where do you think you're going?
//
// The longest sentence has 6 words.

console.log(longestSentence("To be or not to be! Is that the question?"));
// To be or not to be!
//
// The longest sentence has 6 words.