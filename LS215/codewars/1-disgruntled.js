function off(number) {
  let lightsArr = new Array(number + 1).fill('ON');
  
  for (let start = 1; start <= number; start++) {
    let currentInterval = start;
    while (currentInterval in lightsArr) {
      if (lightsArr[currentInterval] === 'ON') {
        lightsArr[currentInterval] = 'OFF'
      } else {
        lightsArr[currentInterval] = 'ON'
      }
      currentInterval += start;
    }
  }
  
  let lightsOffArr = lightsArr.reduce((array, value, index) => {
    if (value === 'OFF') {
      array.push(index);
    }
    return array;
  }, []);
  
  return lightsOffArr;
}