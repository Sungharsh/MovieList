import React, { Component } from "react";
import classes from "./cartRow.module.css";

class CartRow extends Component {
  // CheckboxChange = event => {
  //   if (event.target.checked) {
  //     this.context.isChecked = true;
  //     console.log(this.context.isChecked);
  //   }
  // };

  render() {
    const product = this.props.product;
    //const product = this.props.productArray;
    return (
      <tr>
        <td className={classes.item}>{product.name}</td>
        <td className={classes.price}>
          <span>£ </span>
          {product.price}
        </td>
        <td />
      </tr>
    );
  }
}
export default CartRow;
