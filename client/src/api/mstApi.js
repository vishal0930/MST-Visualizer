import axios from "axios";

export const getMST = async (data) => {
  try {
    const res = await axios.post("/api/mst", data); // ✅ notice no full URL needed
    return res.data;
  } catch (err) {
    console.error("Error fetching MST:", err);
    return null;
  }
};
