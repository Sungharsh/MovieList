import React, { Component } from "react";
//import classes from "./App.module.css";
import TotalPrice from "../components/TotalPrice";
import CatalogTable from "./CatalogTable";
import ShoppingCart from "../components/ShoppingCart";
import classes from "./invoice.module.css";
import authContext from "../context/auth-context";

class invoice extends Component {
  state = {
    PRODUCTS: [
      {
        id: 1,
        category: "Books",
        price: "89.99",
        stocked: true,
        name: "Travel Book",
        isChecked: false
      },
      {
        id: 2,
        category: "Others",
        price: "39.99",
        stocked: true,
        name: "Music CD",
        isChecked: false
      },
      {
        id: 3,
        category: "Food",
        price: "9.99",
        stocked: true,
        name: "Chocolate Bar",
        isChecked: false
      },
      {
        id: 4,
        category: "Medical Prod",
        price: "19.99",
        stocked: true,
        name: "Painkiller tablets",
        isChecked: false
      },
      {
        id: 5,
        category: "Imported Prod",
        price: "399.99",
        stocked: true,
        name: "Imp Chocolates",
        isChecked: false
      },
      {
        id: 6,
        category: "Imp Products",
        price: "199.99",
        stocked: true,
        name: "Perfume Bottle",
        isChecked: false
      },
      {
        id: 7,
        category: "other",
        price: "99.99",
        stocked: true,
        name: "Football",
        isChecked: false
      }
    ],
    checked: false,
    authenticated: false,
    itemsChecked: false,
    someOther: "someother value"
  };
  AdditemsHandler = () => {
    this.setState({ Checked: true });
  };
  render() {
    return (
      <authContext.Provider
        value={{
          AddItems: this.AdditemsHandler,
          checked: false,
          isChecked: false
        }}
      >
        <div className={classes.invoice}>
          <div>
            <CatalogTable productArray={this.state.PRODUCTS} />
          </div>
          <div>
            <ShoppingCart productArray={this.state.PRODUCTS} />
            <TotalPrice />
          </div>
        </div>
      </authContext.Provider>
    );
  }
}

export default invoice;