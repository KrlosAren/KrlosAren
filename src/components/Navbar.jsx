import React from 'react';
import { Link } from 'react-router-dom';

import useMenu from '../hooks/useMenu';

const Navbar = ({ avatar }) => {
  return (
    <div className='nav__header' id='navigator'>
      <Link to='/'>
        <img src={avatar} alt='menu' />
      </Link>
      <button id='buttonMenu' onClick={useMenu({ isVisible: true })}>Menu</button>
    </div>
  );
};

export default Navbar;
