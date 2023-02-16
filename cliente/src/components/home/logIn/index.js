//const immagenes = require.context("/src/assets/images", true);
import Button from "../../elements/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import Axios from "axios";

import Img from '../../../assets/images/institut-guttmann.jpg';

//TODA LA PARTE DE LLAMADAS A API

export const Login = () => {

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
    <div id="introduction" className="introduction  text-center m-auto" >
     
      {/* <!--textos e imagenes--> */}

     <div className="formulario_de_registro row">
      <div className="col-lg-6 col-md-12 p-5 ">
       <h1> Log In</h1>
       <p>
       Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book.
       </p>
       <Button className="register-info" label="Mas info" action={null}/>
      </div>

      <div className="col-lg-6 col-md-12 register ">    
      
       <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                    <div className="col-12 p-5 ">
                           
                           <label className="titulos">Correo</label>
                           <input type="email" className="mb-4" placeholder="Introduce el correo" {...register("email")} />
                           <label className="titulos ">Contraseña</label>
                           <input type="password" placeholder="Introduce la contraseña" {...register("password")} />
                       </div>
                        <Button className="register-submit" label="Log in" action={null}/>
                    {/*<input className="botonEnviar" type="submit" value="Submit" />*/ }
                    </div>
                </form>
      </div>
      </div>
      
      {/**first name , second name */}
      

      {/* <!--enlace juegos--> 

      */}
    </div>
  );
};
