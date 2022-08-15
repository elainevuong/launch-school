// Example - String Equality using toBe
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// Example - Object Equality using toBe
test('emptyArray is NOT expected toBe another emptyArray', () => {
  expect([]).not.toBe([]);
});

// Example - Object Equality using toEqual
test('emptyArray IS expected toEqual another emptyArray', () => {
  expect([]).toEqual([]);
});