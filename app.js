let count = 0;

const countDisplay = document.querySelector('.number');
const addButton = document.querySelector('.add');
const minusButton = document.querySelector('.minus');
const pictureContainer = document.querySelector('.pictures');

countDisplay.innerHTML = count;

addButton.addEventListener('click', () => {
  count = count + 1;
  countDisplay.innerHTML = count;
  if (count > 0) {
    let span = document.createElement('span');
    span.innerHTML =
      '<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" alt="">';
    pictureContainer.appendChild(span);
  }
});

minusButton.addEventListener('click', () => {
  count = count - 1;
  countDisplay.innerHTML = count;
  if (count > -1) {
    pictureContainer.removeChild(pictureContainer.lastElementChild);
  }
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.6
        }s`;
      }
    });
  });
};
navSlide();
