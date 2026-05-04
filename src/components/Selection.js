import React, { useState } from "react";
import "../styles/Child.css"

const Selection = ({ nextBackground }) => {
  const [bg, setBg] = useState("");

  const applyColor = () => {
    setBg(nextBackground);
  };

  return (
    <div 
      className="fix-box" 
      style={{ backgroundColor: bg }} 
      onClick={applyColor}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;