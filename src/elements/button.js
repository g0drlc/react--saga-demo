import React from "react";
import styleWrapper from "../hoc/styleWrapper";
const ButtonOne = props => {
  return (
    <div>
      <button style={props.styles}>I am button</button>
    </div>
  );
};

export default styleWrapper(ButtonOne);
