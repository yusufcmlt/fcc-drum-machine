import React, { useState, useEffect } from "react";

import DrumDisplay from "../drum-display/DrumDisplay";
import drumInfoList from "./DrumInfo.js";

import "./DrumButtons.css";

export default function DrumButtons() {
  const [drumDisplay, setDrumDisplay] = useState("Press Any Button");

  useEffect(() => {
    document.addEventListener("keydown", keyPressEvent);
  }, []);

  const keyPressEvent = (event) => {
    drumInfoList.map((key) => {
      if (key.keyCode === event.keyCode) {
        playAudio(key.keyTrigger, key.id);
      }
    });
  };

  const playAudio = (audioFile, displayInfo = "Press Any Button") => {
    const soundFile = document.getElementById(audioFile);
    soundFile.currentTime = 0;
    soundFile.play();
    setDrumDisplay(displayInfo);
  };

  return (
    <div className="drum-container">
      <DrumDisplay drumDisplay={drumDisplay} />
      <div className="drum-buttons-container">
        {drumInfoList.map((key) => {
          return (
            <button
              className="drum-pad"
              onClick={() => playAudio(key.keyTrigger, key.id)}
              id={key.keyCode}
            >
              <audio className="clip" id={key.keyTrigger} src={key.url}></audio>
              {key.keyTrigger}
            </button>
          );
        })}
      </div>
    </div>
  );
}
