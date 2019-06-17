import React from "react";
import classes from "./cheBox.module.css";

const Checkbox = ({ isChecked, handleCheckboxChange }) => (
  <div className={classes.cheBox}>
    <label>
      <input
        name="isChecked"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </label>
  </div>
);

export default Checkbox;
