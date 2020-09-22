import menu from './js/components/menu';
import changeHand from './js/components/indicators';
import letterAnimation from './js/components/letters';

import './assets/styles/main.scss';

const letterButton = document.getElementById('buttonPunch');

window.addEventListener('load', menu);
window.addEventListener('scroll', changeHand);

letterButton.addEventListener('click', letterAnimation);
