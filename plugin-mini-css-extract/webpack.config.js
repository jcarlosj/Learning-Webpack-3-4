const path = require( 'path' );                         /* Importa el Módulo de Node 'path' */
const minCssExtractPlugin = require( 'mini-css-extract-plugin' );   /* Importa el Plugin (Devuelve una clase) */

// Crea tarea:
module .exports = {
    mode: 'development',                                /* Asigna el modo de transpilación */
    entry: path .resolve( __dirname, 'index.js' ),      /* Asigna el 'entry point', apartir del directorio actual */
    output: {                                           /* Asigna el 'output' */
        path: path .resolve( __dirname, 'dist' ),       /* Busca apartir del directorio actual el directorio 'dist' (destino) */
        filename: 'bundle.js'                           /* Nombre del archivo a generar */
    },
    module: {
        rules: [
            /* Array de los loaders que deseamos utilizar */
            {
                test: /\.css$/,                         /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: [                                  /* Carga los loaders que se van a usar para reconocer los archivos que deseamos reconocer */
                    minCssExtractPlugin .loader,        /* Carga nuestro Plugin, para extraer los archivos CSS (Segundo ejecuta este) */
                    'css-loader'                        /* Carga el archivo CSS únicamente (Primero ejecuta este) */
                ]
            }
        ]
    },
    plugins: [
        /* Array de los plugins que deseamos utilizar */
        new minCssExtractPlugin({                       /* Crea una instancia de nuestro plugin */
            filename: 'css/style.css'                   /* Nombre del archivo de generado */
        })
    ]
}
