import React, { Component } from "react";
import classes from "./productRow.module.css";
import Checkbox from "./Checkbox";

class ProductRow extends Component {
  // CheckboxChange = event => {
  //   if (event.target.checked) {
  //     this.context.isChecked = true;
  //     console.log(this.context.isChecked);
  //   }
  // };

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
          <Checkbox />
          {/* <span className={classes.cheBox}>
            <input
              type="checkbox"
              id={product.id}
              //value={lable}
              onChange={this.CheckboxChange}
              //name="books"
            />
          </span> */}
        </td>
      </tr>
    );
  }
}
export default ProductRow;
