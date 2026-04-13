import React, { useState } from "react";
import { registerUser } from "../services/api";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async () => {
    await registerUser({ name, phone });
    alert("Registered Successfully");
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleRegister}>Register Face</button>
    </div>
  );
}