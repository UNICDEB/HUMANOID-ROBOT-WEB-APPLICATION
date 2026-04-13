import React from "react";

export default function Robot({ text, speaking }) {
  return (
    <div className={speaking ? "speaking" : ""}>
      <div className="robot-head">
        <div className="eye left"></div>
        <div className="eye right"></div>
        <div className="mouth"></div>
      </div>

      <p style={{ marginTop: "20px" }}>{text}</p>
    </div>
  );
}