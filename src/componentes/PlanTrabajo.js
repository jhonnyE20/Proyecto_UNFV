import React from 'react';
import './PlanTrabajo.css';

const PlanTrabajo = () => {
    return (
        <div class="PlanTrabajo-container">
        <h1>Especifique el plan de trabajo para este año 2024</h1>
        <hr />
        <form>
            <div class="form-section">
                <h3>1. Producción científica-tecnológica</h3>
                <div class="form-group">
                    <label>1.1 Artículos Publicados</label>
                    <input type="number" name="articulosPublicados" />
                </div>
                <div class="form-group">
                    <label>1.2 Sumisión de artículos (en preparación)</label>
                    <input type="number" name="articulosEnPreparacion" />
                </div>
                <div class="form-group">
                    <label>1.3 Conferencias (nacionales o internacionales)</label>
                    <input type="number" name="conferencias" />
                </div>
                <div class="form-group">
                    <label>1.4 Patentes</label>
                    <input type="number" name="patentes" />
                </div>
                <div class="form-group">
                    <label>1.5 Proyectos de Investigación (Sin incentivos, Con incentivos, Otros)</label>
                    <input type="number" name="proyectosInvestigacion" />
                </div>
                <div class="form-group">
                    <label>1.6 Proyectos de Investigación empresas</label>
                    <input type="number" name="proyectosEmpresas" />
                </div>
            </div>
            <div class="form-section">
                <h3>2. Producción académica</h3>
                <div class="form-group">
                    <label>2.1 Libros o capítulos en un libro</label>
                    <input type="number" name="libros" />
                </div>
                <div class="form-group">
                    <label>2.2 Organizar eventos</label>
                    <input type="number" name="eventos" />
                </div>
            </div>
            <div class="form-section">
                <h3>3. Investigación formativa</h3>
                <div class="form-group">
                    <label>3.1 Asesorar proyectos de investigación</label>
                    <input type="number" name="asesorarProyectos" />
                </div>
                <div class="form-group">
                    <label>3.2 Asesorar de tesis pre-posgrado</label>
                    <input type="number" name="asesorarTesis" />
                </div>
            </div>
            <div class="form-section">
                <h3>4. Capacitación</h3>
                <div class="form-group">
                    <label>4.1 Programas relacionados a ciencia y/o tecnología, metodología y gestión de la investigación</label>
                    <input type="number" name="programas" />
                </div>
            </div>
            <div class="form-section">
                <h3>5. Gestión</h3>
                <div class="form-group">
                    <label>5.1 Miembro del consejo consultivo revistas</label>
                    <input type="number" name="consejoConsultivo" />
                </div>
                <div class="form-group">
                    <label>5.2 Par revisor</label>
                    <input type="number" name="parRevisor" />
                </div>
                <div class="form-group">
                    <label>5.3 Concursar a fondos internos</label>
                    <input type="number" name="fondosInternos" />
                </div>
                <div class="form-group">
                    <label>5.4 Concursar fondos externos</label>
                    <input type="number" name="fondosExternos" />
                </div>
                <div class="form-group">
                    <label>5.5 Formar y/o asesorar o participar en comunidades del conocimiento</label>
                    <input type="number" name="formarAsesorar" />
                </div>
            </div>
            <div class="form-section">
                <h3>6. Compromiso organizacional</h3>
                <div class="form-group">
                    <label>6.1 Participar en eventos de la UNFV</label>
                    <input type="number" name="eventosUNFV" />
                </div>
                <div class="form-group">
                    <label>6.2 Jurado evaluador</label>
                    <input type="number" name="juradoEvaluador" />
                </div>
                <div class="form-group">
                    <label>6.3 Representar a la UNFV</label>
                    <input type="number" name="representarUNFV" />
                </div>
                <div class="form-group">
                    <label>6.4 Cumplir con sus informes</label>
                    <input type="number" name="cumplirInformes" />
                </div>
                <div class="form-group">
                    <label>6.5 Entrega de plan de trabajo</label>
                    <input type="number" name="planDeTrabajo" />
                </div>
                <div class="form-group">
                    <label>6.6 Comisiones</label>
                    <input type="number" name="comisiones" />
                </div>
            </div>
            <div class="form-section">
                <div class="form-group">
                    <label>Cargar plan de trabajo (en PDF)</label>
                    <input type="file" name="planDeTrabajoPDF" />
                </div>
            </div>
            <div className ="button-container">
            <button type="submit" id = "button-PTrabajo">Guardar datos</button>
            </div>
        </form>
    </div>
    
    );
}

export default PlanTrabajo;