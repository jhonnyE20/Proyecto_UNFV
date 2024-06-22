import React, { useState } from 'react';
import './PCientifica.css';

const PCientifica = () => {
    const [rows, setRows] = useState([
        { id: 1, titulo: 'xxxx', descripcion: 'xxxx', evidencias: 'http://example.com', fecha: 'xxxx-xx-xx', mes: 'xxxx' }
    ]);
    const [showForm, setShowForm] = useState(false);
    const [showCoauthorForm, setShowCoauthorForm] = useState(false);
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        evidencias: '',
        fecha: '',
        mes: '',
        autor: '',
        afiliacion: '',
        baseDatos: [],
        enlacePublicacion: '',
        archivo: null
    });
    const [coauthors, setCoauthors] = useState([]);
    const [coauthorData, setCoauthorData] = useState({
        apellidoPaterno: '',
        apellidoMaterno: '',
        nombre: '',
        email: '',
        afiliacion: ''
    });

    const handleDelete = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "baseDatos") {
            const newBaseDatos = formData.baseDatos.includes(value)
                ? formData.baseDatos.filter(item => item !== value)
                : [...formData.baseDatos, value];
            setFormData({ ...formData, baseDatos: newBaseDatos });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleCoauthorChange = (e) => {
        const { name, value } = e.target;
        setCoauthorData({ ...coauthorData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newRow = {
            id: rows.length + 1,
            ...formData,
            evidencias: formData.enlacePublicacion,
            coauthors
        };
        setRows([...rows, newRow]);
        setFormData({
            titulo: '',
            descripcion: '',
            evidencias: '',
            fecha: '',
            mes: '',
            autor: '',
            afiliacion: '',
            baseDatos: [],
            enlacePublicacion: '',
            archivo: null
        });
        setCoauthors([]);
        setShowForm(false);
    };

    const handleCoauthorSubmit = (e) => {
        e.preventDefault();
        setCoauthors([...coauthors, { ...coauthorData }]);
        setCoauthorData({
            apellidoPaterno: '',
            apellidoMaterno: '',
            nombre: '',
            email: '',
            afiliacion: ''
        });
    };

    const handleSaveCoauthors = () => {
        setShowCoauthorForm(false);
    };

    return (
        <div className="PCientifica-container">
            <div className="Seccion1-Container">
                <h4>1.1 Producción Científica y T.</h4>
                <br></br>
                <button onClick={() => {
                    console.log('Añadir Producción clicked');
                    setShowForm(true);
                }}>
                    Añadir Producción
                </button>

                {showForm && (
                    <div className="modal">
                        {console.log('Modal is shown')}
                        <div className="modal-content">
                            <form className="formulario" onSubmit={handleFormSubmit}>
                                <input
                                    type="text"
                                    name="titulo"
                                    placeholder="Título del Artículo"
                                    value={formData.titulo}
                                    onChange={handleInputChange}
                                    required
                                />
                                <select
                                    name="autor"
                                    value={formData.autor}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Orden autoría</option>
                                    <option value="Autor1">Autor 1</option>
                                    <option value="Autor2">Autor 2</option>
                                </select>
                                <button type="button" onClick={() => setShowCoauthorForm(true)}>Detallar</button>
                                <input
                                    type="text"
                                    name="afiliacion"
                                    placeholder="Afiliación"
                                    value={formData.afiliacion}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label>
                                    Base de datos:
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="baseDatos"
                                            value="scielo"
                                            checked={formData.baseDatos.includes('scielo')}
                                            onChange={handleInputChange}
                                        /> Scielo
                                        <input
                                            type="checkbox"
                                            name="baseDatos"
                                            value="scopus"
                                            checked={formData.baseDatos.includes('scopus')}
                                            onChange={handleInputChange}
                                        /> Scopus
                                        <input
                                            type="checkbox"
                                            name="baseDatos"
                                            value="wos"
                                            checked={formData.baseDatos.includes('wos')}
                                            onChange={handleInputChange}
                                        /> Wos
                                        <input
                                            type="checkbox"
                                            name="baseDatos"
                                            value="otros"
                                            checked={formData.baseDatos.includes('otros')}
                                            onChange={handleInputChange}
                                        /> Otros
                                    </div>
                                </label>
                                <textarea
                                    name="descripcion"
                                    placeholder="Descripción del Artículo"
                                    value={formData.descripcion}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="enlacePublicacion"
                                    placeholder="Enlace de Publicación del Artículo"
                                    value={formData.enlacePublicacion}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="file"
                                    name="archivo"
                                    onChange={(e) => setFormData({ ...formData, archivo: e.target.files[0] })}
                                />
                                <input
                                    type="date"
                                    name="fecha"
                                    placeholder="Fecha de la Actividad"
                                    value={formData.fecha}
                                    onChange={handleInputChange}
                                    required
                                />
                                <select
                                    name="mes"
                                    value={formData.mes}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Seleccionar Mes</option>
                                    <option value="Enero">Enero</option>
                                    <option value="Febrero">Febrero</option>
                                    <option value="Marzo">Marzo</option>
                                    <option value="Abril">Abril</option>
                                    <option value="Mayo">Mayo</option>
                                    <option value="Junio">Junio</option>
                                    <option value="Julio">Julio</option>
                                    <option value="Agosto">Agosto</option>
                                    <option value="Septiembre">Septiembre</option>
                                    <option value="Octubre">Octubre</option>
                                    <option value="Noviembre">Noviembre</option>
                                    <option value="Diciembre">Diciembre</option>
                                </select>
                                <button type="submit">Guardar datos</button>
                                <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
                            </form>
                        </div>
                    </div>
                )}

                {showCoauthorForm && (
                    <div className="modal">
                        <div className="modal-content">
                            <form className="formulario-coautor" onSubmit={handleCoauthorSubmit}>
                                <input
                                    type="text"
                                    name="apellidoPaterno"
                                    placeholder="Apellido Paterno"
                                    value={coauthorData.apellidoPaterno}
                                    onChange={handleCoauthorChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="apellidoMaterno"
                                    placeholder="Apellido Materno"
                                    value={coauthorData.apellidoMaterno}
                                    onChange={handleCoauthorChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre"
                                    value={coauthorData.nombre}
                                    onChange={handleCoauthorChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={coauthorData.email}
                                    onChange={handleCoauthorChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="afiliacion"
                                    placeholder="Afiliación"
                                    value={coauthorData.afiliacion}
                                    onChange={handleCoauthorChange}
                                    required
                                />
                                <button type="submit">Agregar</button>
                                <button type="button" onClick={() => setShowCoauthorForm(false)}>Cancelar</button>
                            </form>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Apellido Paterno</th>
                                        <th>Apellido Materno</th>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Afiliación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coauthors.map((coauthor, index) => (
                                        <tr key={index}>
                                            <td>{coauthor.apellidoPaterno}</td>
                                            <td>{coauthor.apellidoMaterno}</td>
                                            <td>{coauthor.nombre}</td>
                                            <td>{coauthor.email}</td>
                                            <td>{coauthor.afiliacion}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button type="button" onClick={handleSaveCoauthors}>Guardar Coautor</button>
                        </div>
                    </div>
                )}

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título del Artículo</th>
                            <th>Descripción del Artículo</th>
                            <th>Evidencias</th>
                            <th>Fecha de la Actividad</th>
                            <th>Mes Registrado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.titulo}</td>
                                <td>{row.descripcion}</td>
                                <td><a href={row.evidencias} target="_blank" rel="noopener noreferrer">Ver Evidencia</a></td>
                                <td>{row.fecha}</td>
                                <td>{row.mes}</td>
                                <td>
                                    <button className="delete-button" onClick={() => handleDelete(row.id)}>🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
            </div>
            <div className="seccion2-container">
                <label>1.2 Sumision de articulos</label>
                <br></br>
                <br></br>
                <button>Añadir Articulos</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo de la Actividad</th>
                            <th>Descripcion de la Actividad</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion3-container">
                <label>1.3 Conferencias</label>
                <br></br>
                <br></br>
                <button>Añadir Conferencias</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo de la conferencia</th>
                            <th>Tipo de participacion</th>
                            <th>Descripcion de la conferencia</th>
                            <th>Institucion organizadora</th>
                            <th>Fecha inicio</th>
                            <th>Fecha fin</th>
                            <th>Evidencias</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion4-container">
                <label>1.4 Patentes</label>
                <br></br>
                <br></br>
                <button>Añadir patentes</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion5-container">
                <label>1.5 Proyectos de investigacion</label>
                <br></br>
                <br></br>
                <button>Añadir Investigacion</button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
            <div className="seccion6-container">
                <label>1.6 Proyectos de investigacion Empresas</label>
                <br></br>
                <br></br>
                <button>Añadir proyectos </button>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Actividad</th>
                            <th>Descripcion</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                </table>
                <br></br>
            </div>
        </div>
    );
};

export default PCientifica;
