import React, { useState } from "react";
import ButtonsContainer from "./ButtonsContainer";

import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState("Drum is Working");

  const handleDisplay = buttonInfo => {
    setDisplayText(buttonInfo);
  };

  return (
    <div id="app-container" className="container">
      <div id="heading-container" className="row">
        <h1
          id="drum-heading"
          className="col s12 center-align amber-text accent-3"
          style={{ textShadow: "1px 5px 1px #000" }}
        >
          Drum Machine
        </h1>
      </div>
      <div id="drum-machine-row" className="row">
        <div id="drum-machine" className="col s4 offset-s4  amber z-depth-5">
          <div id="display-control-container" className="row z-depth-3">
            <div
              id="display"
              className="col s12 black center-align"
              style={{
                marginTop: "5px"
              }}
            >
              <h6 style={{ padding: "20px" }}>{displayText}</h6>
            </div>
          </div>
          <ButtonsContainer displayHandler={handleDisplay} />
        </div>
      </div>
    </div>
  );
}

export default App;
