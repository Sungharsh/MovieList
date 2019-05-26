import React, { Component } from "react";
import ProductTable from "../components/ProductTable";
//import classes from "./App.css";
//import "./App.css";
import classes from "./App.module.css";
import AddToBasket from "../components/AddToBasket";
import TotalPrice from "../components/TotalPrice";

//import { template } from "@babel/core";
//import classes from "*.module.scss";

class App extends Component {
  render() {
    return (
      <div className={classes.invoice}>
        <div>
          <AddToBasket />
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
