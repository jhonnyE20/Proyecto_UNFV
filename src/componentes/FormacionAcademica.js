import React, { useState } from 'react';
import './FormacionAcademica.css';

const opcionesGrado = ['Opcion 1', 'Opcion 2', 'Opcion 3']; /*Aqui van las opciones de Grado */
const opcionesPais = ['Opcion 1', 'Opcion 2', 'Opcion 3']; /*Aqui van las opciones de Pais */

const FormacionAcademica = () => {
  const [grado, setGrado] = useState('');
  const [pais, setPais] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [universidad, setUniversidad] = useState('');
  const [grados, setGrados] = useState([]);

  const handleAgregarGrado = () => {
    if (grado && pais && especialidad && universidad) {
      const nuevoGrado = {
        id: grados.length + 1,
        grado,
        pais,
        especialidad,
        universidad,
      };
      setGrados([...grados, nuevoGrado]);
      setGrado('');
      setPais('');
      setEspecialidad('');
      setUniversidad('');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  const handleBorrarGrado = (id) => {
    setGrados(grados.filter(grado => grado.id !== id));
  };

  return (
    <div className="formacion-academica">
      <h2>Datos del Docente Investigador</h2>
      <div className="form-group">
        <label>Grado o Título</label>
        <select value={grado} onChange={(e) => setGrado(e.target.value)}>
          <option value="">Elegir opción</option>
          {opcionesGrado.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>País de Obtención</label>
        <select value={pais} onChange={(e) => setPais(e.target.value)}>
          <option value="">Elegir opción</option>
          {opcionesPais.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Especialidad</label>
        <input
          type="text"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Universidad o institución</label>
        <input
          type="text"
          value={universidad}
          onChange={(e) => setUniversidad(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAgregarGrado}>
        Guardar datos
      </button>

      <h3>Grados académicos del Docente Investigador</h3>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Grado o Título</th>
            <th>País de Obtención</th>
            <th>Especialidad</th>
            <th>Universidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {grados.map((grado) => (
            <tr key={grado.id}>
              <td>{grado.id}</td>
              <td>{grado.grado}</td>
              <td>{grado.pais}</td>
              <td>{grado.especialidad}</td>
              <td>{grado.universidad}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleBorrarGrado(grado.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormacionAcademica;
