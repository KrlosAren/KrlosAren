// import menu from './js/components/menu';
// import changeHand from './js/components/indicators';
// import letterAnimation from './js/components/letters';

// const letterButton = document.getElementById('buttonPunch');

// window.addEventListener('load', menu);
// window.addEventListener('scroll', changeHand);

// letterButton.addEventListener('click', letterAnimation);
import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/main.scss';

import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('app'));
