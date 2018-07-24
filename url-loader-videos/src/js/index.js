/* Entry Point */
import '../css/master.css';
import { firstMessage, delayedMessage } from './message.js';       // Importación de archivos JS (Soporte al estándar ECMAScript2015)
import platziImg from '../images/platzi.png';                              // Importa la imagen
import platziVideo from '../videos/que-es-core.mp4';                       // Importa el video

const message = firstMessage;
delayedMessage();

const elImg = document .createElement( 'img' );     /* Creamos el elemento img */
elImg .setAttribute( 'src', platziImg );            /* Creamos la propiedad de url del recurso y agregamos la imagen al elemento */
elImg .setAttribute( 'width', '150px' );             /* Creamos la propiedad de ancho al elemento */
elImg .setAttribute( 'height', '150px' );            /* Creamos la propiedad de alto al elemento */
document .body .append( elImg );                    /* Agregamos el elemento con la imagen dentro del DOM */

const elVideo = document .createElement( 'video' );     /* Creamos el elemento video */
elVideo .setAttribute( 'src', platziVideo );            /* Creamos la propiedad de url del recurso y agregamos la imagen al elemento */
elVideo .setAttribute( 'width', 480 );                  /* Creamos la propiedad de ancho al elemento */
elVideo .setAttribute( 'autoplay', true );              /* Creamos la propiedad de autoplay al elemento */
elVideo .setAttribute( 'controls', true );              /* Creamos la propiedad de controls al elemento */
document .body .append( elVideo );                      /* Agregamos el elemento con la imagen dentro del DOM */

document .write( message );
console .log( message );
