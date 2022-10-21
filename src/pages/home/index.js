import Introduction from "../../components/home/introduction";
import Categories from "../../components/home/categories";
import React, { Component } from "react";
import './index.sass'
function home() {
  return (
    <div className="home">
      <Introduction />
      <Categories />
    </div>
  );
}
export default home;