import React, { useState } from "react";

export default function ControlPanel({ speak }) {
  const [input, setInput] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>

      <button onClick={() => speak("Hello! How can I help you?")}>Speak Demo</button>

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
