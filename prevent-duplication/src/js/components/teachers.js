import React, { Component } from 'react';           // Importa React y Component
import Teacher from './teacher.js';                 // Importa Teacher Component
import '../../scss/teachers.scss';                  // Importa archivo Sass

/* Creamos componente Teachers con React */
class Teachers extends Component {
    render() {
        /* Esta es la parte que nos transpilaría el preset instalado con Babel */
        return (
            /* JSX : Mezcla entre HTML y XML */
            <ul className="Teachers">
                { this .props .data .teachers
                    .map( ( teacherData ) => { /* Mapeamos cada uno de los datos para iterar los datos de cada teacher */
                        return <Teacher { ...teacherData } />; /* Pasamos los datos a nuestro componente */
                    })
                }
            </ul>
        )
    }
}

export default Teachers;
