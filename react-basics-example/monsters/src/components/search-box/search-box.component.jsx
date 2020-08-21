import React from "react";
import "./search-box.styles.css";

// destructure props
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    // synthetic event 'onChange'
    onChange={handleChange}
  />
);
