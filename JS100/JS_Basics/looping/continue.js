let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 
              'Vienna', null, 'London', 'Beijing', null];

let index = 0
while (index < cities.length) {
  if (cities[index] === null) {
    index += 1
    continue;
  } else {
    console.log(cities[index]);
    index += 1
  }
}

for (let index = 0; index < cities.length; index += 1) {
  if (cities[index] === null) { 
    continue 
  }

  console.log(cities[index]);
}

for (let i = 0; i < 1 ; i += 1) {
  console.log("and on");
}