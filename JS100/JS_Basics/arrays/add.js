/*
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.push('geothermal')
energy.shift()
console.log(energy);


let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.push('geothermal')
energy = energy.slice(1)
console.log(energy);
*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.push('geothermal')
energy.splice(0,1)
console.log(energy);