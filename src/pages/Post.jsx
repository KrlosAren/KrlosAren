import React from 'react';
import { Helmet } from 'react-helmet';

const Post = () => {
  const css1 = 'https://storage.googleapis.com/krlosaren-portafolio/images/ccs1.svg';
  const css2 = 'https://storage.googleapis.com/krlosaren-portafolio/images/css2.svg';
  const css3 = 'https://storage.googleapis.com/krlosaren-portafolio/images/css3.svg';
  const html = 'https://storage.googleapis.com/krlosaren-portafolio/images/html.svg';
  const js = 'https://storage.googleapis.com/krlosaren-portafolio/images/js.svg';
  const makesimple = 'https://storage.googleapis.com/krlosaren-portafolio/images/makesimple.gif';
  return (
    <>
      <Helmet>
        <title>Krlosaren | MakeSimple </title>
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
        <main className='main'>
          <div className='post__content'>
            <h3>Mini Retos para Intentar</h3>
            <p>
              Cambiar de área de conocimiento no siempre es sencillo,
              salir de la zona de confort no resulta un paso fácil.
              Este es mi caso, soy arquitecto de profesión,
              pero con ganas de trabajar en tecnología.
            </p>
            <p>
              Cuando das tus primeros pasos en programación puede ser abrumador,
              Backend, Frontend, Base de Datos, PHP, JavaScript,
              Dockers, DevOps y otros términos que parecerían imposibles de entender.
              Tranquilo solo respira y sigue leyendo.
            </p>
            <p>
              Decidir que aprender de primero puede ser una decisión difícil,
              en mi caso decidí aprender sobre desarrollo web y en paralelo ir tomando cursos y
              clases sobre fundamentos de programación, necesario cuando solo conoces lo básico de computadoras.
            </p>
            <p>
              Esta decisión se basa en la cercanía que tengo con el diseño, un área que se me hace más familiar ,
              esto me llevo a aprender lenguajes como HTML y CSS para pintar en el navegador y
              poder visualizar lo que voy creando, sin embargo, esto no es suficiente para realizar funcionalidades
              con las que interactuamos en nuestras aplicaciones favoritas, así que era necesario aprender JavaScript(JS),
              un lenguaje de programación que te permite interactuar con el navegador, el cliente y poder darle más dinamismo
              a tus aplicaciones web.
            </p>
            <p>
              Claro, aprender JavaScript puede ser una tarea larga y un poco frustrante,
              así que luego de varios cursos, mucha practica y más errores, decidí realizar
              ciertos retos que permitan poner en práctica los conocimientos que he ido adquiriendo.
              Y es esto lo que te quiero compartir.
            </p>
            <p>
              Mi intención es ir poniendo en práctica HTML, CSS y JS a través de pequeñas aplicaciones,
              porque conozco lo frustrante que puede ser querer realizar una aplicación compleja.
              Entonces apliquemos “Divide y vencerás”, con pequeñas piedras se construyen grandes caminos.
            </p>
            <p>
              Haremos esto juntos, con cada reto aprenderemos nuevas cosas,
              que pueden parecer pequeñas pero con la combinación de todas puedes hacer el siguiente Google,
              bueno espera un poco, primero aprendamos a hacer una calculadora.
            </p>
            <h2>El primer reto será realizar un DropDown.</h2>
            <p>Aquí el resultado final:</p>
            <img src={makesimple} alt='dropdown' />
            <p>
              Me gustaría aclarar que no soy experto, compartiré mi forma de hacerlo,
              seguro existen formas más optimas, si me las muestras seria genial.
            </p>
            <p>Ahora el Código HTML:</p>
            <img src={html} alt='html-code' />
            <p>Como verán, es un HTML sencillo, donde tengo un contenedor, y dentro de este se encuentra el menú.</p>
            <p>
              Aquí lo que hice fue hacer un contenedor, el cual tendría dos DIV,
              uno que contiene el botón para desplegar el menú y el otro el menú a desplegar.
              Con esto logramos manejar todo desde el contenedor del DropMenu y el Settings, y
              hacer un poco más legible el código.
            </p>
            <img src={css1} alt='css1-code' />
            <p>
              En el CSS para hacer que el menú este por default oculto uso una Opacity = 0
              y aparte creo otra clase con Opacity = 1 , que será agregada de manera dinámica en JS,
              estas mismas clases contiene la parte de transiciones, para hacer más elegante el despliegue.
            </p>
            <img src={css2} alt='css2-code' />
            <p>Ya luego de tener el HTML y CSS, usamos JS para darle dinamismo.</p>
            <img src={js} alt='js-code' />
            <p>
              El código en JS es muy sencillo, usamos las constantes, BUTTON para el botón del menú,
              DROPMENU que será el menú a desplegar y ARROW que girara el indicador
              cuando el menu esta desplegado y cuando no.
            </p>
            <p>
              Ya con esto realizamos una simple función, donde a los elementos HTML anteriormente mencionados,
              le agregamos o quitamos las clases auxiliares que creamos en el CSS.
            </p>
            <p>
              Aquí usamos una propiedad de JS que es Element.classNameList.toggle,
              que nos permite revisar si una clase esta aplicada a nuestro elemento e intercambiar entre estas.
            </p>
            <p>
              En nuestro caso, agregamos las clases Show__menu y After,
              las cuales desplegarán el menú, y rotarán nuestra flecha.
            </p>
            <img src={css3} alt='css3-code' />
            <p>
              Por otro lado, uso una función de JS preventDefault(), para eliminar la recarga al hacer click
              sobre el botón de Settings, y así seguir con el flujo del programa.
            </p>
            <p>
              Ojalá este mini tutorial sea de tu agrado, y puedas comentar otras maneras de realizar lo mismo,
              o como incluso mejoraría el código.
            </p>
            <p>
              Puedes revisar el código completo en el repositorio de GitHub:
              <a href='https://github.com/KrlosAren/Make-Simple/tree/master/00_Settings' target='_blank' rel='noreferrer'>
                https://github.com/KrlosAren/Make-Simple/tree/master/00_Settings
              </a>
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Post;
