import React, { useState } from 'react';
import './Actividades.css';
import PCientifica from './ElementosActividades/PCientifica';
import PAcademica from './ElementosActividades/PAcademica';
import IFormativa from './ElementosActividades/IFormativa';
import Capacitacion from './ElementosActividades/Capacitacion';
import Gestion from './ElementosActividades/Gestion';
import COrganizacional from './ElementosActividades/COrganizacional';
import Enviar from './ElementosActividades/Enviar';

const Actividades = () => {
  const [activeTab, setActiveTab] = useState('PCientifica');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'PCientifica':
        return <PCientifica />;
      case 'PAcademica':
        return <PAcademica />;
      case 'IFormativa':
        return <IFormativa />;
      case 'Capacitacion':
        return <Capacitacion />;
      case 'Gestion':
        return <Gestion />;
      case 'COrganizacional':
        return <COrganizacional />;
      case 'Enviar':
        return <Enviar />;
      default:
        return null;
    }
  };

  return (
    <div className="actividades-container">
      <h2>Datos del mes del Docente Investigador</h2>
      <br></br>
      <div className="tabs">
        <button className={`tablink ${activeTab === 'PCientifica' ? 'active' : ''}`} onClick={() => setActiveTab('PCientifica')}>1. Produccion Cientifica y T.</button>
        <button className={`tablink ${activeTab === 'PAcademica' ? 'active' : ''}`} onClick={() => setActiveTab('PAcademica')}>2. Produccion Academica</button>
        <button className={`tablink ${activeTab === 'IFormativa' ? 'active' : ''}`} onClick={() => setActiveTab('IFormativa')}>3. Investigacion Formativa</button>
        <button className={`tablink ${activeTab === 'Capacitacion' ? 'active' : ''}`} onClick={() => setActiveTab('Capacitacion')}>4. Capacitacion</button>
        <button className={`tablink ${activeTab === 'Gestion' ? 'active' : ''}`} onClick={() => setActiveTab('Gestion')}>5. Gestion</button>
        <button className={`tablink ${activeTab === 'COrganizacional' ? 'active' : ''}`} onClick={() => setActiveTab('COrganizacional')}>6. Compromiso Organizacional</button>
        <button className={`tablink ${activeTab === 'Enviar' ? 'active' : ''}`} onClick={() => setActiveTab('Enviar')}>7. Enviar</button>
      </div>
      <hr></hr>
      <div className="tabcontent">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Actividades;
