import React, { Component } from "react";
//import classes from "./invoice.css";
import classes from "./addTobasket.module.css";

class AddToInvoice extends Component {
  render() {
    return (
      <div>
        <div>
          <h>
            Select Product from List and add to basket to show the total price
            and tax
          </h>
          <form>
            <ul>
              <li>
                Travel books
                <span className={classes.cheBox}>
                  <input type="checkbox" name="books" value="Bike" />
                </span>
              </li>
              <li>
                Music CD
                <span className={classes.cheBox}>
                  <input type="checkbox" name="books" value="Bike" />
                </span>
              </li>
              <li>
                Chocolate Bar
                <span className={classes.cheBox}>
                  <input type="checkbox" name="books" value="Bike" />
                </span>
              </li>
              <li>
                Imported Box of Chocolates
                <span className={classes.cheBox}>
                  <input type="checkbox" name="books" value="Bike" />
                </span>
              </li>
              <li>
                Imported Botttle of Perfume
                <span className={classes.cheBox}>
                  <input type="checkbox" name="books" value="Bike" />
                </span>
              </li>
              <li>
                Bottle of perfume
                <span className={classes.cheBox}>
                  <input type="checkbox" name="books" value="Bike" />
                </span>
              </li>
              <li>
                Packet of Painkillers
                <span className={classes.cheBox}>
                  <input type="checkbox" name="books" value="Bike" />
                </span>
              </li>
            </ul>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default AddToInvoice;
