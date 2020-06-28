import React from "react";

import "./App.css";
import DrumButtons from "./drum-buttons/DrumButtons";

function App() {
  return (
    <div id="drum-machine" className="App">
      <h1 className="drum-h1">Drum Machine</h1>
      <DrumButtons />
    </div>
  );
}

export default App;
