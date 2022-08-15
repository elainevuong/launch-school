/*
When the user clicks on a navigation link (Articles 1-4), the 
browser scrolls to that article in the <main> element and adds 
the highlight class to it. If another element already has the 
highlight class, the browser removes the class from that element.

When the user clicks on an article element or any of its child 
elements, the browser adds the highlight class to it. If another 
element already has the highlight class, the browser removes the 
class from that element.

When the user clicks anywhere else on the page, the browser adds 
the highlight class to the main element. If another element already 
has the highlight class, the browser removes the class from that element.
*/

/*
// This Solution adds an event handler to each of the elements in the Nav
// It also adds an event handler to each of the article elements in Main
// We prevent all propagation because we add a 'catch all' event listener on html
document.addEventListener("DOMContentLoaded", event => {
  [...document.querySelectorAll('li')].forEach(element => {
    element.addEventListener("click", event => {
      event.stopPropagation();
      removeHighlights();
      let articleID = getArticleID(event.target);
      document.getElementById(articleID).classList.add('highlight');
    });
  });

  [...document.querySelectorAll('article')].forEach(article => {
    article.addEventListener("click", event => {
      event.stopPropagation();
      removeHighlights();
      event.currentTarget.classList.add('highlight');
    });
  });

  document.querySelector('html').addEventListener("click", event => {
    removeHighlights();
    document.querySelector('main').classList.add('highlight');
    
  })

  function getArticleID(navLink) {
    let navLinkHREF = navLink.getAttribute('href');
    return navLinkHREF.slice(1);
  }

  function removeHighlights() {
    const highlighted = document.querySelector('.highlight');
    if (highlighted) {
      highlighted.classList.remove('highlight');
    }
  }
});
*/

// Add an Event Listener on Document
// Add an Event Listener on Main Directly

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", event => {
    let element;
    let id = "main";
    if (event.target.tagName === "A") {
      id = getArticleID(event.target);
    }
    
    removeHighlights();
    element = document.querySelector(id);
    element.classList.add("highlight");
  })

  document.querySelector('main').addEventListener("click", event => {
    event.stopPropagation(); // stop the event from propagating to the document Event Listener
    let selectedArticle = event.target;
    if (selectedArticle.tagName !== "ARTICLE") {
      selectedArticle = selectedArticle.parentNode;
    }

    if (selectedArticle.tagName === "ARTICLE") {
      removeHighlights();
      selectedArticle.classList.add('highlight');
    }
  })

  function getArticleID(link) {
    return link.getAttribute('href');
  }

  function removeHighlights() {
    let highlighted = document.querySelector('.highlight');
    if (highlighted) {
      highlighted.classList.remove('highlight');
    }
  }
});
