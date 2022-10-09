import React from "react";
import "./button.css";

function Button({ title, ...props }) {
  return (
    <button className="button-87" type="button" {...props}>
      {title}
    </button>
  );
}

export default Button;
