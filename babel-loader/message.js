const waitTime = new Promise( ( bien, mal ) => {         /* Por Standar se usan ( response, reject ) como nombres de atributo */
    setTimeout( () => {
        bien( 'Han pasado 3 segundos' );
    }, 3000 );
});

module .exports = {
    firstMessage: 'Hola desde un módulo con Babel (ECMAScript2015)',
    delayedMessage: async () => {
        const message = await waitTime;     // Espera una Promesa

        console .log( message );
    }
}
