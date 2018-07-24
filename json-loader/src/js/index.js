/* Entry Point */
import '../css/master.css';
import { firstMessage, delayedMessage } from './message.js';       // Importación de archivos JS (Soporte al estándar ECMAScript2015)
import platziImg from '../images/platzi.png';                      // Importa la imagen
import renderToDOM from './render-to-dom.js'

const data = require( 'json5-loader!./teachers.json5' );
console .log( 'Teachers', data );

const message = firstMessage;
delayedMessage();

const elImg = document .createElement( 'img' );     /* Creamos el elemento img */
elImg .setAttribute( 'src', platziImg );            /* Creamos la propiedad de url del recurso y agregamos la imagen al elemento */
elImg .setAttribute( 'width', '150px' );             /* Creamos la propiedad de ancho al elemento */
elImg .setAttribute( 'height', '150px' );            /* Creamos la propiedad de alto al elemento */
document .body .append( elImg );                    /* Agregamos el elemento con la imagen dentro del DOM */

/* Recorre cada item crea un li y lo agrega al DOM */
data . teachers .forEach( ( teacher ) => {
    const li = document .createElement( 'li' );
    li .textContent = teacher .name;
    renderToDOM( li );
});

document .write( message );
console .log( message );
