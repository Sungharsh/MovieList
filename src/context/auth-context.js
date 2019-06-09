import React from "react";

const authContext = React.createContext({
  isChecked: false,
  checked: false,
  someOther: "someother value",
  AddItems: () => {}
});

export default authContext;
