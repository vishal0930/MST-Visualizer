import DisjointSet from "../utils/disjointSet.js";

export function kruskalMST(nodes, edges) {
  const dsu = new DisjointSet(nodes);
  const mst = [];
  let totalWeight = 0;

  edges.sort((a, b) => a.w - b.w);

  for (const { u, v, w } of edges) {
    if (dsu.find(u) !== dsu.find(v)) {
      dsu.union(u, v);
      mst.push({ u, v, w });
      totalWeight += w;
    }
  }

  return { mst, totalWeight };
}
