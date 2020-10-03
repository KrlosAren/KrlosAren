import React from 'react';

import BlogCard from '../components/BlogCard';

const MakeSimple = () => {
  const { title, content, url, images } = {
    title: 'Mini Retos para Intentar',
    content: 'Mini Retos para Intentar\',\'Cambiar de área de conocimiento no siempre es sencillo,\
              salir de la zona de confort no resulta un paso fácil.Este es mi caso, soy arquitecto de profesión,\
              pero con ganas de trabajar en tecnología.\', \'Cuando das tus primeros pasos en programación puede ser abrumador,\
              Backend, Frontend, Base de Datos, PHP, JavaScript, Dockers, DevOps\
              y otros términos que parecerían imposibles de entender.Tranquilo solo respira y sigue leyendo.',
    url: '/makeSimple/mini-retos-para-intentar',
    images: '../assets/images',
  };

  return (
    <div id='main__container'>
      <main className='main' id='main__container'>
        <h3>Make It Simple</h3>
        <div className='main__blog'>
          <BlogCard content={content} title={title} url={url} images={images} />
        </div>
      </main>
    </div>
  );
};

export default MakeSimple;
