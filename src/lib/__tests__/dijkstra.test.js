import Node from "../../model/node";
import startDijkstra from "../dijkstra";

describe("when dijkstra's algorithm is started", () => {
  test("should find the starting node", () => {
    const firstNode = new Node();
    const secondNode = new Node();
    const nodes = [firstNode, secondNode];

    const startingNode = startDijkstra(nodes, 2);
    expect(startingNode).toBe(secondNode);
  });
});
