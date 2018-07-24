/* Entry Point */
import '../css/master.css';
import { firstMessage, delayedMessage } from './message.js';       // Importación de archivos JS (Soporte al estándar ECMAScript2015)
import platziImg from '../images/platzi.png';                      // Importa la imagen
import renderToDOM from './render-to-dom.js'

import React, { Component } from 'react';                          // Importa React  y Component
import { render } from 'react-dom';                                // Importar la función 'render' de react-dom

const data = require( 'json5-loader!./teachers.json5' );
console .log( 'Teachers', data );

/* Creamos Función pura (o Componente puro) Teacher con React (Sin ciclo de vida) */
function Teacher( props ) {
    return(
        <li className="Teacher">
            { props .name } <a href={`http://twitter.com/${ props .twitter }`}>{ props .twitter }</a>
        </li>
    )
}
/* Creamos componente Teachers con React */
class Teachers extends Component {
    render() {
        /* Esta es la parte que nos transpilaría el preset instalado con Babel */
        return (
            /* JSX : Mezcla entre HTML y XML */
            <ul className="Teachers">
                { this .props .data .teachers
                    .map( ( teacherData ) => {          /* Mapeamos cada uno de los datos para iterar los datos de cada teacher */
                        return <Teacher { ...teacherData } />;                              /* Pasamos los datos a nuestro componente */
                    })
                }
            </ul>
        )
    }
}

const message = firstMessage;
delayedMessage();

const elImg = document .createElement( 'img' );     /* Creamos el elemento img */
elImg .setAttribute( 'src', platziImg );            /* Creamos la propiedad de url del recurso y agregamos la imagen al elemento */
elImg .setAttribute( 'width', '150px' );             /* Creamos la propiedad de ancho al elemento */
elImg .setAttribute( 'height', '150px' );            /* Creamos la propiedad de alto al elemento */
document .body .append( elImg );                    /* Agregamos el elemento con la imagen dentro del DOM */

/* Renderización del componente */
render( <Teachers data = { data } />, document .getElementById( 'container' ) );           /* Elemento en el DOM donde se mostraran los datos */

/* Recorre cada item crea un li y lo agrega al DOM */
data . teachers .forEach( ( teacher ) => {
    const li = document .createElement( 'li' );
    li .textContent = teacher .name;
    renderToDOM( li );
});

document .write( message );
console .log( message );
