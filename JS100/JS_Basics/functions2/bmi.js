// bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(heightInCm, kg) {
  let height = heightInCm / 100
  let bmi = kg / height ** 2
  return bmi.toFixed(2) 
}

console.log(calculateBMI(180, 80)); // "24.69"