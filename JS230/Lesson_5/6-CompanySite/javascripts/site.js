// On Click Of the Images, Do Something...
document.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector('h2');
  let profileImages = [...document.getElementsByTagName("img")];
  profileImages.forEach(profile => {
    profile.addEventListener("click", event => {
      event.preventDefault();
      createDiv();
      document.querySelector('main').style.backgroundColor = rgb(178, 178, 178);
      // Show Modal
    })
  });

  let main = document.querySelector('main');
  main.addEventListener('click', event => {
    let modals = [...document.getElementsByClassName('modal')];
    if (modals.length > 0) {
      main.removeChild(modals[0]);
    }
    main.style.backgroundColor = white;
  })
});

function createDiv() {
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modal.textContent = 'Hi There!';
  
  document.querySelector('main').appendChild(modal);

}