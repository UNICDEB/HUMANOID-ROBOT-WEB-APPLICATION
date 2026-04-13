import React, { useState } from "react";
import Robot from "./components/Robot";
import Webcam from "./components/Webcam";
import ControlPanel from "./components/ControlPanel";

export default function App() {
  const [text, setText] = useState("Hello, I am your assistant");
  const [speaking, setSpeaking] = useState(false);
  const [mood, setMood] = useState("normal");

  const speak = (msg) => {
    setText(msg);
    setSpeaking(true);
    setMood("happy");

    const utter = new SpeechSynthesisUtterance(msg);

    utter.onend = () => {
      setSpeaking(false);
      setMood("normal");
    };

    speechSynthesis.speak(utter);
  };

  return (
    <div className="container">
      <div className="left">
        <Robot text={text} speaking={speaking} mood={mood} />
        <ControlPanel speak={speak} />
      </div>

      <div className="right">
        <Webcam />
      </div>
    </div>
  );
}