import React, { Component } from "react";
//import classes from "./invoice.css";

class AddToInvoice extends Component {
  render() {
    return (
      <form>
        <select name="cars">
          <option value="books">Travel Books</option>
          <option value="CD">Music CD</option>
          <option value="chocolate">Chocolate Bar</option>
          <option value="impcholate">Imp Box Chocolates</option>
          <option value="impperfume">imp Perfume</option>
          <option value="perfume">Perfume</option>
          <option value="tablets">Painkiller Tablets</option>
        </select>
        <p>
          <input type="submit" />
        </p>
      </form>
    );
  }
}
export default AddToInvoice;
