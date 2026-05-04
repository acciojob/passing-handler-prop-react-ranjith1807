import React, { useState } from 'react';
import "../styles/Child.css"

const Selection = (props) => {
  const [style, setStyle] = useState({ background: "" });
  const { applyColor } = props;

  return (
    <div 
      className="fix-box" 
      style={style} 
      onClick={() => applyColor(setStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

export default Selection;