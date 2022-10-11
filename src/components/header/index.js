import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from "react-bootstrap/Dropdown";
import './index.sass'

const imagenes = require.context('/src/assets/images',true);

function Header() {
  return (
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 logo my-auto">
            <a href="#">
              <img src={imagenes('./logo.svg')} />
            </a>
          </div>
          <div class="col-6 user">
            <Button variant="login">Iniciar sesión</Button>
            <Button variant="register">Registrarse</Button>
          </div>
          {/* <div class="col-6 user">
            <Dropdown>
              <Dropdown.Toggle>
                <img src={imagenes('./userDefault.png')} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
