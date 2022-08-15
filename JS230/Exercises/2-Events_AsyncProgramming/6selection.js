const linkedOptions = {
  classifications: {
    Classifications: ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Salmon', 'Turtle'],
    Mammal: ['Bear', 'Whale'],
    Bird: ['Ostrich'],
  },
  animals: {
    Animals: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
    Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Turtle: ['Vertebrate', 'Cold-blooded'],
    Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Salmon: ['Vertebrate', 'Cold-blooded'],
    Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  let classifications = document.getElementById("animal-classifications");
  let animals = document.getElementById('animals');
  let clearBtn = document.getElementById('clear');

  classifications.addEventListener("change", event => {
    let key = event.target.value;
    let results = linkedOptions.classifications[key]
    removeOptions(animals);
    addOptions(animals, results);
  })

  animals.addEventListener("change", event => {
    let key = event.target.value;
    let results = linkedOptions.animals[key]
    removeOptions(classifications);
    addOptions(classifications, results);
  })

  clearBtn.addEventListener('click', event => {
    event.preventDefault();
    removeOptions(classifications);
    removeOptions(animals);

    let defaultAnimals = Object.keys(linkedOptions.animals);
    let defaultClassifications = Object.keys(linkedOptions.classifications);
    
    addOptions(classifications, defaultClassifications);
    addOptions(animals, defaultAnimals);
  })

  function removeOptions(selectList) {
    while (selectList.children.length > 0) {
      let firstChild = selectList[0];
      selectList.remove(firstChild);
    }
  }

  function addOptions(selectList, results) {
    results.forEach(result => {
      let currentResult = document.createElement('option');
      currentResult.value = result;
      currentResult.textContent = result;
      selectList.appendChild(currentResult);
    })
  }

})