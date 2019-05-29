import React, { Component } from "react";
//import classes from "./invoice.css";
import classes from "./productRow.module.css";

class ProductRow extends Component {
  render(props) {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
    //const checkbox = this.props.checkbox;
    return (
      <tr>
        <td>{name}</td>
        <td>
          <span>£ </span>
          {product.price}
        </td>
        <td>
          <lable>
            <span className={classes.cheBox}>
              <input
                onChange={this.props.check}
                type="checkbox"
                name="books"
                value="Bike"
              />
            </span>
          </lable>
        </td>
      </tr>
    );
  }
}
export default ProductRow;
