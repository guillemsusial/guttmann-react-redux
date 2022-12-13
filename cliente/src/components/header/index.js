import React, { Component  } from "react";
import ButtonReact from 'react-bootstrap/Button';
import Dropdown from "react-bootstrap/Dropdown";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const imagenes = require.context("/src/assets/images", true);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Header = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-12 logo my-auto">
            <a href="/">
              <img src={imagenes("./logo.svg")} />
            </a>
          </div>
          
          <div className="col-lg-6 col-md-12 user">
            <ButtonReact variant="login" onClick={handleOpen}>Iniciar sesión</ButtonReact>
            <ButtonReact variant="register" href="/register">Registrarse</ButtonReact>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>

          {/* <div className="col-lg-6 user">
            <Dropdown>
              <Dropdown.Toggle variant="custom">
                <img src={imagenes("./userDefault.png")} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleOpen}>Área de Usuario</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Cerrar sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
        </div>
      </div>
    </header>
  );
};
