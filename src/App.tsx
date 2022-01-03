import "./App.css";
import * as React from "react";
import Joyride from "react-joyride";
import Calculator from "./components/Calculator";

function App() {
  const [state, setState] = React.useState({
    steps: [
      {
        target: "#start",
        content: "first content",
      },
      {
        target: "#header",
        content: "first content",
      },
      {
        target: "#myButton",
        content: "second content",
      },
    ],
    run: false,
  });

  const start = () => setState((state) => ({ ...state, run: true }));

  return (
    <div className="App">
      <h1 id="header">Using react-joyride</h1>
      <Calculator />
      <button
        id="start"
        style={{
          fontSize: "1.5em",
          color: "violet",
          backgroundColor: "white",
          border: "1px solid violet",
          borderRadius: "6px",
          margin: "20px",
          padding: "10px",
          boxSizing: "border-box",
        }}
        onClick={start}
      >
        Start
      </button>
      <button
        id="myButton"
        style={{
          fontSize: "1.5em",
          color: "white",
          backgroundColor: "violet",
          border: "none",
          margin: "20px",
          padding: "10px 10px",
          borderRadius: "6px",
        }}
      >
        A button
      </button>
      <Joyride steps={state.steps} run={state.run} continuous={true} />
    </div>
  );
}

export default App;
