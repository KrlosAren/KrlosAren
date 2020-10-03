import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Menu from './Menu';

const Layout = ({ children }) => {

  const icon = 'https://storage.googleapis.com/krlosaren-portafolio/images/icon_page.svg';
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
