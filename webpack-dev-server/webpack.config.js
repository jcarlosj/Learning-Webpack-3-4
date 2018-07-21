const path = require( 'path' );                         /* Importa el Módulo de Node 'path' */

// Crea tarea:
module .exports = {
    mode: 'development',                                /* Asigna el modo de transpilación */
    entry: path .resolve( __dirname, 'index.js' ),      /* Asigna el 'entry point', apartir del directorio actual */
    output: {                                           /* Asigna el 'output' */
        path: path .resolve( __dirname, 'dist' ),       /* Busca apartir del directorio actual el directorio 'dist' (destino) */
        filename: 'bundle.js'                           /* Nombre del archivo a generar */
    },
    devServer: {
        contentBase: './',          /* Ruta por defecto: dist podria ser tambien otra ruta asi: contentBase: path .join( __dirname, 'dist' )*/
        open: true,                 /* Abre una pestaña en el navegador */
        compress: true,             /* Comprime los archivos (gzip) */
        publicPath: '/web/',        /* Los archivos estarán disponibles en esa ruta */
        stats: 'errors-only',       /* Solo vamos a ver los mensajes que sean error.*/
        port: 7000                  /* Puerto 7000 */
    },
    module: {
        rules: [
            /* Array de los loaders que deseamos utilizar */
            {
                test: /\.css$/,                         /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: [                                  /* Carga los loaders que se van a usar para reconocer los archivos que deseamos reconocer */
                    'style-loader',                     /* Interpreta los estilos CSS (Segundo ejecuta este) */
                    'css-loader'                        /* Carga el archivo CSS únicamente (Primero ejecuta este) */
                ]
            }
        ]
    },
    watch: true
}
