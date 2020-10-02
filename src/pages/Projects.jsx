import React from 'react';

import Project from '../components/Project';
import data from '../data/db.json';

const Projects = () => {

  data.forEach((info) => {
    console.log(info.img);
  });

  return (
    <div id='main__container'>
      <main className='main main__project' id='main__container'>
        <h3>Proyectos</h3>
        <div className='main__projects'>
          {data.map((project) => (<Project key={project.id} project={project} />))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
