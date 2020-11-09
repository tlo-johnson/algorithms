import Node from "../../model/node";
import startDijkstra from "../dijkstra";

describe("when dijkstra's algorithm is started", () => {
  test("should find the starting node", () => {
    const firstNode = new Node();
    const secondNode = new Node();
    const nodes = [firstNode, secondNode];
    const startIndex = 2;

    const startingNode = startDijkstra(nodes, startIndex);
    expect(startingNode).toBe(secondNode);
  });

  test("should use a valid start nodes", () => {
    const firstNode = new Node();
    const nodes = [firstNode];
    const startIndex = 2;

    const startingNode = startDijkstra(nodes, startIndex);
    expect(startingNode).not.toBeUndefined();
  })
});

