import React, { Component } from "react";
const imagenes = require.context('/src/assets/images', true);

export const Register = () => {

    const fecha = new Date();
    var anio = fecha.getFullYear();
    var arr = [{ value: '', text: '--Elige un año--' }];

    for (let i = 0; i <= 100; i++) {
        arr.push({ value: anio, text: anio });
        anio--;
    }

    const handleChange = event => {
        console.log(event.target.value);
    };

    return (
        <div className="Register">
            <img src={imagenes(`./institut-guttmann.jpg`)} alt="" srcset="" />
            <div className="loginBox container-fluid">
                <div className="titulo">
                    <h1>Titulo</h1>
                </div>
                <form className="form">
                    <div className="row">
                        <div className="col-6">
                            <p className="titulos">Nombre</p>
                            <input type="text" name="name" placeholder="Introduce el nombre" />
                            <p className="titulos">Correo</p>
                            <input type="email" name="email" placeholder="Introduce el correo" />
                        </div>
                        <div className="col-6">
                            <p className="titulos">Contraseña</p>
                            <input type="password" name="password" placeholder="Introduce la contraseña" />
                            <p className="titulos">Confirmar la contraseña</p>
                            <input type="password" name="password" placeholder="Repite la contraseña" />
                        </div>
                        <div className="col-6">
                            <p className="titulos">Estudios</p>
                            <select formControlName="Estudios">
                                <option>Sin estudios</option>
                                <option>Estudios primarios</option>
                                <option>Estudios secundarios</option>
                                <option>Estudios superiores</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <p className="titulos">Año de nacimiento</p>
                            <select onChange={handleChange} name="fruits" id="fruit-select">
                                {arr.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12">
                            <p className="titulos">Genero</p>
                            <fieldset>
                                <input type="radio" id="hombre" name="drone" value="hombre"></input>
                                <label for="hombre">Hombre</label>
                                <input type="radio" id="mujer" name="drone" value="mujer"></input>
                                <label for="mujer">Mujer</label>
                                <input type="radio" id="otro" name="drone" value="otro"></input>
                                <label for="otro">Otro</label>
                            </fieldset>
                        </div>
                        <input className="botonEnviar" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>

    );
}