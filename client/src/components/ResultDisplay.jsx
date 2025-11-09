import React from "react";

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result">
      <h2>🧮 MST Results</h2>
      <ul>
        {result.mst.map((edge, index) => (
          <li key={index}>
            {edge.u} - {edge.v} (weight: {edge.w})
          </li>
        ))}
      </ul>
      <h3>Total Weight: {result.totalWeight}</h3>
    </div>
  );
};

export default ResultDisplay;
