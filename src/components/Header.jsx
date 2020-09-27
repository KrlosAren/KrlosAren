import React from 'react';

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
        <span className='textHello'>H</span>
        <span className='textHello'>o</span>
        <span className='textHello'>l</span>
        <span className='textHello'>a</span>
        <span className='textHello'>!</span>
      </div>
      <div className='dontClick'>
        <p className='dontClick__text' id='buttonPunch'>
          <span role='img' aria-label='punch'>👊🏻</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
