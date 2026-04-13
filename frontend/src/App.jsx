import React, { useEffect, useState } from "react";
import CameraView from "./components/CameraView";
import RobotFace from "./components/RobotFace";
import ChatBox from "./components/ChatBox";
import RegisterForm from "./components/RegisterForm";
import { detectUser } from "./services/api";

export default function App() {
  const [user, setUser] = useState(null);

  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utter);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await detectUser();

      if (res.data.status === "recognized") {
        setUser(res.data.user);
        speak(`Welcome ${res.data.user.name}`);
        speak("What can I help you with?");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 bg-black text-white h-screen p-6">
      <div>
        <CameraView />
        <RobotFace name={user?.name} />
        <RegisterForm />
      </div>

      <ChatBox speak={speak} />
    </div>
  );
}