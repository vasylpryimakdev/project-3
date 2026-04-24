import axios from "axios";
const VITE_BASE_URL = process.env.VITE_BASE_URL || "http://localhost:5000";

export const getAllPosts = async () => {
  const res = await axios.get(`${VITE_BASE_URL}/posts`);

  if (res.status !== 200) {
    console.log("Some Error Occurred");
    return;
  }

  return res.data;
};




