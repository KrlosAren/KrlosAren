import React from 'react';

import { Helmet } from 'react-helmet';
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
    <>
      <Helmet>
        <title>Krlosaren | Projects </title>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@krlosaren' />
        <meta name='twitter:creator' content='@krlosaren' />
        <meta name='twitter:title' content='Carlos Lopez Zavarce frontend developer portafolio' />
        <meta name='twitter:description' content='Carlos Lopez Zavarce frontend developer portafolio' />
        <meta
          name='twitter:image'
          content='https://storage.googleapis.com/krlosaren-portafolio/images/thumbnail.png'
        />
        <meta property='og:title' content='Carlos Lopez Zavarce frontend developer portafolio' />
        <meta property='og:description' content='Carlos Lopez Zavarce frontend developer portafolio' />
        <meta
          property='og:image'
          content='https://storage.googleapis.com/krlosaren-portafolio/images/thumbnail.png'
        />
        <meta property='og:url' content='krlosaren.com' />
        <meta property='og:site_name' content='Carlos Lopez' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:type' content='article' />
        <meta property='fb:app_id' content='788028837' />
      </Helmet>

      <div id='main__container'>
        <main className='main main__project' id='main__container'>
          <h3>Proyectos</h3>
          <div className='main__projects'>
            <Categories title='Code' page='code'>
              {projects.map((project) => (
                <Project
                  key={project.id}
                  url={project.url}
                  title={project.title}
                  img={project.img}
                />
              ))}
            </Categories>
            <Categories title='Design - Daily UI' page='design'>
              {data.map(((dribbble) => (
                <Project
                  key={dribbble.id}
                  url={dribbble.html_url}
                  title={dribbble.title}
                  img={dribbble.images.hidpi}
                />
              )))}
            </Categories>
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;
