'Captain Ruby'.replace('Ruby', 'JavaScript');

'Captain Ruby'.substring(0, 8) + 'JavaScript';

'Captain Ruby'.split(' ')[0] + ' JavaScript';

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

// Example:
console.log(greet('sv'));