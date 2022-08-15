class Pet {
  constructor(pet, name) {
    this.pet = pet;
    this.name = name;
    this.owner = undefined;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }
  
  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {
  static activeOwners = [];
  static adoptedPet = [];
  
  adopt(owner, pet) {
    if (!Shelter.activeOwners.includes(owner)) {
      Shelter.activeOwners.push(owner);
    }
    
    owner.pets.push(pet);           // Add the Pet to the  Owner's pets Array Object
    pet.owner = owner.name;         // Add the Owner to the Pet's Owner Property
    
    Shelter.adoptedPet.push(pet);   // Add the Pet to the adoptedPet array on Shelter
    
  }
  
  printAdoptions() {
    Shelter.activeOwners.forEach(owner => {
      console.log(`${owner.name} has adopted the following pets:`);
      owner.pets.forEach(pet => {
        console.log(`a ${pet.pet} named ${pet.name}`);
      });
      console.log();
    });                  
  }
  
  printOwners() {
    console.log(Shelter.activeOwners);
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

/*
P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
*/
