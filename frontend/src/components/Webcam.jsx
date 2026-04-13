// import React, { useEffect, useRef } from "react";

// export default function Webcam() {
//   const ref = useRef();

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
//       ref.current.srcObject = stream;
//     });
//   }, []);

//   return <video ref={ref} autoPlay />;
// }

import React, { useEffect, useRef } from "react";

export default function Webcam() {
  const videoRef = useRef();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    startCamera();
  }, []);

  return <video ref={videoRef} autoPlay playsInline muted />;
}