import React,{ Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import user from '../../assets/images/userDefault.png';

class Header extends Component {
    render(){
        return (
            <header>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-6">
                            <a href="#">
                                <img src={user}/>
                            </a>
                        </div>
                        <div class="col-6">
                            <Dropdown>
                                <Dropdown.Toggle>
                                
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
}

export default Header;