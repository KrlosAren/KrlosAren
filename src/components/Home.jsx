import React from 'react';

import avatar from '../assets/static/images/Avatar_Carlos.svg';
import Prologe from './Prologe';
import Header from './Header';
import Me from './Me';

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
