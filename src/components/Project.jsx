import React from 'react';

const Project = ({ project }) => {

  return (
    <div className='project'>
      <a href={project.url} target='_blank' rel='noreferrer'>
        <div className='project__modal'>
          <h4>{project.title}</h4>
        </div>
        <img src={project.img} alt={project.title} />
      </a>
    </div>
  );
};

export default Project;
