class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(matchArray) {
    return matchArray.filter(matchWord => {
      matchWord = matchWord.toLowerCase();
      if (matchWord === this.word) return false;
      let sortedMatch = matchWord.split('').sort().join('');
      let sortedWord = this.word.split('').sort().join('');
      return sortedMatch === sortedWord;
    });
  }
}

module.exports = Anagram;


/* Launch School Solution
class Anagram {
  constructor(word) {
    this.matchWord = word.toLowerCase();
  }

  match(wordList) {
    return wordList.filter(word => {
      return word.toLowerCase() !== this.matchWord &&
             this.isAnagram(word, this.matchWord);
    });
  }

  sortedChars(word) {
    return word.toLowerCase().split('').sort();
  }

  isAnagram(word1, word2) {
    word1 = this.sortedChars(word1).join();
    word2 = this.sortedChars(word2).join();
    return word1 === word2;
  }
}

module.exports = Anagram;

In the constructor, we convert the argument string to lowercase with 
toLowerCase() and assigned it to the property matchWord.

Our match method uses filter to select the anagrams from its argument 
array. First, we make sure not to select any words that are an exact 
match to our matchWord. Next, in order to select the appropriate words, 
we use a helper method-- isAnagram. The isAnagram method uses a 
helper method of its own, sortedChars, to split each word into an 
array of characters and sorts them. Finally, we join the returned 
array back into a string and compare the two strings for equality 
using ===.

*/