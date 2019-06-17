import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "../catalog/ProductRow";
import classes from "./catalog.module.css";

class CatalogTable extends Component {
  render() {
    const checkbox = this.selectedCheckboxes;
    const products = this.props.productArray;
    const rows = [];
    let lastCategory = null;
    products.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
            checkedItems={checkbox}
          />
        );
      }
      rows.push(
        <ProductRow
          name={this.props.productArray[0].name}
          product={product}
          key={product.name}
          products={this.props.productArray}
          isChecked={this.props.productArray.isChecked}
          handleCheckboxChange={this.props.handleCheckboxChange}
        />
      );
      lastCategory = product.category;
    });

    return (
      <div className={classes.templet}>
        <h1 className={classes.heading}>Select Items</h1>
        <form onSubmit={this.handleFormSubmit}>
          {/*handlesubmit runs from invoice and outputs on cart*/}
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
                    type="checkbox"
                    value="Submit"
                  >
                    ADD
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
export default CatalogTable;
