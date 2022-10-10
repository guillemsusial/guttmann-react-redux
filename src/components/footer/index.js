import { Component } from "react";
import './index.sass';
const imagenes = require.context('/src/assets/images', true);

function footer() {
    return (
        <footer>
            <div class="container-fluid col-12 col-sm-12 pb-5 pt-2 rounded-top m-0 color">
                <br/>

                {/* Linia 1 */}
                <div class="row">
                    <div class="col-2 col-sm-2 mx-3"></div>
                    <div class="col-8 col-sm-8 ml-2 mr-0 text-white-50 text-break fw-bold content">
                        <hr class="bg-light"/>

                        {/* linia divisoria */}
                        <div class="row">
                            <div class="col-8 col-sm-8 ml-2 mr-0 text-break fw-bold enlaces">
                                © 2022 Institut Guttmann <span class="dot"></span><a class="enlaces" href="#">Aviso legal</a> <span
                                class="dot"></span><a class="enlaces" href="#">Política de Cookies</a> <span class="dot"></span><a
                                class="enlaces" href="#">Privacidad y Protección de datos</a>
                            </div>

                            {/* REDES SOCIALES */}
                            <div class="col-4 col-sm-4 ml-0 text-white-50  text-break fw-bold text-center">
                                <a class="mx-2" href="https://twitter.com/IGuttmann"><img class="wicon "
                                src={imagenes(`./twitter-gray.svg`)} alt="" srcset=""/></a>
                                <a class="mx-2" href="https://www.instagram.com/iguttmann/"><img class="wicon "
                                src={imagenes(`./instagram-gray.svg`)} alt="" srcset=""/></a>
                                <a class="mx-2" href="https://www.facebook.com/Institut.Guttmann"><img class="wicon "
                                src={imagenes(`./facebook-gray.svg`)} alt="" srcset=""/></a>
                                <a class="mx-2"
                                href="https://www.linkedin.com/company/institut-guttmann?original_referer=https%3A%2F%2Fwww.guttmann.com%2F"><img
                                class="wicon " src={imagenes(`./linkedin-gray.svg`)} alt="" srcset=""/></a>
                                <a class="mx-2" href="https://www.youtube.com/user/InstitutGuttmann"><img class="wicon "
                                src={imagenes(`./youtube-gray.svg`)} alt="" srcset=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer;