let dropDownOpened = false;

document.querySelector('.hamburger-icon').addEventListener('click', () => {
  const hamburgerElement = document.querySelector('.fa-solid');
  if (!dropDownOpened) {
    document.querySelector('.dropdown-menu').classList.add('open');
    hamburgerElement.classList.remove('fa-bars');
    hamburgerElement.classList.add('fa-xmark');
    dropDownOpened = true;
  } else {
    document.querySelector('.dropdown-menu').classList.remove('open');
    hamburgerElement.classList.remove('fa-xmark');
    hamburgerElement.classList.add('fa-bars');
    dropDownOpened = false;
  }
});

const toTopElement = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTopElement.classList.add('active');
  } else {
    toTopElement.classList.remove('active');
  };
});

const form = document.querySelector('.js-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Your message has been sent!");
  form.reset();
});