import { Component } from "react";
const imagenes = require.context('/src/assets/images', true);

function footer() {
    return (
        <footer>
            <div class="container-fluid">
                <div class="row">
                    {/* TEXTO Y ENLACES */}
                    <div class="col-8 col-sm-8 ps-2 enlaces">
                        © 2022 Institut Guttmann
                        <a class="px-2" href="#">Aviso legal</a>
                        <a class="px-2" href="#">Política de Cookies</a>
                        <a class="px-2" href="#">Privacidad y Protección de datos</a>
                    </div>

                    {/* REDES SOCIALES */}
                    <div class="col-4 col-sm-4">
                        <a class="mx-2" href="https://twitter.com/IGuttmann">
                            <img src={imagenes(`./twitter-gray.svg`)} alt="" srcset="" /></a>
                        <a class="mx-2" href="https://www.instagram.com/iguttmann/">
                            <img src={imagenes(`./instagram-gray.svg`)} alt="" srcset="" /></a>
                        <a class="mx-2" href="https://www.facebook.com/Institut.Guttmann">
                            <img src={imagenes(`./facebook-gray.svg`)} alt="" srcset="" /></a>
                        <a class="mx-2" href="https://www.linkedin.com/company/institut-guttmann?original_referer=https%3A%2F%2Fwww.guttmann.com%2F">
                            <img src={imagenes(`./linkedin-gray.svg`)} alt="" srcset="" /></a>
                        <a class="mx-2" href="https://www.youtube.com/user/InstitutGuttmann">
                            <img src={imagenes(`./youtube-gray.svg`)} alt="" srcset="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;