import React from "react";
import '../styles/Child.css'
import '../styles/App.css'
const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label,key } = config;

  return (
    <button
      className={classname}
      data-testid={key}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
