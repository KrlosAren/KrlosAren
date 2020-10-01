import React from 'react';

import avatar from '../assets/static/images/Avatar_Carlos.svg';
import Prologe from '../components/Prologe';
import Header from '../components/Header';
import Me from '../components/Me';

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
