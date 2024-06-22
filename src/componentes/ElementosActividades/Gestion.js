import React from 'react';

const Gestion = () => {
    return(
        <div className="Gestion-container">
            <h4>Gestion</h4>
            <div className="seccion1-container">
                <label>5.1 Miembros de consejo consultivo de revistas? - Especifique</label>
                <br></br>
                <br></br>
                <button>Añadir Miembro</button>
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
                <label>5.2 Par revisor - Especifique</label>
                <br></br>
                <br></br>
                <button>Añadir Revistas</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Articulo</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion3-container">
                <label>5.3 Concursar a fondos internos - Especifique</label>
                <br></br>
                <br></br>
                <button>Añadir Fondos internos</button>
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
                <label>5.4 Concursar a fondos externos - Especifique</label>
                <br></br>
                <br></br>
                <button>Añadir Fondos externos</button>
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
            <div className="seccion5-container">
                <label>5.5 Formar y asesorar o participar en comunidades del conocimiento - Especifique</label>
                <br></br>
                <br></br>
                <button>Añadir Participacion</button>
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
            </div>
        </div>
    )
};

export default Gestion;
