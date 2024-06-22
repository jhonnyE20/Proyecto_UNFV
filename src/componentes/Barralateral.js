import React, { useState } from 'react';
import logo from '../imagenes/logo_unfv.PNG';
import './Barralateral.css';

const Barralateral = ({ setCurrentSection }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleSubmenuToggle = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <div className="sidebar">
      <img src={logo} alt="Logo UNFV" className="logo" />
      <div className="menu-item" onClick={handleSubmenuToggle}>
        Datos Personales
      </div>
      {showSubmenu && (
        <div className="submenu">
          <div className="submenu-item" onClick={() => setCurrentSection('informacionBasica')}>
            Información Básica
          </div>
          <div className="submenu-item" onClick={() => setCurrentSection('formacionAcademica')}>
            Formación Académica
          </div>
          <div className="submenu-item" onClick={() => setCurrentSection('lineaInvestigacion')}>
            Línea de Investigación
          </div>
        </div>
      )}
      <div className="menu-item" onClick={() => setCurrentSection('PlanTrabajo')}>
        Plan de Trabajo
      </div>
      <div className="menu-item" onClick={() => setCurrentSection('FichaRacionalizacion')}>
        Ficha de Racionalizacion
      </div>
      <div className="menu-item" onClick={() => setCurrentSection('Actividades')}>
        Actividades
      </div>
      <div className="menu-item" onClick={() => setCurrentSection('CargaHoraria')}>
        Carga Horaria
      </div>
      <div className="menu-item" onClick={() => setCurrentSection('Reportes')}>
        Reportes
      </div>
    </div>
  );
}

export default Barralateral;
