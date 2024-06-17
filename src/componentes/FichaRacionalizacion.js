import React from 'react';
import './FichaRacionalizacion.css';

const FichaRacionalizacion = () => {
    return (
        <div className="ficha-racionalizacion-container">
            <h2>Ficha de Racionalización Académica 2024</h2>
            <form>
                <div className="seccion-1-container">
                    <div className="seccion-title">1. Datos de la Facultad</div>
                    <div className="seccion-content">
                        <br></br>
                        <div className="form-group">
                            <label>Facultad</label>
                            <input type="text" name="facultad" />
                        </div>
                    </div>
                </div>
                
                <div className="seccion-2-container">
                    <div className="seccion-title">2. Datos del Docente</div>
                    <div className="seccion-content">
                        <br></br>
                        <div className="form-row">
                         <div className="form-group">
                             <label>Apellidos y Nombres</label>
                             <input type="text" name="apellidosNombres" />
                         </div>
                         <div className="form-group">
                             <label>Código UNFV</label>
                             <input type="text" name="codigoUNFV" />
                         </div>
                        </div>
                        <div className="form-row">
                         <div className="form-group">
                             <label>Dedicación</label>
                             <input type="text" name="dedicacion" />
                         </div>
                         <div className="form-group">
                             <label>Categorías</label>
                             <input type="text" name="categorias" />
                         </div>
                        </div>
                    </div>
                </div>
                
                <div className="seccion-3-container">
                    <div className="seccion-title">3. Carga Lectiva</div>
                    <div className="seccion-content">
                        <br></br>
                        <div className="form-row">
                         <div className="form-group">
                             <label>Semestral 1</label>
                             <label>THC</label>
                             <input type="text" name="semestral1THC" />
                         </div>
                         <div className="form-group">
                             <label>THE</label>
                             <input type="text" name="semestral1THE" />
                         </div>
                         <div className="form-group">
                             <label>TH</label>
                             <input type="text" name="semestral1TH" />
                         </div>
                        </div>
                        <div className="form-row">
                         <div className="form-group">
                             <label>Semestral 2</label>
                             <label>THC</label>
                             <input type="text" name="semestral2THC" />
                         </div>
                         <div className="form-group">
                             <label>THE</label>
                             <input type="text" name="semestral2THE" />
                         </div>
                         <div className="form-group">
                             <label>TH</label>
                             <input type="text" name="semestral2TH" />
                         </div>
                        </div>
                    </div>
                </div>
                
                <div className="seccion-4-container">
                    <div className="seccion-title">4. Carga No lectiva (Anual)</div>
                    <div className="seccion-content">
                        <br></br>
                        <div className="form-group">
                            <label>Total de horas de carga no lectiva (semestre 01)</label>
                            <input type="text" name="horasNoLectiva1" />
                        </div>
                        <div className="form-group">
                            <label>Total de horas de carga no lectiva (semestre 02)</label>
                            <input type="text" name="horasNoLectiva2" />
                        </div>
                        <div className="form-group">
                            <label>Cargar ficha de racionalización (PDF)</label>
                            <input type="file" name="fichaRacionalizacionPDF" />
                        </div>
                    </div>
                </div>
                
                <button type="submit">Guardar datos</button>
            </form>
        </div>
    );
};

export default FichaRacionalizacion;
