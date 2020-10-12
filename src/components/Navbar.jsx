import React from 'react';
import { Link } from 'react-router-dom';

import menu from '../utils/menu';

const Navbar = ({ avatar }) => {

  return (
    <div className='nav__header' id='navigator'>
      <span>
        <Link to='/'>
          <img src={avatar} alt='menu' />
        </Link>
      </span>
      <span>
        <button id='buttonMenu' type='button' onClick={menu}>Menu</button>
      </span>
    </div>
  );
};

export default Navbar;
