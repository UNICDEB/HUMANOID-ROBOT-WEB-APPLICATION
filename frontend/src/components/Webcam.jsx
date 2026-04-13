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
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);

  return <video ref={videoRef} autoPlay />;
}