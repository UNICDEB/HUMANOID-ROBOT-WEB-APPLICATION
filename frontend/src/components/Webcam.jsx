import React, { useEffect, useRef } from "react";

export default function Webcam() {
  const ref = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return (
    <video ref={ref} autoPlay width="400" style={{ borderRadius: "10px" }} />
  );
}
