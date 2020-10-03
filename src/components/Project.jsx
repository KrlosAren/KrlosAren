import React from 'react';

const Project = ({ title, img, url }) => {

  return (
    <div className='project'>
      <a href={url}>
        <div className='project__modal'>
          <h4>{title}</h4>
        </div>
        <img src={img} alt={title} />
      </a>
    </div>
  );
};

export default Project;
