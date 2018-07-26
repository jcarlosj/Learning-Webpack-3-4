const path = require( 'path' );                         /* Importa el Módulo de Node 'path' */

const webpack = require( 'webpack' );                                      /* Importa Webpack */

// Crea tarea:
module .exports = {
    mode: 'development',                                /* Asigna el modo de transpilación */
    entry: {                                            /* Asigna el 'entry point', apartir del directorio actual */
        modules: [                                      /* Definición del Nombre de nuestro archivo final 'modules.js' */
            'react',
            'react-dom'
        ]
    },
    output: {                                           /* Asigna el 'output' */
        path: path .resolve( __dirname, 'dist' ),       /* Busca apartir del directorio actual el directorio 'dist' (destino) */
        filename: '[name].js',                          /* Nombre de los archivos a generar [name] alias para poner nombres dinámicos a los archivos de salida  */
        library: '[name]'                               /* Nombre global de la librería 'modules' por que fue definido en el entry-point */
    },
    plugins: [
        /* 'DLL Plugin': Nos ayuda a generar nuestro bundle de dependencias o archivos comunes y darle cierta configuración que entenderá el paquete principal
        que retornará un JSON y que solo podrá interpretar el archivo principal usando el 'DLL Reference Plugin' */
        new webpack .DllPlugin({
            name: '[name]',                                          /* Nombres que vamos a exportar para que sean usandos como referencias */
            path: path .join( __dirname, '[name]-manifest.json' )    /* Donde va a exportar el archivo JSON que va a servir de archivo de configuración inicial (rutas de depencias comunes) */
        })
    ]
}
