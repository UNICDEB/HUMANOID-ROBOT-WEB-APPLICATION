import React, { useEffect, useRef } from "react";

export default function CameraView() {
  const ref = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <video ref={ref} autoPlay />;
}