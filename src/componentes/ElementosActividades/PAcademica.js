import React, { useState } from 'react';
/*import '/.PAcademica.css'*/

const PAcademica = () => {
    return(
        <div className="PAcademica-container">
            <h4>Produccion Academica</h4>
            <div className="seccion1-container">
                <label>2.1 Libros - capitulos (SI/NO) - Especifique</label>
                <br></br>
                <br></br>
                <button>Añadir Libros</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion2-container">
                <label>2.2 Organizacion de eventos (SI/NO) - Especifique</label>
                <br></br>
                <br></br>
                <button>Añadir Eventos</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default PAcademica;
