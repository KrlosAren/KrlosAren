import React from 'react';

import letters from '../utils/letters';

const Header = () => {
  return (
    <div className='content'>
      <div className='content__arrow' id='arrow'>
        <h3 className='pulse'>
          <span role='img' aria-label='hand'>👇🏻</span>
        </h3>
      </div>
      <div className='content__text'>
        <h2 className='sayHello handHello'>
          <span role='img' aria-label='hand-shake'>✋🏻</span>
        </h2>
        <div style={{ display: 'flex' }} id='hola__container'>
          <span className='textHello'>H</span>
          <span className='textHello'>o</span>
          <span className='textHello'>l</span>
          <span className='textHello'>a</span>
          <span className='textHello'>!</span>
        </div>
      </div>
      <button className='dontClick' onClick={letters} type='button'>
        <p className='dontClick__text' id='buttonPunch'>
          <span role='img' aria-label='punch'>👊🏻</span>
        </p>
      </button>
    </div>
  );
};

export default Header;
