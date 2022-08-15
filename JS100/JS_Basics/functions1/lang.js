function extractLanguage(string) {
  return string.slice(0, 2);
  return string.split('_')[0];
}

function extractRegion(locale) {
  return locale.slice(3, 5);
}

function extractRegion(locale) {
  return locale.split('.')[0] // split by the period, return first
               .split('_')[1]; // split by the underscore, return second
}

function localGreet(locale) {
  let language = extractLanguage(locale)
  let region = extractRegion(locale)

  if (language === 'fr') {
    return 'Salut!';
  }

  /*
  if (region === 'US') {
    return 'Hey!';
  } else if (region === 'GB') {
    return 'Hello!'; 
  } else {
    return 'Howdy!';
  }
  */

  switch (region) {
    case 'US': return "Hey";
    case 'GB': return "Hello";
    default: return 'Howedy';
  }
}


console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'