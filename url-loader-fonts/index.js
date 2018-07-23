/* Entry Point */
import './master.css';
import { firstMessage, delayedMessage } from './message.js';       // Importación de archivos JS (Soporte al estándar ECMAScript2015)
import platziImg from './platzi.png';                              // Importa la imagen que está en el raíz del proyecto

const message = firstMessage;
delayedMessage();

const elImg = document .createElement( 'img' );     /* Creamos el elemento img */
elImg .setAttribute( 'src', platziImg );            /* Creamos la propiedad de url del recurso y agregamos la imagen al elemento */
elImg .setAttribute( 'width', '150px' );             /* Creamos la propiedad de ancho al elemento */
elImg .setAttribute( 'height', '150px' );            /* Creamos la propiedad de alto al elemento */
document .body .append( elImg );                    /* Agregamos el elemento con la imagen dentro del DOM */

document .write( message );
console .log( message );
