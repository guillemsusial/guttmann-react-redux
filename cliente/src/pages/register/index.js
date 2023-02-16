/* eslint-disable no-unused-vars */
//import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import Axios from "axios";

import Img from '../../assets/images/institut-guttmann.jpg';

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

    /*const schema = yup.object().shape({
        name: yup.string().required(),
        last_name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).required(),
        confirm_password: yup.string().oneOf([yup.ref("password"), null]).required(),
        birth_year: yup.number().positive().integer().required(),
        studies: yup.string().required(),
        sex: yup.string().required(),
    });*/

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    //const {name, last_name, email, password, birth_year, studies, sex} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        Axios.post("http://localhost:3001/api/insert", data).then((response) => {
            console.log(response);
            alert("se han insertado los datos");
        }).catch(function (error) {
            console.log(error);
        });
    };

    return (
        <div className="Register" style={{ backgroundImage: `url(${Img})`, backgroundColor: '#cccccc' }}>
            <div className="loginBox container-fluid">
                <div className="titulo">
                    <h1>Titulo</h1>
                </div>
                <hr/>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-6">
                            <label className="titulos">Nombre</label>
                            <input type="text" placeholder="Introduce el nombre" {...register("name")} />
                            <label className="titulos">Apellidos</label>
                            <input type="text" placeholder="Introduce los apellidos" {...register("last_name")} />
                            <label className="titulos">Correo</label>
                            <input type="email" placeholder="Introduce el correo" {...register("email")} />
                        </div>
                        <div className="col-6">
                            <label className="titulos">Contraseña</label>
                            <input type="password" placeholder="Introduce la contraseña" {...register("password")} />
                            <label className="titulos">Confirmar la contraseña</label>
                            <input type="password" placeholder="Repite la contraseña" {...register("confirm_password")} />
                            <label className="titulos">Estudios</label>
                            <select {...register("studies")}>
                                <option>Sin estudios</option>
                                <option>Estudios primarios</option>
                                <option>Estudios secundarios</option>
                                <option>Estudios superiores</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label className="titulos">Año de nacimiento</label>
                            <select onChange={handleChange} id="fruit-select" {...register("birth_year")}>
                                {arr.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-6">
                            <label className="titulos">Genero</label>
                            <fieldset>
                                Hombre<input {...register("sex")} type="radio" id="hombre" name="sex" value="Hombre"></input>
                                Mujer<input {...register("sex")} type="radio" id="mujer" name="sex" value="Mujer"></input>
                                Otro<input {...register("sex")} type="radio" id="otro" name="sex" value="Otro"></input>
                            </fieldset>
                        </div>
                        <input className="botonEnviar" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}