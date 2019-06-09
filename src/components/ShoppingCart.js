import React, { Component } from "react";
import classes from "./catalog.module.css";
import ProductCategoryRow from "../components/ProductCategoryRow";
import CartRow from "../components/CartRow";

class ShoppingCart extends Component {
  componentDidMount() {
    //console.log(this.context.AddItemsToCart);
  }

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
      lastCategory = product.category;
      let checked = null;
      if (product.isChecked !== checked) {
        rows.push(
          <CartRow
            name={this.props.productArray[0].name}
            product={product}
            key={product.id}
            products={this.props.productArray}
          />
        );
      }
      checked = product.isChecked;
      checked = product.ch;
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
