
import React, { useState } from 'react';

const Selection = ({ applyColor }) => {

  const [selectionStyle, updateSelectionStyle] = useState({ background: "" });

  return (
    <div 
      className="fix-box" 
      style={selectionStyle} 
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

export default Selection;