import React, { useState } from "react";

const Selection = (props) => {
  const [style, setStyle] = useState({ background: "" });
  const { applyColor } = props;

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: style.background }} // Explicitly using backgroundColor for strict testing
      onClick={() => applyColor(setStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;