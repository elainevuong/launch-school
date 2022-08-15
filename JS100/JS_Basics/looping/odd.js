// Write a while loop that logs all odd natural numbers between 1 and 40.

num = 1
while (num <= 40) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num += 1
}

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i += 1) {
  if (fish[i] === 'Nemo') {
    break
  }
  console.log(fish[i]);
}