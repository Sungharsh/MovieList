import React, { Component } from "react";
import classes from "./cartRow.module.css";
import IfNoItemsAdded from "./IfNoItemsAdded";

class CartRow extends Component {
  render() {
    const product = this.props.product;
    let myCart = (
      <tr>
        <td className={classes.item}>{product.name}</td>
        <td className={classes.price}>
          <span>£ </span>
          {product.price}
        </td>
        <td />
      </tr>
    );
    if (this.props.checked === false) {
      myCart = <IfNoItemsAdded />;
    }
    return { myCart };
  }
}
export default CartRow;
