import './assets/styles/main.scss';

const buttonMenu = document.getElementById('buttonMenu');
const menuContainer = document.getElementById('menu__hidden');
const mainContainer = document.getElementById('main__container');

buttonMenu.addEventListener('click', () => {
  menuContainer.classList.toggle('hiddenMenu');
  mainContainer.classList.toggle('hidden');
});

console.log(buttonMenu);

