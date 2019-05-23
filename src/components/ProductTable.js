import React, { Component } from "react";
import ProductCategoryRow from "../components/ProductCategoryRow";
import ProductRow from "../components/ProductRow";

class ProductTable extends Component {
  state = {
    PRODUCTS: [
      {
        category: "Books",
        price: "£89.99",
        stocked: true,
        name: "Travel Book"
      },
      {
        category: "Others",
        price: "£39.99",
        stocked: true,
        name: "Music CD"
      },
      {
        category: "Food",
        price: "£9.99",
        stocked: true,
        name: "Chocolate Bar"
      },
      {
        category: "Medical Prod",
        price: "£19.99",
        stocked: true,
        name: "Painkiller tablets"
      },
      {
        category: "Imported Prod",
        price: "£399.99",
        stocked: true,
        name: "Imp Chocolates"
      },
      {
        category: "Imp Products",
        price: "£199.99",
        stocked: true,
        name: "Perfume Bottle"
      },
      {
        category: "other",
        price: "£99.99",
        stocked: true,
        name: "Football"
      }
    ]
  };
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
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    const style = {
      nameStyle: {
        backgroundColor: "white",
        border: "1px solid gray",
        padding: "5px",
        color: "#1e6047"
      },
      priceStyle: {
        backgroundColor: "white",
        border: "1px solid gray",
        padding: "5px",
        color: "#1e6047"
      }
    };
    return (
      <table>
        <thead>
          <tr>
            <th style={style.nameStyle}>Name</th>
            <th style={style.priceStyle}>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
export default ProductTable;
