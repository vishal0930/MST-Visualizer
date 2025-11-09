import React, { useState } from "react";
import { getMST } from "../api/mstApi";
import ResultDisplay from "./ResultDisplay";

const GraphInput = () => {
  const [nodes, setNodes] = useState("A,B,C,D");
  const [edges, setEdges] = useState("A-B-3, A-C-1, B-C-2, B-D-4");
  const [algo, setAlgo] = useState("kruskal");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nodeList = nodes.split(",").map((n) => n.trim());
    const edgeList = edges.split(",").map((e) => {
      const [u, v, w] = e.trim().split("-");
      return { u, v, w: Number(w) };
    });

    setLoading(true);
    const data = await getMST({ nodes: nodeList, edges: edgeList, algorithm: algo });
    setLoading(false);
    setResult(data);
  };

  return (
    <div className="container">
      <h1>🌐 Minimum Spanning Tree Visualizer</h1>

      <form onSubmit={handleSubmit} className="form">
        <label>Nodes (comma-separated):</label>
        <input
          type="text"
          value={nodes}
          onChange={(e) => setNodes(e.target.value)}
          placeholder="A,B,C,D"
        />

        <label>Edges (format: A-B-weight):</label>
        <input
          type="text"
          value={edges}
          onChange={(e) => setEdges(e.target.value)}
          placeholder="A-B-3, A-C-1, B-C-2"
        />

        <label>Algorithm:</label>
        <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
          <option value="kruskal">Kruskal's Algorithm</option>
          <option value="prim">Prim's Algorithm</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Calculating..." : "Find MST"}
        </button>
      </form>

      {result && <ResultDisplay result={result} />}
    </div>
  );
};

export default GraphInput;
