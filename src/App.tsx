import "./App.css";
import * as React from "react";
import Joyride from "react-joyride";
import Calculator from "./components/Calculator";

function App() {
  const [state, setState] = React.useState({
    steps: [
      {
        target: "#start",
        content: "Click here to start the joyride again.",
      },
      {
        target: "#header",
        content: "This is just the header (title).",
      },
      {
        target: "#myButton",
        content: "And this is just a button. Nothing fancy.",
      },
      {
        target: ".calc",
        content: "This is your calculator.",
      },
      {
        target: ".display",
        content: "You'll see the numbers you enter (and the result) here.",
      },
      {
        target: ".pad",
        content: "Do you happen to know what there are for, by any chances?",
      },
      {
        target: ".numbers",
        content: "You may be familiar with these: they call'em numbers...",
      },
      {
        target: ".operators",
        content: "Oh, this are the cool ones!",
      },
      {
        target: ".num:first-child",
        content: "Use these to enter your numbers, dude",
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
