import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);

  return {
    transform: `matrix3d(
      ${sin}, ${-cos}, ${sin},  0,
      ${-cos}, ${sin}, 0, 0,
      0, ${cos}, ${cos}, ${sin}, 
      0, 0, 0, 1
    )`
  };
}

function App() {
  const [styleOne, setStyleOne] = React.useState({});
  const [styleTwo, setStyleTwo] = React.useState({});

  function onMouseMove(event) {
    setStyleOne(transform(-event.clientX / event.clientY));
    setStyleTwo(transform(event.clientX / event.clientY));
  }

  return (
    <div onMouseMove={onMouseMove}>
      <div className="panel" style={styleOne} />
      <div className="panel" style={styleTwo} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
