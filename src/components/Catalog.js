import React, { Component } from "react";
import ProductCategoryRow from "../components/ProductCategoryRow";
import ProductRow from "../components/ProductRow";
import classes from "./productTable.module.css";

class ProductTable extends Component {
  state = {
    PRODUCTS: [
      {
        category: "Books",
        price: "89.99",
        stocked: true,
        name: "Travel Book",
        checked: false
      },
      {
        category: "Others",
        price: "39.99",
        stocked: true,
        name: "Music CD",
        checked: false
      },
      {
        category: "Food",
        price: "9.99",
        stocked: true,
        name: "Chocolate Bar",
        checked: false
      },
      {
        category: "Medical Prod",
        price: "19.99",
        stocked: true,
        name: "Painkiller tablets",
        checked: false
      },
      {
        category: "Imported Prod",
        price: "399.99",
        stocked: true,
        name: "Imp Chocolates",
        checked: false
      },
      {
        category: "Imp Products",
        price: "199.99",
        stocked: true,
        name: "Perfume Bottle",
        checked: false
      },
      {
        category: "other",
        price: "99.99",
        stocked: true,
        name: "Football",
        checked: false
      }
    ]
  };
  handleCheckeboxChanged = event =>
    this.setState({ checked: event.target.checked });
  render() {
    const rows = [];
    let lastCategory = null;
    this.state.PRODUCTS.forEach(product => {
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
          name={this.state.PRODUCTS[0].name}
          product={product}
          key={product.name}
          check={this.handleCheckeboxChanged}
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
          <tbody>{rows}</tbody>
          <button className={classes.button}>Submit</button>
        </table>
      </div>
    );
  }
}
export default ProductTable;
