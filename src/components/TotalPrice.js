import React, { Component } from "react";
import classes from "./totalPrice.module.css";

class TotalPrice extends Component {
  render() {
    return (
      <div className={classes.totalprice}>
        <div>
          <p>Total inc VAT</p>
        </div>
        <div>
          <span>£ </span>
          <input type="number" id="Price" value="5.31" />
          {}
        </div>
      </div>
    );
  }
}
export default TotalPrice;
