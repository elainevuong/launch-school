/*
You finally receive the entire stolen list document from the police. 
You need to sign at the end of the document but also each sub-list corresponding 
to each room in your house where the items were stolen.

You are given two arguments, one object with nested objects and a string that 
corresponds to your name. The object already contains several signature properties, 
one on the root, the others on each nested object. 
Return an object with all containing signature values set to your name.
*/

function signAll(object, name) {
  Object.keys(object).forEach(key => {
    let room = object[key];
    room['signature'] = name;
  })  

  object.signature = name;
  return object;
}

const obj = {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
};

console.log(signAll(obj, "Rocky"));


/* 
returns 
{
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "Rocky",  // changed
    },
    bathroom: {
      stereo: 220,
      signature: "Rocky",  // changed
    },
    signature: "Rocky",  // changed
}
*/