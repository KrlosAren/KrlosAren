import React from 'react';

const Project = ({ url, title, img }) => {

  return (
    <div className='project'>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className='project__modal'>
          <h4>{title}</h4>
        </div>
        <img src={img} alt={title} />
      </a>
    </div>
  );
};

export default Project;
