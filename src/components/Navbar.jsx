import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import useMenu from '../hooks/useMenu';

const iconMail = 'https://img.icons8.com/material/96/000000/important-mail.png';

const Navbar = ({ avatar }) => {
  const [menu, setMenu] = useState({ isVisible: false });
  const menuContainer = document.getElementById('menu');

  const handleClick = () => {
    setMenu({ isVisible: true });
  };

  if (menu.isVisible) {
    // menuContainer.classList.toggle('hiddenMenu');
    console.log('hola');
  }

  return (
    <div className='nav__header' id='navigator'>
      <span>
        <Link to='/'>
          <img src={avatar} alt='menu' />
        </Link>
        {/* <button id='buttonMenu' type='button' onClick={handleClick()}>Menu</button> */}
        <button id='buttonMenu' type='button'>Menu</button>
      </span>
      <span>
        <a href='mailto:krlosaren@gmail.com' rel='noreferrer' target='_blank'>
          <img src={iconMail} alt='mail' />
        </a>
      </span>
    </div>
  );
};

export default Navbar;
