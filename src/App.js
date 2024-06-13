import React, { useState } from 'react';
import './App.css';
import Barralateral from './componentes/Barralateral';
import FormularioDI from './componentes/FormularioDI';
import LineasDeInvestigacion from './componentes/LineasDeInvestigacion';
import FormacionAcademica from './componentes/FormacionAcademica';
import PlanTrabajo from './componentes/PlanTrabajo';

const App = () => {
  const [currentSection, setCurrentSection] = useState('');

  const renderSection = () => {
    switch (currentSection) {
      case 'informacionBasica':
        return <FormularioDI />;
      case 'formacionAcademica':
        return <FormacionAcademica />;
      case 'lineaInvestigacion':
        return <LineasDeInvestigacion />;
      case 'PlanTrabajo':
        return <PlanTrabajo />;
      case 'FichaRacionalizacion':
        return <div>Ficha de Razionalizacion (pendiente)</div>;
      case 'Actividades':
        return <div>Actividades (pendiente)</div>;
      case 'CargaHoraria':
        return <div>Carga Horaria (pendiente)</div>;
      case 'Reportes':
      return <div>Reportes (pendiente)</div>;
    }
  };

  return (
    <div className="App">
      <Barralateral setCurrentSection={setCurrentSection} />
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
