import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Menu from './Menu';

import icon from '../assets/static/images/icon_page.svg';

const Layout = ({ children }) => {

  return (
    <>
      <Navbar avatar={icon} />
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
