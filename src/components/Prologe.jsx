import React from 'react';

const Prologe = () => {
  return (
    <div className='prologe'>
      <div className='prologe__text'>
        <h2>Sigues Aquí!</h2>
      </div>
      <div className='prologe__paragraph--what text__animation'>
        <h3>Qué es esto?</h3>
        <p>
          Este espacio es mi bitácora de viaje.
          <b>Que viaje?.</b>
          {' '}
          el que comenzo desde el primer
          <code>echo &#34;Hola Mundo&#34;</code>
          <del>Si, empecé con PHP</del>
          .
        </p>
      </div>
      <div className='prologe__paragraph--continue text__animation'>
        <h3>Qué conseguirás?</h3>
        <p>
          En este espacio veras como comencé.
          <br />
          Mis primeros proyectos.
          <br />
          Mi camino de aprendizaje y la actualización de mi viaje.
          <br />
          Además de algunos
          <code>console.log(&#34;Hola mundo&#34;)</code>
          <del>me encanta JavaScript</del>
          .
        </p>
      </div>
      <div className='prologe__paragraph--last text__animation'>
        <h3>Qué quiero?</h3>
        <p>
          Compartir lo que he aprendido.
          <br />
          Lo que he hecho.
          <br />
          Lo que pienso.
          <br />
          Quedate un rato, seguro consigues algo interesante.
        </p>
      </div>
    </div>
  );
};

export default Prologe;
