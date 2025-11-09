import { kruskalMST } from "../algorithms/kruskal.js";
import { primMST } from "../algorithms/prim.js";

export const getMST = (req, res) => {
  try {
    const { nodes, edges, algorithm } = req.body;

    if (!nodes || !edges) {
      return res.status(400).json({ message: "Nodes and edges are required" });
    }

    let result;
    if (algorithm === "kruskal") result = kruskalMST(nodes, edges);
    else if (algorithm === "prim") result = primMST(nodes, edges);
    else return res.status(400).json({ message: "Invalid algorithm" });

    return res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
