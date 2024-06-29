import React from 'react';
import "./Enviar.css";

const Enviar = () => {
    return (
        <div className="enviar-container">
            <form>
                <h2>Enviar por correo a:</h2>
                <br />
                <input type="email" placeholder="Digite su correo institucional de docente" />
                <input type="email" placeholder="Digite el correo de la unidad de investigación correspondiente" />
                <input type="text" placeholder="Digite el departamento de la facultad a la cual corresponde" />
                <input type="email" placeholder="El correo será enviado con copia a la oficina de Fomento de la Investigación" />
                <button className="enviar-button" type="submit">Enviar correo</button>
            </form>
            <p className="note">¡Tener presente! Si el reporte generado no está en su bandeja de entrada, busque en correos no deseados o Spam.</p>
        </div>
    );
};

export default Enviar;
