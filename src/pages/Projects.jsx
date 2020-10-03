import React from 'react';

import Project from '../components/Project';
import data from '../data/db.json';

const Projects = () => {

  return (
    <div id='main__container'>
      <main className='main main__project' id='main__container'>
        <h3>Proyectos</h3>
        <div className='main__projects'>
          {data.map(({ id, title, url, img }) => (<Project key={id} title={title} url={url} img={img} />))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
