import React, { Component } from "react";
import classes from "./catalog.module.css";
import ProductCategoryRow from "../components/ProductCategoryRow";
import ProductRow from "../components/ProductRow";
import AuthContext from "../context/auth-context";

class ShoppingCart extends Component {
  static contextType = AuthContext;

  render() {
    const rows = [];
    let lastCategory = null;
    this.context.PRODUCTS.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(
        this.context.PRODUCTS.forEach(product => {
          if (product.isChecked !== false)
            rows.push(
              <ProductRow
                name={this.context.PRODUCTS[0].name}
                product={product}
                key={product.name}
              />
            );
        })
      );
      lastCategory = product.category;
    });
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
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
export default ShoppingCart;
