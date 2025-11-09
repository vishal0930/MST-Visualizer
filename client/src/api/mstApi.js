import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000"; 
console.log("✅ API_BASE_URL:", API_BASE_URL);
console.log("🌐 VITE_API_URL (from env):", import.meta.env.VITE_API_URL);
export const getMST = async (data) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/mst`, data);
    return res.data;
  } catch (err) {
    console.error("Error fetching MST:", err);
    return null;
  }
};
