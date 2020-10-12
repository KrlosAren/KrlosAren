import React from 'react';
import { Link } from 'react-router-dom';

import menu from '../utils/menu';

const Menu = () => {

  return (
    <div className='nav__container hiddenMenu' id='menu'>
      <div className='nav'>
        <div className='nav__rrss'>
          <div className='nav__rrss--line'>
            <a href='https://github.com/KrlosAren' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/material-outlined/192/16213e/github.png' alt='github' />
            </a>
            <a href='https://www.linkedin.com/in/carloslopezzavarce/' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/ios-glyphs/120/16213e/linkedin-2.png' alt='linkedin' />
            </a>
            <a href='https://twitter.com/KrlosLZ' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/material/144/16213e/twitter-squared.png' alt='twitter' />
            </a>
            <a href='https://www.instagram.com/krlosaren/' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/ios/250/16213e/instagram-new.png' alt='instagram' />
            </a>
            <a href='mailto:krlosaren@gmail.com' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/material-rounded/96/16213e/important-mail.png' alt='mail' />
            </a>
          </div>
        </div>
        <div className='nav__links'>
          <div className='nav__links--item'>
            <Link to='/' onClick={menu}>Home</Link>
            <span>Regreso al Home Page</span>
          </div>
          <div className='nav__links--item'>
            <Link to='/projects' onClick={menu}>Projects</Link>
            <span>Algunos proyectos</span>
          </div>
          <div className='nav__links--item'>
            <Link to='/about' onClick={menu}>Yo</Link>
            <span>Acerca de mi</span>
          </div>
          <div className='nav__links--item'>
            <Link to='/makesimple' onClick={menu}>Make It Simple</Link>
            <span>Para aprender</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
