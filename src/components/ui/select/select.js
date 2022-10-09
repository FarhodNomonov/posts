import React from "react";
import "./option.css";

function Select({ defaultValue, option, value, ...props }) {
  return (
    <select className="select" {...props} value={value}>
      <option value="" disabled>
        {defaultValue}
      </option>
      {option?.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option?.name}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
