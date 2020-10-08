import React from 'react';

const Categories = ({ children, title, page }) => {
  return (
    <section className='categories' id={page}>
      <h3 className='categories__title'>{title}</h3>
      <div className='categories__container'>
        {children}
      </div>
    </section>
  );
};

export default Categories;
