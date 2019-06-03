import React, { Component } from "react";
import ProductCategoryRow from "../components/ProductCategoryRow";
import ProductRow from "../components/ProductRow";
import classes from "./catalog.module.css";
import AuthContext from "../context/auth-context";

class ProductTable extends Component {
  static contextType = AuthContext;

  AdditemsHandler = props => {
    const cart = this.context.AddItemsToCart;
    this.setState({ AddItemsToCart: !cart });
  };
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
        <ProductRow
          name={this.context.PRODUCTS[0].name}
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <div className={classes.templet}>
        <h1 className={classes.heading}>Select Items</h1>

        <table className={classes.cart}>
          <thead>
            <tr className={classes.columHeading}>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
            <tr>
              <th colSpan="2">
                <button
                  className={classes.button}
                  type="submit"
                  onClick={this.AdditemsHandler}
                >
                  ADD
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default ProductTable;
