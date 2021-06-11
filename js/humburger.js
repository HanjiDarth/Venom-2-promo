const menu = document.querySelector('.nav-menu');
const buttonOpen = document.querySelector('.humburger-menu-button');
const buttonClose = document.querySelector('.humburger-menu-button-close');

buttonOpen.addEventListener('click', () => {
  menu.classList.add("humburger-menu__active");
  buttonClose.classList.add("humburger-menu__active");
});

buttonClose.addEventListener('click', () => {
  menu.classList.remove("humburger-menu__active");
  buttonClose.classList.remove("humburger-menu__active");
});