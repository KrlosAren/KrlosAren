const menu = () => {
  const buttonMenu = document.getElementById('buttonMenu');
  const menu = document.getElementById('menu');
  const navigator = document.getElementById('navigator');
  const main = document.getElementById('main__container');
  buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('hiddenMenu');
    navigator.classList.toggle('hidden') ;
    main.classList.toggle('hidden');
    console.log('hola');
  });
};

export default menu;

