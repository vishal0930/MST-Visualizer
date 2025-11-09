import PriorityQueue from "../utils/priorityQueue.js";

export function primMST(nodes, edges) {
  if (nodes.length === 0) return { mst: [], totalWeight: 0 };

  const adj = {};
  nodes.forEach((n) => (adj[n] = []));
  edges.forEach(({ u, v, w }) => {
    adj[u].push({ v, w });
    adj[v].push({ v: u, w });
  });

  const visited = new Set();
  const pq = new PriorityQueue();
  const mst = [];
  let totalWeight = 0;

  const start = nodes[0];
  pq.enqueue({ u: start, v: null, w: 0 }, 0);

  while (!pq.isEmpty()) {
    const { node } = pq.dequeue();
    const { u, v, w } = node;
    if (visited.has(u)) continue;
    visited.add(u);

    if (v) {
      mst.push({ u: v, v: u, w });
      totalWeight += w;
    }

    for (const neighbor of adj[u]) {
      if (!visited.has(neighbor.v)) {
        pq.enqueue({ u: neighbor.v, v: u, w: neighbor.w }, neighbor.w);
      }
    }
  }

  return { mst, totalWeight };
}
