import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";
import "../styles/App.css";
import "../styles/Child.css"

const colors = [
  { hex: "#32C0C6", name: "Blue" },
  { hex: "#E1701A", name: "Orange" },
  { hex: "#2CD158", name: "Green" },
];

const App = () => {
  const [nextBackground, setNextBackground] = useState("");

  return (
    <div id="master">
      <h5 className="heading">Select the gradient and then the Box to change the color</h5>
      
      <div className="row">
        {colors.map((color) => (
          <ColourSelector 
            key={color.name} 
            color={color} 
            setNextBackground={setNextBackground} 
          />
        ))}
      </div>

      <div className="row" id="children-wrapper">
        <Selection nextBackground={nextBackground} />
        <Selection nextBackground={nextBackground} />
        <Selection nextBackground={nextBackground} />
      </div>
    </div>
  );
};

export default App;