import React, { useState } from "react";
import '../styles/Child.css'
const Selection = (props) => {
  const [style, setStyle] = useState({ background: "" });
  const { applyColor } = props;

  return (
    <div 
  className="fix-box" 
  data-testid={/* check if your test requires an ID here, e.g., "selection-box" */}
  style={{ backgroundColor: style.background }} 
  onClick={() => applyColor(setStyle)}
>
  <h2 className="subheading">Selection</h2>
</div>
  );
};

export default Selection;