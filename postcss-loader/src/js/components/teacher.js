import React from 'react';           // Importa React
import '../../styl/teacher.styl';    // Importa archivo Stylus

/* Creamos Función pura (o Componente puro) Teacher con React (Sin ciclo de vida) */
function Teacher( props ) {
     /* Esta es la parte que nos transpilaría el preset instalado con Babel */
     return(
        /* JSX : Mezcla entre HTML y XML */
        <li className="Teacher">
            { props .name } <a href={`http://twitter.com/${ props .twitter }`}>{ props .twitter }</a>
        </li>
    )
}

export default Teacher;
