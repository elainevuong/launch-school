let jane = {
  firstName: 'Jane',
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  },
};

jane.greet('Bobby'); // Hej, Bobby!