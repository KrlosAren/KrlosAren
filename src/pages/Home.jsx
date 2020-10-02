import React from 'react';

import Prologe from '../components/Prologe';
import Header from '../components/Header';
import Me from '../components/Me';

import avatar from '../assets/static/images/illustracion_carlos.svg';

const Home = () => {
  return (
    <div id='main__container'>
      <Header />
      <Prologe />
      <Me avatar={avatar} />
    </div>
  );
};
export default Home;
