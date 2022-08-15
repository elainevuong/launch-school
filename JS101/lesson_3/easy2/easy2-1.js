/* Given a string, return a new string that replaces every occurrence 
of the word "important" with "urgent": */


let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replace('important', 'urgent');

let newString = advice.split(" ").map((word) => {
                if (word === 'important') {
                  word = 'urgent';
                }
                return word;
                }).join(" ");

console.log(newString);


// => Few things in life are as urgent as house training your pet dinosaur.