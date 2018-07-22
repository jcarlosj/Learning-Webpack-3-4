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
            },
            /* Nuevo Loader para la configuración del soporte de ECMAScript */
            {
                test: /\.js$/,                         /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: {
                    loader: 'babel-loader',            /* (Definición explicita de un loader requiere un nombre de key 'loader') */
                    options: {
                        presets: [ 'es2015' ]          /* Array de Estándares a soportar */
                    }
                }
            },
            /* Nuevo Loader para la configuración de soporte de imágenes */
            {
                test: /\.(jpg|png|gif)$/,              /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: {
                    loader: 'url-loader',              /* (Definición explicita de un loader requiere un nombre de key 'loader') */
                    options: {
                        limit: 100000                  /* Hasta que límite (en bytes) de peso va a realizar una transformación a base 64 (convertirlas a código y ponerlas junto con nuestro JavaScript) */
                    }
                }
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
