import React, { Component } from "react";
import TotalPrice from "../components/TotalPrice";
import Catalog from "../components/Catalog";
import ShoppingCart from "../components/ShoppingCart";
import classes from "./invoice.module.css";

class invoice extends Component {
  render(props) {
    return (
      <div className={classes.invoice}>
        <div>
          <Catalog />
        </div>
        <div>
          <ShoppingCart onClick={this.props.click} />
          <TotalPrice />
        </div>
      </div>
    );
  }
}

export default invoice;
