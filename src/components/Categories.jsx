import React from 'react';

const Categories = ({ children, title, page }) => {
  return (
    <section className='categories'>
      <h3 className='categories__title' id={page}>{title}</h3>
      <div className='categories__container'>
        {children}
      </div>
    </section>
  );
};

export default Categories;
