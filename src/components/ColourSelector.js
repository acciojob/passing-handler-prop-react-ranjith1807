import React from "react";
import "../styles/Child.css"

const ColourSelector = ({ color, setNextBackground }) => {
  return (
    <button
      style={{ backgroundColor: color.hex }}
      onClick={() => setNextBackground(color.hex)}
    >
      {color.name}
    </button>
  );
};

export default ColourSelector;