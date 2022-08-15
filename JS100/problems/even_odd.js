function even_odd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

even_odd('friend')
even_odd(5)
even_odd(4)