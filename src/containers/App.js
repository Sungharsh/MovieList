import React, { Component } from "react";
import classes from "./App.module.css";
import Invoice from "../components/Invoice";

//import { template } from "@babel/core";
//import classes from "*.module.scss";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Invoice />
      </div>
    );
  }
}

export default App;
