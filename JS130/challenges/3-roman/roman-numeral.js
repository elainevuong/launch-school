/*

Write some code that converts modern decimal numbers into their Roman 
number equivalents.

The Romans were a clever bunch. They conquered most of Europe and ruled 
it for hundreds of years. They invented concrete and straight roads and 
even bikinis. One thing they never discovered though was the number zero. 
This made writing and dating extensive histories of their exploits 
slightly more challenging, but the system of numbers they came up 
with is still in use today. For example the BBC uses Roman numerals 
to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. Notice 
that these letters have lots of straight lines and are hence easy to 
hack into stone tablets.

 1  => I
10  => X
 7  => VII
 
There is no need to be able to convert numbers larger than about 3000. 
(The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by 
expressing each digit separately starting with the left most 
digit and skipping any digit with a value of zero.

To see this in practice, consider the example of 1990. 
In Roman numerals, 1990 is MCMXC:

1000=M
900=CM
90=XC
2008 is written as MMVIII:

2000=MM
8=VIII


I	The easiest way to note down a number is to make that many marks - 
little I's. Thus I means 1, II means 2, III means 3. However, four 
strokes seemed like too many....

V	So the Romans moved on to the symbol for 5 - V. Placing I in 
front of the V — or placing any smaller number in front of 
any larger number — indicates subtraction. So IV means 4. 
After V comes a series of additions - VI means 6, 
VII means 7, VIII means 8.

X	X means 10. But wait — what about 9? Same deal. 
IX means to subtract I from X, leaving 9. Numbers in the 
teens, twenties and thirties follow the same form as the 
first set, only with X's indicating the number of tens. 
So XXXI is 31, and XXIV is 24.

L	L means 50. Based on what you've learned, I bet you 
can figure out what 40 is. If you guessed XL, you're 
right = 10 subtracted from 50. And thus 60, 70, and 
80 are LX, LXX and LXXX.

C	C stands for centum, the Latin word for 100. 
A centurion led 100 men. We still use this in words 
like "century" and "cent." The subtraction rule means 
90 is written as XC. Like the X's and L's, the C's are 
tacked on to the beginning of numbers to indicate how 
many hundreds there are: CCCLXIX is 369.

D	D stands for 500. As you can probably guess by this time, 
CD means 400. So CDXLVIII is 448. (See why we switched systems?)

M	M is 1,000. You see a lot of Ms because Roman numerals 
are used a lot to indicate dates. For instance, this 
page was written in the year of Nova Roma's founding, 
1998 CE (Common Era; Christians use AD for Anno Domini, 
"year of our Lord"). That year is written as MCMXCVIII. 
But wait! Nova Roma counts years from the founding of 
Rome, ab urbe condita. By that reckoning Nova Roma was 
founded in 2751 a.u.c. or MMDCCLI.

4 and 9 are our 'breaking' points - they both are a 'subtract' one

1 = I
2 = II
3 = III
4 = IV       <-- at 4, we start from 5 and we subtract 1
5 = V
6 = VI       <-- at 6, we start from 5 and we add 1
7 = VII
8 = VIII     <-- at 8, we start from 5 and we add 3 (the max is 3)
9 = IX       <-- at 9, we start from 10 and we subtract 1
27 = XXVII   <-- XX = 20;       VII  = 7 = 5 + 1 + 1
29 = XXIX    <-- XX = 20;       IX   = 9 = 10 - 1
48 = XLVIII  <-- XL = 40;       VIII = 8;
141 = CXLI   <-- C = 100; XL = 40; I = 1
163 = CLXIII <-- C = 100; LX = 60; III = 3
402 = CDII   <-- CD = 500 - 100; II = 2
575 = DLXXV  <-- D = 500; LXX = 70; V = 5
911 = CMXI   <-- CM = 1000 - 100; X = 10; I = 1;
1024 = MXXIV <-- M = 100; XXIV = 24;
3000 = MMM
*/

class RomanNumeral {
  static ROMAN_NUMERALS = {
     M: 1000,
    CM: 900,
     D: 500,
    CD: 400,
     C: 100,
    XC: 90,
     L: 50,
    XL: 40,
     X: 10,
    IX: 9,
     V: 5,
    IV: 4,
     I: 1
  }

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanVersion = '';
    let toConvert = this.number;

    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
      let value = RomanNumeral.ROMAN_NUMERALS[numeral];
      let multiplier = Math.floor(toConvert / value);
      let remainder = toConvert % value;

      if (multiplier > 0) {
        romanVersion += (numeral.repeat(multiplier));
      }

      toConvert = remainder;
    });

    return romanVersion;
  }
}

module.exports = RomanNumeral;