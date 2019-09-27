import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }

};

function App() {
  let state = 0;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{state}</h2>
      <h2></h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
