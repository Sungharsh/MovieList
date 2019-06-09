import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import classes from "./catalog.module.css";

class CatalogTable extends Component {
  AdditemsHandler = props => {
    this.setState({ checked: true });
  };

  render() {
    const products = this.props.productArray;
    const rows = [];
    let lastCategory = null;
    products.forEach(product => {
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
          name={this.props.productArray[0].name}
          product={product}
          key={product.name}
          products={this.props.productArray}
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
              <th>Items</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
            <tr>
              <td colSpan="4">
                <button
                  className={classes.button}
                  type="submit"
                  onClick={this.AdditemsHandler}
                >
                  ADD
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default CatalogTable;
