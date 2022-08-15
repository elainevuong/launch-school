function startCounting() {
  let number = 1;
  
  let counterId = setInterval( () => {
    console.log(number);
    number += 1;
  },1000);
  
  return counterId;
}

function stopCounting(id) {
  clearInterval(id);
}

let counterId = startCounting();

// Some Time Later
stopCounting(counterId);