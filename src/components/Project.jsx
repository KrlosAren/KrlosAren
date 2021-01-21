import React from 'react';

const Project = ({ status, repoUrl, description, demoUrl, title, img }) => {

  return (
    <article className='project'>
      <div className='project__title'>
        <h4>{title}</h4>
      </div>
      <div className='project__header'>
        <img src={img} alt={title} />
      </div>
      <div className='project__info'>
        {status ? (
          <h5>
            Terminado
          </h5>
        ) : (
            <h5>
              En proceso
            </h5>
          )}
        <p>
          {description}
        </p>
        <div className='buttons-card'>
          <a href={demoUrl} target='_blank' rel='noreferrer'>Demo</a>
          <a href={repoUrl} target='_blank' rel='noreferrer'>Github</a>
        </div>
      </div>
    </article>
  );
};

export default Project;
