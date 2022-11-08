import React, { Component } from "react";
import { Link } from "react-router-dom";

function error403() {
  return (
    <React.Fragment>
      <h1>403 Forbidden</h1>
      <Link to="/">RETURN TO THE MAIN PAGE</Link>
    </React.Fragment>
  );
}
export default error403;