import React, { useState } from 'react';
import './CargaHoraria.css';

const CargaHoraria = () => {
    const [rows, setRows] = useState([
        { id: 1, nombre: 'xxxx', tipo: 'xxxx', fecha: 'xxxx-xx-xx' }
    ]);

    const handleDelete = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    };

    return (
        <div className="cargaHoraria-container">
            <h2>Adjuntar carga horaria - 2024</h2>
            <hr></hr>
            <div className="contenido-archivo">
                <div className="contenido-item">
                    <h3>1. Contenido de archivo</h3>
                    <label>
                        <input type="radio" name="contenido" value="lectiva" /> Carga lectiva
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="contenido" value="no-lectiva" /> Carga no lectiva
                    </label>
                </div>
                <div className="archivo-item">
                    <h3>2. Seleccione el archivo(*.pdf)</h3>
                    <input type="file" name="archivo" />
                </div>
            </div>
            <button className="upload-button">Subir Archivo</button>
            <h3>Documentos de Carga Horaria</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Archivo</th>
                        <th>Tipo de Contenido</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.nombre}</td>
                            <td>{row.tipo}</td>
                            <td>{row.fecha}</td>
                            <td>
                                <button className="delete-button" onClick={() => handleDelete(row.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CargaHoraria;
