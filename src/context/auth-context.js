import React from "react";

const authContext = React.createContext({
  PRODUCTS: [
    {
      id: 1,
      category: "Books",
      price: "89.99",
      stocked: true,
      name: "Travel Book",
      isChecked: false
      //handleChecked: this.state.isChecked
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
  AddItemsToCart: false,
  authenticated: false,
  itemChecked: false,
  someOther: "someother value"
});

export default authContext;
