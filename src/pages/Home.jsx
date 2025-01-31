import React, { Component, Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
