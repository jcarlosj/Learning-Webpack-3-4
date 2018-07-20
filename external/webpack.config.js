const path = require( 'path' );                         /* Importa el Módulo de Node 'path' */

// Crea tarea:
module .exports = {
    mode: 'development',                                /* Asigna el modo de transpilación */
    entry: path .resolve( __dirname, 'index.js' ),      /* Asigna el 'entry point', apartir del directorio actual */
    output: {                                           /* Asigna el 'output' */
        path: path .resolve( __dirname, 'dist' ),       /* Busca apartir del directorio actual el directorio 'dist' (destino) */
        filename: 'bundle.js'                           /* Nombre del archivo a generar */
    }
}
