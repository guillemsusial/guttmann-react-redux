import Home from "./pages/home";
import Homev2 from "./pages/home_v2";
import User from "./pages/user";
import Error404 from "./routes/error404";
import Error403 from "./routes/error403";

import { Route, Routes } from "react-router-dom"

import "./assets/stylesheets/App.sass";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/homev2" element={<Homev2/>}/>

        <Route path="*" element={<Error404/>} />

      </Routes>
    </React.Fragment>
  );
}

export default App;
