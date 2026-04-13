// import React from "react";

// export default function Robot({ text, speaking }) {
//   return (
//     <div className={speaking ? "speaking" : ""}>
//       <div className="robot-head">
//         <div className="eye left"></div>
//         <div className="eye right"></div>
//         <div className="mouth"></div>
//       </div>

//       <p style={{ marginTop: "20px" }}>{text}</p>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";

export default function Robot({ text, speaking, mood }) {
const ref = useRef();

// Head movement (follows mouse)
useEffect(() => {
const move = (e) => {
const x = (window.innerWidth / 2 - e.clientX) / 40;
const y = (window.innerHeight / 2 - e.clientY) / 40;


  if (ref.current) {
    ref.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }
};

window.addEventListener("mousemove", move);
return () => window.removeEventListener("mousemove", move);


}, []);

return (
<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>


  {/* ROBOT HEAD */}
  <div
    ref={ref}
    className={`robot ${speaking ? "speaking" : ""} ${mood}`}
  >
    <div className="eye left"></div>
    <div className="eye right"></div>
    <div className="mouth"></div>
  </div>

  {/* SPEAKING TEXT */}
  <p className="robot-text">{text}</p>

  {/* VOICE WAVE ANIMATION */}
  {speaking && (
    <div className="wave">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )}
</div>


);
}
