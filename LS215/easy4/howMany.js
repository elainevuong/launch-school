/*
How Many
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.
*/

function countOccurrences(vehicles) {
  let carCount = {};
  
  vehicles.forEach(car => carCount[car] = carCount[car] ? carCount[car] + 1 : 1);
  
  Object.keys(carCount).forEach(key => {
    console.log(`${key} => ${carCount[key]}`);
  });
                   
}


const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2