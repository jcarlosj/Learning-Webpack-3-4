/* Entry Point */
import '../css/master.css';
import { firstMessage, delayedMessage } from './message.js'; // Importación de archivos JS (Soporte al estándar ECMAScript2015)
import platziImg from '../images/platzi.png'; // Importa la imagen
import renderToDOM from './render-to-dom.js'
import '../less/main.less';                     // Importa archivo Less
import '../css/init-post.css';                  // Importa archivo CSS (con PostCSS)


import React from 'react';                          // Importa React y Component
import { render } from 'react-dom';                 // Importar la función 'render' de react-dom
import Teachers from './components/teachers.js';    // Importa el Componente de Teeachers

const $button = document .getElementById( 'dynamic-import' );       /* Obtiene el elemento del DOM con id 'dynamic-import' */

$button .addEventListener( 'click', async () => {       /* Función Asíncrona */
    const { default: alerta } = await import( './alerta.js' );       /* Destructuring / Dynamic Imports*/
    alerta();
});

const data = require( 'json5-loader!./teachers.json5' );
console .log( 'Teachers', data );

const message = firstMessage;
delayedMessage();

const elImg = document .createElement( 'img' );  /* Creamos el elemento img */
elImg .setAttribute( 'src', platziImg );         /* Creamos la propiedad de url del recurso y agregamos la imagen al elemento */
elImg .setAttribute( 'width', '150px' );         /* Creamos la propiedad de ancho al elemento */
elImg .setAttribute( 'height', '150px' );        /* Creamos la propiedad de alto al elemento */
document .body .append( elImg );                 /* Agregamos el elemento con la imagen dentro del DOM */


/* Renderización del componente */
render( <Teachers data = { data } />, document .getElementById( 'container' ) ); /* Elemento en el DOM donde se mostraran los datos */



/* Recorre cada item crea un li y lo agrega al DOM */
data . teachers .forEach( ( teacher ) => {
    const li = document .createElement( 'li' );
    li .textContent = teacher .name;
    renderToDOM( li );
});


document .write( message );
console .log( message );
