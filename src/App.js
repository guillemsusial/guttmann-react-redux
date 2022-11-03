import Home from "./pages/home";
import User from "./pages/user";
import Error404 from "./pages/error404";

import { Route, Routes } from "react-router-dom"

import "./assets/stylesheets/App.sass";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
