const path = require( 'path' );                         /* Importa el Módulo de Node 'path' */
const minCssExtractPlugin = require( 'mini-css-extract-plugin' );   /* Importa el Plugin (Devuelve una clase) */

const webpack = require( 'webpack' );                                      /* Importa Webpack */

// Crea tarea:
module .exports = {
    mode: 'development',                                /* Asigna el modo de transpilación */
    entry: {                                            /* Asigna el 'entry point', apartir del directorio actual */
        home: path .resolve( __dirname, 'src/js/index.js' ),
        contact: path .resolve( __dirname, 'src/js/contact.js' )
    },
    output: {                                           /* Asigna el 'output' */
        path: path .resolve( __dirname, 'dist' ),       /* Busca apartir del directorio actual el directorio 'dist' (destino) */
        filename: '[name].js',                          /* Nombre de los archivos a generar [name] alias para poner nombres dinámicos a los archivos de salida  */
        publicPath: path .resolve( __dirname, 'dist' ) + '/',    /* Nombre del path público donde encontrará los archivos generados */
        chunkFilename: 'js/[id].[chunkhash].js'         /* Como se van a llamar los fragmentos de código que estamos generando (en nuestro caso los módulos: 0.js )*/
    },
    module: {
        rules: [
            /* Loader para soporte de CSS, Agregamos loader para soportar PostCSS */
            {
                test: /\.css$/,                         /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: [                                  /* Carga los loaders que se van a usar para reconocer los archivos que deseamos reconocer */
                    minCssExtractPlugin .loader,        /* Carga nuestro Plugin, para extraer los archivos CSS (Segundo ejecuta este) */
                    {
                        loader: 'css-loader',           /* Carga el archivo CSS únicamente (Segundo ejecuta este) */
                        options: {
                            modules: true,              /* Permitir uso de módulos (así puedo importar archivos de css dentro de un mismo archivo css, es algo que no se puede hacer nativamente con css) */
                            importLoader: 1             /* Número de loaders que va a importar (en nuestro caso 'postcss-loader') */
                        }
                    },
                    'postcss-loader'                    /* Carga el archivo CSS únicamente (Ejecuta este loader) */
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
            /* Loader para soporte de Less */
            {
                test: /\.less$/,                         /* Expresión regular: para identificar el tipo de archivo que deseamos reconocer */
                use: [                                  /* Carga los loaders que se van a usar para reconocer los archivos que deseamos reconocer */
                    minCssExtractPlugin .loader,        /* Carga nuestro Plugin, para extraer los archivos CSS (Segundo ejecuta este) */
                    'css-loader',                       /* Carga el archivo CSS únicamente (Segundo se ejecuta este) */
                    {                                   /* Carga el archivo SCSS únicamente (Primero ejecuta este) */
                        loader: 'less-loader',
                        options: {
                            /* */
                            noIECompat: true            /* Que los archivos Less no sean compatibles con las versiones antiguas de Internet Explorer */
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
                        presets: [ 'es2015', 'react' ],         /* Array de Estándares a soportar / ReactJS */
                        plugins: [ 'syntax-dynamic-import' ]    /* Agregamos plugin de Babel */
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
        }),
        new webpack .DllReferencePlugin({               /* DllReferencePlugin: hace referencia a un DLL */
            manifest: require( './modules-manifest.json' ) /* Importa el archivo DLL */
        })
    ]
}
