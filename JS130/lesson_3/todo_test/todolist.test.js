const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('calling first returns the first todo item', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('calling last returns the last todo item', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('calling shift removes and returns the first item in the list', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('calling pop removes and returns the last item in the list', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone returns true when all items in the list are done', () => {
    expect(list.isDone()).toBe(false);
    list.markDoneAt(0);
    list.markDoneAt(1);
    list.markDoneAt(2);
    expect(list.isDone()).toBe(true);
    list.markUndoneAt(1)
    expect(list.isDone()).toBe(false);
  });

  test('adding a non-Todo object throws an error', () => {
    let object = { a: 1 };
    expect(() => list.add(object)).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add('a')).toThrow(TypeError);
  });

  test('itemAt returns the item at given index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });

  /* Elaine's Solution
  test('markDoneAt marks todo at given index done', () => {
    todo1 = todo1.markDone();
    expect(list.markDoneAt(0)).toEqual(todo1);
    expect(() => list.markDoneAt(5)).toThrow(ReferenceError);
  });
  */

  test('markDoneAt marks todo at given index done', () => {
    expect(() => list.markDoneAt(6)).toThrow(ReferenceError);
  
    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
  });

  test('markUndoneAt marks todo at given index undone', () => {
    expect(() => list.markUndoneAt(5)).toThrow(ReferenceError);

    list.markDoneAt(1);
    expect(todo2.isDone()).toBe(true);

    list.markUndoneAt(1);
    expect(todo2.isDone()).toBe(false);
  });

  test('markAllDone marks all todos in list done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('removeAt removes todo at given index', () => {
    expect(() => list.removeAt(5)).toThrow(ReferenceError);
    list.removeAt(1);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let expectedString = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`
    expect(list.toString()).toBe(expectedString);
  });

  test('toString returns different string for done todo', () => {
    let expectedString = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`
    list.markDoneAt(1);
    expect(list.toString()).toBe(expectedString);
  });

  test('toString returns correct string when all todos done', () => {
    let expectedString = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`
    list.markAllDone();
    expect(list.toString()).toBe(expectedString);
  });

  test('forEach iterates over all todos', () => {
    list.forEach(todo => todo.markDone());
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });

  test('filter returns new TodoList object with filtered todos', () => {
    list.markDoneAt(1);
    let filteredList = new TodoList(list.title);
    filteredList.add(todo2);
    expect(list.filter(todo => todo.isDone())).toEqual(filteredList);
  });
});