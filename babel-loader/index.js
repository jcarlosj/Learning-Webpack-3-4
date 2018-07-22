/* Entry Point */
import './master.css';
import { firstMessage, delayedMessage } from './message.js';       // Importación de archivos JS (Soporte al estándar ECMAScript2015)

const message = firstMessage;
delayedMessage();

document .write( message );
console .log( message );
