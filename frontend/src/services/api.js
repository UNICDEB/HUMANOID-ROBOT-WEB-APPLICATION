import axios from "axios";

export const detectUser = () => axios.get("http://localhost:8000/detect");
export const registerUser = (data) => axios.post("http://localhost:8000/register", data);
export const chat = (text) => axios.post("http://localhost:8000/chat", { text });