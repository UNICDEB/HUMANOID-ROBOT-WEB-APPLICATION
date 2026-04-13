import React, { useState } from "react";

export default function ControlPanel({ speak }) {
  const [input, setInput] = useState("");

  const startVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      speak(text);
    };
    recognition.start();
  };

  return (
    <div>
      <button onClick={() => speak("Hello! How can I help you?")}>
        Demo Speak
      </button>

      <button onClick={startVoice}>🎤 Voice Input</button>

      <br />

      <input
        placeholder="Type message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => speak(input)}>Send</button>
    </div>
  );
}