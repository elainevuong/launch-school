let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

/*
When a function gets passed to another function as an argument, the passed function
gets stripped of its execution context, which means 
the function argument gets invoked with the context set to the global object.

In this case - `line 5` - `this.name` refers to the global object

We can fix this with lexical scoping rules by preserving the context
with a variable in the outer scope
*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(number => {
      return this.name + ' ' + number;
    });
  },
};
