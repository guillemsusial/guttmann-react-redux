import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import './index.sass'

import user from "../../assets/images/userDefault.png";

function Header() {
  return (
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 logo">
            <a href="#">
              <img src={user} />
            </a>
          </div>
          <div class="col-6 user">
            <Dropdown>
              <Dropdown.Toggle>
                <img src={user} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
