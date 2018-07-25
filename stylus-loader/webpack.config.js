const path = require( 'path' );                         /* Importa el Módulo de Node 'path' */
const minCssExtractPlugin = require( 'mini-css-extract-plugin' );   /* Importa el Plugin (Devuelve una clase) */

// Crea tarea:
module .exports = {
    mode: 'development',                                /* Asigna el modo de transpilación */
    entry: path .resolve( __dirname, 'src/js/index.js' ),      /* Asigna el 'entry point', apartir del directorio actual */
    output: {                                           /* Asigna el 'output' */
        path: path .resolve( __dirname, 'dist' ),       /* Busca apartir del directorio actual el directorio 'dist' (destino) */
        filename: 'bundle.js'                           /* Nombre del archivo a generar */
    },
    module: {
        rules: [
            /* Loader para soporte de CSS */
            {
                test: /\.css$/,                         /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: [                                  /* Carga los loaders que se van a usar para reconocer los archivos que deseamos reconocer */
                    minCssExtractPlugin .loader,        /* Carga nuestro Plugin, para extraer los archivos CSS (Segundo ejecuta este) */
                    'css-loader'                        /* Carga el archivo CSS únicamente (Primero ejecuta este) */
                ]
            },
            /* Loader para soporte de Sass */
            {
                test: /\.scss$/,                         /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: [                                  /* Carga los loaders que se van a usar para reconocer los archivos que deseamos reconocer */
                    minCssExtractPlugin .loader,        /* Carga nuestro Plugin, para extraer los archivos CSS (Segundo ejecuta este) */
                    'css-loader',                       /* Carga el archivo CSS únicamente (Segundo se ejecuta este) */
                    'sass-loader'                       /* Carga el archivo SCSS únicamente (Primero ejecuta este) */
                ]
            },
            /* Loader para soporte de Stylus */
            {
                test: /\.styl$/,                         /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: [                                  /* Carga los loaders que se van a usar para reconocer los archivos que deseamos reconocer */
                    minCssExtractPlugin .loader,        /* Carga nuestro Plugin, para extraer los archivos CSS (Segundo ejecuta este) */
                    'css-loader',                       /* Carga el archivo CSS únicamente (Segundo se ejecuta este) */
                    {                                   /* Carga el archivo Stylus únicamente (Primero ejecuta este) */
                        loader: 'stylus-loader',
                        options: {
                            /* Traeremos módulos externos (mixins) */
                            use: [
                                require( 'nib' ),       /* Conjunto de mixins que va a ayudar a que algunos prefijos de navegadores antiguos funcionen bien */
                                require( 'rupture' )    /* Para dar soporte a MediaQueries con una sintaxis más sencilla */
                            ],
                            import: [
                                /* Listado de rutas de archivos que deseo importar de forma automática */
                                '~nib/lib/nib/index.styl',   /* ~ es un alias para entrar al directorio de node_modules*/
                                '~rupture/rupture/index.styl'   /* ~ es un alias para entrar al directorio de node_modules*/
                            ]
                        }
                    }
                ]
            },
            /* Nuevo Loader para la configuración del soporte de ECMAScript */
            {
                test: /\.js$/,                         /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                exclude: /(node_modules)/,             /*  */
                use: {
                    loader: 'babel-loader',            /* (Definición explicita de un loader requiere un nombre de key 'loader') */
                    options: {
                        presets: [ 'es2015', 'react' ]          /* Array de Estándares a soportar / ReactJS */
                    }
                }
            },
            /* Nuevo Loader para la configuración de soporte de imágenes */
            {
                test: /\.(jpg|png|gif|woff)$/,  /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: {
                    loader: 'url-loader',              /* (Definición explicita de un loader requiere un nombre de key 'loader') */
                    options: {
                        limit: 100000                  /* Hasta que límite (en bytes) de peso va a realizar una transformación a base 64 (convertirlas a código y ponerlas junto con nuestro JavaScript) */
                    }
                }
            },
            /* Nuevo Loader para la configuración de soporte de fuentes */
            {
                test: /\.(eot|ttf|svg)$/,  /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: {
                    loader: 'file-loader',              /* (Definición explicita de un loader requiere un nombre de key 'loader') */
                    options: {
                        limit: 100000                  /* Hasta que límite (en bytes) de peso va a realizar una transformación a base 64 (convertirlas a código y ponerlas junto con nuestro JavaScript) */
                    }
                }
            },
            /* Nuevo Loader para la configuración de soporte JSON */
            {
                test: /\.(json)$/,  /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: {
                    loader: 'json5-loader'             /* (Definición explicita de un loader requiere un nombre de key 'loader') */

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
