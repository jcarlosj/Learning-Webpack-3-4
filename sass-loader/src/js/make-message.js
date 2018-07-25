/* Crea una función que retorna un elemento 'p' con un texto dentro de el */
function makeMessage( msg ) {
    const el = document .createElement( 'p' );
    el .textContent = msg;
    return el;
}

export default makeMessage;     // Exporta por defecto este módulo
