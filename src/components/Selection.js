import React, { useState } from 'react';

const Selection = (props) => {
  const [style, setStyle] = useState({ background: "" });
  const { applyColor } = props;

  return (
    <div 
      className="fix-box" 
      // STRICT FIX: Explicitly target backgroundColor instead of just passing the style object
      style={{ backgroundColor: style.background }} 
      onClick={() => applyColor(setStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

export default Selection;