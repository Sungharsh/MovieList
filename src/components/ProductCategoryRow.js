import React, { Component } from "react";
import classes from "./productCategoryRow.module.css";

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <tr className={classes.itemType}>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}
export default ProductCategoryRow;
