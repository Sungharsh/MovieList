import React from "react";
import classes from "./productRow.module.css";
import Checkbox from "./Checkbox";

const ProductRow = ({ product, isChecked, handleCheckboxChange }) => (
  <tr>
    <td className={classes.item}>{product.name}</td>
    <td className={classes.price}>
      <span>£ </span>
      {product.price}
    </td>
    <td />
    <td>
      <Checkbox
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
    </td>
  </tr>
);
export default ProductRow;
