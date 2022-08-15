function hollowDiamond(number) {
  let numSpaces = Math.floor(number / 2);
  let numStars = 1;
  let numHollow = 0;

  while (numStars < number) {
    if (numStars === 1) {
      console.log(' '.repeat(numSpaces) + '*'.repeat(numStars));
      numStars += 2;
      numSpaces -= 1;
      numHollow += 1;
    } else {
      console.log(' '.repeat(numSpaces) + '*' + ' '.repeat(numHollow) + '*');
      numStars += 2;
      numHollow += 2;
      numSpaces -= 1;
    }
  }

  while (numStars > 0) {
    if (numStars === 1) {
      console.log(' '.repeat(numSpaces) + '*'.repeat(numStars));
      break;
    } else {
      console.log(' '.repeat(numSpaces) + '*' + ' '.repeat(numHollow) + '*');
      numStars -= 2;
      numHollow -= 2;
      numSpaces += 1;
    }
  }
}

hollowDiamond(3);
hollowDiamond(5);
hollowDiamond(7);
hollowDiamond(9);