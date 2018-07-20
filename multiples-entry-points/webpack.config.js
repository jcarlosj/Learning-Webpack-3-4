const path = require( 'path' );                         /* Importa el Módulo de Node 'path' */
const minCssExtractPlugin = require( 'mini-css-extract-plugin' );   /* Importa el Plugin (Devuelve una clase) */

// Crea tarea:
module .exports = {
    mode: 'development',                                /* Asigna el modo de transpilación */
    entry: {                                            /* Asigna el 'entry point', apartir del directorio actual */
        main: path .resolve( __dirname, 'src/js/index.js' ),           /* Asigna nombre a cada entry-point */
        precios: path .resolve( __dirname, 'src/js/precios.js' ),      /* Asigna nombre a cada entry-point */
        contacto: path .resolve( __dirname, 'src/js/contacto.js' )     /* Asigna nombre a cada entry-point */
    },
    output: {                                           /* Asigna el 'output' */
        path: path .resolve( __dirname, 'dist' ),       /* Busca apartir del directorio actual el directorio 'dist' (destino) */
        filename: 'js/[name].js'                        /* Nombre del archivo a generar nombres dinámicos para cada bundle */
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
            filename: 'css/[name].css'                  /* Nombre del archivo de generado será el mismo del archivo de entrada */
        })
    ]
}
