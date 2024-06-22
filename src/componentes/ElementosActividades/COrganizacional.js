import React from 'react';

const COrganizacional = () => {
    return(
        <div className="COrganizacional-container">
            <h4>Compromiso organizacional (cumplir con los encargos del VRIN)</h4>
            <div className="seccion1-container">
                <label>6.1 Participar en eventos de la UNFV</label>
                <br></br>
                <br></br>
                <button>Añadir Eventos</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Tipo</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion2-container">
                <label>6.2 Jurado evaluador</label>
                <br></br>
                <br></br>
                <button>Añadir</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Tipo</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion3-container">
                <label>6.3 Representar a la UNFV</label>
                <br></br>
                <br></br>
                <button>Añadir</button>
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
            <div className="seccion4-container">
                <label>6.4 Cumplir con sus informes</label>
                <br></br>
                <br></br>
                <button>Añadir informes</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion5-container">
                <label>6.5 Entrega de plan de trabajo</label>
                <br></br>
                <br></br>
                <button>Añadir Entregas</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion6-container">
                <label>6.6 Comisiones</label>
                <br></br>
                <br></br>
                <button>Añadir entregas</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Descripcion</th>
                            <th>Tipo</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default COrganizacional;
