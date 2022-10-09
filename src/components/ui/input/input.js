import React from "react";
import "./input.css";

function WrapperInput({ type, placeholder, ...props }) {
  return (
    <input type={type} placeholder={placeholder} className="input" {...props} />
  );
}

export default WrapperInput;
