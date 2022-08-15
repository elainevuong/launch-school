const LETTER_NUM_OBJ = {
  a: 'z', b: 'y', c: 'x', d: 'w', e: 'v', f: 'u', g: 't',
  h: 's', i: 'r', j: 'q', k: 'p', l: 'o', m: 'n', n: 'm',
  o: 'l', p: 'k', q: 'j', r: 'i', s: 'h', t: 'g', u: 'f',
  v: 'e', w: 'd', x: 'c', y: 'b', z: 'a', 1: '1', 2: '2',
  3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
};

function encode(string) {
  let encoded = '';
  string.toLowerCase().split('').forEach((char) => {
    if (LETTER_NUM_OBJ[char]) {
      encoded += LETTER_NUM_OBJ[char];
    }
  });

  if (encoded.length > 5) {
    let longEncoded = '';
    for (let start = 0; start < encoded.length; start += 5) {
      let end = start + 5;
      let currSlice = encoded.slice(start, end);
      longEncoded += currSlice + ' ';
    }
    return longEncoded.trimEnd();
  }

  return encoded;
}

module.exports = encode;