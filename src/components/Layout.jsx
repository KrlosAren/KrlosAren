import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import avatar from '../assets/static/images/Avatar_Carlos.svg';

const Layout = ({ children }) => {

  return (
    <>
      <Navbar avatar={avatar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
