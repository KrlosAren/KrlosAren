import React from 'react';

import illustration from '../assets/static/images/copyImg-01.svg';

const About = () => {
  return (
    <div id='main__container'>

      <main className='main main__about'>
        <h3>Quién es Carlos</h3>
        <div className='main__text'>
          <p>
            Quién es
            {' '}
            <b>Carlos</b>
            , no siempre resulta fácil responder🤨.
            Cumplo con diversos roles en cada aspecto de la vida.
            <br />
            A veces soy
            {' '}
            <b>Arquitecto</b>
            , otras
            {' '}
            <b>Programador</b>
            , algunas veces
            {' '}
            <b>Diseñador</b>
            .
            Pero siempre un 🎒viajero. Al final del dia mi mejor respuesta siempre es
            {' '}
            <b>Soy Carlos.</b>
          </p>
          <br />
          <p>
            Y quién es
            {' '}
            <b>Carlos</b>
            , en principio un soñador.
            Estudié 🏦
            <b>Arquitectura</b>
            , hice 🥋
            <b>Karate</b>
            , he corrido 🏃🏻‍♂️
            <b>Maratones</b>
            .
            He vivido en 2 paises
            {' '}
            <del>(Venezuela, Costa Rica)</del>
            , he conocido otros.
            Y todo esto me ha ayudado a abrir la visión sobre el mundo🌎, y siempre a querer más.
          </p>
          <br />
          <p>
            Ahora quién es
            {' '}
            <b>Carlos</b>
            {' '}
            profesionalmente,
            Me defino como 🎨💻
            <b>Programador y Diseñador</b>
            , pero tambien soy
            {' '}
            <b>Arquitecto</b>
            .
            Con muchas ganas de aprender comence en el mundo de la tecnología con
            {' '}
            <code>PHP</code>
            .
            Avance con
            {' '}
            <code>HTML, CSS, JavaScript</code>
            . Comence a entender diseño de interfaces
            <code>(UI)</code>
            .
            Y actualmente profundizo en tecnologías, como
            {' '}
            <code>ReactJs</code>
            {' '}
            ademas de otras herramientas
            <code>Github, NodeJs, Python, SQL, Preprocesadores, Webpack</code>
            {' '}
            y un largo etc..., con el objetivo de entender más como funciona este inmenso mundo.
          </p>
          <br />
          <p>
            Quiero poder participar en la
            {' '}
            <b>creación productos que hagan feliz a los clientes</b>
            🥳.
            Continuar con mi
            {' '}
            <b>aprendizaje</b>
            , aportar mis
            {' '}
            <b>ideas</b>
            y contribuir con la creación de
            {' '}
            <b>productos digitales fantásticos.</b>
          </p>
          <br />
          <p>
            Puedo aportar tanto en
            {' '}
            <b>Diseño</b>
            {' '}
            como en
            {' '}
            <b>Programacion</b>
            .
            Me gusta que las cosas salgan bien, la 🤯
            <b>Organización</b>
            {' '}
            y el
            {' '}
            <b>Detalle</b>
            son realmente importates para mi.
            Mi experiencia académica📚, profesional y social me permite aportar
            <b>Puntos de Vista Distintos</b>
            {' '}
            y
            {' '}
            <b>Nuevos enfoques</b>
            .
          </p>
          <br />
          <p>
            El
            {' '}
            <b>Equipo</b>
            {' '}
            y la
            {' '}
            <b>Comunicación</b>
            {' '}
            son pilares fundamentales para lograr el objetivo.
            Me gusta trabajar en lugares que 👩🏻‍🚀
            <b>Aporten a mi vida profesional</b>
            {' '}
            y me empujen a
            {' '}
            <b>ser cada vez mejor.</b>
            🚀
          </p>
        </div>
        <img src={illustration} alt='illustration' />
      </main>
    </div>
  );
};

export default About;
