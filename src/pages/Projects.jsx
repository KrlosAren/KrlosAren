import React from 'react';

import Project from '../components/Project';

const Projects = () => {

  const { projects } = require('../../data/db.json');

  return (
    <div id='main__container'>
      <main className='main main__project' id='main__container'>
        <h3>Proyectos</h3>
        <div className='main__projects'>
          {projects.map((project) => (<Project key={project.id} project={project} />))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
