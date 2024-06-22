import React from 'react';

const Capacitacion = () => {
    return(
        <div className="Capacitacion-container">
            <h4>Capacitacion</h4>
            <div className="seccion1-container">
                <label>4.1 Participar en programas de investigacion en ciencia y tecnologia, metodología de la investigacion o gestion de la investigacion</label>
                <br></br>
                <br></br>
                <button>Añadir Actividades</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre de la capacitacion</th>
                            <th>Descripcion</th>
                            <th>Modalidad</th>
                            <th>Fecha inicio</th>
                            <th>Fecha fin</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
        </div>
    );
};

export default Capacitacion;
