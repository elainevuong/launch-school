function itemCreator(name, category, quantity) {
  let skuCode = makeSKU(name, category);
  if (checkValidArguments(name, category, quantity)) {
    return {
      skuCode,
      name,
      category,
      quantity,
    }
  } else {
    return {
      notValid: true,
    }
  }

  function checkValidArguments(name, category, quantity) {
    name = name.replaceAll(' ', '')
    if (name.length < 5) return false;

    let numCategories = category.split(' ');
    if (numCategories.length !== 1 || category.length < 5) return false;

    if (quantity === undefined) return false;

    return true;
  }

  function makeSKU(name, category) {
    let numWords = name.split(' ');

    if (numWords[0].length >= 3) {
      return (numWords[0].slice(0, 3) + category.slice(0, 2)).toUpperCase()
    } else if (numWords[0].length === 2 && numWords[1]) {
      return (numWords[0] + numWords[1].slice(0, 1) + category.slice(0, 2)).toUpperCase();
    } 
  }
}

let ItemManager = {
  items: [],

  create(name, category, quantity) {
    let newItem = itemCreator(name, category, quantity)
    if (newItem.notValid) {
      return false;
    } else {
      this.items.push(newItem)
    }
  },

  update(SKU, changeObj) {
    let index = this.items.findIndex(item => item.skuCode === SKU);
    if (index) {
      let changeItem = this.items[index];
      let changeKey = Object.keys(changeObj);
      let changeProperty = changeObj[changeKey]
      changeItem[changeKey] = changeProperty;
    }
  },

  delete(SKU) {
    let index = this.items.findIndex(item => item.skuCode === SKU);
    this.items.splice(index, 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },

  getItems() {
    return this.items;
  }
}

let ReportManager = {
  init(ItemManager) {
    this.itemsManager = ItemManager;
  },

  reportInStock() {
    console.log(this.itemsManager.inStock().map(item => item.name).join(', '));
  },

  createReporter(SKU) {
    return {
      itemInfo: () => {
        let itemIndex = this.itemsManager.getItems().findIndex(item => item.skuCode === SKU); 
        let item = this.itemsManager.getItems()[itemIndex]
        let itemKeys = Object.keys(item);
        itemKeys.forEach(key => {
          console.log(`${key}: ${item[key]}`)
        })
      },
    }
  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10