import menu from './js/components/menu';
import changeHand from './js/components/indicators';
import letterAnimation from './js/components/letters';

import openModal from './js/components/openModal';

import './assets/styles/main.scss';

const letterButton = document.getElementById('buttonPunch');

window.addEventListener('load', menu);
window.addEventListener('scroll', changeHand);

letterButton.addEventListener('click', letterAnimation);

const loadFunction = () => {
  if (window.location.pathname === '/Projects.html') {
    openModal();
  }
};

window.addEventListener('load', loadFunction);
