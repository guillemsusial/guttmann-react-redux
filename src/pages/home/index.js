import Header from "../../components/header";
import Footer from "../../components/footer";
import Introduction from "../../components/home/introduction";
import Categories from "../../components/home/categories";
import React, { Component } from "react";

function home() {
  return (
    <React.Fragment>
      <Header />
      <Introduction />
      <Categories />
      <Footer />
    </React.Fragment>
  );
}
export default home;