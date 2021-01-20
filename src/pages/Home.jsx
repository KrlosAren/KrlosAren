import React from 'react';
import { Helmet } from 'react-helmet';

import Prologe from '../components/Prologe';
import Header from '../components/Header';
import Me from '../components/Me';

const Home = () => {

  const avatar = 'https://storage.googleapis.com/krlosaren-portafolio/images/avatar_carlos.svg';
  return (
    <>
      <Helmet>
        <title>Krlosaren | Home </title>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@krlosaren' />
        <meta name='twitter:creator' content='@krlosaren' />
        <meta name='twitter:title' content='Carlos Lopez Zavarce frontend developer portafolio' />
        <meta name='twitter:description' content='Carlos Lopez Zavarce frontend developer portafolio' />
        <meta
          name='twitter:image'
          content='https://storage.googleapis.com/krlosaren-portafolio/images/thumbnail.png'
        />
        <meta property='og:title' content='Carlos Lopez Zavarce frontend developer portafolio' />
        <meta property='og:description' content='Carlos Lopez Zavarce frontend developer portafolio' />
        <meta
          property='og:image'
          content='https://storage.googleapis.com/krlosaren-portafolio/images/thumbnail.png'
        />
        <meta property='og:url' content='krlosaren.com' />
        <meta property='og:site_name' content='Carlos Lopez' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:type' content='article' />
        <meta property='fb:app_id' content='788028837' />
      </Helmet>
      <div id='main__container'>
        <Header />
        <Prologe />
        <Me avatar={avatar} />
      </div>
    </>
  );
};
export default Home;
