let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
console.log(munsters);

/* Does running the above code mess with the munsters object?

When we execute line 16, we pass the reference in memory of the munsters object
as an argument to the messWithDemographics function.
As a result, when the messWithDemographics function executes, it accesses
the 'age' properties of each of the familyMembers, and increases the values of the
existing ages by 42, and it also modifies the 'gender' properties of each
of the familyMembers and sets it to 'other'.

When we pass an object as an argument to a function, we pass it by reference, and as such, the function directly acts on the original object and mutates it. 

Therefore, running the code DOES mess with the munsters object.
*/