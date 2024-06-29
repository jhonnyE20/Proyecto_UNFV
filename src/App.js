import React, { useState } from 'react';
import './App.css';
import Barralateral from './componentes/Barralateral';
import FormularioDI from './componentes/FormularioDI';
import LineasDeInvestigacion from './componentes/LineasDeInvestigacion';
import FormacionAcademica from './componentes/FormacionAcademica';
import PlanTrabajo from './componentes/PlanTrabajo';
import FichaRacionalizacion from './componentes/FichaRacionalizacion';
import CargaHoraria from './componentes/CargaHoraria';
import GenerarReportes from './componentes/GenerarReportes';
import Actividades from './componentes/Actividades';

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
        return <FichaRacionalizacion />;
      case 'Actividades':
        return <Actividades />;
      case 'CargaHoraria':
        return <CargaHoraria />;
      case 'Reportes':
      return <GenerarReportes />;
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
