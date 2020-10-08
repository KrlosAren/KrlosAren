import React from 'react';

import Project from '../components/Project';
import db from '../../server/db.json';
import Categories from '../components/Categories';
import GetData from '../hooks/getData';
import Spinner from '../components/Spinner';

const Projects = () => {

  const { projects } = db;
  const ACCESS_TOKEN = 'c31abf92fdc196e6ec90890f9c1c1e920abd4d190a1a41199fc7d73e65ac05df';
  const API = `https://api.dribbble.com/v2/user/shots?access_token=${ACCESS_TOKEN}&per_page=34`;
  const [state, setState] = GetData(API);
  const { data, loading, error } = state;

  if (loading) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return (
      <div>{error}</div>
    );
  }

  return (
    <div id='main__container'>
      <main className='main main__project' id='main__container'>
        <h3>Proyectos</h3>
        <div className='main__projects'>
          <Categories title='Code' page='code'>
            {projects.map((project) => (<Project key={project.id} project={project} />))}
          </Categories>
          <Categories title='Design' page='design'>
            {data.map(((dribbble) => (
              <Project key={dribbble.id} project={dribbble} />
            )))}
          </Categories>
        </div>
      </main>
    </div>
  );
};

export default Projects;
