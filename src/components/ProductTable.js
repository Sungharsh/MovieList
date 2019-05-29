import React, { Component } from "react";
import classes from "./productTable.module.css";

class ProductTable extends Component {
  render() {
    return (
      <div className={classes.templet}>
        <h1 className={classes.heading}>Shopping Cart</h1>
        <table className={classes.cart}>
          <thead>
            <tr className={classes.columHeading}>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{}</tbody>
        </table>
      </div>
    );
  }
}
export default ProductTable;
