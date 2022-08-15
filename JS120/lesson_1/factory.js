/* 
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description
*/

function createBook(title, author, read=false) {
  return {
    title,
    author,
    read,
    
    // EV Implementation
    getDescription() {
      if (this.read) {
        return `${this.title} was written by ${this.author}. I have read it already`;
      } else {
        return `${this.title} was written by ${this.author}. I haven't read it yet`;
      }
    },

    /* LS Implementation
    getDescription: function() {
      return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? 'have' : "haven't"} read it.`;
    },
    */


    readBook() {
      this.read = true;
    }
  }
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book1.getDescription()); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
console.log(book1.getDescription()); // Mythos was written by David Fry. I have read it.