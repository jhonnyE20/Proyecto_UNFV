import React, { useState } from 'react';
import Modal from 'react-modal';
import './LineasDeInvestigacion.css';

Modal.setAppElement('#root');

const LineaDeInvestigacion = () => {
  const [showModal, setShowModal] = useState(false);
  const [linea, setLinea] = useState('');
  const [lineas, setLineas] = useState([]);
  const opcionesLineaInvestigacion = ['Opción 1', 'Opción 2', 'Opción 3']; // Aqui van las lineas de Investigacion

  const handleNuevaLineaClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLinea('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLineas([...lineas, { id: lineas.length + 1, nombre: linea }]);
    handleCloseModal();
  };

  const handleBorrarLinea = (id) => {
    setLineas(lineas.filter(linea => linea.id !== id));
  };

  return (
    <div className="linea-de-investigacion">
      <h1>Líneas de Investigación</h1>
      <button className="new-linea-button" onClick={handleNuevaLineaClick}>
        + Nueva Línea de Investigación
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Nueva Línea de Investigación"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Nueva Línea de Investigación</h2>
        <form onSubmit={handleFormSubmit}>
          <br></br>
          <label>
            Nombre de Línea:
            <select value={linea} onChange={(e) => setLinea(e.target.value)} required>
              <option value="">Selecciona una opción</option>
              {opcionesLineaInvestigacion.map((opcion, index) => (
                <option key={index} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </label>
          <div className="modal-buttons">
            <br></br>
            <br></br>
            <button type="button" onClick={handleCloseModal}>
              Cancelar
            </button>
            <button type="submit">Guardar Datos</button>
          </div>
        </form>
      </Modal>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre de Línea</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {lineas.map((linea, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{linea.nombre}</td>
              <td>
                <button className="delete-button" onClick={() => handleBorrarLinea(linea.id)}>
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

export default LineaDeInvestigacion;

