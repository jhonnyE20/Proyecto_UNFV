import React from 'react';

const IFormativa = () => {
    return(
        <div className="IFormativa-container">
            <h4>Investigacion Formativa</h4>
            <div className="seccion1-container">
                <label>3.1 Asesorar actividades de Investigacion (SI/NO) - Especifique</label>
                <br></br>
                <br></br>
                <button>Añadir Actividades</button>
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
                <label>3.2 Asesor/a de tesis Pregrado - Postgrado</label>
                <br></br>
                <br></br>
                <button>Añadir Eventos</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del asesorado</th>
                            <th>Tipo</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default IFormativa;