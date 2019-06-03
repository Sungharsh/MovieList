import React, { Component } from "react";
import classes from "./productRow.module.css";
import AuthContext from "../context/auth-context";

class ProductRow extends Component {
  static contextType = AuthContext;
  CheckboxChange = event => {
    if (event.target.checked) {
      this.setState({ isChecked: !this.context.isChecked });
    }
    this.context.PRODUCTS.forEach(product => {
      if (event.target.id === product.id) {
        product.isChecked = true;
      }
      console.log(this.isChecked);
    });
  };

  render() {
    const product = this.props.product;
    return (
      <tr>
        <td className={classes.item}>{product.name}</td>
        <td className={classes.price}>
          <span>£ </span>
          {product.price}
        </td>
        <td />
        <td>
          <span className={classes.cheBox}>
            <input
              type="checkbox"
              id={product.id}
              onChange={this.CheckboxChange}
            />
          </span>
        </td>
      </tr>
    );
  }
}
export default ProductRow;
