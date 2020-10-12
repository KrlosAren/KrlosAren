import React from 'react';

import Prologe from '../components/Prologe';
import Header from '../components/Header';
import Me from '../components/Me';

const Home = () => {

  const avatar = 'https://storage.googleapis.com/krlosaren-portafolio/images/avatar_carlos.svg';
  return (
    <div id='main__container'>
      <Header />
      <Prologe />
      <Me avatar={avatar} />
    </div>
  );
};
export default Home;
