// Order the following array of objects based on the year of publication of each book, from the earliest to the latest
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

/* books is a nested array, where each element is an object In order to sort from the year of publication from earliest to latest, 
   we want to access the year published. Once we access the year published, we want to convert that into a number. Finally, we assign the year to 
   elements a and b. In order to sort ascending, if a < b, we want to return a value less than 0, because if return value of the callback function of the sort()
   method returns a value less than 0, then a will be sorted BEFORE b therefore, we want to return a.year - b.year */

books.sort((a, b) => Number(a['published']) - Number(b['published']));
console.log(books);