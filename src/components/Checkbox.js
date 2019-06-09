//import React, { Component, PropTypes } from "react";
import React, { Component } from "react";
import AuthContext from "../context/auth-context";
import classes from "./cheBox.module.css";

class Checkbox extends Component {
  state = {
    isChecked: false
  };
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(label);
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <AuthContext.Consumer>
        {context => (
          <div className={classes.cheBox}>
            <label>
              <input
                type="checkbox"
                //value={label}
                checked={isChecked}
                onChange={this.toggleCheckboxChange}
              />
              {label}
            </label>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

Checkbox.propTypes = {
  //label: PropTypes.string.isRequired,
  //handleCheckboxChange: PropTypes.func.isRequired
};

export default Checkbox;
