import React from 'react';
import './FormularioDI.css';

const FormularioDI = () => {
  return (
    <div className="form-container">
      <h1>Datos del Docente Investigador</h1>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dni">DNI</label>
            <input type="text" id="dni" />
          </div>
          <div className="form-group">
            <label htmlFor="codigoDocente">Código Docente</label>
            <input type="text" id="codigoDocente" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombres">Nombres</label>
            <input type="text" id="nombres" />
          </div>
          <div className="form-group">
            <label htmlFor="apellidoPaterno">Apellido Paterno</label>
            <input type="text" id="apellidoPaterno" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="apellidoMaterno">Apellido Materno</label>
            <input type="text" id="apellidoMaterno" />
          </div>
          <div className="form-group">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input type="date" id="fechaNacimiento" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="genero">Género</label>
            <input type="text" id="genero" />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" id="telefono" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico</label>
            <input type="email" id="correo" />
          </div>
          <div className="form-group">
            <label htmlFor="foto">Foto</label>
            <input type="file" id="foto" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="departamento">Departamento Académico</label>
            <input type="text" id="departamento" />
          </div>
          <div className="form-group">
            <label htmlFor="facultad">Facultad</label>
            <select id="facultad">
              <option value="">--SELECCIONE FACULTAD--</option>
              <option value="facultad1">Facultad 1</option>
              <option value="facultad2">Facultad 2</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tipoCondicion">Tipo Condición</label>
            <select id="tipoCondicion">
              <option value="">--SELECCIONE CONDICIÓN--</option>
              <option value="condicion1">Condición 1</option>
              <option value="condicion2">Condición 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dedicacion">Dedicación</label>
            <select id="dedicacion">
              <option value="">--SELECCIONE--</option>
              <option value="dedicacion1">Dedicación 1</option>
              <option value="dedicacion2">Dedicación 2</option>
            </select>
          </div>
        </div>
        <h2>Otros Datos</h2>
        <hr />
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="codigoRenacyt">Código RENACYT</label>
            <input type="text" id="codigoRenacyt" />
          </div>
          <div className="form-group">
            <label htmlFor="comunidad">Comunidad del Conocimiento Perteneciente</label>
            <input type="text" id="comunidad" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nivel">Nivel</label>
            <select id="nivel">
              <option value="">--SELECCIONE--</option>
              <option value="nivel1">Nivel 1</option>
              <option value="nivel2">Nivel 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="otros">Otros</label>
            <input type="text" id="otros" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="percibeBonificacion">¿Percibe bonificación?</label>
            <select id="percibeBonificacion">
              <option value="">--SELECCIONE--</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="periodoBonificacion">Indique periodo que percibe bonificación</label>
            <select id="periodoBonificacion">
              <option value="">--SELECCIONE--</option>
              <option value="periodo1">Periodo 1</option>
              <option value="periodo2">Periodo 2</option>
            </select>
          </div>
        </div>
        <h2>Documento de Gestión</h2>
        <hr />
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="resolucion">Adjunte resolución de investigador UNFV</label>
            <input type="file" id="resolucion" />
          </div>
        </div>
        
        <div className="button-container">
          <button type="submit">Guardar datos</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioDI;
