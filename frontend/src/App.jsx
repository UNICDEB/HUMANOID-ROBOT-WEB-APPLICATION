import React, { useState } from "react";
import Robot from "./components/Robot";
import Webcam from "./components/Webcam";
import ControlPanel from "./components/ControlPanel";

export default function App() {
  const [text, setText] = useState("Hello, I am your assistant");
  const [speaking, setSpeaking] = useState(false);

  const speak = (msg) => {
    setText(msg);
    setSpeaking(true);

    const utter = new SpeechSynthesisUtterance(msg);
    utter.onend = () => setSpeaking(false);

    speechSynthesis.speak(utter);
  };

  return (
    <div className="container">

      {/* LEFT: ROBOT */}
      <div className="left">
        <Robot text={text} speaking={speaking} />
        <ControlPanel speak={speak} />
      </div>

      {/* RIGHT: WEBCAM */}
      <div className="right">
        <Webcam />
      </div>

    </div>
  );
}