import React from 'react';
import './GenerarReportes.css';

const GenerarReportes = () => {
    return (
        <div className="generar-reportes-container">
            <h2>Generar Reportes</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mes Generado</th>
                        <th>Reporte</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>xxxxx</td>
                        <td>
                            <button className="pdf-button">PDF</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GenerarReportes;
