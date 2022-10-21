import React, { Component } from "react";

const immagenes = require.context("/src/assets/images", true);

function home_introduction() {
  return (
    <div className="introduction row text-center m-auto">
      {/* <!--flecha bajada--> 
                <a><svg id="more-arrows">
                  <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
                  <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
                  <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
              </svg></a>

              */}

      {/* <!--textos e imagenes--> */}

      <hr />
      <div className="col-lg-6 col-md-12 p-5 ">
        <h2 className="pb-3">Recibir tratamiento en el Institut Guttmann</h2>
        <p className="">
          El Instituto de Salud Cerebral y Neurorrehabilitación representa una
          nueva manera de entender la medicina, una forma más avanzada de dar
          respuesta a los problemas neurológicos de las personas; a las que,
          además de proporcionarles el diagnóstico más riguroso y el tratamiento
          más efectivo para su enfermedad, contribuye a promover su salud
          cerebral, porque esto le ayudará a mejorar también su propia
          enfermedad y la hará estar y sentirse toda ella más saludable, al
          tiempo que favorecerá su bienestar y el de su familia, así como el de
          su entorno relacional.
        </p>
      </div>

      <div className="col-lg-6 col-md-12 m-auto">
        <img src={immagenes(`./institut-guttmann.jpg`)} />
      </div>

      <hr />

      <div className="col-lg-6 col-md-12 d-none d-lg-block m-auto ">
        <img src={immagenes(`./guttmann2.jpg`)} className="" />
      </div>

      <div className="col-lg-6 col-md-12 p-5 ">
        <h2 className="pb-3 ">Referente internacional en Neurorrehabilitación</h2>
        <p className="">
          Con más de 55 años de experiencia, el Hospital de Neurorrehabilitación
          atiende a más de 4.500 personas cada año.
        </p>
        <p className="">
          Una entidad privada de iniciativa social dedicada a las personas y a
          ofrecerles la mejor neurorrehabilitación especializada y el cuidado de
          la Salud Cerebral.
        </p>
        <p className="">
          <a
            href="https://www.guttmann.com/es/por-que-escoger-el-institut-guttmann"
            title="¿Por qué escoger el Institut Guttmann?"
          >
            ¿Por qué escoger el Institut Guttmann?
          </a>
        </p>
      </div>
      <hr />
      <div className="col-lg-6 col-md-12 p-5 ">
        <h2 className="pb-3 ">
          Instituto de Salud Cerebral y Neurorrehabilitación
        </h2>
        <p className="">
          Un conjunto de clínicas en Guttmann Barcelona, especialmente pensadas
          y diseñadas para ofrecer el mejor diagnóstico y los tratamientos más
          avanzados para promover la salud y el bienestar de las personas y de
          sus familias.
        </p>
        <p className="">
          <a
            href="https://www.guttmann.com/es/salud-cerebral"
            title="Clínicas especializadas"
          >
            Clínicas especializadas
          </a>
        </p>
        <p className="">
          <a
            href="https://barcelona.guttmann.com/es/treatments"
            rel="noopener"
            target="_blank"
            title="Tratamientos especializados"
          >
            Tratamientos especializados
          </a>
        </p>
      </div>

      <div className="col-lg-6 col-md-12 m-auto ">
        <img src={immagenes(`./guttmann.jpg`)} className=" " />
      </div>
      <hr />

      {/* <!--enlace juegos--> 

      */}
    </div>
  );
}

export default home_introduction;
