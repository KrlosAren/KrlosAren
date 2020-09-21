import './assets/styles/main.scss';

const buttonMenu = document.getElementById('buttonMenu');
const menuContainer = document.getElementById('menu__hidden');

buttonMenu.addEventListener('click', () => {
  menuContainer.classList.toggle('hidden');
});

console.log(buttonMenu);
