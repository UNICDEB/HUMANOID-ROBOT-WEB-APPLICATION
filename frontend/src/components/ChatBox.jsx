import React, { useState } from "react";
import { chat } from "../services/api";

export default function ChatBox({ speak }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const send = async () => {
    const res = await chat(input);
    setMessages([...messages, input, res.data.response]);
    speak(res.data.response);
    setInput("");
  };

  return (
    <div>
      {messages.map((m, i) => (
        <p key={i}>{m}</p>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}