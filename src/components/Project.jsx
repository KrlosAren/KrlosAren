import React from 'react';

const Project = ({ project, url }) => {
  return (
    <div className='project'>
      <a href={url}>
        <div className='project__modal'>
          <h4>Proyecto-1</h4>
        </div>
        <img src={project} alt='dummy' />
      </a>
    </div>
  );
};

export default Project;
