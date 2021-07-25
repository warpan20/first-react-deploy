import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/first-react-deploy/" component={Home} />
        <Route exact path="/first-react-deploy/about" component={About} />
        <Route exact path="/first-react-deploy/service" component={Service} />
        <Route exact path="/first-react-deploy/contact" component={Contact} />
        <Redirect to="/first-react-deploy" />
      </Switch>
      <Footer />


    </>
  );
};


export default App;
