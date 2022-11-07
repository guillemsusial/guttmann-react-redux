import React, { Component } from "react";
import { Link } from "react-router-dom";

function error404() {
  return (
    <React.Fragment>
      <h1>404 Not Found</h1>
      <Link to="/">RETURN TO THE MAIN PAGE</Link>
    </React.Fragment>
  );
}
export default error404;