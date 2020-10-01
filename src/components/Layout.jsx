import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Menu from './Menu';

import avatar from '../assets/static/images/Avatar_Carlos.svg';

const Layout = ({ children }) => {

  return (
    <>
      <Navbar avatar={avatar} />
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
