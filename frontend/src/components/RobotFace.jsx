import React from "react";

export default function RobotFace({ name }) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 bg-blue-500 rounded-full animate-pulse" />
      <h2>{name}</h2>
    </div>
  );
}