import axios from "axios";

export const sendMessage = async (text) => {
  const res = await axios.post("http://localhost:8000/chat", { text });
  return res.data.response;
};