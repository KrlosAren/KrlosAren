import React from 'react';

const Footer = () => {
  return (
    <div id='container__footer'>
      <footer className='footer' id='footer'>
        <p>
          &copy; 2020 Hecho con
          {' '}
          <a href='https://github.com/KrlosAren' rel='noreferrer' target='_blank'>
            <span role='img' aria-label='palm'>🌴</span>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
