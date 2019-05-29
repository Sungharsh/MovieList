import React, { Component } from "react";
import ProductTable from "../components/ProductTable";
import classes from "./App.module.css";
import TotalPrice from "../components/TotalPrice";
import Catalog from "../components/Catalog";

//import { template } from "@babel/core";
//import classes from "*.module.scss";

class App extends Component {
  render() {
    return (
      <div className={classes.invoice}>
        <div>
          <Catalog />
        </div>
        <div>
          <ProductTable />
          <TotalPrice />
        </div>
      </div>
    );
  }
}

export default App;
