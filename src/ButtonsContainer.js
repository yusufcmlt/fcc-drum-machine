import React, { useState, useEffect } from "react";
import drumData from "./drumProps";

export default function ButtonsContainer({ displayHandler }) {
  const [buttonText, setButtonText] = useState("ON");
  const [buttonClass, setButtonClass] = useState("on-button");
  const [buttonToggle, setButtonToggle] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  });

  const buttonChange = () => {
    if (buttonToggle === true) {
      setButtonToggle(false);
      setButtonText("OFF");
      setButtonClass("off-button");
      displayHandler("Drum is not Working");
    } else {
      setButtonText("ON");
      setButtonToggle(true);
      setButtonClass("on-button");
      displayHandler("Drum is Working");
    }
  };
  const handleKeyPress = eventKey => {
    if (buttonToggle === true) {
      for (const item in drumData) {
        if (drumData[item].keyCode === eventKey.keyCode) {
          playSound(drumData[item]);
        }
      }
    }
  };
  const playSound = buttonPressed => {
    if (buttonToggle === true) {
      const sound = document.getElementById(buttonPressed.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      displayHandler(buttonPressed.id);
    } else {
      displayHandler("Drum is not working right now");
    }
  };
  const audioFile = drumUsed => {
    return (
      <audio
        className="clip"
        id={drumUsed.keyTrigger}
        src={drumUsed.url}
      ></audio>
    );
  };
  const drumButtonRender = keyList => {
    return keyList.map(key => (
      <div className="col s4">
        <button
          className="drum-pad"
          id={"drum" + key}
          onClick={() => playSound(drumData[key])}
          //onKeyDown={event => handleKeyPress(event, drumData[key])}
        >
          {drumData[key].keyTrigger}
          {audioFile(drumData[key])}
        </button>
      </div>
    ));
  };
  return (
    <div id="buttons-container" className="row center-align">
      <div className="row">{drumButtonRender(["keyQ", "keyW", "keyE"])}</div>
      <div className="row">{drumButtonRender(["keyA", "keyS", "keyD"])}</div>
      <div className="row">{drumButtonRender(["keyZ", "keyX", "keyC"])}</div>
      <div className="row">
        <button
          id="onoff-button"
          className={"col s8 offset-s2 btn-large " + buttonClass}
          onClick={buttonChange}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
