let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let endSlice = advice.indexOf('house');
advice = advice.slice(0, endSlice);
console.log(advice);