import React, { Component } from "react";
import ProductTable from "../components/ProductTable";
import "./App.css";
import AddToInvoice from "../components/AddToInvoice";

class App extends Component {
  render() {
    const style = {
      backgroundColor: "#e6f3f7",
      font: "inherit",
      border: "1px solid blue",
      padding: "100px",
      width: "250px"
    };
    return (
      <div style={style}>
        <AddToInvoice />
        <ProductTable />
      </div>
    );
  }
}
export default App;
