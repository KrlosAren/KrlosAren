import React from 'react';

import Project from '../components/Project';

const Projects = () => {
  const projectPreview = 'https://dummyimage.com/600x400/c2c2c2/fff';
  const url = 'projects/id';
  return (
    <main className='main main__project'>
      <h3>Proyectos</h3>
      <div className='main__projects'>
        <Project project={projectPreview} url={url} />
      </div>
    </main>
  );
};

export default Projects;
